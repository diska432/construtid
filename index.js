const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    phone_no: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_e8oatik", "template_vfcgw3b", params)
    .then(function (res) {
      console.log("Success");
      alert("Thank you for reaching out to us! We'll get back to you as soon as we can!");
    })
    .catch((err) => {
        console.error(err);
        alert("Error: " + err)
    });
}

const searchInput = document.querySelector("[data-search]");
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardsContainer = document.querySelector(
  "[data-user-cards-container]"
);

let items = [
  {
    name: "Power Pro Cement",
    description: "an environment-friendly cement with high strength, superior durability and resistance to aggressive chemicals",
    price: 4.91,
    source: "img/power-pro-cement.png",
    payment: "https://buy.stripe.com/fZe3d37Z54UUcxi7t4"
  },
  {
    name: "Concreel HD",
    description: "next-generation green cement, developed to meet all concrete-based construction requirements",
    price: 4.91,
    source: "img/concreel-hd-cement.png",
    payment: "https://buy.stripe.com/fZe3d37Z54UUcxi7t4"
  },
  {
    name: "Compcem",
    description: "composite cement is a revolutionary offering designed for concrete-based construction requirements",
    price: 4.91,
    source: "img/compcem.png",
    payment: "https://buy.stripe.com/fZe3d37Z54UUcxi7t4"
  },
  {
    name: "Ordinary Portland Cement",
    description: "OPC is among the most commonly used cement variants in general concrete construction work",
    price: 4.91,
    source: "img/ordinary-portland-cement.png",
    payment: "https://buy.stripe.com/fZe3d37Z54UUcxi7t4"
  },
  {
    name: "Portland Slag Cement",
    description: "a blended cement, wherein some portion of OPC is replaced with Ground Granulated Blast Furnace Slag",
    price: 4.91,
    source: "img/portland-slag-cement.png",
    payment: "https://buy.stripe.com/fZe3d37Z54UUcxi7t4"
  },
  {
    name: "8mm TMT Bars",
    description: "TMT Bar is the one and only choice in Construction industry for its Tensile Strength, Ductility, Fatigue resistance, Earthquake Resistance and Corrosion Resistance too.",
    price: 900,
    source: "img/8mm-tmt-bar.jpg",
    payment: "https://buy.stripe.com/aEU14V5QXcnm2WI8x1" 
  },
  {
    name: "7mm Rolling Rebar",
    description: "The rebar is adaptable, robust and formed with heavy ridges, to assist in binding the bars to concrete",
    price: 1100,
    source: "img/7mm-rolling-rebar.png",
    payment: "https://buy.stripe.com/3cs9Brdjp0EE8h24gM" 
  },
  {
    name: "7x3 Stirrups",
    description: "Rolling 7X3 Stirrups is of mild steel materials, construction usage, available thickness and diameter as per order",
    price: 1190,
    source: "img/7x3_stirrups.jpg",
    payment: "https://buy.stripe.com/dR67tj7Z5gDC2WI4gK"
  },
  {
    name: "7x7 Stirrups",
    description: "Rolling 7X7 Stirrups is of mild steel materials, construction usage, available thickness and diameter as per order",
    price: 1190,
    source: "img/7x7_stirrups.jpg",
    payment: "https://buy.stripe.com/dR67tj7Z5gDC2WI4gK"
  },
  {
    name: "7x10 Stirrups",
    description: "Rolling 7X10 Stirrups is of mild steel materials, construction usage, available thickness and diameter as per order",
    price: 1190,
    source: "img/7x10_stirrups.jpg",
    payment: "https://buy.stripe.com/dR67tj7Z5gDC2WI4gK"
  },
  {
    name: "7x13 Stirrups",
    description: "Rolling 7X13 Stirrups is of mild steel materials, construction usage, available thickness and diameter as per order",
    price: 1190,
    source: "img/7x13_stirrups.jpg",
    payment: "https://buy.stripe.com/dR67tj7Z5gDC2WI4gK"
  },
  {
    name: "10mm TMT Bars",
    description: "TMT Bar is the one and only choice in Construction industry for its Tensile Strength, Ductility, Fatigue resistance, Earthquake Resistance and Corrosion Resistance too.",
    price: 900,
    source: "img/10mm-tmt-bars.jpg",
    payment: "https://buy.stripe.com/aEU14V5QXcnm2WI8x1"
  },
  {
    name: "12mm TMT Bars",
    description: "TMT Bar is the one and only choice in Construction industry for its Tensile Strength, Ductility, Fatigue resistance, Earthquake Resistance and Corrosion Resistance too.",
    price: 900,
    source: "img/12mm-tmt-bars.jpg",
    payment: "https://buy.stripe.com/aEU14V5QXcnm2WI8x1"
  },
  {
    name: "16mm TMT Bars",
    description: "TMT Bar is the one and only choice in Construction industry for its Tensile Strength, Ductility, Fatigue resistance, Earthquake Resistance and Corrosion Resistance too.",
    price: 900,
    source: "img/16mm-tmt-bars.png",
    payment: "https://buy.stripe.com/aEU14V5QXcnm2WI8x1"
  },
  {
    name: "20mm TMT Bars",
    description: "TMT Bar is the one and only choice in Construction industry for its Tensile Strength, Ductility, Fatigue resistance, Earthquake Resistance and Corrosion Resistance too.",
    price: 900,
    source: "img/20mm-tmt-bars.png",
    payment: "https://buy.stripe.com/aEU14V5QXcnm2WI8x1"
  },
  {
    name: "C16 Carcassing Timber 47mmx75mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required",
    price: 6.38,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/14keVL3IPcnm7cYaES"
  },
  {
    name: "C16 Carcassing Timber 47mmx100mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required",
    price: 8.49,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/9AQ8xn5QX8760OA7sH"
  },
  {
    name: "C16 Carcassing Timber 47mmx150mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required",
    price: 12.75,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/bIYcND3IP2MMbtebIY"
  },
  {
    name: "C16 Carcassing Timber 47mmx200mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required",
    price: 17,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/bIYaFv5QXafe9l6fZf"
  },
  {
    name: "C24 Carcassing Timber 47mmx75mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required, it is a higher grade structural timber than C16",
    price: 7.64,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/7sI00Rent2MM8h27sK"
  },
  {
    name: "C24 Carcassing Timber 47mmx100mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required, it is a higher grade structural timber than C16",
    price: 9.34,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/00g00Rbbh9ba68U7sL"
  },
  {
    name: "C24 Carcassing Timber 47mmx150mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required, it is a higher grade structural timber than C16",
    price: 14.45,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/aEUbJz9391IIcxi5kE"
  },
  {
    name: "C24 Carcassing Timber 47mmx200mm",
    description: "kiln-dried treated structural graded softwood that is most commonly used where a grading stamp is required, it is a higher grade structural timber than C16",
    price: 18.71,
    source: "img/carcassing-timber.jpg",
    payment: "https://buy.stripe.com/9AQbJz9391IIbte00l"
  },
  {
    name: "Supreme Blue Roofing Battens",
    description: "high quality battens perfect for a range of construction uses, as well as protecting timber or products during transportation for a low price",
    price: 3.39,
    source: "img/battens.jpg",
    payment: "https://buy.stripe.com/14k00R4MT3QQeFqdRc"
  },
  {
    name: "Treated Softwood Battens",
    description: "high quality battens perfect for a range of construction uses, as well as protecting timber or products during transportation for a low price",
    price: 3.39,
    source: "img/treated-softwood-battens.jpg",
    payment: "https://buy.stripe.com/14k00R4MT3QQeFqdRc"
  },
  {
    name: "Rustic Oak Posts",
    description: "Oak posts are heavy duty and incredibly versatile for use in many internal and external applications",
    price: 20.41,
    source: "img/rustic-oak-post.jpg",
    payment: "https://buy.stripe.com/00gdRH0wD5YYbte7sP"
  },
  {
    name: "European Oak Fence Post",
    description: "Oak posts are heavy duty and incredibly versatile for use in many internal and external applications",
    price: 15.30,
    source: "img/new-oak-fence-post.jpg",
    payment: "https://buy.stripe.com/28o14Va7d0EE0OAbJ6"
  },
  {
    name: "European Oak Gate Post",
    description: "Oak posts are heavy duty and incredibly versatile for use in many internal and external applications",
    price: 100.41,
    source: "img/new-oak-fence-post.jpg",
    payment: "https://buy.stripe.com/28oeVL4MTevu7cY28x"
  },
  {
    name: "Post Weathering",
    description: "Oak posts are heavy duty and incredibly versatile for use in many internal and external applications",
    price: 4.26,
    source: "img/post-weathering.jpg",
    payment: "https://buy.stripe.com/aEUcND7Z5afe1SEfZo"
  },
  {
    name: "Octagonal Oak Dowels",
    description: "Oak Dowels are of the highest quality, made from kiln dried European Oak once they are in place they will swell to size for perfect tight joints",
    price: 5.09,
    source: "img/octagonal-oak-dowels.jpg",
    payment: "https://buy.stripe.com/dR64h72EL0EE40M00r"
  },
  {
    name: "Rounded Oak Dowels",
    description: "Oak Dowels are of the highest quality, made from kiln dried European Oak once they are in place they will swell to size for perfect tight joints",
    price: 5.09,
    source: "img/rounded-oak-dowels.jpg",
    payment: "https://buy.stripe.com/dR64h72EL0EE40M00r"
  },
  {
    name: "Octagonal Larch/Douglas Fir Dowels",
    description: "Oak Dowels are of the highest quality, made from kiln dried European Oak once they are in place they will swell to size for perfect tight joints",
    price: 3.39,
    source: "img/octagonal-larchdouglas-fir-dowels.jpg",
    payment: "https://buy.stripe.com/9AQ6pf5QX3QQ0OAaF6"
  },
  {
    name: "Rounded Larch/Douglas Fir Dowels",
    description: "Oak Dowels are of the highest quality, made from kiln dried European Oak once they are in place they will swell to size for perfect tight joints",
    price: 3.39,
    source: "img/rounded-larchdouglas-fir-dowels.jpg",
    payment: "https://buy.stripe.com/9AQ6pf5QX3QQ0OAaF6"
  },
  {
    name: "Treated Softwood Carcassing Bearer",
    description: "can be used for stacking heavy materials such as stone or steel or just leveling up uneven loads for stacking for transportation",
    price: 6.03,
    source: "img/treated-softwood-carcassing-bearer.jpg",
    payment: "https://buy.stripe.com/eVa28Z7Z5bji54QeVn"
  },
  {
    name: "Natural Construction Stone",
    description: "The rubble trench foundation that uses loose stone or rubble to minimize the use of concrete and improve drainage",
    price: 8.05,
    source: "img/natural-construction-stone.webp",
    payment: "https://buy.stripe.com/aEUbJzcflcnmdBm6oz"
  },
  {
    name: "Black Stone Aggregate Ballast (Railway Track Filling Metal)",
    description: "Special material for railway track filling, we have develop special plant for railway track matrial production.",
    price: 6.44,
    source: "img/ballast-railway-track.webp",
    payment: "https://buy.stripe.com/9AQaFva7dcnmeFqaEO"
  },
  {
    name: "Solid Blue Metal Bolder",
    description: "It is a clean, crushed rock, so aside from making concrete, it is also ideal for drainage, particularly around agricultural pipes.",
    price: 8.05,
    source: "img/solid-blue-metal.webp",
    payment: "https://buy.stripe.com/aEUbJzcflcnmdBm6oz"
  },
  {
    name: "Grey Unpolished Stone",
    description: "bond size stone of good quality which can be used for foundations, compound walls etc.",
    price: 281.75,
    source: "img/grey-unpolished-stone.webp",
    payment: "https://buy.stripe.com/9AQ7tjbbhgDCcxi6oA"
  },
  {
    name: "20mm Construction Crushed Stone Aggregate",
    description: "used with a binding medium, like water, cement, and asphalt, they are used to form compound materials, such as asphalt concrete and Portland cement concrete",
    price: 28.98,
    source: "img/20mm-crushed-stone.webp",
    payment: "https://buy.stripe.com/5kAcNDcfl4UU1SE28l"
  },
  {
    name: "Abbeville Brick",
    description: "Queen Size, Heritage Texture, Birmingham Plant",
    price: 1800,
    source: "img/abbeville-brick.jpg",
    payment: "https://buy.stripe.com/bIY5lb939evu68UfZy"
  },  
  {
    name: "Academy Brick",
    description: "Modular Size, Heritage Texture, Denton Plant",
    price: 2700,
    source: "img/academy-brick.jpg",
    payment: "https://buy.stripe.com/dR66pfa7d0EEapa6oW"
  },
  {
    name: "Aden Blend Brick",
    description: "Queen Size, Heritage Texture, Montgomery Plant",
    price: 1800,
    source: "img/aden-blend-brick.jpg",
    payment: "https://buy.stripe.com/bIY5lb939evu68UfZy"
  },
  {
    name: "Allendale Brick",
    description: "King Size, Heritage Texture, Jonesboro Plant",
    price: 1680,
    source: "img/allendale-brick.jpg",
    payment: "https://buy.stripe.com/bIYfZPdjp3QQapa14D"
  },
  {
    name: "Alluvial Medium Brick",
    description: "Modular Size, Ruff Texture, Perla East Gate Plant",
    price: 2700,
    source: "img/alluvial-medium-brick.jpg",
    payment: "https://buy.stripe.com/dR66pfa7d0EEapa6oW"
  },
  {
    name: "Alpine Brick",
    description: "Estate Size, Heritage Texture, Elgin Plant",
    price: 2000,
    source: "img/alpine-brick.jpg",
    payment: "https://buy.stripe.com/14kcND2EL732gNycNn"
  },
  {
    name: "Amaretto Brick",
    description: "Modular Size, Bark Texture, Tulsa Plant",
    price: 2700,
    source: "img/amaretto-brick.jpg",
    payment: "https://buy.stripe.com/dR66pfa7d0EEapa6oW"
  },
  {
    name: "Craftsman Painter Brick",
    description: "Queen Size, Heritage Texture, Birmingham Plant",
    price: 1800,
    source: "img/craftsman-painter-brick.jpg",
    payment: "https://buy.stripe.com/bIY5lb939evu68UfZy"
  },
  {
    name: "Cranberry Brick",
    description: "Modular Size, Velour Texture, Denton Plant",
    price: 2700,
    source: "img/cranberry-brick.jpg",
    payment: "https://buy.stripe.com/dR66pfa7d0EEapa6oW"
  },
  {
    name: "Crimson Brick",
    description: "King Size, Smooth Texture, Tulsa Plant",
    price: 1680,
    source: "img/crimson-brick.jpg",
    payment: "https://buy.stripe.com/bIYfZPdjp3QQapa14D"
  },
  {
    name: "Desert Sand Brick",
    description: "Modular Size, Smooth Texture, Elgin Plant",
    price: 2700,
    source: "img/desert-sand-brick.jpg",
    payment: "https://buy.stripe.com/dR66pfa7d0EEapa6oW"
  },
  {
    name: "Building Glass",
    description: "These particular glasses are appreciated for being in favor of environment protection, energy saving and high transmission",
    price: 0.61,
    source: "img/building-glass.webp",
    payment: "https://buy.stripe.com/bIYeVLcflevu7cY5kR"
  },
  {
    name: "Laminated Toughened Glass",
    description: "These particular glasses are appreciated for being in favor of environment protection, energy saving and high transmission",
    price: 1.61,
    source: "img/laminated-toughened-glass.webp",
    payment: "https://buy.stripe.com/14k9Br3IPafe1SE14d"
  },
  {
    name: "Transparent Toughened Glass",
    description: "Very high quality array of transparent toughened class can be found on the market",
    price: 1.93,
    source: "img/transparent-toughened-glass.webp",
    payment: "https://buy.stripe.com/fZebJzfrx0EE0OAeV2"
  },
  {
    name: "Glass Brick",
    description: "This glass brick is designed using top notch material & contemporary techniques in compliance with quality standards",
    price: 2.22,
    source: "img/glass-brick.webp",
    payment: "https://buy.stripe.com/8wM14Vbbh9baeFq14b"
  },
  {
    name: "Tinted Glass",
    description: "This glass brick is designed using top notch material & contemporary techniques in compliance with quality standards",
    price: 2.41,
    source: "img/tinted-glass.webp",
    payment: "https://buy.stripe.com/28o7tj2ELbji9l614a"
  },
  {
    name: "Transparent Window Glass",
    description: "Sealed Window Glass is offered in different specification to meet the diverse requirement of client",
    price: 37,
    source: "img/transparent-window-glass.webp",
    payment: "https://buy.stripe.com/eVa14V1AHdrq40M6ot"
  },
];

let users = [];

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     users = data.map((user) => {
//       const card = userCardTemplate.content.cloneNode(true).children[0];
//       const header = card.querySelector("[data-header]");
//       const body = card.querySelector("[data-body]");
//       header.textContent = user.name;
//       body.textContent = user.email;
//       userCardsContainer.append(card);
//       return { name: user.name, email: user.email, element: card };
//       // console.log(user);
//     });
//   });

users = items.map((user) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
//   console.log(card)
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  const img = card.querySelector("[data-img]");
  const price = card.querySelector("[data-price]");
  const payment = card.querySelector("[data-payment-link]")
  header.textContent = user.name;
  body.textContent = user.description;
  price.textContent = user.price;
  img.src = user.source;
  payment.href = user.payment;
  userCardsContainer.append(card);
  return { name: user.name, description: user.description, price:user.price, element: card };
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  // console.log(users)
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.description.toLowerCase().includes(value);
    user.element.classList.toggle("hidden", !isVisible);
  });
});
