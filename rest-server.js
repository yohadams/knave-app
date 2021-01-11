const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
 
let db = new sqlite3.Database('./database/knave-app.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the knave-app SQlite database.');
});

/*
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/



app.use(express.static('dist'));
app.use(cors());

app.get('/api/generators/traits/:type/:id', (req, res) => {
  const sql = `
    SELECT generator_types.name, generator_values.value
    FROM generator_values
    INNER JOIN generator_types
    ON generator_values.generator_type_id=generator_types.id
    AND
    generator_values.generator_type_id=${req.params.type};
  `;

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    
    res.json({
        "message":"success",
        "data": rows[req.params.id]
    })
  });  
});

app.get('/api/generators/info/:type/:id', (req, res) => {
  const sql = `
  SELECT character_${req.params.type}.value
  FROM character_${req.params.type} 
  WHERE character_${req.params.type}.id=${req.params.id}
  `;

  db.get(sql, (err, row) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    console.log("params", req.params.type, req.params.id)
    console.log("data", row)
    res.json({
        "message":"success",
        "data": row
    })
  });  
});



app.listen(process.env.PORT || 8001, function () {
  console.log('Data server is running on port 8001');
});
