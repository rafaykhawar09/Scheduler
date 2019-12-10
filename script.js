
var time = ["9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

//create elements    
for (let i = 0; i < time.length; i++) {
          
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
	timeblock.append(hour);
	hour.attr("class", "hour description");
	hour.text(time[i]);

	row.append(textarea);

	row.append(saveBtn);
	saveBtn.attr("class", "saveBtn");
	saveBtn.text("Save!");
}



const m = moment();
$("#currentDay").text((m.format("dddd MMM Mo YYYY")));
console.log("Time: " + m.format("h A"));
