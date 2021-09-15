import Mail from "../lib/Mail"

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        await Mail.sendMail({
            from: 'Qeueue Test <testeQueue@gmail.com>',
            to: `${data.name} <${data.email}>`,
            subject: 'Cadastro feito com sucesso',
            html: `Olá ${data.name}, seja bem vindo ao nosso sistema de compras`
        })
    }
}