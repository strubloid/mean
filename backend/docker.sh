#!/usr/bin/env bash

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

echo "=== Docker Backend Build ==="
echo "| Src:  $MY_DIR "
echo "| OS:  $OS "
echo "| USER:  $USER "


## concurrently we have typescript and nodemon
## this will be adding later to the backend after we add typescript, as we only have javascript,
## this will be moved to another refactoring part.
#concurrently "tsc --watch" "nodemon -q build/index.js"

nodemon server.js

