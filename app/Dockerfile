FROM openjdk:16-jdk-alpine3.13
# Add http repository links to bypass proxy issues
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.13/main' > /etc/apk/repositories  && \
    echo '@testing http://dl-cdn.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories && \
    echo '@community http://dl-cdn.alpinelinux.org/alpine/v3.13/community'
# Update all installed packages to patch security issues
RUN apk -U upgrade
# Install and update node / npm
RUN apk add --update nodejs npm && \
    npm i -g npm

COPY static /usr/share/nginx/html
EXPOSE 80
LABEL Name="Static site"
LABEL Version="1.0"