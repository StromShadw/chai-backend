class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode; // HTTP status code for the error
        this.data = null; // Placeholder for additional data
        this.message = message; // Error message
        this.success = false; // Indicates the operation was not successful
        this.errors = errors; // Array of specific errors

        if (stack) {
            this.stack = stack; // Custom stack trace if provided
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture stack trace
        }
    }
}

export { ApiError };