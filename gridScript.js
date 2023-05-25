//massive of products
const products = [
  {
    name: "Audi A7",
    image: "image/audi_A7.jpg",
    description: "Description of product 1."
  },
  {
    name: "Honda Civic",
    image: "image/civic.jpeg",
    description: "Description of product 2."
  },
  {
    name: "Ford Fusion",
    image: "image/fusion.jpg",
    description: "Description of product 1."
  },
  {
    name: "Chevrolet Malibu",
    image: "image/malibu.jpg",
    description: "Description of product 1."
  },
  {
    name: "Mercedes Benz",
    image: "image/mers.jpg",
    description: "Description of product 1."
  },
  {
    name: "BMW 5",
    image: "image/bmw.jpg",
    description: "Description of product 1."
  },
  // Add more products here
];

function displayProducts() {
  const container = document.querySelector("#product-container");
  
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    productDiv.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = product.name;
    productDiv.appendChild(name);

    const description = document.createElement("p");
    description.textContent = product.description;
    productDiv.appendChild(description);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const rentButton = document.createElement("button");
    rentButton.textContent = "Rent";
    rentButton.classList.add("rent", "button");
    buttonContainer.appendChild(rentButton);

    const saleButton = document.createElement("button");
    saleButton.textContent = "Sale";
    saleButton.classList.add("sale", "button");
    buttonContainer.appendChild(saleButton);

    productDiv.appendChild(buttonContainer);

    container.appendChild(productDiv);

    const RB = rentButton; // move initialization of RB here
    const SB = saleButton;

    RB.addEventListener("click", showContactForm);
    SB.addEventListener("click", showSaleForm);
  });
}


//Method of displaying grid
$(document).ready(function(){
  window.addEventListener("load", displayProducts);
    // Add click event handler to the close button in the rent form
  $("#contact-form .closebtn").click(function() {
    $("#contact-form").hide();
  });

  // Add click event handler to the close button in the sale form
  $("#sale-form .closebtn").click(function() {
    $("#sale-form").hide();
  });
});


function showContactForm() {
  const contactForm = document.querySelector("#contact-form");
  contactForm.style.display = "block";
  const saleForm = document.querySelector("#sale-form");
  saleForm.style.display = "none";
}

const form = document.querySelector("#contact-form form");

form.addEventListener("submit", (event) => {
  // Do something with the form data (e.g. send an email)
  // ...

  // Hide the form again
  const contactForm = document.querySelector("#contact-form");
  contactForm.style.display = "none";

  // Prevent the page from reloading
  event.preventDefault();
});

function showSaleForm() {
  const saleForm = document.querySelector("#sale-form");
  saleForm.style.display = "block";
  const contactForm = document.querySelector("#contact-form");
  contactForm.style.display = "none";
}

const form1 = document.querySelector("#sale-form form");
form1.addEventListener("submit", (event) => {
  // Do something with the form data (e.g. send an email)
  // ...

  // Hide the form again
  const saleForm = document.querySelector("#sale-form");
  saleForm.style.display = "none";

  // Prevent the page from reloading
  event.preventDefault();
});
