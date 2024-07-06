const JWT_SECRET_KEY = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';

const SERVER_PORT = 8080;

const DATABASE_URI = 'mongodb+srv://ckumar:A$$w0rd@database-cluster.dixyxqh.mongodb.net/FoodOrderAppDb?retryWrites=true&w=majority&appName=database-cluster'

const TOKEN_EXPIRATION_DURATION = '7d';

module.exports = {
    JWT_SECRET_KEY,
    SERVER_PORT,
    DATABASE_URI,
    TOKEN_EXPIRATION_DURATION
}