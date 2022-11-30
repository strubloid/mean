#!/usr/bin/env bash

## loading the env file
source ".env"

# Loading the current local place
MY_DIR=$(dirname $(readlink -f "$0") | sed -e "s/\/[^\/]*$//")
USER=$(whoami)

function getOperationalSystem() {
  case "$OSTYPE" in
  win*) echo "windows" ;;
  msys*) echo "windows" ;;
  *) echo "linux" ;;
  esac
}

OS=$(getOperationalSystem)

if [[ "$ENVIRONMENT" == "develop" ]]; then
  echo "[Running] development environment"
  npm run docker
else
  echo "[Running] live environment"
  npm run start
fi