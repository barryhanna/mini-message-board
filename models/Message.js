import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'user',
		required: 'A message must have a user',
	},
	text: String,
	added: {
		type: Date,
		default: Date.now,
	},
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
