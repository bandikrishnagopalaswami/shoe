let user_product_images=['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg'];
let user_product_names=['Campus Oxyfit','Sparx SM-482','SWIB R-001','Red Tape RTK0035','Pan Super Sonic 3','Nike InfinityRN 4','Nike Free RN 4.0','Nike Dunk Low','Nike Air Force 1','Nike Air Max 97'];
let user_product_price=[10000,12000,15000,19000,10000,20000,18000,16000,14000,10000];
let user_case=JSON.parse(localStorage.getItem("users"));
let usercase1=JSON.parse(localStorage.getItem(user_case));
//let user_case2=usercase1[5];
let user_product_quantity= usercase1[5];
console.log(user_product_quantity);
function add_to_cart(x){
  //user_case2[x-1]++;
  for(let i=0;i<10;i++){
    user_product_quantity[i]=Number(user_product_quantity[i]);
  }
  console.log(user_product_quantity);
  let update_for_user=document.querySelectorAll(".product-added");
  update_for_user[x-1].innerHTML=`<span class="tick-mark">&#10003;</span>Added`;
  setTimeout(function(){
    update_for_user[x-1].innerHTML='';
    }, 1100);
    let user_name=JSON.parse(localStorage.getItem("users"));
    user_details=JSON.parse(localStorage.getItem(user_name));
    console.log(JSON.parse(localStorage.getItem(user_name)));
    user_product_quantity[x-1]++;
    // user_details[2]=product_details.product_images[x-1];
    // user_details[3]=product_details.product_names[x-1];
    // user_details[4]=product_details.product_prices[x-1];
    //localStorage.setItem("quantity",JSON.stringify(user_product_quantity));
    user_details[2]=user_product_images;
    user_details[3]=user_product_names;
    user_details[4]=user_product_price;
    user_details[5]=user_product_quantity;
    localStorage.setItem(user_details[0],JSON.stringify(user_details));
    console.log(JSON.stringify((localStorage.getItem(user_name))));
}