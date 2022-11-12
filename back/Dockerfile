FROM node:14 AS development

WORKDIR /back/src

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run start 

CMD ["node", "dist/main"]

EXPOSE 3000