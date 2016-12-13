/* JSON schema
{
    "success": Bool,
    "message": 'string',
    "data": {type: object}
}
 */

var express = require('express')
var expHandlebars = require('express-handlebars')
var routes = require('./modules/routes')

var app = express()

app.engine('handlebars', expHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use('/', routes)

app.listen(4536, function()
{
    console.log('server started successfully')
})