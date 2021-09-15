export default {
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}