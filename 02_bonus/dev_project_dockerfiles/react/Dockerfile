#git clone repository at app/
#git clone git@github.com:kafkalainen/hg_front_v4.git app
FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY app/package.json ./
COPY app/package-lock.json ./
RUN npm install
RUN npm install react-scripts -g
COPY ./app/ ./
CMD ["npm", "start"]
