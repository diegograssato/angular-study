FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
RUN mkdir -p assets/environments/
COPY src/environments/environment.json assets/environments/environment.json
COPY dist/ .