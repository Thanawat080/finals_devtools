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

###  jenkin
  ```
เขียนแบบ scm ไว้แต่ถ้า อยากได้แบบ ไม่ใช้ scm ให้เปลี่ยน ตรง pull code เป็น  git branch: 'main', url: 'https://github.com/Thanawat080/finals_devtools.git' ของทั้ง frontend และ backend
  ```
###  การ config jenkin
ใช้ branch ที่ชื่อ ว่า main
### front end
  ```
 Script Path  ให้เปลี่ยนเป็น ./front-end/jenkinsfile
  ```
### back end
  ```
 Script Path  ให้เปลี่ยนเป็น ./back-end/jenkinsfile
  ```
###  ในกรณีที่ run jenkins ไม่ได้ ให้ใช้ docker เลย
คำสั่งสำหรับ front-end
  ```
docker-compose -f docker-compose-build.yml build frontend
docker-compose -f docker-compose-deploy.yml up -d frontend
  ```

คำสั่งสำหรับ backend-end
  ```
docker-compose -f docker-compose-build.yml build backend
docker-compose -f docker-compose-deploy.yml up -d backend
  ```