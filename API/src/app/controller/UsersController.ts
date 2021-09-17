import axios from "axios";
import { Request, Response } from "express";
import { UsersService } from "../server/UsersService";
class UsersController {

    async get_all_users_GET(req: Request, res: Response) {
        const usersService = new UsersService()

        const users = await usersService.get_all_users()

        return res.status(200).json(users)
    }

    async handleCadastro_POST(req: Request, res: Response) {
        // instacia do user service
        const usersService = new UsersService()

        const { name, email, password } = req.body

        const user = await usersService.createUser_POST({ name, email, password })

        // Fila para envio de email de boas vindas !!
        const resp = await axios.post('http://localhost:4001/registrationMail', { name, email })

        return res.status(200).json({ user, mail: resp.data })
    }
}

export { UsersController }