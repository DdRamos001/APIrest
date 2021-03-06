const mongoose = require('../database');

const UserSchema = new mongoose.Schema({


    name:{

        type: String,
        require: true,

    },

    email: {

        type: String,
        unique:true,
        required:true,
        lowercase:true,

    },
 
});

const User = mongoose.model('User', UserSchema);

module.exports = User;