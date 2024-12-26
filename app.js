function signup() {
  if (inputName.value.trim() === "" || inputPassword.value.trim() === "") {
      Swal.fire({
          icon: "error",
          title: "Empty Fields!",
          text: "Please fill in all fields before signing up.",
          customClass: {
              popup: 'vip-popup',
              title: 'vip-title',
              content: 'vip-content',
              confirmButton: 'vip-confirm-button'
          }
      });
      return;
  }
  localStorage.setItem("inputName", inputName.value);
  localStorage.setItem("inputPassword", inputPassword.value);
  inputName.value = "";
  inputPassword.value = "";
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sign Up Successfully",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
          popup: 'vip-popup',
          title: 'vip-title',
          content: 'vip-content'
      }
      
  });
  window.location.href="login.html"
}


function login() {
  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  var inputValue = localStorage.getItem("inputName");
  var inputValuePassword = localStorage.getItem("inputPassword");

  if (userName.trim() === "" || password.trim() === "") {
      Swal.fire({
          icon: "error",
          title: "Empty Fields!",
          text: "Please fill in all fields before logging in.",
          customClass: {
              popup: 'vip-popup',
              title: 'vip-title',
              content: 'vip-content',
              confirmButton: 'vip-confirm-button'
          }
      });
      return;
  }

  if (userName === inputValue && password === inputValuePassword) {
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
              popup: 'vip-popup',
              title: 'vip-title',
              content: 'vip-content'
          }
      });
  } else {
      Swal.fire({
          icon: "error",
          title: "Invalid Email or Password",
          text: "Login Failed!",
          footer: '<a href="#">Why do I have this issue?</a>',
          customClass: {
              popup: 'vip-popup',
              title: 'vip-title',
              content: 'vip-content',
              footer: 'vip-footer',
              confirmButton: 'vip-confirm-button'
          }
          
      });
   
    }
    window.location.href="Quiz-App/index.html"

}

var style = document.createElement('style');
style.innerHTML = `
    .vip-popup {
        background: linear-gradient(135deg, #2c3e50, #bdc3c7);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    .vip-title {
        font-family: 'Poppins', Arial, sans-serif;
        font-size: 24px;
        color: #ffffff;
    }
    .vip-content {
        font-family: 'Poppins', Arial, sans-serif;
        font-size: 16px;
        color: #dddddd;
    }
    .vip-footer {
        font-family: 'Poppins', Arial, sans-serif;
        font-size: 14px;
        color: #aaaaaa;
    }
    .vip-confirm-button {
        background: linear-gradient(135deg, #8e44ad, #3498db);
        color: #ffffff;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    .vip-confirm-button:hover {
        background: linear-gradient(135deg, #5b2c6f, #2c3e50);
    }
`;
document.head.appendChild(style);


