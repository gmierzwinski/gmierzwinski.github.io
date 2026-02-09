/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const ASSIGNMENTS = [
	{
		title: "Assignment 01 - Java Arrays",
		date: "January 26, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_1_Java_Arrays.pdf" style="color: blue" target="_blank">
                Assignment #1 (due February 9th)
            </a> <br>
            <a href="resources/CS321_Assignment_1_Input.txt" style="color: blue" target="_blank">
                Assignment #1 Input
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Assignment 02 - Object-Oriented Programming",
		date: "February 9, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_2_Objects.pdf" style="color: blue" target="_blank">
                Assignment #2 (due February 23rd)
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Assignment 03 - Rat Race",
		date: "February 25, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_3_Rat_Race.pdf" style="color: blue" target="_blank">
                Assignment #3 (due March 11th)
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Assignment 04 - Bank Simulation",
		date: "March 11, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_4_Bank_Simulation.pdf" style="color: blue" target="_blank">
                Assignment #4 (due March 27th)
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Assignment 05 - Bishop's Bridge",
		date: "March 25, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Assignment_5_Bishops_Bridge.pdf" style="color: blue" target="_blank">
                Assignment #5 (due April 8th)
            </a> <br> <br>
		`,
		show: false
	},
];


window.addEventListener("load", function() {
	populate_sections("Class Assignments", ASSIGNMENTS);
});