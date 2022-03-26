#!/bin/bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd "$SCRIPT_DIR"
git add .
git commit -m "New Notes..."
git push
if [[ "$1" != "--no-interactive" ]]; then
	read -n 1 -p "press a button"
fi
