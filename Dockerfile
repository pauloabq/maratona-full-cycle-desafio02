FROM node:13-alpine
WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./package.json .
COPY database.sqlite .

RUN ls -la && npm install

EXPOSE 3000

CMD ["npm","run","start:prod"]