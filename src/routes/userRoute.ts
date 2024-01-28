import { Router } from "express"
import { createUser, getUsers, updateUser, getUserById, deleteUser  } from "../controllers/usersControllers"
import {userSchemaValidateMW} from "../middleware/userSchemaValidate"
import modelSchemaFactory from "../factories/modelSchemaFactory"


const routeUser: any = Router()

routeUser.get('/user', getUsers)
routeUser.get('/user/:id', getUserById)
routeUser.post('/user', modelSchemaFactory([userSchemaValidateMW]), createUser)
routeUser.put('/user/:id', updateUser)
routeUser.delete('/user/:id', deleteUser)

export default routeUser