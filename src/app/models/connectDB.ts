var mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('%cDB connection successful!', 'font-size:10em;color:green;')
    } catch (error) {
        console.log('%cDB connection failed!', 'font-size:10em;color:red;')
    }
}

export default { connectDB }