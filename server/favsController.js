const db = require('./model')
const favsController = {};

// ---GET---------------------------------------------------
favsController.getFavs = (req, res, next) => {
  const { id } = req.body;
  console.log('req body', req.body)
  if(!id) {
      return res.status(400).json({
          success: false,
          message: 'missing id'
      })
  }

  const textQuery = `
  SELECT * FROM favs
  WHERE user_id = "$1"
  `;

  const values = [ id ]

  db.query(textQuery,values, (err, result) => {
      if(err) {
          console.log('Error in favsController.getFavs', err);
          return res.status(500)
      }
      console.log('Vas vi chakah', result.rows)
      res.locals.favs = result.rows;
      return next();
  })
}
// ---ADD---------------------------------------------------


// favs - id, image_id, user_id
favsController.addFav = (req, res, next) => {
  const { image_id, user_id } = req.body;
  if(!id) {
      return res.status(400).json({
          success: false,
          message: 'missing id'
      })
  }

  const textQuery = `
  INSERT INTO favs (image_id, user_id)
  VALUES ($1, $2)
  RETURNING *
  `;

  const values = [ image_id, user_id ]

  db.query(textQuery,values, (err, result) => {
      if(err) {
          console.log('Error in favsController.addFav', err);
          return res.status(500)
      }
      res.locals.favs = result.rows;
      return next();
  })
}
// ---DELETE---------------------------------------------------

// favsController.removeFav = (req,res,next) => {
//   //Identifying the request
//   const { favs_id, user_id } = req.body;
//   if(!favs_id) {
//       return res.status(400).json({
//           success: false,
//           message: 'missing fav'
//       })
//   }
  
//   const textQuery = `
//   DELETE 
//   FROM todos
//   WHERE todo_id=$1
//   RETURNING *
//   `

//   const values = [todo_id]

//   db.query(textQuery,values, (err, result) => {
//       if(err) {
//           console.log('Error in ...', err);
//           return res.status(500)
//       }
//       res.locals.favs = result.rows;
//       return next();
//   })
// }


module.exports = favsController;