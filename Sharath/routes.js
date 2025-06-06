import express from 'express';

const router = express.Router();

import { router as routerFromV1 } from "./V1/routes.js";

router.use("/V1", routerFromV1);

export { router };