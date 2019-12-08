//working code
//from data.js
var ufoData = data;
console.log(ufoData);

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
// //  Use d3 to update each cell's text with
// // sightings values (weekday, date, high, low)
 ufoData.forEach(function(sightings) {
  console.log(sightings);
 var row = tbody.append("tr");
Object.entries(sightings).forEach(function([key, value]) {
console.log(key, value);
//     // Append a cell to the row for each value
//     // in the sightings object
var cell = row.append("td");
cell.text(value);
});
 });
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var searchDate = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = searchDate.property("value");
  
    console.log(inputValue);
    
    var filteredData = ufoData.filter(event => event.datetime === inputValue);
  
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach(function(event)
    {
      console.log(event)
        var row = tbody.append("tr");
        Object.entries(event).forEach(function([key, value]) {
            console.log(key, value);
     // Append a cell to the row for each value
//     // in the weather report object
   var cell = row.append("td");
     cell.text(value);
    
});
    });
});

