var Todos = require('../models/todoModel');

module.exports = function(app){
  app.get('/api/setupTodos', function(req, res){
    // seed the database
    var starterTodos  = [
      {
        username: 'test',
        todo: "Walk the Dog",
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: "Pick up Ice for party",
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: "Call Mom on Mothers Day",
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, results){
      res.send(results);
    });
  });
};
