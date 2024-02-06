#!/bin/bash

REPOSITORY=/home/ubuntu/build

cd $REPOSITORY
nvm install 14
nvm use 14

yarn
pm2 start dist