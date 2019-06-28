#!/bin/bash

set -ex

# export DEBUG='*'
node download.js
ls -l
chmod +x migration-engine
node md5.js migration-engine
node md5.js node_modules/prisma2/migration-engine
cp migration-engine node_modules/prisma2/migration-engine
node md5.js node_modules/prisma2/migration-engine
echo "{}" | ./migration-engine
prisma2 generate