let user_product_names=['Campus Oxyfit','Sparx SM-482','SWIB R-001','Red Tape RTK0035','Pan Super Sonic 3','Nike InfinityRN 4','Nike Free RN 4.0','Nike Dunk Low','Nike Air Force 1','Nike Air Max 97'];
function update(index){
  let user_name=JSON.parse(localStorage.getItem("users"));
  let user_details=JSON.parse(localStorage.getItem(user_name));
  let user_product_quantity=user_details[5];
  user_product_quantity[index]--;
  if(user_product_quantity[index]===0){
    user_details[2][index]='';
    user_details[3][index]='';
    user_details[4][index]=0;
  }
  user_details[5]=user_product_quantity;
  localStorage.setItem(user_details[0],JSON.stringify(user_details));
  setTimeout(function(){
    location.reload()
  }, 200);
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