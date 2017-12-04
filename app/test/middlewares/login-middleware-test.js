"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_middleware_1 = require("../../middlewares/login-middleware");
const chai_1 = require("chai");
describe("login-middleware", () => {
    it("should call next(err) if db query fails", (done) => {
        let error = 1;
        let userDb = {
            findOne: () => {
                return userDb;
            },
            exec: (callback) => {
                callback(error, null);
            },
        };
        let req = {
            body: {
                userName: "",
                userPassword: "",
            },
        };
        let res = {};
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login_middleware_1.default(userDb, formatUser);
        loginMiddleware(req, res, (err) => {
            chai_1.expect(err).to.equal(error);
            done();
        });
    });
    it("should send res.status(404) if user+password does not exists", (done) => {
        let userDb = {
            findOne: () => {
                return userDb;
            },
            exec: (callback) => {
                callback(null, null);
            },
        };
        let req = {
            body: {
                userName: "",
                userPassword: "",
            },
        };
        let res = {
            status: (httpCode) => {
                chai_1.expect(httpCode).to.equal(404);
                return res;
            },
            end: () => {
                done();
            },
        };
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login_middleware_1.default(userDb, formatUser);
        loginMiddleware(req, res, (err) => { });
    });
    it("should call next(err) if the session couldn't be saved", (done) => {
        let error = 1;
        let userDb = {
            findOne: () => {
                return userDb;
            },
            exec: (callback) => {
                callback(null, {});
            },
        };
        let req = {
            body: {
                userName: "",
                userPassword: "",
            },
            session: {
                save: (callback) => {
                    callback(error);
                },
            },
        };
        let res = {};
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login_middleware_1.default(userDb, formatUser);
        loginMiddleware(req, res, (err) => {
            chai_1.expect(err).to.equal(error);
            done();
        });
    });
    it("should save user details in req.session then call next() if the login was successful", (done) => {
        let userId = "id";
        let userDb = {
            findOne: () => {
                return userDb;
            },
            exec: (callback) => {
                callback(null, {
                    id: userId,
                    displayName: "displayName",
                    userName: "userName",
                });
            },
        };
        let req = {
            body: {
                userName: "",
                userPassword: "",
            },
            session: {
                save: (callback) => {
                    callback();
                },
            },
        };
        let res = {};
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login_middleware_1.default(userDb, formatUser);
        loginMiddleware(req, res, (err) => {
            chai_1.expect(req.session.authenticated).to.equal(true);
            chai_1.expect(req.session.userId).to.equal(userId);
            done();
        });
    });
});
//# sourceMappingURL=login-middleware-test.js.map