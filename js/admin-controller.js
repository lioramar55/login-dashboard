'useStrict';

function onInit() {
  renderUsers();
}

function renderUsers(isCardView = false) {
  if (!isCardView) {
    renderTable();
  } else {
    renderCardView();
  }
}

function renderCardView() {
  var strHTMLs = '';
  var users = getUsersToShow();
  users.map((user) => {
    console.log('strHTMLs', strHTMLs);
    strHTMLs += `<div class="user-card">
        <h3>${user.username}</h3>
        <image src="assets/imgs/user.png" />
        </div>`;
  });
  document.querySelector('.accounts-display').innerHTML = strHTMLs;
}

function renderTable() {
  var strHTMLs = `<table><thead><tr>`;
  var users = getUsersToShow();
  for (var key in users[0]) {
    if (key === 'id') continue;
    strHTMLs += `<td>${key}</td>`;
  }
  strHTMLs += `</tr></thead>`;

  gUsers.map((user) => {
    var strHTML = `<tr>`;
    for (var key in user) {
      if (key === 'id') continue;
      strHTML += `<td>${user[key]}</td>`;
    }

    strHTML += `</tr>`;
    strHTMLs += strHTML;
  });
  document.querySelector('.accounts-display').innerHTML = strHTMLs;
}

function onSetSort(value) {
  sortUsers(value);
  renderUsers();
}
