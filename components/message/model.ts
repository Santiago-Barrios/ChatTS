import mongoose, {model, Schema, Document} from "mongoose";

export interface MessageUser extends Document {
    user: string,
    message: string,
    date: any,
}

const mySchema = new Schema({
    user: String,
    message:{
        type: String,
        required: true
    },
    date: Date,
});

export default model<MessageUser>("Message", mySchema);