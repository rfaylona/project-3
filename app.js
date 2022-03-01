// Click Event Listener 

fetch("yelp_dataset/final_dataset_2_27.json")
.then(response => response.json())
.then(data => {
  
  const action = document.querySelector(".dropdown-item")

action.addEventListener('click', e => {


  console.log(data)
})
})