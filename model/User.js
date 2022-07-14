import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    title: {
        type: String,
        required: true
    },

    keywords: {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true
    },
    attachment: {
        type: String,
        required: true,
    }
})

export default mongoose.model("User",userSchema);
