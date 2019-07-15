const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentsSchema = new Schema ({
    user_id : {type: Schema.Types.ObjectId, ref: 'users', required:true},
    amount :{ type: Number, required: true},
    reference: String,
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'], 
        default: 'pending'},
    paymentMethod: { 
        type: String, 
        required:true,
        enum: ['Verve', 'MasterCard'],
        default: 'Verve'},
}, {
    timestamps: true
});

module.exports = mongoose.model('payments', paymentsSchema)

