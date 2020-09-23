#FROM php:apache
FROM php:apache
RUN docker-php-ext-install mysqli
WORKDIR /var/www/html
RUN chmod -R 775 /var/www/html && \
	chown -R www-data:www-data /var/www/html
COPY ./app/index.php /var/www/html
#RUN chmod -R 775 /var/www/html && \
#	chown -R www-data:www-data /var/www/html
