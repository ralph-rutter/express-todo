var express = require('express')
routes = express.Router()


routes.route('/tasks')
    .get(function(rq, rs)
    {
        rs.send('Tasklist goes here.')
    })
    .delete(function(rq, rs)
    {
        rs.send('Blank list')
    })


routes.post('/task', function(rq, rs)
    {
        rs.send('Your task was posted.')
    })


routes.route('/task/:taskId')
    .get(function(rq, rs)
    {
        rs.send('task ' + rq.params.taskId + ' here')
    })
    .put(function(rq, rs)
    {
        rs.send('task ' + rq.params.taskId + ' updated')
    })
    .delete(function(rq, rs)
    {
        rs.send('task '+ rq.params.taskId + ' deleted')
    })


routes.get('/', function(rq, rs)
{
    //TODO set title template
    rs.render('home')
})

module.exports = routes