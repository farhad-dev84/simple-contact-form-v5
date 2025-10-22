// گرفتن المنت های html 
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");

// اعتبارسنجی فرم 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  
  // گرفتن مقدار های اسم ، ایمیل ، پیام
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  
  // بررسی فیلد نام 
  if(name.value.trim() === "") {
    name.classList.add("is-invalid");
    valid = false;
  } else {
    name.classList.remove("is-invalid");
  }
  
  // بررسی فیلد ایمیل 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.value.match(emailPattern)) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
  }
  
  // بررسی فیلد پیام 
  if(message.value.trim() === "") {
    message.classList.add("is-invalid");
    valid = false;
  } else {
    message.classList.remove("is-invalid");
  }
  
  // نتیجه نهایی فیلدها 
  if(valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ your message has been sent successfully!";
    form.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ please fix the errors above.";
    }
});

// تغییر تم 
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});