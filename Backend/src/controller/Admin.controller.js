import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { Organization } from '../models/organisation.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const CreateOrg = AsyncHandler(async (req, res) => {
    const name = req.body.name
     console.log(name)
    const org = await Organization.create({
        name
    })

    if(!org)
        throw new ApiError(500, "Their was an error while creating the user")

    return res
    .status(200)
    .json(
        new ApiResponse(200, "Organization Created Successfully")
    )
})

export {CreateOrg}