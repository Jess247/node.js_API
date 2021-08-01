import mongoose from 'mongoose';


// schema defines the rules related to what the database can except
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your first name'
    },
    lastName: {
        type: String,
        required: 'Enter your last name'
    },
    email: {
        type: String
        
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now
    }
});
    