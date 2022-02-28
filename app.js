// Convert data in script as an array
var data = [];

// Load data from csv file using D3.js 
const dataArray = d3.json("final_dataset_2_27.json")

// Fetch csv data and console log it 
d3.json("final_dataset_2_27.json", function(data) {
   console.log(data)
});

// Button Fetch
document.getElementById("american").addEventListener("click", 

function(){ alert("Hello World!"); });

// Fetch Mexican Resturants
// d3.json("final_dataset_2_27.json", function(data) {
//     var cusines = data.cusines;
//     var name = data.name
//     if (cusines == "Mexican") {
//         console.log(name);
//     };  
// });


// var mexican = data.cusines["Mexican"]

// Sample Values
// d3.json("/yelp_dataset/final_busMOD.csv").then((data) => {
//     var sample = data.cusines.filter(function (objData){
//         return objData == 
//     });


    
// function init (){
//     var selector = d3.select("#selDataset");
//     d3.json("./data/samples.json").then((data) => {
//       var sampleNames = data.names;
//       sampleNames.forEach((sample) => {
//         selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//       })
//     })
//   }

