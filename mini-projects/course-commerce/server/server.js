import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

let port = 5000

let app = express()

let corsOptions = {
    origin: "*",
    method: "*"
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome to home route !" })
})

app.post("/send", (req, res) => {

    console.log(req.body)

    if (req.body.name != "Amey") {
        res.status(400).json({ message: "data recieved successfully | but is not valid please change name ", status: false })
    } else {
        res.status(202).json({ message: "data recieved successfully", status: true })
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})