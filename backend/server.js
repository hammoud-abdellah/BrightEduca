const express = require("express");
const mysql = require("mysql2")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config();
const {PORT,HOST,DB_NAME, USER,  MY_PASSWORD } = process.env;


// const router = require('express').Router();

const db = mysql.createConnection({
    host: HOST,
    user: USER,
    password: MY_PASSWORD,
    database: DB_NAME 
})

app.post('/register', (req,res)=>{
    const sql = "INSERT INTO user (`username`,`email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]

    db.query(sql, values,(err, data)=>{
        if(err){
            console.log("database error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(data);
    })
})

app.post('/login' , (req, res) => {
    const sql = "SELECT * FROM user WHERE `email`= ? AND `password` = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data)=>{
        // console.log(data)
        if(err) {
            return res.status(500).json({ error: "Database error" });
        }
        if(data[0].username === "admin"){
            return res.json("isAdmin")
        }
        else if(data.length > 0){
            return res.json("isStudent");
        } else {
            return res.json("failure");
        }

    })
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM user";
    
    db.query(sql, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      
      return res.json(data);
    });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id; 
    const sql = "DELETE FROM user WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
      if (err) {
        console.error("Error deleting user:", err);
        return res.status(500).json({ error: "Database error" });
      }
      
      if (data.affectedRows === 1) {
        return res.json({ message: "User deleted successfully" });
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    });
});

app.post('/addCourse', (req, res) => {
  const { id,title, image, about,category, pdf_link } = req.body;
  const sql = 'INSERT INTO courses (id,title, image, about,category, pdf_link) VALUES (?,?, ?, ?,?, ?)';
  const values = [id,title, image, about,category, pdf_link];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error adding course:', err);
      return res.status(500).json({ error: 'Failed to add the course' });
    }
    return res.json({ message: 'Course added successfully' });
  });
});


app.get('/Courses', (req, res) => {
  const sql = 'SELECT * FROM courses';

  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error retrieving courses:', err);
      return res.status(500).json({ error: 'Failed to retrieve courses' });
    }
    return res.json(data);
  });
});

app.delete('/deleteCourse/:id', (req, res) => {
  const courseId = req.params.id;
  const sql = 'DELETE FROM courses WHERE id = ?';

  db.query(sql, [courseId], (err, data) => {
    if (err) {
      console.error('Error deleting course:', err);
      return res.status(500).json({ error: 'Failed to delete the course' });
    }
    return res.json({ message: 'Course deleted successfully' });
  });
});



// app.use('/register', router);

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
