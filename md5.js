const hasha = require('hasha')

;(async () => {
  // Get the MD5 hash of an image
  const hash = await hasha.fromFile(process.argv[2], { algorithm: 'md5' })

  console.log(hash)
})()
