import * as Yup from 'yup'
import bcrypt from 'bcryptjs'

import { getCustomRepository } from "typeorm";
import { IUserRegistrationRequest } from "../../interface/UserRegistration";
import { UsersRepository } from "../repository/UsersRepository";


class UsersService {

    async createUser_POST({ name, email, password }: IUserRegistrationRequest) {
        const usersRepository = getCustomRepository(UsersRepository)

        // Verificar se usuario esta preenchendo os campos certos
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required()
        })

        if (!(await schema.isValid({ name, email, password }))) throw new Error("Credential invalid!")

        // Verificar se usuario existe

        const userExist = await usersRepository.findOne({ email })

        if (userExist) throw new Error("User already exist!")

        // Gerar o a senha criptografada

        const hashPass = await bcrypt.hash(password, 8) 

        const user = usersRepository.create({
            name,
            email,
            password: hashPass
        })

        // salvar usuario no banco

        await usersRepository.save(user)

        return {
            user: {
                id: user.id,
                name,
                email
            }
        }
    }

}

export { UsersService }