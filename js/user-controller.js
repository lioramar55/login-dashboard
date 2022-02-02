'use strict';

function onLoginUser(ev) {
  ev.preventDefault();
  var userName = ev.target[0].value;
  var password = ev.target[1].value;
  var user = doLogin(userName, password);

  ev.target[0].value = '';
  ev.target[1].value = '';

  if (!user) {
    document.querySelector('.error-msg').style.visibility = 'visible';
    return;
  }

  document.querySelector('.user-section').classList.add('flex');
  document.querySelector('.greet-user').innerText = `Hello ${userName}`;
  document.querySelector('.login-container').classList.add('hide');

  if (isAdmin()) {
    var elAdminBtn = `<button href="admin.html" class="btn admin-btn" onclick="onAdminBtnClick()">Admin Dashboard</button>`;
    document.querySelector('.btn-section').innerHTML += elAdminBtn;
  }
}

function onUserLogout() {
  document.querySelector('.user-section').classList.toggle('flex');
  document.querySelector('.login-container').classList.toggle('hide');
  userLogout();
}

function onAdminBtnClick() {
  window.location.href = 'admin.html';
}

function checkIsAdmin() {
  if (!isAdmin()) window.location.href = 'index.html';
}
