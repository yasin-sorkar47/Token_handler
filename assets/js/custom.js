let submitBtn = document.getElementById("submit-btn");

let tokenData = [];
let updateLiId = null;

totalElements(0);
editHndler();

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let activeInputValues = {};

  let formObj = new FormData(document.getElementById("form-id"));

  formObj.forEach((value, propaty) => {
    activeInputValues[propaty] = value;
  });

  if (!updateLiId) {
    tokenData.push({
      ...activeInputValues,
      id: tokenData.length + 1,
    });
  } else {
    tokenData = tokenData.map((item) => {
      if (item.id == updateLiId) {
        return {
          ...activeInputValues,
          id: updateLiId,
        };
      } else {
        return item;
      }
    });
  }

  totalElements();
  updateLiId = null;

  document.getElementById("form-id").reset();
});

// HTML Elements Handler
function htmlElements(name, phone, id) {
  return `<li data-id="${id}" class="token-li">
    <div class="left">
      <p>${name}</p>
      <span>${phone}</span>
    </div>
    <div class="right">
      <a href="#" class="token-btn">Token No :<span>${
        id <= 9 ? "0" + id : id
      }</span></a>
    </div>
  </data-li=li>`;
}

function totalElements() {
  let ulElements = [
    {
      status: "active",
      ul: document.getElementById("active-ul"),
      liElements: [],
      countSpanTag: document.getElementById("active-count"),
    },
    {
      status: "complite",
      ul: document.getElementById("complite-ul"),
      liElements: [],
      countSpanTag: document.getElementById("complite-count"),
    },
    {
      status: "cancel",
      ul: document.getElementById("cancel-ul"),
      liElements: [],
      countSpanTag: document.getElementById("cancel-count"),
    },
  ];

  ulElements.map((item) => {
    tokenData.map((token) => {
      if (token.status == item.status) {
        item.liElements.push(htmlElements(token.name, token.phone, token.id));
      }
    });
  });

  ulElements.forEach((item) => {
    function noData() {
      if (item.liElements.length == 0) {
        return ` <li class="d-block">
                  <span class="d-block text-center">No Data Found</span>
              </li>`;
      } else {
        return item.liElements.join("");
      }
    }
    item.ul.innerHTML = noData();
    item.countSpanTag.innerHTML =
      item.liElements.length <= 9
        ? "0" + item.liElements.length
        : item.liElements.length;
  });

  document.getElementById("total-count").innerHTML =
    tokenData.length <= 9 ? "0" + tokenData.length : tokenData.length;
}

// Edit Handler
function editHndler() {
  let tokenPackage = document.querySelector(".token-package");
  tokenPackage.addEventListener("click", (e) => {
    e.preventDefault();
    let tokenLi = e.target.closest(".token-li");

    if (tokenLi) {
      let dataId = tokenLi.getAttribute("data-id");

      let editToken = tokenData.find((item) => {
        return item.id == dataId;
      });

      for (let t in editToken) {
        if (document.querySelector(`[name="${t}"]`)) {
          document.querySelector(`[name="${t}"]`).value = editToken[t];
        }
      }
      updateLiId = dataId;
    }
  });
}
