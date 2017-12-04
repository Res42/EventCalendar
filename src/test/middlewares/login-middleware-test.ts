import login from "../../middlewares/login-middleware";
import { expect, should } from "chai";

describe("login-middleware", () => {
    it("should call next(err) if db query fails", (done) => {
        let error = 1;
        let userDb: any = {
            findOne: () => {
                return userDb;
            },
            exec: (callback: (err, result) => void) => {
                callback(error, null);
            },
        };
        let req: any = {
            body: {
                userName: "",
                userPassword: "",
            },
        };
        let res: any = {};
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login(userDb, formatUser);
        loginMiddleware(req, res, (err) => {
            expect(err).to.equal(error);
            done();
        });
    });

    it("should send res.status(404) if user+password does not exists", (done) => {
        let userDb: any = {
            findOne: () => {
                return userDb;
            },
            exec: (callback: (err, result) => void) => {
                callback(null, null);
            },
        };
        let req: any = {
            body: {
                userName: "",
                userPassword: "",
            },
        };
        let res: any = {
            status: (httpCode) => {
                expect(httpCode).to.equal(404);
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
        let loginMiddleware = login(userDb, formatUser);
        loginMiddleware(req, res, (err) => {});
    });

    it("should call next(err) if the session couldn't be saved", (done) => {
        let error = 1;
        let userDb: any = {
            findOne: () => {
                return userDb;
            },
            exec: (callback: (err, result) => void) => {
                callback(null, {});
            },
        };
        let req: any = {
            body: {
                userName: "",
                userPassword: "",
            },
            session: {
                save: (callback: (err) => void) => {
                    callback(error);
                },
            },
        };
        let res: any = {};
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login(userDb, formatUser);
        loginMiddleware(req, res, (err) => {
            expect(err).to.equal(error);
            done();
        });
    });

    it("should save user details in req.session then call next() if the login was successful", (done) => {
        let userId = "id";
        let userDb: any = {
            findOne: () => {
                return userDb;
            },
            exec: (callback: (err, result) => void) => {
                callback(null, {
                    id: userId,
                    displayName: "displayName",
                    userName: "userName",
                });
            },
        };
        let req: any = {
            body: {
                userName: "",
                userPassword: "",
            },
            session: {
                save: (callback: (err?) => void) => {
                    callback();
                },
            },
        };
        let res: any = {};
        let formatUser = (a) => {
            return {
                id: "1",
                name: "asd",
            };
        };
        let loginMiddleware = login(userDb, formatUser);
        loginMiddleware(req, res, (err) => {
            expect(req.session.authenticated).to.equal(true);
            expect(req.session.userId).to.equal(userId);
            done();
        });
    });
});
