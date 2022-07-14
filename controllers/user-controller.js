import User from '../model/User';

export const getAlluser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }catch (err) {
       return  console.log(err);
    }
    if(!users) {
        return res.status(404).json({message: "No users found"})
    }
    return res.status(200).json({users})
}

export const submit = async (req, res, next) => {
    const {title, keywords, description, attachment} = req.body;
    let existingUser;
    try {
       existingUser = await User.findOne({title})
    }catch(err) {
        console.log(err);
    }
    if(existingUser) {
        return res.status(400).json({message: "user is exists"})
    }
    const user = new User({
        title,
        keywords,
        description,
        attachment
    });

    try {
        await user.save();
    }catch (err) {
       return console.log(err)
    }
    return res.status(201).json({user})
}