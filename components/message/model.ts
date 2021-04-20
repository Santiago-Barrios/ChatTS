import mongoose, {model, Schema, Document} from "mongoose";

export interface MessageUser extends Document {
    chat: mongoose.Schema.Types.ObjectId,
    user:  mongoose.Schema.Types.ObjectId,
    message: string,
    date: any,
    file: any
}

const mySchema = new Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message:{
        type: String,
        required: true
    },
    date: Date,
    file: String
});

export default model<MessageUser>("Message", mySchema);