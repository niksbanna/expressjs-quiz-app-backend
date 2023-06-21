import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import { User } from "../models/userModel.js";

export const createUser = catchAsyncErrors(async (req, res) => {

    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    res.json({ message: 'User created successfully' });

});

