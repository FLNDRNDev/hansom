…or create a new repository on the command line

echo "# hansom" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/FLNDRNDev/hansom.git
git push -u origin main

…or push an existing repository from the command line

git add .
git commit -m "Your commit message"
git push -u origin main
