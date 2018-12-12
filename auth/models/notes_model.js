var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var NoteSchema = new Schema({
    username: { type: String },
	content: String	
});
mongoose.model('Note', NoteSchema);
