# การ Deploy 
  ```
deploy โดยใช้ docker โดยในส่วนของ front-end และ back-end จะมี docker file ไว้สำหรับเป็นตัว config เอาไว้ให้ docker compose เรียกใช้
  ```
###  Docker file ของ front end 
  ```
#BUILD VUE PROJECT
FROM node:16-alpine3.14 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# CREATE NGINX SERVER
FROM nginx:1.21.6-alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
  ```
###  Docker file ของ back end 
  ```
FROM node:16-alpine3.14 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
  ```

###  Docker compose สำหรับ build
  ```
version: "3"  # optional since v1.27.0
services:
  frontend:
    image: thanawat12/devtools-62070080-frontend:1.0.0
    build: ./front-end
  backend:
    image: thanawat12/devtools-62070080-backend:1.0.0
    build: ./back-end
  ```
โดยจะทำการ build ส่วนของ frontend มี image ชื่อ thanawat12/devtools-62070080-frontend:1.0.0 และ backend ชื่อ thanawat12/devtools-62070080-backend:1.0.0

###  Docker compose สำหรับ deploy
  ```
version: "3"  # optional since v1.27.0
services:
  frontend:
    image: thanawat12/devtools-62070080-frontend:1.0.0
    ports:
      - "8889:80"
  backend:
    image: thanawat12/devtools-62070080-backend:1.0.0
    ports:
      - "3333:3000"
  ```
โดยจะทำการ สร้าง container ส่วนของ front end ไปที่ port 8889 และ backend ไปที่ port 3333