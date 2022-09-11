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
            <a href="resources/CS403_Assignment_1.pdf" id="a_blue_link" target="_blank">
                Assignment Instructions
            </a>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Class Assignments", ASSIGNMENTS);
});