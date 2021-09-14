import 'dotenv/config'
import app from "./app";
app.listen(process.env.PORT_SERVER, () => console.log(`Server running on port:${process.env.PORT_SERVER}`))