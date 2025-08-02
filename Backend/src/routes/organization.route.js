import { Router } from "express";
import { CreateOrg } from "../controller/Admin.controller.js";


const router = Router()

router.route("/createOrganization").post(
    CreateOrg
)

export default router