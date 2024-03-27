const monogoose = require("mongoose");

const userShema = monogoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"],
    },
    email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
}, {
    timestamps: true,
});

module.exports = monogoose.model("User", userShema);