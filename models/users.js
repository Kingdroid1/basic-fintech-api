const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, unique:true},
    role:{ 
        type: String, 
        required: true,
        enum: ['user', 'admin','disco','maximpact'],
        default: 'user', },
    phoneNumber: { type: Number},
    password:{ type: String, required: true}

}, {
    timestamps: true,
    collection: 'users'
});

userSchema.set('toJSON', { virtuals: true }); // ALLOWS FOR EASY DISPLAY OF DB VALUES

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});



const User = mongoose.model ('User', userSchema);
module.exports = User;

