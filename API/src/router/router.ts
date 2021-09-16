import Express from 'express'
import { UsersController } from '../app/controller/UsersController'

const router = Express()
const usersController = new UsersController()

// USER
router.post(process.env.POST_NEW_USER, usersController.handleCadastro_POST)

export { router }