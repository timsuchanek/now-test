const Photon = require('@generated/photon')
const photon = new Photon()

module.exports = async (req, res) => {
  const newPost = await photon.posts.create({
    data: {
      title: 'Join the Prisma Slack community',
      content: 'http://slack.prisma.io',
      published: false,
      // author: {
      //   connect: {
      //     email: 'alice@prisma.io', // Should have been created during initial seeding
      //   },
      // },
    },
  })
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(newPost))
}
