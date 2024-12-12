import express from 'express'

const app = express()
// app.get('/',(req,res)=>{
//     res.send('server is ready')
// })

// get a list of six jokes
app.get('/api/jokes',(req,res)=>{
  const jokes=[
    {
        id:1,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id:2,
        title: 'B joke',
        content: 'This is b joke'
    },
    {
        id:3,
        title: 'C joke',
        content: 'This is c joke'
    },
    {
        id:4,
        title: 'D joke',
        content: 'This is d joke'
    },
    {
        id:5,
        title: 'E joke',
        content: 'This is e joke'
    },
    {
        id:6,
        title: 'F joke',
        content: 'This is f joke'
    }
  ]
  res.send(jokes);
})


const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})