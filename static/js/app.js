
//from data.js
var ufoData = data;
console.log(ufoData);

// Get a reference to the table body
var tbody = d3.select("tbody");

//  Use d3 to update each cell's text with
// sightings values (date)
 ufoData.forEach(function(sightings) {
  console.log(sightings);
  
  var row = tbody.append("tr");
Object.entries(sightings).forEach(function([key, value]) {
console.log(key, value);

// Append a cell to the row for each value
// in the sightings object
var cell = row.append("td");
cell.text(value);
});
 });

// Select the button
var button = d3.select("#filter-btn");
//var button1 = d3.select("#filter-btn cities");
//var button2 = d3.select("#filter-btn states");
button.on("click", function() {

    // Select the input date and get the raw HTML nodes
    var searchDate = d3.select("#datetime");
   // var searchCity = d3.select("#city");
    //var searchState = d3.select("#state");

    // Get the value property of the input date
    var inputValue = searchDate.property("value");
    //var inputValue = searchCity.property("value");
    //var inputValue = searchState.property("value");

    var filteredData = ufoData.filter(event => event.datetime === inputValue);
    console.log(inputValue);
  
    var filteredData = ufoData.filter(event => event.city === inputValue);
    //var filteredData = ufoData.filter(event => event.state === inputValue);

    console.log(filteredData);
    tbody.html("");
    filteredData.forEach(function(event)
    {
      console.log(event)
        var row = tbody.append("tr");
        Object.entries(event).forEach(function([key, value]) {
            console.log(key, value);

     // Append a cell to the row for each value in the weather report object
   var cell = row.append("td");
     cell.text(value);

});
    });
});

var button = d3.select("#filter-btn city");
button.on("click", function() {
var searchCity = d3.select("#city");
var inputValue = searchCity.property("value");
var filteredData = ufoData.filter(event => event.city === inputValue);
console.log(filteredData);
    tbody.html("");
    filteredData.forEach(function(event)
    {
      console.log(event)
        var row = tbody.append("tr");
        Object.entries(event).forEach(function([key, value]) {
            console.log(key, value);

     // Append a cell to the row for each value in the weather report object
   var cell = row.append("td");
     cell.text(value);

});
    });
});

