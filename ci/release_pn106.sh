#!/bin/sh
# npm version patch -m "ci(concourse): montée de version %s"
cd angular-monorepo-concourse
git config --global user.email "ci@concourse.org"
git config --global user.name "Concourse"
npm version patch -m "ci(concourse): montée de version %s"
git push origin master