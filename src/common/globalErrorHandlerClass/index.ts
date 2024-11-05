import { HttpException, HttpStatus, Logger } from "@nestjs/common";

const logger = new Logger('APIWrapper');

export const apiWrapper = async <T>(
  logic: () => Promise<T> | T,  // Function containing your logic

): Promise<T> => {
  try {
    return await logic();
  } catch (error) {
    logger.error(error?.message || error, error.stack);

    if (error instanceof HttpException) {
      // Re-throw known HttpExceptions
      throw error;
    } else {
      // Wrap other errors with a generic message
      throw new HttpException(`An error occurred. Please try again. Error:${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
};
