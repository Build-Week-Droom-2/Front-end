const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const token =
  'aekkd432KldskJGHDK54Jslsk4d3KjfvjeingKLLdale94kdn3n5kd02dk3KsLL24lsK03Kl';
let nextId = 4;
let users = 
[{
      id: 1,
      name: 'Chris',
      email: 'droom@yahoo.com', 
      account: 1,
      title:"Full Stack Web Developer",
      exp: "2 years of experience",
      edu: "Endorsed by Lambda School Full Stack Web Developer",
      skills: ["Bachelors in Computer Science", "Node and Java Experience", "2 years experience"],
      matchedJobs: [
        {id:1, company: 'Uber', position:'Driver', title:'recruiterName'},
        {id:2, company: 'LyftLambd', position:'Driver', title:'recruiterName'},
        {id:3, company: 'McDonalds', position:'Milkshake maker', title:'recruiterName'}
      ]
}]
   
  
  let matched = [
    {id:4, company: 'Uber', position:'Driver', title:'Jon Doe'},
    {id:5, company: 'Lambda', position:'Computer Programmer', title:'Jane Doe'},
    {id:6, company: 'McDonalds', position:'Milkshake maker', title:'Jon Doe'}
  ]
app.use(bodyParser.json());
app.use(cors());
function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) { 
    next();
  } else {
    res.status(403).json({ error: 'User must first login' });
  }
}
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'droom@yahoo.com' && password === 'droom@yahoo.com')   {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'The username and password is incorrect' });
  }
});
app.get('/api/users', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, 1000);
});
app.get('/api/users/:id', authenticator, (req, res) => {
  const user = user.find(u => u.id == req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'Unable to locate the user' });
  }
});


app.get('/api/matched', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(matched);
  }, 1000);
});
app.get('/api/matched/:id', authenticator, (req, res) => {
  const matched = matched.find(u => u.id == req.params.id);
  if (matched) {
    res.status(200).json(matched);
  } else {
    res.status(404).send({ msg: 'Unable to locate the user' });
  }
});


app.post('/api/users', authenticator, (req, res) => {
  const user = { id: getNextId(), ...req.body };
  users = [...users, user];
  res.send(users);
});
app.put('/api/users/:id', authenticator, (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id == id);
  if (userIndex > -1) {
    const user = { ...users[userIndex], ...req.body };
    users = [
      ...users.slice(0, userIndex),
      user,
      ...users.slice(userIndex + 1)
    ];
    res.send(users);
  } else {
    res.status(404).send({ msg: 'Unable to locate the user' });
  }
});
app.delete('/api/matched/:id', authenticator, (req, res) => {
  const { id } = req.params;
  matched = matched.filter(u => u.id !== Number(id));
  res.send(matched);
});
function getNextId() {
  return nextId++;
}
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});