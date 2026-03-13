const express = require('express');
const session = require('express-session');

const app = express();

// Configure session
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}));

// Home route
app.get('/', (req, res) => {

  if(req.session.views){
    req.session.views++;
    res.send("Number of visits: " + req.session.views);
  } 
  else{
    req.session.views = 1;
    res.send("Welcome! This is your first visit.");
  }

});

// Logout route
app.get('/logout', (req,res)=>{
  req.session.destroy();
  res.send("Session destroyed");
});

app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000");
});
