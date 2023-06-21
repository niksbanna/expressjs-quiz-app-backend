import { config } from "dotenv";
import connectDB from "./config/db.js";

import app from "./app.js";

// handling uncaught exception
process.on('uncaughtExceptionMonitor', (err) => {
    console.log(`Error: ${err}`)
    console.log('Shutting down the server due to uncaught exception.')

    process.exit(1);
})


// configure env
config();

//database config
connectDB();


const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Server is listning on ${process.env.DEV_MODE} mode on port ${port}`)
})

// handling unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`Error: ${err}`);
    console.log('Shutting down the server due to unhandled promise rejection.')

    server.close(() => {
        process.exit(1);
    })
})