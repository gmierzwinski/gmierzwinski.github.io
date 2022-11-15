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
	{
		title: "Assignment 02 - Haskell (2)",
		date: "September 28th, 2022",
		subtitle: "Due date: October 14th",
		summary: `
            <a href="resources/CS403_Assignment_2.pdf" id="a_blue_link" target="_blank">
                Assignment Instructions
            </a>
		`,
		show: true
	},
	{
		title: "Assignment 03 - Prolog",
		date: "October 17th, 2022",
		subtitle: "Due date: October 31st",
		summary: `
            <a href="resources/CS403_Assignment_3.pdf" id="a_blue_link" target="_blank">
                Assignment Instructions
            </a> <br>
            <a href="resources/cross.pl" id="a_blue_link" target="_blank">
                Assignment Materials
            </a>
		`,
		show: true
	},
	{
		title: "Assignment 04 - Parsing",
		date: "November 15th, 2022",
		subtitle: "Due date: December 2nd",
		summary: `
            <a href="resources/CS403_Assignment_4.pdf" id="a_blue_link" target="_blank">
                Assignment Instructions
            </a>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Class Assignments", ASSIGNMENTS);
});