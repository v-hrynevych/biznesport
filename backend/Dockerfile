FROM node:18-bookworm AS development

ENV NODE_ENV=development

WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install

RUN npm install -g sequelize-cli

RUN apt-get update && apt-get install -y netcat-openbsd

COPY . .

EXPOSE 8080

CMD sh -c "until nc -z db 3306; do echo '⏳ Waiting for DB...'; sleep 2; done; npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm start"

