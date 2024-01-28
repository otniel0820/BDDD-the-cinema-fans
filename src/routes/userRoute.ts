import { Router } from "express"
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers"
import { bookSchemaValidateMW } from "../middleware/bookSchemaValidate"
import modelSchemaFactory from "../factories/modelSchemaFactory"


const routeUser: any = Router()

routeUser.get('/User', getUsers)
routeUser.get('/User/:id', getUserById)
routeUser.post('/User', modelSchemaFactory([UserSchemaValidateMW]), createUser)
routeUser.put('/User/:id', updateUser)
routeUser.delete('/User/:id', deleteUser)

export default routeUser