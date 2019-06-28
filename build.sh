#!/bin/bash

set -ex

export DEBUG='*'
node download.js
ls -l
chmod +x migration-engine
md5-cli migration-engine
md5-cli node_modules/prisma2/migration-engine
# cp migration-engine node_modules/prisma2/migration-engine
mv migration-engine node_modules/prisma2/migration-engine
md5-cli node_modules/prisma2/migration-engine
prisma2 generate