import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repository/TagsRepository"
import * as Yup from 'yup'

class TagsService {


    async get_all_tags() {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tags = await tagsRepositories.find()

        if (tags.length <= 0) throw new Error('Not exist tags!')
        
        return tags
    }

    async create_tags(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        // Verificar se os campos estao preenchidos corretamentes

        const schema = Yup.object().shape({
            name: Yup.string().required()
        })

        if (! (await schema.isValid({ name }))) throw new Error('Incorrect Tag name!')

        // Verificar se a tag ja existe

        const tagsAlreadyExist = await tagsRepositories.findOne({ name })

        if (tagsAlreadyExist) throw new Error('Tag Already exists!')

        const tag = tagsRepositories.create({
            name
        })

        // salvar tag
        await tagsRepositories.save(tag)

        return tag
    }

}
export { TagsService }