FROM alpine:latest
RUN apk update && \
	apk upgrade && \
	apk add gcc valgrind build-base vim
COPY ./project-files .
ENTRYPOINT /bin/sh
