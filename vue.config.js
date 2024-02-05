const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'https://github.com/rkdgkrud/vue/',
  outputDir: 'dist' ,
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
