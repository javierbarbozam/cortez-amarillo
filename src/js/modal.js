const openBtn = document.getElementById("preorder-btn-open");
const closeBtn = document.getElementById("preorder-btn-close");
const container = document.getElementsByClassName("modal-container")[0];

const closeModal = () => {
  closeBtn.addEventListener("click", () => {
    container.style.display = "none";
  });

  container.addEventListener("click", () => {
    container.style.display = "none";
  });
};

const initModal = () => {
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    container.style.display = "flex";
  });
  closeModal();
}

export {initModal}