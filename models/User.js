import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from 'validator';

const userSchema = new Schema({
	username: String,
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please supply an email address',
	},
});

const User = mongoose.model('User', userSchema);

export default User;
