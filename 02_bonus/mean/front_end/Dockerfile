#1: BUILD PRODUCTION BUILD
FROM node:14.11.0-alpine3.12 AS build
WORKDIR /usr/src/app
COPY ./quote-app/package.json ./quote-app/package-lock.json ./
RUN npm install
COPY ./quote-app ./
RUN npm run build
#2: RUN PRODUCTION BUILD
FROM nginx:1.19.2-alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/weather-app /usr/share/nginx/html
