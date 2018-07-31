npm run build
git add .
git commit -am "Built project"
git push -f origin `git subtree split -P public`:master