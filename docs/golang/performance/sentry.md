---
title: "golang 性能监听工具 sentry"
icon: sentry
---

Sentry是一个开源的应用性能监控（Application Performance Monitoring，APM）和错误追踪平台。 它帮助开发人员监控应用程序的性能、捕获和分析错误，以便及时发现并解决潜在的问题，提高应用程序的稳定性和用户体验


## 部署 sentry （k8s）

1.使用 helm 安装 https://github.com/sentry-kubernetes/charts

Sentry 的 Helm Chart，可以方便地在 Kubernetes 集群中部署 Sentry。

`values.yaml`

```yaml
filestore:
  backend: filesystem
  filesystem:
    path: /var/lib/sentry/files
    persistence:
      accessMode: ReadWriteMany
      enabled: true
      existingClaim: ""
      persistentWorkers: true
      size: 10Gi
      storageClass: "efs"
nginx:
  ingress:
    annotations: { }
    enabled: true
    hostname: sentry.company.com
    ingressClassName: "alb"
    path: /
    pathType: Prefix
postgresql:
  postgresqlPassword: "examplePassword"
  postgresqlPostgresPassword: "examplePassword"
sourcemaps:
  enabled: true
user:
  create: true
  email: example@company.com
  password: examplePassword
zookeeper:
  autopurge:
    purgeInterval: 3
    snapRetainCount: 3
```

注意问题：

- filestore , 需要配置 storageClass 为 ReadWriteMany 的存储类。
- nginx 配置 annotation, 因为我们使用的是 AWS 的 ALB Ingress Controller。
- postgresql 配置数据库密码， 防止启动时报错。[具体参见](https://github.com/sentry-kubernetes/charts/issues/571#issuecomment-1039616281), [清理方式](https://github.com/sentry-kubernetes/charts/issues/799)
- sourcemaps 配置为 true，开启 sourcemaps 功能。
- user 配置为 true，创建一个初始用户(admin)。
- zookeeper 配置 autopurge, 避免 Zookeeper 数据过大。








## 安装

```bash
go get github.com/getsentry/sentry-go

```

## 使用代码：

```go
import (
	"fmt"
	"net/http"

	sentry "github.com/getsentry/sentry-go"
	sentrygin "github.com/getsentry/sentry-go/gin"
	"github.com/gin-gonic/gin"
)

// To initialize Sentry's handler, you need to initialize Sentry itself beforehand
if err := sentry.Init(sentry.ClientOptions{
	Dsn: "https://0b5c4c7a72494aa8a43da8d56c1f7427@o84114.ingest.us.sentry.io/183603",
	EnableTracing: true,
	// Set TracesSampleRate to 1.0 to capture 100%
	// of transactions for tracing.
	// We recommend adjusting this value in production,
	TracesSampleRate: 1.0,
}); err != nil {
	fmt.Printf("Sentry initialization failed: %v\n", err)
}

// Then create your app
app := gin.Default()

// Once it's done, you can attach the handler as one of your middleware
app.Use(sentrygin.New(sentrygin.Options{}))

// Set up routes
app.GET("/", func(ctx *gin.Context) {
	ctx.String(http.StatusOK, "Hello world!")
})

// And run it
app.Run(":3000")
Configure
sentrygin accepts a struct of Options that allows you to configure how the handler will behave.

Currently it respects 3 options:

Go

Copied
// Whether Sentry should repanic after recovery, in most cases it should be set to true,
// as gin.Default includes its own Recovery middleware that handles http responses.
Repanic bool
// Whether you want to block the request before moving forward with the response.
// Because Gin's default `Recovery` handler doesn't restart the application,
// it's safe to either skip this option or set it to `false`.
WaitForDelivery bool
// Timeout for the event delivery requests.
Timeout time.Duration
Usage
sentrygin attaches an instance of *sentry.Hub (https://pkg.go.dev/github.com/getsentry/sentry-go#Hub) to the *gin.Context, which makes it available throughout the rest of the request's lifetime. You can access it by using the sentrygin.GetHubFromContext() method on the context itself in any of your proceeding middleware and routes. And it should be used instead of the global sentry.CaptureMessage, sentry.CaptureException, or any other calls, as it keeps the separation of data between the requests.

Keep in mind that *sentry.Hub won't be available in middleware attached before sentrygin!

Go

Copied
app := gin.Default()

app.Use(sentrygin.New(sentrygin.Options{
	Repanic: true,
}))

app.Use(func(ctx *gin.Context) {
	if hub := sentrygin.GetHubFromContext(ctx); hub != nil {
		hub.Scope().SetTag("someRandomTag", "maybeYouNeedIt")
	}
	ctx.Next()
})

app.GET("/", func(ctx *gin.Context) {
	if hub := sentrygin.GetHubFromContext(ctx); hub != nil {
		hub.WithScope(func(scope *sentry.Scope) {
			scope.SetExtra("unwantedQuery", "someQueryDataMaybe")
			hub.CaptureMessage("User provided unwanted query string, but we recovered just fine")
		})
	}
	ctx.Status(http.StatusOK)
})

app.GET("/foo", func(ctx *gin.Context) {
	// sentrygin handler will catch it just fine. Also, because we attached "someRandomTag"
	// in the middleware before, it will be sent through as well
	panic("y tho")
})

app.Run(":3000")
Accessing Request in BeforeSend callback
Go

Copied
sentry.Init(sentry.ClientOptions{
	Dsn: "https://0b5c4c7a72494aa8a43da8d56c1f7427@o84114.ingest.us.sentry.io/183603",
	BeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {
		if hint.Context != nil {
			if req, ok := hint.Context.Value(sentry.RequestContextKey).(*http.Request); ok {
				// You have access to the original Request here
			}
		}

		return event
	},
})

```



## 文档

- [docs](https://docs.sentry.io/platforms/go/)
- [sentry](https://github.com/getsentry/sentry)
- [sentry-go](https://github.com/getsentry/sentry-go)