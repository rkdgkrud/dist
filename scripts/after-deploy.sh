#!/bin/bash

# Set NVM_DIR
export NVM_DIR="$HOME/.nvm"

# Load NVM
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Change directory to your repository
REPOSITORY=/home/ubuntu/build
cd $REPOSITORY

# Install Node.js 14
nvm install 14
nvm use 14

# Install yarn globally
npm install -g yarn

# Install dependencies with yarn
yarn

# Start the application with pm2
pm2 start dist
