const obj = [
	{
	  id: 1,
	  title: "special cotton shirt for men",
	  price: 15,
	  category: "men's clothing",
	  description: "",
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 1,
		name: "Sofia Lily",
	  },
	  createdAt: "2021-12-04T10:25:16.546Z",
	  updatedAt: "2021-12-11T03:14:40.195Z",
	  slug: "special-cotton-shirt-for-men",
	},
	{
	  id: 2,
	  title: "high quality men skiny blue jean",
	  price: 90,
	  category: "men's clothing",
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 2,
		name: "Mark Lyan",
	  },
	  createdAt: "2021-12-04T10:26:40.771Z",
	  updatedAt: "2021-12-04T10:26:40.771Z",
	  slug: "high-quality-men-distress-skinny-blue-jeans",
	},
	{
	  id: 3,
	  title: "cotton o neck mens clothing tshirts",
	  price: 30,
	  category: "men's clothing",
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 3,
		name: "Sofia Lily",
	  },
	  createdAt: "2021-12-04T10:27:05.257Z",
	  updatedAt: "2021-12-04T10:27:05.257Z",
	  slug: "cotton-o-neck-mens-clothing-t-shirts",
	},

	{
	  id: 4,
	  title: "running sneaker",
	  price: 200,
	  category: "Shoes",
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 4,
		name: "Robert Gonzalez",
	  },
	  createdAt: "2021-12-04T10:29:48.295Z",
	  updatedAt: "2021-12-04T10:29:48.295Z",
	  slug: "running-sneaker",
	},
	{
	  id: 5,
	  title: "men casual sport running sneaker",
	  price: 100,
	  category: "Shoes",
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 5,
		name: "Noah Ali",
	  },
	  createdAt: "2021-12-04T10:30:13.299Z",
	  updatedAt: "2021-12-04T10:30:13.299Z",
	  slug: "men-casual-shoes-sports-running-sneakers",
	},
	{
	  id: 6,
	  title: "premium leather matt black casual boot",
	  price: 250,
	  category: "Shoes",
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 6,
		name: "Alex Dwan",
	  },
	  createdAt: "2021-12-04T10:30:35.528Z",
	  updatedAt: "2021-12-04T10:30:35.528Z",
	  slug: "premium-leather-matt-black-casual-boot",
	},
	{
	  id: 7,
	  title: "waterproof fitness sports watch",
	  price: 140,
	  category: "watches",   
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 7,
		name: "James Anderson",
	  },
	  createdAt: "2021-12-04T10:37:40.331Z",
	  updatedAt: "2021-12-04T10:37:40.331Z",
	  slug: "waterproof-fitness-racker-sports-watch",
	},
	{
	  id: 8,
	  title: "o neck mens clothing tshirts",
	  title: "bracelet blood pressure  fitness smartwatch",
	  price: 120,
	  category: "watches",    
	  description: null,
	  createdBy: {
		role: "ROLE_CUSTOMER",
		id: 8,
		name: "William Counts",
	  },
	  createdAt: "2021-12-04T10:38:02.131Z",
	  updatedAt: "2021-12-04T10:38:02.131Z",
	  slug: "bracelet-blood-pressure-sport-fitness-smartwatch",
	},
]


let cateBox = document.getElementById("cate");
let cardContainer = document.getElementById("cards");
for (const i of obj) {
	cardContainer.innerHTML += `
        <div class="card" id="show">
         <div class="img">
           <img src="${i.image}" />
         </div>
         <div class="card-content">
           <h5 id="category">${i.category}</h5>
           <h3 class="card-title">${i.title}</h3>
           
           <div class="card-main">
            <p class="card-price">$${i.price}</p>
              <div class="cart-btn" >
                <button class="cartBtn">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </div>`;
}

const allCategories = ["all categories"];
for (const x of obj) {
	allCategories.push(x.category);
}

const filterCategories = [...new Set(allCategories)];

for (let i = 0; i < filterCategories.length; i++) {
	let first = filterCategories[i][0].toUpperCase();
	cateBox.innerHTML += `<h4>${first}${filterCategories[i].slice(1)}</h4>`;
}

const options = cateBox.getElementsByTagName("h4");

for (let i = 0; i < options.length; i++) {
	options[0].className = "active";
	options[i].addEventListener("click", () => {
		options[i].className = "active";
		for (let j = 0; j < options.length; j++) {
			if (i != j) {
				options[j].className = " ";
			}
		}
		cardContainer.innerHTML = "";
		for (let k = 0; k < obj.length; k++) {
			if (options[i].innerText.toLowerCase() == obj[k].category) {
				console.log("match");
				cardContainer.innerHTML += `<div class="card" id="show">

        <div class="img">
          <img src="${obj[k].image}" />
        </div>
        <div class="card-content">
          <h5 id="category">${obj[k].category}</h5>
          <h3 class="card-title">${obj[k].title}</h3>
		  <div class="card-main">
			<p class="card-price">$${obj[k].price}</p>
			<div class="cart-btn" >
			<button class="cartBtn">
				<i class="fa-solid fa-cart-shopping"></i>
			</button>
		   </div>
          </div>
        </div>
      </div>`;
				// console.log("match");
			} else if (options[i].innerText.toLowerCase() === filterCategories[0]) {
				cardContainer.innerHTML += `<div class="card" id="show">
				<span class="tag">hot</span>
        <div class="img">
          <img src="${obj[k].image}" />
        </div>
        <div class="card-content">
          <h5 id="category">${obj[k].category}</h5>
          <h3 class="card-title">${obj[k].title}</h3>
		  <div class="card-main">
			<p class="card-price">$${obj[k].price}</p>
			<div class="cart-btn" >
			<button class="cartBtn">
				<i class="fa-solid fa-cart-shopping"></i>
			</button>
		   </div>
        </div>
      </div>`;
			}
		}
	});
}

// for cart item
const cartbtn = document.querySelectorAll(".cartBtn");
cartbtn.forEach((btn, i) => {
	console.log(i);
	btn.addEventListener("click", () => {
		Swal.fire({
			imageUrl: `${obj[i].image}`,
			// icon: "success",
			title: `${obj[i].title}`,
			imageHeight: 100,
			html: `<h2 style="color: #2ecc71;">Added to cart </h2>`,
			timer: 2500,
		});
	});
});
