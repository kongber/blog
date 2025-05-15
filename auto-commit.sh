#!/bin/bash

# 切换到项目目录
cd /Users/sm2/Desktop/blog/vuepress

# 获取当前时间的小时数
current_hour=$(date +%H)

# 设置允许执行的最小时间（例如9点）
min_hour=18

# 检查当前时间是否小于最小允许时间
if [ $current_hour -lt $min_hour ]; then
    echo "错误：当前时间 ${current_hour}:xx，必须在 ${min_hour}:00 之后才能执行"
    exit 1
fi

# 配置代理
export http_proxy=http://127.0.0.1:1087;
export https_proxy=http://127.0.0.1:1087;

# 验证代理设置
echo "当前代理设置："
echo "HTTP代理: $http_proxy"
echo "HTTPS代理: $https_proxy"

# 测试代理连接
echo "测试代理连接..."
if curl -s -I https://www.google.com > /dev/null; then
    echo "代理测试成功：可以访问Google"
else
    echo "代理测试失败：无法访问Google"
    exit 1
fi

# 自动添加所有更改
git add .

# 生成提交信息
commit_message="Auto commit on $(date '+%Y-%m-%d %H:%M:%S')"

# 执行提交操作
git commit -m "$commit_message"

# 推送更改到远程仓库
git push origin main