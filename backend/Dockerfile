FROM node:16 AS development

ENV NODE_ENV=development

WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install

RUN npm install -g sequelize-cli

RUN apt-get update && apt-get install -y netcat

COPY . .

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

EXPOSE 8080

CMD ["./entrypoint.sh"]
