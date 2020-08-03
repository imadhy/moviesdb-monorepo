#!/bin/sh
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
cp -R cache/node_modules angular-monorepo-concourse
cd angular-monorepo-concourse
npm run build -- --project=pn106
cp -R dist ../livrable_pn106/