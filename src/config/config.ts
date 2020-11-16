export default{
    JwtSecret: process.env.JWT_Secret || 'scretkey',

    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/jwt',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_PASSWORD || ''
    }
}