const sections = document.querySelectorAll("[data-src]");
for (const section of sections) {
  const response = await fetch(section.dataset.src); 
  const mainContent = await response.text();  
  section.outerHTML = mainContent;        
}

cdocument.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myForm').addEventListener('submit', function (event) {
    let emailInput = document.querySelector('#myForm input[type="email"]').value;

    if (emailInput.includes('@gmail.com')) {
      alert('Gmail addresses are not allowed.');
      event.preventDefault();
      return false;
    }

    let phoneInput = document.querySelector('#myForm input[type="tel"]').value;
    let phoneRegex = /^(6|7|9)[0-9]{8})$/;
    if (!phoneRegex.test(phoneInput.replace(/\s+/g, ''))) {
      alert('Number must have 9 digits, starting with 6, 7 y 9.');
      event.preventDefault();
      return false;
    }

  });
});