
function coffee_type(type){
  const url = `https://api.sampleapis.com/coffee/${type}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const coffeeList = document.getElementById('coffee-list'); //adds the 2 end points hot and iced coffee 
      coffeeList.innerHTML = '';

      data.forEach(coffee => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${coffee.title}</h3>
          <img src = "${coffee.image}" alt="${coffee.title}" width = "200">
          <p><strong>Description:</strong> ${coffee.description}</p>
          <p><strong>Price:</strong>$${coffee.price}</p>
        `;
        coffeeList.appendChild(div);  //lists out the coffee list inside the iced and hot coffees
      });
    })
    .catch(error => {
      console.error('Error fetching coffee data:', error);
    });
}
  

