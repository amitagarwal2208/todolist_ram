const express = require('express')
const app = express() 

app.use((express.urlencoded({extended: true})))
app.use(express.json())

const todos = ['one task','two task','three task']

app.get(
    '/',
    (req,res) => {
        res.send(`
<form method="post" action="/addtodo" >  
        <input name="newtodo">
        <input type="submit">
</form>
<ul>
        <li>
            ${todos.join('</li><li>')}
        </li>
</ul>`)
    }
)

app.get(
    '/addtodo' ,
    (req,res) => {
        todos.push(req.query['newtodo'])
        res.redirect('/')
    }
)

app.post(
    '/addtodo' ,
    (req,res) => {
        todos.push(req.body['newtodo'])
        res.redirect('/')
    }
)

app.listen(
    3232 ,
    () => console.log("server started")
)

// post doesnt show the newly added task in the url whereas get shows the newly added task in the url.
