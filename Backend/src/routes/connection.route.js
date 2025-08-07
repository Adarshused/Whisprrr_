import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Follow, UnFollow } from "../controller/Connection.controller.js";

const router = Router()

router.route("/follow").post(
    verifyJWT,
    Follow
)

router.route("/unfollow").post(
    verifyJWT,
    UnFollow
)

export default router
