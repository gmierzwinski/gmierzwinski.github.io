/**
Use this to pull a CSV list from a PowerCampus student enrollement list.

Go to PowerCampus Service in MyBU. Go to "Enrollment".
Hit `CTRL+SHIFT+C`.
Copy the following into the console to obtain a CSV list.
**/

function pullStudents() {
	let students = [];
	const locationOfNames = "div.studentMenuCell a";

	document.querySelectorAll(locationOfNames).forEach((el) => {
	  console.log("Adding student: " + el.innerText);
	  students.push(el.innerText);
	});

	console.log("CSV List: ")
	console.log(students.join(","));
}
