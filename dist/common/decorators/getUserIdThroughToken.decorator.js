"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const common_1 = require("@nestjs/common");
exports.getId = (0, common_1.createParamDecorator)((data, context) => {
    const req = context.switchToHttp().getRequest();
    if (!data)
        return req.user;
    return req.user['sub'];
});
//# sourceMappingURL=getUserIdThroughToken.decorator.js.map