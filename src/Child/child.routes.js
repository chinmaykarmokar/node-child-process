import express from "express";
import { childPostReqController, childLongFunctionController } from "./child.controller.js";

const router = express.Router();

router.post("/postChild", childPostReqController);
router.post("/postLongFunction", childLongFunctionController);

export default router;