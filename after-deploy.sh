#!/bin/bash

REPOSITORY=/home/ubuntu/build

cd $REPOSITORY
npm install -g pm2
yarn global add pm2

yarn
pm2 start dist
