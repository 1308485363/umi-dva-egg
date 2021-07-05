FROM node:10.24.0-alpine as base
# FROM node:10.24.0 as base

# 这个是容器中的文件目录
# RUN mkdir -p /usr/src/umi-dva-egg

# 设置工作目录
WORKDIR /var/lib/docker/volumes/jenkins-data/_data/workspace/umi-dva-egg

# 设置时区
# RUN apk --update add tzdata \
#     && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#     && echo "Asia/Shanghai" > /etc/timezone \
#     && apk del tzdata

# 拷贝package.json文件到工作目录
# !!重要：package.json需要单独添加。
# Docker在构建镜像的时候，是一层一层构建的，仅当这一层有变化时，重新构建对应的层。
# 如果package.json和源代码一起添加到镜像，则每次修改源码都需要重新安装npm模块，这样木有必要。
# 所以，正确的顺序是: 添加package.json；安装npm模块；添加源代码。
COPY package.json ./

RUN npm install --production

RUN npm run build

COPY . ./

EXPOSE 10341

CMD npm start