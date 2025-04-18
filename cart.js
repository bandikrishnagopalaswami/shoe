function update(index){
  let user_name=JSON.parse(localStorage.getItem("users"));
  let user_details=JSON.parse(localStorage.getItem(user_name));
  let user_product_quantity=user_details[5];
  user_product_quantity[index]--;
  user_details[5]=user_product_quantity;
  localStorage.setItem(user_details[0],JSON.stringify(user_details));
  setTimeout(function(){
    location.reload()
  }, 200);
}