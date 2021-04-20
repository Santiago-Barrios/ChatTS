import mongoose, {model, Schema, Document} from "mongoose";

export interface MessageUser extends Document {
    user:  mongoose.Schema.Types.ObjectId,
    message: string,
    date: any,
}

const mySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message:{
        type: String,
        required: true
    },
    date: Date,
});

export default model<MessageUser>("Message", mySchema);