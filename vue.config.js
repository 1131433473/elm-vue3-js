module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        views: '@/views',
        network: '@/network',
        router: '@/router',
        store: '@/store',
        utils: '@/utils',
        common: '@/common',
        global: '@/global',
        page: '@/page'
      }
    }
  }
}
