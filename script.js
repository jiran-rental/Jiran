const modal = document.getElementById("rental-modal");
const closeBtn = document.querySelector(".close");
const confirmBtn = document.getElementById("confirm-rent");
const rentalDays = document.getElementById("rental-days");
const modalTitle = document.getElementById("modal-title");

let selectedProduct = "";

// فتح المودال عند الضغط على زر
document.querySelectorAll(".rent-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedProduct = btn.getAttribute("data-product");
    modalTitle.innerText =` استئجار: ${selectedProduct}`;
    modal.style.display = "block";
  });
});

// إغلاق المودال
closeBtn.onclick = () => {
  modal.style.display = "none";
}

// تأكيد الاستئجار
confirmBtn.onclick = () => {
  const days = rentalDays.value;
  if (days < 1) {
    alert("حدد عدد الأيام بشكل صحيح");
    return;
  }

  // تخزين البيانات
  localStorage.setItem("rentedProduct", selectedProduct);
  localStorage.setItem("rentalDays", days);

  // الذهاب إلى صفحة السلة
  window.location.href = "cart.html";
}

// إغلاق المودال عند الضغط خارج المحتوى
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}