# Remove git rebase setup
Remove-Item "$PSScriptRoot\.git\rebase-merge" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$PSScriptRoot\.git\REBASE_HEAD" -Force -ErrorAction SilentlyContinue
Remove-Item "$PSScriptRoot\.git\MERGE_MSG" -Force -ErrorAction SilentlyContinue
Remove-Item "$PSScriptRoot\.git\.COMMIT_EDITMSG.swp" -Force -ErrorAction SilentlyContinue

Write-Host "Git pull request setup removed successfully"
