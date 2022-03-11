/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const ASSIGNMENTS = [
	{
		title: "Assignment 01 - Java Arrays",
		date: "January 25, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_1_Java_Arrays.pdf" style="color: blue" target="_blank">
                Assignment #1
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Assignment 02 - Object-Oriented Programming",
		date: "February 1, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_2_Objects.pdf" style="color: blue" target="_blank">
                Assignment #2
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Assignment 03 - Rat Race",
		date: "February 11, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_3_Rat_Race.pdf" style="color: blue" target="_blank">
                Assignment #3
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Assignment 04 - Bank Simulation",
		date: "March 11, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_4_Bank_Simulation.pdf" style="color: blue" target="_blank">
                Assignment #4 (due March 25th)
            </a> <br> <br>
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