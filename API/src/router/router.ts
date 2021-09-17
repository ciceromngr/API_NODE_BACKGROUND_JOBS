import Express from 'express'
import { ComplimentsController } from '../app/controller/ComplimentsController'
import { TagsController } from '../app/controller/TagsController'
import { UsersController } from '../app/controller/UsersController'

const router = Express()
const usersController = new UsersController()
const tagsController = new TagsController()
const complimentsController = new ComplimentsController()

// USER
router.get(process.env.GET_ALL_USERS, usersController.get_all_users_GET)
router.get(process.env.GET_ALL_TAGS, tagsController.get_all_tags_GET)
router.get(process.env.GET_ALL_COMPLIMENTS, complimentsController.get_all_comopliments_GET)

router.post(process.env.POST_NEW_USER, usersController.handleCadastro_POST)
router.post(process.env.POST_NEW_TAGS, tagsController.create_tags_POST)
router.post(process.env.POST_NEW_COMPLIMENTS, complimentsController.create_compliments_POST)

export { router }