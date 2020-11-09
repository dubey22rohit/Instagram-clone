const mongoose = require('mongoose')
const { MongoURI } = require('./keys')
const connectDB = async () => {
    try {
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB Connected....')

    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}
module.exports = connectDB