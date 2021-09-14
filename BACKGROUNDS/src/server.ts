import 'notenv/config'
import 'express-async-errors'
import express from 'express'

const app = express()

app.use(express.json())

app.listen(4001, () => console.log())