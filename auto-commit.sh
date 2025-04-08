#!/bin/bash

# 切换到项目目录
cd /Users/sm2/Desktop/blog/vuepress

# 自动添加所有更改
git add .

# 生成提交信息
commit_message="Auto commit on $(date '+%Y-%m-%d %H:%M:%S')"

# 执行提交操作
git commit -m "$commit_message"

# 推送更改到远程仓库
git push origin main