import { Router } from "express";
import { apiV1Router } from "./v1";
const apiRouter = Router();
apiRouter.use("/v1", apiV1Router);

export { apiRouter };
