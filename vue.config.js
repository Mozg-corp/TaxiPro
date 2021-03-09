const serverUrl = 'http://menly.1site.space';

module.exports = {
  devServer: {
    https: true,
    proxy: {
      '^/api*': {
        target: serverUrl,
        ws: true,
        changeOrigin: true,
      },
      '^/auth*': {
        target: serverUrl,
        ws: true,
        changeOrigin: true,
      },
      '^/sms*': {
        target: serverUrl,
        ws: true,
        changeOrigin: true,
      },
      '^/img*': {
        target: serverUrl,
        ws: true,
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
