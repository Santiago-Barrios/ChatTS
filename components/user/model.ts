import mongoose, {model, Schema, Document} from "mongoose";

export interface User extends Document {
    name: string
}

const mySchema = new Schema({
    name: String,
});

export default model<User>("User", mySchema);