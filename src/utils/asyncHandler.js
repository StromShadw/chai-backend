// This function is a higher-order function that takes a request handler function (requestHandler) as an argument
// and returns a new function that handles any errors that occur during the execution of the request handler.
// It ensures that any errors are caught and passed to the next middleware in the Express.js stack.
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // The request handler is executed and any resulting promise is resolved.
        // If an error occurs, it is caught and passed to the next middleware using next(err).
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

// Export the asyncHandler function for use in other parts of the application.
export { asyncHandler }


// explain of asyncHandler
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }