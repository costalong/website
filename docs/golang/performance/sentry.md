---
title: "golang 性能监听工具 sentry"
icon: golang2
---

Sentry是一个开源的应用性能监控（Application Performance Monitoring，APM）和错误追踪平台。 它帮助开发人员监控应用程序的性能、捕获和分析错误，以便及时发现并解决潜在的问题，提高应用程序的稳定性和用户体验

## 安装

```bash
go get github.com/getsentry/sentry-go

```

## 使用代码：

```go
Sentry's logoDocs
Search Docs
⌘K
or

go.gin iconGin
Sentry for Gin
Configuration
Usage
Enriching Events
Data Management
Set Up Tracing
Set Up Profiling
Set Up Crons
Set Up User Feedback
Migration Guide
Troubleshooting
Account Settings
Organization Settings
Product Walkthroughs
Pricing & Billing
Sentry CLI
Sentry API
Security, Legal, & PII
Concepts & Reference
Codecov
Discord
Support
Self-Hosting Sentry
Developer Documentation
Home
Platforms
Go
Gin
Gin
Gin is a high-performance HTTP web framework written in Golang. Learn how to set it up with Sentry.
For a quick reference, there is a complete example at the Go SDK source code repository.

Go Dev-style API documentation is also available.

Features
In addition to capturing errors, you can monitor interactions between multiple services or applications by enabling tracing.

Select which Sentry features you'd like to install in addition to Error Monitoring to get the corresponding installation and configuration instructions below.

Install
Bash

Copied
go get github.com/getsentry/sentry-go/gin
Go

Copied
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
- [sentry-go](https://github.com/getsentry/sentry-go)