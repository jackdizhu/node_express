node_express 功能练习
npm install express-generator -g // Express 应用生成器

  express -e
  启动 mongodb
  mongod.exe --dbpath D:/mongodb/data/db/
  启动 node
  npm run dev
  增加 cors 配置 api 服务器 解决跨域
  (JWT/JSON Web Token 安全验证)
  cookie:token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1YTU5ZDVlYjMyODgwMzIxYjA3MTg4MzMiLCJleHAiOjE1MTcwNDY1MDgsImlkIjoiNWEyZGU2ZTJmOTU5NjYyYmM0MjI2ZTExIiwiaWF0IjoxNTE1ODM2OTA3fQ.V88MQUfq2UbPWFuUAOFj51JWeS3jrXPErzHgd_0pjRU
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9 由 base64 解密
  {"typ":"JWT","alg":"HS256"} alg 是加密算法名字，typ 是类型
  eyJqdGkiOiI1YTU5ZDVlYjMyODgwMzIxYjA3MTg4MzMiLCJleHAiOjE1MTcwNDY1MDgsImlkIjoiNWEyZGU2ZTJmOTU5NjYyYmM0MjI2ZTExIiwiaWF0IjoxNTE1ODM2OTA3fQ 由 base64 解密
  {"jti":"5a59d5eb32880321b0718833","exp":1517046508,"id":"5a2de6e2f959662bc4226e11","iat":1515836907} iat（创建的时间戳），exp（到期时间戳）
  V88MQUfq2UbPWFuUAOFj51JWeS3jrXPErzHgd_0pjRU 是由前面俩段字符串 HS256 加密后得到
