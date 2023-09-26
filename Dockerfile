FROM node:18-alpine

WORKDIR /portfolio-app/

COPY public/ /portfolio-app/public
COPY src/ /portfolio-app/src
COPY package.json /portfolio-app/

RUN npm install 

EXPOSE 3000

CMD [ "npm","start"]

 