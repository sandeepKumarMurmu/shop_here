const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://sandeep:sandeep_123@web-14.21u1b.mongodb.net/shop_here?retryWrites=true&w=majority",
    );
};
