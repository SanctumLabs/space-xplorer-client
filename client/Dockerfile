FROM node:alpine as builder

RUN apk add --update \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
  && rm -rf /var/cache/apk/*

COPY . .

RUN npm install
RUN npm run build

FROM node:14.4-alpine3.12

ENV PM2_HOME /usr/src/app/.pm2

WORKDIR /usr/src/app

RUN mkdir /usr/src/app/.pm2
RUN chmod -R 777 /usr/src/app
RUN chmod -R 777 /usr/src/app/.pm2

COPY --from=builder build build
COPY --from=builder app .

RUN npm install --quiet --no-optional
RUN npm install pm2 -g

EXPOSE 8080
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--only", "space-xplorer-client"]