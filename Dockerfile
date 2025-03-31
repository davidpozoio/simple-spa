FROM nginx

WORKDIR /home/app

COPY nginx.conf /etc/nginx/nginx.conf

COPY . .

RUN nginx -t

CMD [ "nginx", "-g", "daemon off;" ]