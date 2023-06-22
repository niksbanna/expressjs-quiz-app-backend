import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import { User } from "../models/userModel.js";
import sendToken from "../../utils/jwtToken.js";

export const createUser = catchAsyncErrors(async (req, res) => {

    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();

    sendToken(newUser, 201, res);

});

//login user
export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { username, password } = req.body;

    // checking if user has given password and email both

    if (!username || !password) {
        return next(new ErrorHandler("Please Enter username & Password", 400));
    }

    const user = await User.findOne({ username }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid username or password", 404));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid username or password", 404));
    }


    sendToken(user, 200, res);
});

// Get User Detail
export const getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find().populate('scores');

    res.status(200).json({
        success: true,
        users,
    });
});

// Get User Detail
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id).populate('scores');
    console.log(user);
    res.status(200).json({
        success: true,
        user,
    });
});

