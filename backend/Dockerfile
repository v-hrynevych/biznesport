FROM node:16 AS development

ENV NODE_ENV=development

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD npx sequelize db:migrate && npx sequelize db:seed:all && node app.js
