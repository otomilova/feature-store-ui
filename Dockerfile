FROM node:20-alpine3.19

ARG VITE_SERVER_URL

WORKDIR /app

COPY package.json .

ENV VITE_SERVER_URL=$VITE_SERVER_URL

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]