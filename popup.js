const nameOp = document.querySelector("#name-field");
const list = document.querySelector(".ok");
const usernameOp = document.querySelector(".username-op");

document
  .getElementById("submit-btn")
  .addEventListener("submit", function (event) {
    fetch(`https://api.github.com/users/${nameOp.value}/repos`)
      .then((response) => response.json())
      .then(function (data) {
        usernameOp.textContent = data[0].owner.login;
        list.innerHTML = `<ul class="ok"></ul>`;
        for (let i = 0; i < data.length; i++) {
          var item = document.createElement("li");
          item.innerHTML = `<li>${data[i].name} : <a target="_blank" href="${data[i].html_url}">${data[i].html_url}</a></li>`;
          list.appendChild(item);
        }
      });
    event.preventDefault();
  });
