import { Request, Response } from "express";
import { ComplimentsService } from "../server/ComplimentsService";

class ComplimentsController {

    async get_all_comopliments_GET(req: Request, res: Response) {
        const complimentsService = new ComplimentsService()

        const compliments = await complimentsService.get_all_compliments()

        return res.status(200).json(compliments)
    }

    async create_compliments_POST(req: Request, res: Response) {
        const {
            user_sender,
            user_receiver,
            message,
            tag_id
        } = req.body

        // instace compliments service
        const complimentsService = new ComplimentsService()

        const compliments = await complimentsService.create_compliments({ user_sender, user_receiver, message, tag_id })

        return res.status(200).json(compliments)
    }

}

export { ComplimentsController }