const db = require('./model')
const usersController = {};

usersController.getUsers = (req,res,next) => {
  const textQuery = `
  SELECT * FROM users
  `;

  db.query(textQuery)
    .then (result => {
        res.locals.users = result.rows;
        return next();
    })
    .catch(err => {
        console.log('Error in todoController.getUsers', err)
        return res.sendStatus(500)
    })
}


usersController.authenticateUser = (req, res, next) => {
  
  const { email, pass } = req.body;
  if(!email || !pass) {
      return res.status(400).json({
          success: false,
          message: 'missing user or pass'
      })
  }

  const textQuery = `
    SELECT email,id
    FROM users
    WHERE email = $1 AND pass = $2
  `

  const values = [ email, pass ]

  db.query(textQuery,values, (err, result) => {
      if(err) {
          console.log('Error in usersController.authenticateUser', err);
          return res.status(500)
      }
      res.locals.users = result.rows;
      return next();
  })
}



module.exports = usersController;



// SELECT email,pass
// FROM users
// WHERE email = 'kiro@kiro.com'AND pass = 'pass1'
// [
//  {"id":1,"email":"kiro@kiro.com","pass":"pass1","last_login":"2022-02-22T06:00:00.000Z"},
//  {"id":2,"email":"someone@someone","pass":"pass2","last_login":"2022-02-02T06:00:00.000Z"}]