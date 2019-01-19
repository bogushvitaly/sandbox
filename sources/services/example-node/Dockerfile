FROM node:alpine

WORKDIR /opt/app
EXPOSE 3000
CMD ["npm", "run", "dev"]

COPY . .
RUN npm install
