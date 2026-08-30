const users = [];

function createUser(user) {
  users.push(user);
  return user;
}

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function findUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  users,
  createUser,
  findUserByEmail,
  findUserById,
};