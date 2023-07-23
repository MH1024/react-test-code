FROM node:18.20-slim as builder

WORKDIR /src
COPY ./package-lock.json .
COPY ./package.json .
RUN npm install

COPY ./ /src/
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=builder /src/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /src/build /usr/share/nginx/html

EXPOSE 80
