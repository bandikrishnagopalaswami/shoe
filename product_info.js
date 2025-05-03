let users=JSON.parse(localStorage.getItem("users"));
let user_details=JSON.parse(localStorage.getItem(users));
let r=Number(JSON.parse(localStorage.getItem("product_index")));
const product_details={
  product_images:['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg'],
  product_names:['Campus Oxyfit','Sparx SM-482','SWIB R-001','Red Tape RTK0035','Pan Super Sonic 3','Nike InfinityRN 4','Nike Free RN 4.0','Nike Dunk Low','Nike Air Force 1','Nike Air Max 97'],
  product_prices:[10000,12000,15000,19000,10000,20000,18000,16000,14000,10000],
  product_quantity: [0,0,0,0,0,0,0,0,0,0],
  product_desc:['Lightweight and flexible, these shoes are perfect for jogging, walking, or gym workouts. They feature breathable mesh uppers with cushioned insoles and anti-skid soles, providing great grip and comfort.','These stylish sneakers come with a synthetic leather finish and durable outer sole. Designed for a trendy urban look, they pair well with casual outfits and offer good foot support for all-day wear.','Designed for comfort and ease, these slip-on shoes are made from soft knit fabric with memory foam cushioning. Lightweight and breathable, they’re ideal for daily errands and long walks.','Rugged and tough, these shoes are built for hiking and trail adventures. With reinforced toe protection, high-traction outsoles, and ankle support, they ensure safety and comfort on rough terrain.','With a sleek synthetic leather design, cushioned footbed, and non-slip sole, these formal shoes offer a smart look and reliable comfort. Ideal for office wear or formal events','A timeless classic in streetwear, the Air Force 1 features a durable leather upper, Nike Air cushioning, and a clean, iconic silhouette. It offers both style and comfort, making it a versatile staple.',"A neutral running shoe with responsive Zoom Air units and a breathable engineered mesh upper. It's designed to deliver cushioning, flexibility, and durability for runners of all levels.","Budget-friendly running shoes with a soft foam midsole, lightweight textile upper, and a simple, clean design. Perfect for beginners or casual fitness enthusiasts.","Originally made for basketball, the Dunk Low has become a fashion icon. Featuring a leather upper and padded collar, it combines retro style with modern comfort."," Designed for basketball players, this model offers full-length Zoom Air cushioning, durable mesh construction, and aggressive traction. It provides support and responssiveness on the court."]
}
function update_product(){
    let display_item=document.querySelector(".product");
    let img_item=document.createElement("div");
    img_item.innerHTML=`<img class="display_img" src='${product_details.product_images[r]}'>
    <p class="product-name">${product_details.product_names[r]}</p>
    <p class="product-price">${product_details.product_prices[r]}/-</p>`;
    img_item.classList.add("product-desc-img")
    display_item.appendChild(img_item);
    let desc_item=document.createElement("div");
    desc_item.innerHTML=`<h4>Description</h4><p class="product-desc">${product_details.product_desc[r]}</p>
</select><p class="added"><p><button class="add-to-cart" onclick="add_to_cart(${r})">Add to Cart</button>`;
    desc_item.classList.add("product-infor");
    display_item.appendChild(desc_item);
    let username=document.querySelector(".user_name");
    username.innerHTML=`${users.toUpperCase()}`;
    console.log(user_details);
    console.log(users);
}
function cart(){
  setTimeout(function(){
    }, 1100);
  window.location.href="cart.html";
}
function home(){
  setTimeout(function(){
    }, 1100);
  window.location.href="index1.html";
}
function add_to_cart(product_index){
  console.log(document.querySelector(".shoe-size"));
  document.querySelector(".added").innerHTML=`<span class="tick-mark">&#10003;</span>Added`;
  setTimeout(function(){
    document.querySelector(".added").innerHTML='';
    }, 1100);
  if(user_details[5][r]==0){
  user_details[2][r]=(product_details.product_images[r]);
  user_details[3][r]=(product_details.product_names[r]);
  user_details[4][r]=(product_details.product_prices[r]);
  user_details[5][r]++;
  user_details[6][r]=(product_details.product_desc[r]);
  }
  else{
    user_details[5][r]++;
  }
  localStorage.setItem(users,JSON.stringify(user_details));
  console.log(JSON.parse(localStorage.getItem(users)));
}