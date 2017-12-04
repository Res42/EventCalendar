"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticated_middleware_1 = require("../../middlewares/authenticated-middleware");
const chai_1 = require("chai");
describe("athenticated-middleware", () => {
    it("should call next if authenticated", (done) => {
        let authenticatedMiddleware = authenticated_middleware_1.default();
        let req = { session: { authenticated: true } };
        let res = {};
        authenticatedMiddleware(req, res, (err) => {
            chai_1.expect(err).to.equal(undefined);
            done();
        });
    });
    it("should redirect to login if not authenticated", (done) => {
        let authenticatedMiddleware = authenticated_middleware_1.default();
        let req = {};
        let res = {
            redirect: () => {
                done();
            },
        };
        authenticatedMiddleware(req, res, () => {
            chai_1.should().fail(null, null, "Should not call next()!");
        });
    });
});
//# sourceMappingURL=authenticated-middleware-test.js.map