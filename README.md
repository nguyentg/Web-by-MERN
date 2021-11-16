# HƯỚNG DẪN TỪ ĐẦU ĐỂ CHẠY CODE NÀY:
## Mở 1 tab terminal

$ cd server

$ npm i express jsonwebtoken mongoose dotenv argon2 cors

$ npm i --save-dev nodemon : tự động khởi động lại server nếu code bị thay đổi

$ npm i --save express-validator

$ npm run server

## Mở 1 tab cmd khác:
$ cd client

$ npm i react-bootstrap bootstrap axios react-router-dom

$ npm start

### Các lần khác, khi muốn chạy code, chỉ cần chạy 4 lệnh dưới đây:
$ cd server
$npm run server
$ cd client # Nhớ mở tab terminal mới
$ npm start

## Tài khoản để đăng nhập
1. user: nguyen; pass: nguyen
2. tự tạo mới


# Ghi chú riêng:
$git init
$mkdir server
$cd server
$npm init 
$ npm i express jsonwebtoken mongoose dotenv argon2 cors
- express : server express 
- jsonwebtoken : quản lí việc ping cao, xác thực người dùng
- mogoose : nói chuyện từ server với DB
- dotenv : lấy biến môi tường 
- argon2 : hash passwork người dùng
- cors : cho phép frontend nói chuyện với backend

$ npm i --save-dev nodemon : tự động khởi động lại server nếu code bị thay đổi
$ npm i --save express-validator

Vào file package.json:
<<<<<<<
sau dòng thứ 7, thêm dòng sau, thêm dấu phẩy cuối dòng thứ 7 
	"server": "nodemon index"
>>>>>>

Tạo file index.js trong folder, cop dán đoạn lệnh sau
<<<<<<<<<
const express = require('express')

const app = ecpress()

app.get('/', (req, res) => res.send('Hello world'))

const PORT = 5000

app.listen(PORT, () => console.log('Server started on port ${PORT}'))
>>>>>>>>>

$npm run server

# Tải REST Client

Trong folder server tạo request.http
<<<<
GET http://localhost:5000
>>>>

## Vào MongoDB 
-----
mongodb+srv://nguyentg:nguyentg@mern-learnit.kfm1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
-----
${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}

## Bắt đầu front-end
- Vào thư mục server
$touch .gitignore
------
server/node_modules
------ 

- Vào /client/
$ cd client
$ npm i react-bootstrap bootstrap axios react-router-dom
