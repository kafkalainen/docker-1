#git clone some ruby app as a seperate folder.
#I created  a simple rails app by following guides on Ruby on rails site to do a blog page.
#There is a version clash in my environment, so I chose to use earlier version of Ruby.
#Otherwise I would have used ruby:latest
FROM ruby:2.7.0
COPY rails-app/ opt/app
WORKDIR opt/app
RUN	apt-get update -y && \
	apt-get upgrade -y && \
	apt-get install nodejs npm -y && \
	npm install -g yarn && \
	gem install rails
ONBUILD EXPOSE 3000
ONBUILD RUN yarn install && \
	bundle install && \
	rake db:migrate && \
	rake db:seed
#build with --tag ft-rails:on-build.
#docker build . --tab ft-rails:on-build.
