function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
  }

  // Get all elements with class "toggle-type"
  const passwords = document.querySelectorAll('.toggle-type');

  // Get all elements with class "togglePassword"
  const toggleButtons = document.querySelectorAll('.toggle-password');

  // Attach event listener to each toggle button
  toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', function (e) {
      // Toggle the type attribute for the corresponding password input
      const type = passwords[index].getAttribute('type') === 'password' ? 'text' : 'password';
      passwords[index].setAttribute('type', type);

      // Toggle the eye slash icon for the clicked button
      if (this.classList.contains("fa-eye")) {
        this.classList.remove("fa-eye");
        this.classList.add('fa-eye-slash');
      } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      }
    });
  });