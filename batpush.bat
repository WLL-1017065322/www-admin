@echo off
set /p commit=commit:
echo %commit%
git add -A
git commit -m "%commit%"
git push origin master
exit