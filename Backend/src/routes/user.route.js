import { Router } from "express";
import {upload} from '../middlewares/multer.middleware.js'
import { AvatarUser, LoginFaculty, Logout, RegisterFaculty, UserData, UserContact, UserInfo, UserAbout, UserAddress, getAllFaculty } from "../controller/User.controller.js";
import { upvote } from "../controller/Upvote.controller.js";
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

router.route("/getme").get(
    verifyJWT,
    UserData
)
router.route("/upvote").post(
    verifyJWT,
    upvote
)

router.route("/logout").post(
    verifyJWT,
    Logout
)
router.route("/UserContact").post(
    verifyJWT,
    UserContact
)
router.route("/UserInfo").post(
    verifyJWT,
    UserInfo,
)
router.route("/UserAbout").post(
    verifyJWT,
    UserAbout
)
router.route("/UserAddress").post(
    verifyJWT,
    UserAddress
)

router.route("/getAllFaculty").get(
    verifyJWT,
    getAllFaculty
)
export default router
