FROM node:lts-alpine3.20
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app 
WORKDIR /
COPY ./Site .
RUN npm install
EXPOSE 3333
CMD [ "node", "app.js" ]