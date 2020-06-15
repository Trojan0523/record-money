cd 项目根目录

-- 初始化本地仓库
git init

-- 添加项目文件
git add .

-- 将项目文件加载到暂存区
git commit -m "第一次提交"

-- 关联远程仓库
git add remote origin https://gitee.com/Trojan0523/record-money.git

-- 提交文件到远程仓库
git push -u origin master