const mongoose = require("mongoose")
const { autoSyncElastic } = require("../../Controllers/searchSuggestion")

connectDatabase =async  () => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@bigtchub.z90g7xf.mongodb.net/?retryWrites=true&w=majority` ,{useNewUrlParser : true})
    .then(autoSyncElastic())
    console.log("MongoDB Connection Successfully")
//mongodb+srv://chukwujiobivictoric:<password>@bigtchub.z90g7xf.mongodb.net/?retryWrites=true&w=majority
}

module.exports = connectDatabase
