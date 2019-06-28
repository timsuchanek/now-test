const {
  ensureBinaries,
  ensureMigrationBinary,
} = require('@prisma/fetch-engine')

ensureBinaries(__dirname)
ensureMigrationBinary(__dirname)
