
const express = require ('express');
const { readFileSync, writeFile } = require('fs');
const mongoose = require('mongoose');
const userModel = require('./models/userModel');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post(
    "/create-account",
    (req, res) => {
        try {
            const user = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            user.save()
                .then(
                    (success) => {
                        res.send({
                            msg: "Account is created",
                            status: 1
                        })
                    }
                ).catch(
                    (err) => {
                        res.send({
                            msg: "Unable to create account",
                            status: 0
                        })
                    }
                )
        } catch (error) {
            res.send({
                msg: "Internal server Error",
                status: 0
            })
        }

    }
)

app.get(
    "/user-data",
    async (req, res) => {
        try {
            const users = await userModel.find();
            res.send(
                {
                    users,
                    status: 1,
                    msg: "Data found"
                }
            )
        } catch (err) {
            console.log(err.message);
            res.send({
                msg: "Internal server Error",
                status: 0
            })
        }

    }
)

app.post(
    "/login",
    async (req, res) => {
        const user = await userModel.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if (user != null) {
            res.send({
                msg: "Login is done",
                status: 1,
                user
            })
        } else {
            res.send({
                msg: "Invalid credentials",
                status: 0
            })
        }
    }
)

app.put(
    "/update-password",
    async (req, res) => {
        const email = req.body.email;
        const old_password = req.body.old_password;
        const new_password = req.body.new_password;
        try {
            const user = await userModel.findOne({ email: email });
            if (user) {
                if (user.password == old_password) {
                    if (old_password != new_password) {
                        userModel.updateOne(
                            { email: email },
                            { password: new_password }
                        ).then(
                            () => {
                                res.send({
                                    msg: "Password updated",
                                    status: 1
                                })
                            }
                        ).catch(
                            () => {
                                res.send({
                                    msg: "Unable to update the password",
                                    status: 0
                                })
                            }
                        )
                    } else {
                        res.send({
                            msg: "Old password cannot be same as new password",
                            status: 0
                        })
                    }
                } else {
                    res.send({
                        msg: "Current password doesn't match",
                        status: 0
                    })
                }
            } else {
                res.send({
                    msg: "User not found",
                    status: 0
                })
            }
        } catch (err) {
            res.send({
                msg: "Internal server Error",
                status: 0
            })
        }
    }
)

app.patch(
    "/change-status/:user_id/:new_status",
    async (req, res) => {
        try {
            const user = await userModel.findById(req.params.user_id);
            if (user) {
                userModel.updateOne(
                    { _id: req.params.user_id },
                    { status: req.params.new_status }
                ).then(
                    () => {
                        res.send({
                            msg: "Status changed",
                            status: 1
                        })
                    }
                ).catch(
                    () => {
                        res.send({
                            msg: "Unable to change the status",
                            status: 0
                        })
                    }
                )
            } else {
                res.send({
                    msg: "User not found",
                    status: 0
                })
            }
        } catch (error) {

        }
    }
)

app.delete(
    "/delete/:user_id",
    async (req, res) => {
        try {
            const user = await userModel.findById(req.params.user_id);
            if (user) {
                userModel.deleteOne({ _id: req.params.user_id })
                    .then(
                        () => {
                            res.send({
                                msg: "user deleted",
                                status: 1
                            })
                        }
                    ).catch(
                        (err) => {
                            res.send({
                                msg: "Unable to delete user",
                                status: 0
                            })
                        }
                    )
            } else {
                res.send({
                    msg: "User not found",
                    status: 0
                })
            }
        } catch (err) {
            res.send({
                msg: "Internal server error",
                status: 0
            })
        }
    }
)


mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName: "wsjp25"
    }
).then(
    (success) => {
        console.log('db connected');
        app.listen(5000, () => console.log('server started'));
    }
).catch(
    (error) => {
        console.log(error);
    }
)






