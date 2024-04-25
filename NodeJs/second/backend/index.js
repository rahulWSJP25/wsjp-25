const { readFileSync, writeFile } = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer(
    (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        let response = {};
        if (parsedUrl.pathname == "/create-account" && req.method == "POST") {
            const data = parsedUrl.query;
            //    exceptional handling
            try {
                const jsonData = readFileSync("data/user.json", "utf-8");
                const users = JSON.parse(jsonData);
                users.push(data);

                writeFile("data/user.json", JSON.stringify(users), (err) => {
                    if (err) {
                        response.flag = 0;
                        response.message = "kuchbhi",
                        res.end(JSON.stringify(response));
                    } else {
                        response.flag = 1;
                        response.message = "Account created",
                        res.end(JSON.stringify(response));
                    }
                })

            } catch (err) {
                response.flag = 0;
                response.message = "Internal Server Error";
                res.end(JSON.stringify(response));
            }

        } else if (parsedUrl.pathname == "/login-user" && req.method == "POST") {
            const data = parsedUrl.query;
            try {
                const jsonData = readFileSync("data/user.json", "utf-8");
                const users = JSON.parse(jsonData);

                const found = users.find(user => {
                    if (user.email == data.email && user.password == data.password) {
                        return true;
                    } else {
                        return false;
                    }
                })
                console.log(found);
                if (found) {
                    response.flag = 1;
                    response.message = "login successful";
                    res.end(JSON.stringify(response));
                } else {
                    response.flag = 0;
                    response.message = "Internal Server Error";
                    res.end(JSON.stringify(response));
                }

            } catch (err) {
                response.flag = 0;
                response.message = "Internal Server Error";
                res.end(JSON.stringify(response));
            }
        }

    }
)

server.listen(5000, () => {
    console.log("server started");
})