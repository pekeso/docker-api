# simple-express-api

Run MySQL server on Docker:
```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:5.7
```
Make sure the container and the app server are on the same network. If not, create a network and attach both containers to it.