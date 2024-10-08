const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./wasiqr'),
    code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/wasiqr', server);
app.use('/code', code);
app.use('/whats',async (req, res, next) => {
res.sendFile(__path + '/joel/Whatsapp.html')
})
app.use('/facebook',async (req, res, next) => {
res.sendFile(__path + '/joel/facebook.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/joelpage.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
link generator by lord joel

 Server running on http://localhost:` + PORT)
})

module.exports = app
/**
    powered by wasi tech team 
    join Whatsapp channel for more updates 
    **/
