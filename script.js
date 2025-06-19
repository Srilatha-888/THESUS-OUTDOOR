function openSearchModal() {
  document.getElementById('searchModal').style.display = 'block';
  document.getElementById('Search-In-Modal').focus();
}

function closeSearchModal() {
  document.getElementById('searchModal').style.display = 'none';
}

function handleSearch() {
  const query = document.getElementById('Search-In-Modal').value.trim();
  if (query !== "") {
    alert("Searching for: " + query); // Replace with real logic
  }
  return false;
}

// // Close with ESC
// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Escape') closeSearchModal();
// });



// window.addEventListener('scroll', function() {
//   debugger;
//   const body = document.body;
//   // If scrolled down more than 30 pixels, add 'scrolled' class
//   if (window.scrollY > 30) {
//     body.classList.add('scrolled');
//   } else {
//     // If scrolled back to top (or less than 30px), remove 'scrolled' class
//     body.classList.remove('scrolled');
//   }

//   const header = this.document.getElementsByClassName('navbar');
//   if (window.scrollY > 50) {
//     header.classList.add("shrink");
//   } else {
//     header.classList.remove("shrink");
//   }
// });

// function searchFunction(){
//   alert("Search icon clicked!");
// }

// Auth tabs functionality
document.addEventListener('DOMContentLoaded', function() {
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');

  if (authTabs.length > 0) {
    authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and forms
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));

        // Add active class to clicked tab and corresponding form
        tab.classList.add('active');
        const formId = tab.getAttribute('data-tab') + '-form';
        document.getElementById(formId).classList.add('active');
      });
    });
  }

  // Form submission handling
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // if (loginForm) {
  //   loginForm.addEventListener('submit', function(e) {
  //     e.preventDefault();
  //     const email = document.getElementById('login-email').value;
  //     const password = document.getElementById('login-password').value;
      
  //     // Here you would typically make an API call to your backend
  //     console.log('Login attempt:', { email, password });
  //     // For demo purposes, we'll just show an alert
  //     alert('Login functionality would be implemented here');
  //   });
  // }

  // if (registerForm) {
  //   registerForm.addEventListener('submit', function(e) {
  //     e.preventDefault();
  //     const name = document.getElementById('register-name').value;
  //     const email = document.getElementById('register-email').value;
  //     const password = document.getElementById('register-password').value;
  //     const confirmPassword = document.getElementById('register-confirm-password').value;

  //     if (password !== confirmPassword) {
  //       alert('Passwords do not match!');
  //       return;
  //     }

  //     // Here you would typically make an API call to your backend
  //     console.log('Register attempt:', { name, email, password });
  //     // For demo purposes, we'll just show an alert
  //     alert('Registration functionality would be implemented here');
  //   });
  // }

  // Nav icon navigation
  const navIcons = document.querySelectorAll('.nav-icons .icon');
  if (navIcons.length >= 3) {
    // 0: search, 1: user, 2: cart
    navIcons[0].addEventListener('click', function() {
      searchFunction();
    });
    navIcons[1].addEventListener('click', function() {
      window.location.href = 'login.html';
    });
    navIcons[2].addEventListener('click', function() {
      window.location.href = 'cart.html';
    });
  }
});