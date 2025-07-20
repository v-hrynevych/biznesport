FROM node:16 AS development

ENV NODE_ENV=development

WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install

RUN npm install -g sequelize-cli

COPY . .
RUN npm run migrate && npm run seed

EXPOSE 8080

CMD ["npm", "start"]
