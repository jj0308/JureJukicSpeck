const inputItem = document.querySelector(".inputItem");
const addButton = document.querySelector(".addBtn");
const removeAllButton = document.querySelector(".removeAllItem");
const columns = document.querySelectorAll(".column ul");

const addItem = function () {
  const newItem = document.createElement("li");
  newItem.innerText = inputItem.value;
  inputItem.value = "";

  if (columns[0].children.length <= columns[1].children.length) {
    columns[0].appendChild(newItem);
  } else {
    columns[1].appendChild(newItem);
  }
};

const removeAllItems = function () {
  columns.forEach((column) => {
    column.innerHTML = "";
  });
};

addButton.addEventListener("click", addItem);
removeAllButton.addEventListener("click", removeAllItems);
