const serverUrl = 'http://89.108.71.31:8000';

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
