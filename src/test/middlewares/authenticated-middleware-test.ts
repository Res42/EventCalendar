import authenticated from "../../middlewares/authenticated-middleware";
import { expect, should } from "chai";

describe("athenticated-middleware", () => {
    it("should call next if authenticated", (done) => {
        let authenticatedMiddleware = authenticated();
        let req: any = { session: { authenticated: true }};
        let res: any = {};

        authenticatedMiddleware(req, res, (err) => {
            expect(err).to.equal(undefined);
            done();
        });
    });

    it("should redirect to login if not authenticated", (done) => {
        let authenticatedMiddleware = authenticated();
        let req: any = {};
        let res: any = {
            redirect: () => {
                done();
            },
        };

        authenticatedMiddleware(req, res, () => {
            should().fail(null, null, "Should not call next()!");
        });
    });
});
