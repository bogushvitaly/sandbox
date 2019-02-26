# Client App
FROM node:alpine as client-app
LABEL authors="Vitali Bohush"
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
RUN yarn run build

# Node server
FROM node:alpine as node-server
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install && mv node_modules ../
COPY server.js .
COPY /server /usr/src/app/server

# Final image
FROM node:alpine
WORKDIR /usr/src/app
COPY --from=node-server /usr/src /usr/src
COPY --from=client-app /usr/src/app/dist ./
EXPOSE 3000 
CMD ["yarn", "start"]
