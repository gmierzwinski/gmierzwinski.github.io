/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const ASSIGNMENTS = [
	{
		title: "Assignment 01 - Haskell (1)",
		date: "September 13th, 2022",
		subtitle: "Due date: September 26th",
		summary: `
            <p>Not released yet.</p>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Class Assignments", ASSIGNMENTS);
});