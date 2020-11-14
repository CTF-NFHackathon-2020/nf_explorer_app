FROM node:12.18.3
RUN mkdir -p /node
ADD . /node
WORKDIR /node
RUN npm install
CMD ["node", "server.js"]