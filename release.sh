#!/bin/sh

set -e

git branch --delete static-pages 2> /dev/null
git checkout --orphan static-pages
npm run build

ls | grep -v build | xargs rm -r
cp -R build/. ./
rm -rf build

git add .
git commit -m "release"