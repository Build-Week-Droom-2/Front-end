const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const token =
  'aekkd432KldskJGHDK54Jslsk4d3KjfvjeingKLLdale94kdn3n5kd02dk3KsLL24lsK03Kl';
let nextId = 4;
let users = [
  {
    id: 1,
    name: 'Chris',
    email: 'droom@yahoo.com', 
    account: 1,
    
  },
  {
    id: 2,
    name: 'Greg',
    email: 'gregj@yahoo.com',
  },
  {
    id: 3,
    name: 'Mimi',
    email: 'mimih@yahoo.com'
  },
];
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
  if (email === 'droom@yahoo.com' && password === 'droom@yahoo.com') {
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
app.delete('/api/users/:id', authenticator, (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== Number(id));
  res.send(users);
});
function getNextId() {
  return nextId++;
}
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});