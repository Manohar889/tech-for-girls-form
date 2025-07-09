let count = 0;
const shareBtn = document.getElementById('shareBtn');
const counter = document.getElementById('counter');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('registrationForm');
const msg = document.getElementById('msg');

// Share on WhatsApp button logic
shareBtn.onclick = () => {
  if (count < 5) {
    count++;
    counter.textContent = `Click count: ${count}/5`;

        const message = "Hey Buddy! 👩‍💻 Join Tech For Girls Community 💡 Register here: https://manoharreddy.github.io/tech-for-girls-form/";
    const whatsappURL = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");


    if (count === 5) {
      alert("Sharing complete. Please continue.");
      submitBtn.disabled = false; // Enable the submit button
    }
  }
};


// Prevent resubmission after page reload
if (localStorage.getItem('submitted')) {
  form.style.display = 'none';
  msg.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
}

form.onsubmit = (e) => {
  e.preventDefault();
  if (count < 5) return alert("Please share 5 times before submitting!");

  const data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbyjr5vx0iw0c6LsjZAUmcltwPsUUf2_VrLRkdJQTnT6vhMM6CfOux9caleT1k26lsLcLA/exec', {
    method: 'POST',
    body: data
  })
    .then(res => {
      form.style.display = 'none';
      msg.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
      localStorage.setItem('submitted','true');
    })
    .catch(err => console.error("Error:", err));
};
