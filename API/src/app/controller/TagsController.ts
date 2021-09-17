import { Request, Response } from "express";
import { TagsService } from "../server/TagsService";

class TagsController {

    async get_all_tags_GET(req: Request, res: Response) {
        const tagsService = new TagsService()

        const tags = await tagsService.get_all_tags()

        return res.status(200).json(tags)
    }

    async create_tags_POST(req: Request, res: Response) {
        const { name } = req.body

        const tagsService = new TagsService()

        const tags = await tagsService.create_tags(name)

        return res.status(200).json(tags)
    }

}

export { TagsController }