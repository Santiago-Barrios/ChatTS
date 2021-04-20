import mongoose, {model, Schema, Document} from "mongoose";

export interface Chat extends Document {
    users:  mongoose.Schema.Types.ObjectId,
}

const mySchema = new Schema({
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

export default model<Chat>("Chat", mySchema);