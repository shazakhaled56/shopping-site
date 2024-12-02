
document.getElementById("ShopNow");
addEventListener("click" , () =>{
alert ("redirecting to the shop!");
//window.location.href = "/shop";
});


  document.querySelector('.cart-icon').addEventListener('click', () => {
    alert('shopping cart opened!');
  });
  
fetch( './setting.json' )
 .then(Response =>{
    if (!Response.ok) {throw new Error ('Network response was not ok');

    }
    return Response.json();
 })
 .then(data => {
     const productsDiv = document.getElementById('products');
     data.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <h2> ${product.title}</h2>
        <p>${product.description}</p>
        <p>price: ${product.price}</p>
        <p>rating: ${product.rating}</p>
        <button class ="favorite-button"> add to favorite</button>
        <button class ="cart-button"> add to cart</button>
        <hr>
        `;
       

        const favoriteButton = productElement.querySelector('.favorite-button');
        favoriteButton.addEventListener('click', () => {
            alert( `favorite items ${product.title} were added !`);
        });

        const cartButton = productElement.querySelector('.cart-button');
        cartButton.addEventListener('click', () => {
            alert(`items were  ${product.title} added to cart !`);
        });
        productsDiv.appendChild(productElement);
      });
      
  })
  .catch(error => console.error('Error fetching the JSON:',error));



 const items = [
    { id: 1, name: "Essence Mascara Lash Princess", category: "beauty" },
    { id: 2, name: "Eyeshadow Palette with Mirror", category: "beauty" },
    { id: 3, name: "Powder Canister", category: "beauty" },
    { id: 4, name: "Red Lipstick", category: "beauty" },
    { id: 5, name: "Red Nail Polish", category: "beauty" },
    

    { id: 6, name: "Calvin Klein CK One", category: "fragrance" },
    { id: 7, name: "Chanel Coco Noir Eau De", category: "fragrance" },
    { id: 8, name: "Dior J'adore", category: "fragrance" },
    { id: 9, name: "Dolce Shine Eau de", category: "fragrance" },
    { id: 10, name: "Gucci Bloom Eau de", category: "fragrance" },
 

    { id: 11, name: "Annibale Colombo Bed", category: "furniture" },
    { id: 12, name: "Annibale Colombo Sofa", category: "furniture" },
    { id: 13, name: "Bedside Table African Cherry", category: "furniture" },
    { id: 14, name: "Knoll Saarinen Executive Conference Chair", category: "furniture" },
    { id: 15, name: "Wooden Bathroom Sink With Mirror", category: "furniture" },


    { id: 16, name: "Apple", category: "groceries" },
    { id: 17, name: "Beef Steak", category: "groceries" },
    { id: 18, name: "Cat Food", category: "groceries" },
    { id: 19, name: "Chicken Meat", category: "groceries" },
    { id: 20, name: "Cooking Oil", category: "groceries" },
    { id: 21, name: "Cucumber", category: "groceries" },
    { id: 22, name: "Dog Food", category: "groceries" },
    { id: 23, name: "Eggs", category: "groceries" },
    { id: 24, name: "Fish Steak", category: "groceries" },
    { id: 25, name: "Green Bell Pepper", category: "groceries" },
    { id: 26, name: "Green Chili Pepper", category: "groceries" },
    { id: 27, name: "Honey Jar", category: "groceries" },
    { id: 28, name: "Ice Cream", category: "groceries" },
    { id: 29, name: "Juice", category: "groceries" },
    { id: 30, name: "Kiwi", category: "groceries" },

];

const categoryFilter = document.getElementById("categoryFilter");
const itemsContainer = document.getElementById("itemsContainer");

function displayItems(filteredItems) {
    itemsContainer.innerHTML = "";
    filteredItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `<h3>${item.name}</h3><p>Category: ${item.category}</p>`;
        itemsContainer.appendChild(div);
    });
}


function filterItems() {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === "all") {
        displayItems(items); 
    } else {
        const filteredItems = items.filter(item => item.category === selectedCategory);
        displayItems(filteredItems); 
    }
}


categoryFilter.addEventListener("change", filterItems);


displayItems(items);




 
 document.getElementById("checkoutBtn").addEventListener("click", function () {
    alert("Navigating to the checkout page...");
    /*window.location.href = "checkout";*/
 });
 

const toggleBtn = document.getElementById("darkModeToggle");

        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            
            if (document.body.classList.contains("dark-mode")) {
                toggleBtn.textContent = "Disable Dark Mode";
            } else {
                toggleBtn.textContent = "Enable Dark Mode";
            }
        });


 




 /*
       
      document.addEventListener('DOMContentLoaded', () => {
    fetch('https://example.com/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(HTTP error ${response.status});
        }
            } else {
          console.error('Element with ID "products" not found on the page.');
        return response.json();
      })
      .then(data => {
        const productsDiv = document.getElementById('products');
        if (productsDiv) {
          data.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
              <h2>${product.title}</h2>
              <p>${product.description}</p>
              <p>price: ${product.price}</p>
              <p>rating: ${product.rating}</p>
            `;
            productsDiv.appendChild(productElement);
          });
      })

    .catch(error => { Error fetching the JSON:', error);
        // Add additional error handling, 
        console.error(' such as displaying a user-friendly message
      });
  });*/