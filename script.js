
// var timeArr[]
//create a for loop that will generate the rows, text area and buttons

//create elements    
var row = $("<div>");
var textarea = $("<textarea>");
var timeblock = $("<div>");
var saveBtn = $("<button>");
var hour = $("<div>");
var description = $("<div>");

$(".container").append(row);
row.attr("class", "row");

row.append(timeblock);
timeblock.attr("class", "timeblock");

// //append element from parent element
// $(".container").append(row);
// row.append(hour);
// row.append(description);
// row.append(saveBtn);
// description.append(textarea);
// hour.append(timeblock);

// //add text to button
// saveBtn.text("Save Button");

// //set class attributes
// saveBtn.attr("class", "saveBtn");
// row.attr("class","row");
// hour.attr("class","hour");
// hour.text("9am")
// timeblock.attr("class", "time-block");
// description.attr("class", "description");
