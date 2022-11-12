FROM node:14 AS development

WORKDIR /front/src/app

COPY ./package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

CMD ["npm", "run", "start"]
#RUN npm run build

EXPOSE 4200