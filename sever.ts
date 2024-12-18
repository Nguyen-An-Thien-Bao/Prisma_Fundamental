const express = require("express")
const app = express()
const cors = require("cors")
const route = require("./src/routes/api")


const PORT = process.env.PORT || 8080


// app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api", route)





app.listen(PORT, () => {
    console.log("App is running on port ", PORT)
})
