FROM node:16

# Create app directory
WORKDIR /usr/src/app


# Install app dependecies
COPY package*.json ./

RUN yarn

# Bundle app source

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]