/** 
 * ! GIT and GITHUB
 * 
 * & Git Config
 * git config command
 * * git config --global user.name "Your Name"
 * * git config --global user.email "Your Email"
 * 
 * & Staging Files
 * * git add FILENAME
 * * git add --all
 * * git add A
 * * git add .
 * * git commit -m "Your Commit" 
 * * git log
 * 
 * & View Status
 * * git status
 * 
 * & Restoring Files
 * * git restore .
 * * git checkout .
 * * git restore --staged "FILENAME"
 * 
 * & .gitignore file keep the file you don't want to add or commit
 * ? You can add any filename you want to ignore it
 * * .DS_Store
 * * .vscode/
 * * authentication.js
 * * node_modules
 * * notes/
 * * todo.md
 * 
 * & Global Ignore File
 * * git config --global core.excludesfile [file]
 * 
 * & Clearing the cache
 * * git rm r --cached
 * 
 * & Deleting and Renaming
 * * git rm FILENAME
 * * git restore --staged FILENAME
 * * git restore -S .
 * * git restore .
 * ^ Renaming
 * * git mv OLD_NAME NEW_NAME
 * 
 * & Differences
 * * git diff
 * 
 * & Easy Log
 * * git log --oneline
 * 
 * & Changing History
 * ? Amending
 * * git commit -amend
 * * git commit -am "New commit message"
 * * git commit -amend --no-edit
 * * git reset HASH_TAG
 * * git reset --hard HASH_TAG
 * 
 * & Rebasing
 * * git rebase <branch>/<commit>
 * * git rebase --interactive <branch>/<commit>
 * * git rebase -i HEAD~# 
 * * git rebase -i root
 * 
 * & Branches
 * * git branch
 * ? Copying a branch
 * * git switch -c NAME
 * * git checkout -b NAME
 * 
 * & Merging
 * * git merge <branch>
 * 
 * & Deleting a branch
 * * git branch --delete NAME
 * * git branch -d NAME
 * * git branch -D NAME
 * 
 * & Stashing Code
 * * git stash
 * * git stash list
 * * git stash apply
 * * git stash pop
 * 
 * & Git Clean
 * * git clean -n
 * * git clean -d
 * * git clean -f 
 * 
 * & Remotes
 * * git remote add NAME URL
 * * git remote remove NAME
 * * git rename OLD_NAME NEW_NAME
 * * git remote -v
 * 
 * & Git Push
 * * git push --set-upstream-to origin main
 * * git push -u origin main
 * * git push --all
 * * git branch --set-upstream-to <origin/remote-branch>
 * 
 * & Git Pull
 * * git pull
 * * git fetch  
*/