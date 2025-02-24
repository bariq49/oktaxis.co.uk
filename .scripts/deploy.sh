#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --legacy-peer-deps

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload 0 --update-env

echo "Deployment Finished!"