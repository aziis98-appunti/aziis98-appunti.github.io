#!/bin/sh

read -p "Commit description: " desc

npm run build && \
git add . && \
git commit -m "$desc" && \
git push -f origin `git subtree split -P public`:master