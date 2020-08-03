#!/bin/sh
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
cp -R cache/node_modules angular-monorepo-concourse
export NG_CLI_ANALYTICS=ci
cd angular-monorepo-concourse
npm run affected:test -- --parallel --base=origin/master~1 --head=origin/master