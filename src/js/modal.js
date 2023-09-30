const openBtn = document.getElementById("preorder-btn-open");
const closeBtn = document.getElementById("preorder-btn-close");
const container = document.getElementsByClassName("modal")[0];
const backgroundContent = document.querySelector('body');

const closeModal = () => {
  closeBtn.addEventListener("click", () => {
    container.style.display = "none";
    backgroundContent.classList.remove('overflowHidden')
    
  });

  container.addEventListener("click", () => {
    container.style.display = "none";
    backgroundContent.classList.remove('overflowHidden')
  });
};

const initModal = () => {
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    container.style.display = "initial";
    backgroundContent.classList.add('overflowHidden')
    closeModal();
  });
}

export {initModal}