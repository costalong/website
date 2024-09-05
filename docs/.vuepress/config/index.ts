// Remove the import statement if the module is not needed
import * as zhConfig from './zh'
export const themeConfig = {
  locales: {
    '/': {
      selectLanguageText: '语言',
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      commentConfig: zhConfig.commentConfig,
      bulletin: zhConfig.bulletin,
      catalogTitle: '页面导航'
    },
    // '/en/': {
    //   selectLanguageText: 'Languages',
    //   selectLanguageName: 'English',
    //   navbar: enConfig.navbar,
    //   series: enConfig.series,
    //   commentConfig: enConfig.commentConfig,
    //   bulletin: enConfig.bulletin,
    // },
  },

  // 自动设置分类
  autoSetBlogCategories: true,
  // 自动将分类和标签添加至头部导航条
  autoAddCategoryToNavbar: {
    location: 1, // 默认 0
    categoryText: '分类', // 默认 categories
    tagText: '标签' // 默认 tags
  },
  // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
  // autoAddCategoryToNavbar: true,
  colorMode: 'dark',
  logo: '/logo.png',
  author: 'reco_luan',
  docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco',
  docsBranch: 'main',
  docsDir: '/docs',
  algolia: {
    appId: '38R2J3MTQC',
    apiKey: '583d3caf699630b08a9bc2d12d599701',
    indexName: 'v2-vuepress-reco-recoluan',
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
}