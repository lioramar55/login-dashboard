'use strict';

var gUsers = [
  {
    username: 'admin',
    password: '1234',
    lastLogin: Date.now() + 30,
    isAdmin: true,
    id: 'u101',
  },
  {
    username: 'puki',
    password: '1234',
    lastLogin: Date.now() - 30,
    isAdmin: false,
    id: 'u102',
  },
];

const USERKEY = 'loggedInUser';
const USERS = 'users';
var sortBy = 'LAST-LOGIN';

__createUsers();

function getUsersToShow() {
  if (sortBy === 'NAME')
    return gUsers.sort((a, b) => (a.username > b.username ? 1 : b.username > a.username ? -1 : 0));
  if (sortBy === 'LAST-LOGIN')
    return gUsers.sort((a, b) => a.lastLogin.toFixed(20) - b.lastLogin.toFixed(20));
}

function __saveUsers() {
  saveToStorage(USERS, gUsers);
}

function doLogin(userName, password) {
  var user = gUsers.find((user) => user.username === userName && user.password === password);
  if (!user) return false;
  user.lastLogin = new Date();
  saveToStorage(USERKEY, user);
  __saveUsers();
  return true;
}

function userLogout() {
  localStorage.removeItem(USERKEY);
}

function isAdmin() {
  var user = loadFromStorage(USERKEY);
  return user.isAdmin;
}

function __createUsers() {
  for (var i = 0; i < 3; i++) {
    gUsers.push(__createUser());
  }
  __saveUsers();
}

function __createUser() {
  return {
    username: getWord(),
    password: getId(),
    lastLogin: Date.now(),
    isAdmin: false,
    id: getId(),
  };
}
