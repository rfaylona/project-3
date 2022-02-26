// Select the upvote and downvote buttons
var american = d3.select(".American");
var mexican = d3.select(".Mexican");
var japanese = d3.select(".Japanese");
var thai = d3.select(".Thai");
var mediterranean = d3.select(".Mediterranean");

// // Select the counter h3 element
// var counter = d3.select(".counter");

// // Use D3 `.on` to attach a click handler for the upvote
// upvote.on("click", function() {
//   // Select the current count
//   var currentCount = parseInt(counter.text());

//   // Upvotes should increment the counter
//   currentCount += 1;

//   // Set the counter h3 text to the new count
//   counter.text(currentCount);
// });

// // Use d3 `.on` to attach a click handler for the downvote
// downvote.on("click", function() {
//   // Select the current count
//   var currentCount = parseInt(counter.text());

//   // Downvotes should decrement the counter
//   currentCount -= 1;

//   // Set the counter h3 text to the new count
//   counter.text(currentCount);
// });