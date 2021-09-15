import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
import Queue from './lib/Queue'

const app = express()

app.use(express.json())

app.post('/registrationMail', async (req, res) => {
    const { name, email } = req.body
    await Queue.add('RegistrationMail', { name, email })

    return res.json({ mail: 'Envio com Sucesso!'})
})

app.listen(4001, () => console.log(`Server running on localhost:4001`))