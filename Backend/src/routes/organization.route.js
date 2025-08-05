import { Router } from "express";
import { CreateOrg, getOrg } from "../controller/Admin.controller.js";


const router = Router()

router.route("/createOrganization").post(
    CreateOrg
)

router.route("/AllOrganization").get(
    getOrg
)
export default router
