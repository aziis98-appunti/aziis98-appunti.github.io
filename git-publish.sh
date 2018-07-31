npm run build
git add .
commit -am "Built project"
git push -f origin `git subtree split -P public`:master