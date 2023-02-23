# select the base image
# use the base image depending on the application type
# for websites: httpd or nginx
# for node application: node
# for java application: java
FROM httpd

# copy the application files inside the image
# COPY <local file location> <image file location>
COPY index.html /usr/local/apache2/htdocs/

# expose the port 80 for apache
EXPOSE 80