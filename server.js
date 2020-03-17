const express = require('express')
const ejs = require('ejs')
const bcrypt = require('bcrypt')
const db = require('./db')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 5000
const User = require('./models/User')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(__dirname+ '/public'))


app.get('/', async (req,res) => {
     const tokenCookie = req.headers.cookie;
     console.log(req.headers.cookie)
     if(tokenCookie != undefined)
     {
        const token = tokenCookie.split('=')[1]
        const decoded = jwt.verify(token, 'secretsecret')
        const user = await User.findById(decoded.id)
        return res.render('dashBoard', {
            name: user.name,
            email: user.email
        })
     }
     res.render('index')
})

app.post('/', async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.find({email})
        if( user.length>0)
        {
            const authResult = await bcrypt.compare(password, user[0].password)
            if (authResult)
            {
                const token = jwt.sign({id: user[0]._id}, 'secretsecret', {expiresIn: '24h'})
                
                res.cookie('token', token)
                res.render('dashBoard', {
                    name: user[0].name,
                    email: user[0].email
                })
                
            }
            else{
                res.send("<html><center><h1><b>Authentication Failed..</b></h1></center></html>")
            }
        }
        res.send(user)
    } catch (error) {
        res.send("Authentication Failed")
    }
})



app.get('/login', (req, res) => {
    res.render('login')
});


app.get('/register', (req, res) => {
    res.render('register')
});



app.get('/gk', (req, res) => {
    res.render('gk')
})

app.get('/reasoning', (req, res) => {
    res.render('reasoning')
})

app.get('/science', (req, res) => {
    res.render('science')
})

app.get('/bollywood', (req, res) => {
    res.render('bollywood')
})

app.get('/techno', (req, res) => {
    res.render('techno')
})

app.get('/dashboard', async (req, res) => {
   try {
    const tokenCookie = req.headers.cookie;
    console.log(req.headerss)
    if(tokenCookie != undefined)
    {
       const token = tokenCookie.split('=')[1]
       const decoded = jwt.verify(token, 'secretsecret')
       const user = await User.findById(decoded.id)
       res.render('dashBoard', {
           name: user.name,
           email: user.email
       })
    }
    res.render('index')
   } catch (error) {
       console.log(error)
   }
})


app.post('/register', async (req, res) => {
   try {
    const {name, email, password, repassword} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({name, email, password: hashedPassword})
    await user.save()
    res.render('login')
       
   } catch (error) {
       console.log(error)
   }

});

app.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
})


app.listen(port, console.log("server is running"))
