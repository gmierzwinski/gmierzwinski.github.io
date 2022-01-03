/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const ASSIGNMENTS = [
	{
		title: "Assignment 01 - TBD",
		date: "January 25, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Assignment 02 - TBD",
		date: "February 1, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Assignment 03 - TBD",
		date: "February 11, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Assignment 04 - TBD",
		date: "February 25, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Assignment 05 - TBD",
		date: "March 15, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Class Assignments", ASSIGNMENTS);
});