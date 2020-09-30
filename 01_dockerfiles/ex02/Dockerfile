#You are going to create your first Dockerfile to containerize Rails applications. That’s
#a special configuration: this particular Dockerfile will be generic, and called in another
#Dockerfile, that will look something like this:
#FROM ft-rails:on-build
#EXPOSE
#CMD 3000
#["rails", "s", "-b", "0.0.0.0", "-p", "3000"]
#Your generic container should install,
#via a ruby container, all the necessary dependencies and gems,
#then copy your rails application in the /opt/app folder of your 
#container. Docker has to install the approtiate gems when it builds, but also launch
#the migrations and the db population for your application. The child Dockerfile should
#launch the rails server (see example below). If you don’t know what commands to use,
#it’s high time to look at the Ruby on Rails documentation.
FROM ft-rails:on-build
EXPOSE 3000
CMD ["rails", "s", "-b", "0.0.0.0", "-p", "3000"]
#rails "s = server -b defines that from any ip is possible and it is bound to port 3000.
#To build ft-rails:on-build do:
#Download repository as rails-app/ to rails-container/
#docker build rails-container/ --tag ft-rails:on-build
#docker build . --tag webpage
#docker run -it --name testpage -p 3000:3000 -d ft-rails:on-build
