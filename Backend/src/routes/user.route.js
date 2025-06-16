import { Router } from "express";
import {upload} from '../middlewares/multer.middleware.js'
import { AvatarUser, LoginFaculty, RegisterFaculty } from "../controller/User.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/avatar").post(
    verifyJWT,
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
    ]),
    AvatarUser
)
router.route("/register").post(
    RegisterFaculty
)
router.route("/login").post(LoginFaculty)
export default router