require('dotenv').config()
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export default {
    openai: {
        apiKey: process.env.OPENAI_API_KEY, // OpenAI API Key
    },
    port: parseInt(process.env.PORT) || 5050, // PORT
    dbURL: process.env.MONGODB_URI, // Mongo URI
    dbName: process.env.MONGODB_NAME, // Database Name
    logs: {
        level: process.env.LOG_LEVEL || 'silly', // Logger Level
    },
    api: {
        prefix: '/api', // API Prefix
    },
}
