module.exports = {
  async redirects() {
    return [
      {
        source: '/admi/arsip',
        destination: '/admi/arsip/',
        permanent: true,
      },
    ]
  },
}