import { getCustomRepository } from "typeorm";
import { ICreateComplimentsRequest } from "../../interface/ComplimentsRegistration";
import { ComplimentsRepository } from "../repository/ComplimentsRepository";
import { UsersRepository } from "../repository/UsersRepository";
import * as Yup from 'yup'

class ComplimentsService {

    async get_all_compliments() {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)

        const compliments = await complimentsRepository.find()

        if (compliments.length <= 0) throw new Error('Not exist compliments')

        return compliments
    }

    async create_compliments({ user_sender, user_receiver, message, tag_id }: ICreateComplimentsRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)
        const userRepository = getCustomRepository(UsersRepository)
    
        // Verificar se as crendentials estao corrects
        const schema =  Yup.object().shape({
            user_sender: Yup.number().required(),
            user_receiver: Yup.number().required(),
            message: Yup.string().required(),
            tag_id: Yup.number()
        })

        if (! (await schema.isValid({ user_sender, user_receiver, message, tag_id }))) {
            throw new Error('Formate compliments invalid')
        }

        // verificar se o usuario reciever estao corretos
        const userReceiveExist = await userRepository.findOne(user_receiver)
        
        if(!userReceiveExist ) throw new Error('User receiver not exist!')
        
        // Verificar se o user receive é omemso do sender
        if(user_sender === user_receiver) throw new Error('You cannot send yourself compliments!')

        // salvar no banco
        const compliments = complimentsRepository.create({
            user_sender,
            user_receiver,
            message,
            tag_id
        })

        await complimentsRepository.save(compliments)

        return compliments
    }   

}

export { ComplimentsService }