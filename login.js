let a=[];
function register(){
  let user_details=document.querySelector(".user-details");
  user_details.innerHTML=`
  <h1 class="login-heading">Register</h1>
  <input class="username"type="text" placeholder="Username">
  <input class="password"type="password" placeholder="Password">
  <button onclick="user_registration()"class="register-user">Register</button>`;
}
function ui_final(){
  let user_name=document.querySelector(".username");
  let user_password=document.querySelector(".password");
  console.log(JSON.parse(localStorage.getItem(String(user_name.value))),String(user_password.value))
  let user=JSON.parse(localStorage.getItem(String(user_name.value)));
  localStorage.setItem("users",JSON.stringify(user_name.value))
  if(user[1]===String(user_password.value)){
      window.location.href="index1.html";
    }
}
function user_registration(){
  let user_name=document.querySelector(".username");
  let user_password=document.querySelector(".password");
  localStorage.setItem(String(user_name.value),JSON.stringify([user_name.value,user_password.value,['','','','','','','','','',''],['','','','','','','','','',''],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],['','','','','','','','','',''],[]]));
  console.log(localStorage.getItem(String(user_name.value)));
  alert(`Registered successfully`)
  window.location.href="index.html";
}
