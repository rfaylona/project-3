// Convert data in script as an array
var data = [];

// Load data from csv file using D3.js 
const dataArray = d3.csv("/yelp_dataset/final_busMOD.csv")

// Fetch csv data and console log it 
d3.csv("/yelp_dataset/final_busMOD.csv", function(data) {
   console.log(data)
});


// Button Event
document.getElementById("american").addEventListener("click", console.log("hi"));

// Fetch Mexican Resturants
d3.csv("/yelp_dataset/final_busMOD.csv", function(data) {
    var cusines = data.cusines;
    var name = data.name
    if (cusines == "Mexican") {
        console.log(name);
    };  
});


// var mexican = data.cusines["Mexican"]

// Sample Values
// d3.json("/yelp_dataset/final_busMOD.csv").then((data) => {
//     var sample = data.cusines.filter(function (objData){
//         return objData == 
//     });


    


