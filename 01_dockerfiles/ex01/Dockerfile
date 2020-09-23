#From a debian image you will add the appropriate sources to create a TeamSpeak
#server, that will launch along with your container. It will be deemed valid if at least
#one user can connect to it and engage in a normal discussion (no far-fetched setup), so
#be sure to create your Dockerfile with the right options. Your program should get the
#sources when it builds, they cannot be in your repository.

#There are a lot of ways to approach this particular exercise, and if you look at the tutorials,
#there are many which describes TeamSpeak3 server installation fom starting with mariadb-server.
#Don't do that. Instead, install just the teamspeak and start working from there, since TeamSpeak3
#comes with SQLite package, which is good enough for the scope of this project.
#However, you could start working on mariadb container or install mariadb, because we did that
#previously. 
#docker run --name ts3-database --restart unless-stopped --env MYSQL_ROOT_PASSWORD=Lovebeans111 --env MYSQL_DATABASE=teamspeak3 -d mariadb:latest
#or install mariadb, as a seperate installation, but it is quicker to do it as a container. 
FROM debian:latest
EXPOSE 9987
EXPOSE 10011
EXPOSE 30033
RUN useradd -ms /bin/bash teamspeak
RUN apt-get update -y
RUN apt-get dist-upgrade -y
RUN apt-get install wget bzip2 cron -y
#RUN apt-get install iptables mariadb-server wget bzip2 -y
#RUN iptables -A INPUT -p udp --dport 9987 -j ACCEPT && \
#RUN	iptables -A INPUT -p tcp --dport 10011 -j ACCEPT && \
#	iptables -A INPUT -p tcp --dport 30033 -j ACCEPT
RUN su teamspeak
WORKDIR /home/teamspeak
RUN wget https://files.teamspeak-services.com/releases/server/3.12.1/teamspeak3-server_linux_amd64-3.12.1.tar.bz2 && \
	tar xjf teamspeak3-server_linux_amd64-3.12.1.tar.bz2 && \
	rm teamspeak3-server_linux_amd64-3.12.1.tar.bz2
RUN echo "@reboot	root	cd /home/teamspeak/teamspeak3-server_linux_amd64 ; ./ts3server_startscript.sh start&">/etc/cron.d/ts3_server_start
RUN cd teamspeak3-server_linux_amd64 && \
	touch .ts3server_license_accepted
ENTRYPOINT cd teamspeak3-server_linux_amd64 && \ 
	./ts3server_minimal_runscript.sh>admin_settings
#To deploy:
#docker run --name teamspeaktest3 -p 30033:30033 -p 10011:10011 -p 9987:9987/udp <tag>
#Notice that this will run the teamspeak as front app, making the terminal STDOUT for the teamspeak server
#If you run it in background, you will not be able to get administrator rights for the text server, unless you run a command to see your credentials:
#docker exec -it teamspeaktest3 cat teamspeak3-server_linux_amd64/admin_settings 
