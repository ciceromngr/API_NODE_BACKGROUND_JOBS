import 'dotenv/config'
import './config/createConfigTypeorm'
import app from "./app";
app.listen(process.env.PORT_SERVER, () => console.log(`Server running on port:${process.env.PORT_SERVER}`))