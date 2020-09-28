#To read more how to create game specific dosbox builds, please read following blog.
#https://www.wintellect.com/docker-fueled-nostalgia-building-a-retro-gaming-rig-on-kubernetes/
FROM ubuntu:latest
ENV USER=root
ENV PASSWORD=pumpkinpie2332
ENV DEBIAN_FRONTEND=noninteractive 
ENV DEBCONF_NONINTERACTIVE_SEEN=true
ENV AREA=Europe
ENV TZ=Helsinki
COPY wolf3d /dos/wolf3d
RUN apt-get update && \
 echo "tzdata tzdata/Areas select $AREA" > ~/tx.txt && \
 echo "tzdata tzdata/Zones/Europe select $TZ" >> ~/tx.txt && \
 debconf-set-selections ~/tx.txt && \
 apt-get install -y tightvncserver ratpoison dosbox novnc websockify && \
 mkdir ~/.vnc/ && \
 mkdir ~/.dosbox && \
 echo $PASSWORD | vncpasswd -f > ~/.vnc/passwd && \
 chmod 0600 ~/.vnc/passwd && \
 echo "set border 0" > ~/.ratpoisonrc  && \
 echo "exec dosbox -conf ~/.dosbox/dosbox.conf -fullscreen -c 'MOUNT C: /dos'" >> ~/.ratpoisonrc && \
 export DOSCONF=$(dosbox -printconf) && \
 cp $DOSCONF ~/.dosbox/dosbox.conf && \
 sed -i 's/usescancodes=true/usescancodes=false/' ~/.dosbox/dosbox.conf && \
 openssl req -x509 -nodes -newkey rsa:2048 -keyout ~/novnc.pem -out ~/novnc.pem -days 3650 -subj "/C=US/ST=NY/L=NY/O=NY/OU=NY/CN=NY emailAddress=joonas.hj.nivala@gmail.com"
EXPOSE 6080
CMD vncserver && websockify -D --web=/usr/share/novnc/ --cert=~/novnc.pem 6080 localhost:5901 && tail -f /dev/null
