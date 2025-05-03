let user_product_names=['Campus Oxyfit','Sparx SM-482','SWIB R-001','Red Tape RTK0035','Pan Super Sonic 3','Nike InfinityRN 4','Nike Free RN 4.0','Nike Dunk Low','Nike Air Force 1','Nike Air Max 97'];
function product_info(x){
  localStorage.setItem("product_index",JSON.stringify(x));
  window.location="product_info.html";
}
function home_page(){
  const product_details={
    product_images:['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg'],
    product_names:['Campus Oxyfit','Sparx SM-482','SWIB R-001','Red Tape RTK0035','Pan Super Sonic 3','Nike InfinityRN 4','Nike Free RN 4.0','Nike Dunk Low','Nike Air Force 1','Nike Air Max 97'],
    product_prices:[10000,12000,15000,19000,10000,20000,18000,16000,14000,10000],
  }
  let asian_shoes=document.querySelector(".asian-shoe");
  let nike_shoes=document.querySelector(".nike-shoe");
  for(let i=0;i<10;i++){
    const shoe=document.createElement("div");
    shoe.innerHTML=`<img class="shoe-img" src="${product_details.product_images[i]}"><p class="shoe-name">${product_details.product_names[i]}</p><p class="shoe-price">${product_details.product_prices[i]}/-</p><button class="product-info"onclick="product_info(${i})">Product info</button>`;
    shoe.classList.add("shoe-prop");
    if(i<5){
      asian_shoes.appendChild(shoe);
    }
    else{
      nike_shoes.appendChild(shoe);
    }
  } 
  let username=document.querySelector(".user_name");
  let users=JSON.parse(localStorage.getItem("users"));
  username.innerHTML=`${users.toUpperCase()}`;
}
function cart(){
  setTimeout(function(){
    }, 1100);
  window.location.href="cart.html";
}
function logout(){
  setTimeout(function(){
  }, 1100);
  window.location.href="index.html";
}
function search(){
  let user_entered_input=document.querySelector(".user_search").value;
  user_entered_input=user_entered_input.toLowerCase();
  let available=false;
  for(let i=0;i<10;i++){
    let x=user_product_names[i].toLowerCase();
    if(x===user_entered_input){
      available=true;
      break;
    }
  }
  if(available===true){
    alert('product available')
  }
  else{
    alert('product not available')
  }
  setTimeout(function(){
    user_entered_input.innerHTML='';
  }, 1100);
}