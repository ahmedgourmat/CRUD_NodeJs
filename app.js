const express = require('express')
const app = express()
const mongoose = require('mongoose')


const bookSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        athor : {
            type : String ,
            required : true
        },
        category : {
            type : Array
        }
    },
    {
        timestamps : true
    }
)



const Book = mongoose.model('book' , bookSchema )

app.use(express.json())


app.post('/books' , async(req,res)=>{
    try{
        console.log('connected')
        const book = await Book.create(req.body)
        res.status(200).json(book)
    }
    catch (err) {
        console.log(err)
        res.status(500).send("You Can't Save Data")
    }
})







app.get('/',async(req,res)=>{
    try {
        const books = await Book.find({})
        res.status(200).json(books)
    } catch (error) {
        res.status(404).send('Error 404 .... No Data Found')
    }
})


app.get('/book/:id', async(req,res)=>{
    const { id } = req.params

    try {
        const books = await Book.findById(id)
        res.status(200).json(books)
    } catch (error) {
        res.status(404).send('Error 404 .... No Data Found')
    }
})





mongoose.connect('mongodb://0.0.0.0:27017/book' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('connected')
        app.listen(5000,()=>{
            console.log('The server is lisnting to the port 5000.....')
        })
    }
    )
    .catch((err)=>{
        console.log(err)
    })

