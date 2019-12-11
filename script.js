
var time = ["9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

var numTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

const m = moment();
$("#currentDay").text((m.format("dddd MMM Mo YYYY")));
var currentTime = parseInt(m.format("HH"));

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
	timeblock.attr("class", "time-block");
	timeblock.append(hour);
	hour.attr("class", "hour");
	hour.text(time[i]);

	row.append(textarea);

	row.append(saveBtn);
	saveBtn.attr("class", "saveBtn");
	saveBtn.text("Save!");

	if(numTime[i] < currentTime){
		textarea.attr("class", "past");
	}
	else if(numTime[i] === currentTime){
		textarea.attr("class", "present");
	}
	else if(numTime[i] > currentTime){
		textarea.attr("class", "future");
	}
}
