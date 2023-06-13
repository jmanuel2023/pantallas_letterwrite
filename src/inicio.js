function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.querySelector(".options button:first-child").classList.add("active");
    document.querySelector(".options button:last-child").classList.remove("active");
  }
  
  function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.querySelector(".options button:first-child").classList.remove("active");
    document.querySelector(".options button:last-child").classList.add("active");
  }
  