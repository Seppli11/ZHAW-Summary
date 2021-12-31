#!/bin/bash
git add .
git commit -m "New Notes..."
git push
if [ -z "$1" ]; then
	read -n 1 -p "press a button"
fi
