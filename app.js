const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

// error handler
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(8888, ()=>{
    console.log(`Server is running on port 8888`)
});
