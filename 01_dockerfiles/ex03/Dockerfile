#Docker can be useful to test an application that’s still being developed without pol-
#luting your libraries. You will have to design a Dockerfile that gets the development
#version of Gitlab - Community Edition installs it with all the dependencies and the nec-
#essary configurations, and launches the application, all as it builds. The container will be
#deemed valid if you can access the web client, create users and interact via GIT with this
#container (HTTPS and SSH). Obviously, you are not allowed to use the official container
#from Gitlab, it would be a shame...
FROM debian:latest
ENV TERM=xterm
EXPOSE 443
EXPOSE 80
EXPOSE 22
RUN apt-get update -y && \
	apt-get dist-upgrade -y && \
	apt-get install xterm curl openssh-server ca-certificates tzdata postfix -y
RUN curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash
RUN apt-get install gitlab-ce
RUN sed -i "s/# grafana\['enable'\] = true/grafana['enable'] = false/g" /etc/gitlab/gitlab.rb
RUN sed -i "s/#PubkeyAuthentication yes/PubkeyAuthentication yes/" /etc/ssh/sshd_config
RUN	sed -i "s/^external_url.*$/external_url 'https:\/\/127.0.0.1'/" /etc/gitlab/gitlab.rb && \
	mkdir -p /etc/gitlab/ssl && \
	chmod 755 /etc/gitlab/ssl && \
	openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
	-keyout /etc/gitlab/ssl/127.0.0.1.key -out /etc/gitlab/ssl/127.0.0.1.crt \
	-subj "/CN=127.0.0.1" -addext "subjectAltName=IP:192.168.99.100"
ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && \
			gitlab-ctl reconfigure && \
			service ssh restart && \
			tail -f /dev/null
#docker build -t mygitlab ./ && docker run -itd --restart=on-failure -p 8080:80 -p 8022:22 -p 8443:443 --privileged mygitlab
#Git clone syntax example:
#git clone ssh://git@192.168.99.102:8022/joukahainen/better-code.git
