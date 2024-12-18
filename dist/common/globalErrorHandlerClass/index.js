"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiWrapper = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const logger = new common_1.Logger('APIWrapper');
const apiWrapper = async (logic) => {
    try {
        return await logic();
    }
    catch (error) {
        logger.error(error?.message || error, error.stack);
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            throw new common_1.HttpException('A unique constraint violation occurred. Please check your input and try again.', common_1.HttpStatus.CONFLICT);
        }
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        else {
            throw new common_1.HttpException(`An error occurred. Please try again. Error:${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.apiWrapper = apiWrapper;
//# sourceMappingURL=index.js.map