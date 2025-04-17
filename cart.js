function update(index){
  console.log("function called");
  let user_product_quantity=JSON.parse(localStorage.getItem("quantity"));
  user_product_quantity[index]--;
  user_details[5]=user_product_quantity;
  localStorage.setItem(user_details[0],JSON.stringify(user_details));
  localStorage.setItem("quantity",JSON.stringify(user_product_quantity));
  setTimeout(function(){
    location.reload()
  }, 200);
}