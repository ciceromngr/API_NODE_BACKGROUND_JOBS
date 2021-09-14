import { Request, Response } from "express";
import { UsersService } from "../server/UsersService";

class UsersController {
    async handleCadastro_POST(req: Request, res: Response) {
        // instacia do user service
        const usersService = new UsersService()

        const { name, email, password } = req.body

        const user = await usersService.createUser_POST({ name, email, password })

        // Fila para envio de email de boas vindas !!
        // 
        // A fazer ...
        // ---------
        
        return res.status(200).json(user)
    }
}

export { UsersController }