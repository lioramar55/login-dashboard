'use strict';
checkIsAdmin();

function checkIsAdmin() {
  var user = loadFromStorage(USERKEY);
  if (!user || !user.isAdmin) window.location.href = 'index.html';
}

function sortUsers(value) {
  sortBy = value;
  switch (value) {
    case 'NAME':
      gUsers.sort((a, b) => {
        return a.username.toUpperCase() > b.username.toUpperCase()
          ? 1
          : b.username.toUpperCase() > a.username.toUpperCase()
          ? -1
          : 0;
      });
      break;
    case 'LAST-LOGIN':
      gUsers.sort((a, b) => a.lastLogin - b.lastLogin);
  }
}
