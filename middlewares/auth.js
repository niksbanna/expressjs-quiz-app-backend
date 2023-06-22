import { User } from "../app/models/userModel.js";
import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";


export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('token', token)

    if (!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});

