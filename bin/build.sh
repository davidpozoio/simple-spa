#/bin/sh

npx esbuild main.js --minify --bundle --outdir=build
cp index.html build/
cp main.css build/