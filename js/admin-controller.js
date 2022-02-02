'useStrict';

function renderDashboard() {
  renderDisplayOptions();
  renderFiltersSelect();
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

function renderDisplayOptions() {
  var strHTML = `<div class="disp-options"><image onclick="renderUsers()" class="disp-options-imgs" src="assets/imgs/list.png" />
   <image onclick="renderUsers(true)" class="disp-options-imgs" src="assets/imgs/cards.png" /></div>`;
  document.querySelector('.info-container').innerHTML += strHTML;
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

function renderFiltersSelect() {
  var strHTML = `
      <select onchange="onSetSort(this.value)">
        <option value="LAST-LOGIN">Last Login</option>
        <option value="NAME">Name</option>
      </select>
      `;
  document.querySelector('.info-container').innerHTML += strHTML;
}

function onSetSort(value) {
  sortUsers(value);
  renderUsers();
}
