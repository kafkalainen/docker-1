#From an alpine image you’ll add to your container your favorite text editor, vim or
#emacs, that will launch along with your container.
#To run this, you will first need to use build command.
#docker build --tag ex00 .
#docker run -it --name testvim ex00
#If you want to run the container, use
#docker start -i testvim
#It is pretty unusable, since you will only be able to use as the entrypoint is set to vim.
FROM alpine:latest
RUN apk update
RUN apk add vim
ENTRYPOINT vim
