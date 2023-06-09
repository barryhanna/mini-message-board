const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const messageSchema = new Schema({
	user: String,
	text: String,
	added: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Message', messageSchema);
