const openBtn = document.getElementById("preorder-btn-open");
const closeBtn = document.getElementById("preorder-btn-close");
const container = document.getElementsByClassName("modal-container")[0];


const blockOtherContent = () => {
  const content = document.querySelector('body');
  content.classList.toggle('overflowHidden');
}

const closeModal = () => {
  closeBtn.addEventListener("click", () => {
    container.style.display = "none";
    blockOtherContent();
  });

  container.addEventListener("click", () => {
    container.style.display = "none";
    blockOtherContent();
  });
};

const initModal = () => {
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    container.style.display = "flex";
    closeModal();
    blockOtherContent();
  });
}

export {initModal}