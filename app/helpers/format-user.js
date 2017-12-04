"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatUser(u) {
    return {
        id: u.id,
        name: `${u.displayName} (${u.userName})`,
    };
}
exports.formatUser = formatUser;
;
//# sourceMappingURL=format-user.js.map