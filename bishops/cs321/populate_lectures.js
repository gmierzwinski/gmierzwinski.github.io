/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const LECTURES = [
	{
		title: "Lecture 01 - Introduction, Course Outline, and Java Basics",
		date: "January 14, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Course_Outline.pdf" style="color: blue" target="_blank">
                Course Outline
            </a> <br>
            <a href="resources/AP16_01_overview_JavaForCPP_Programmers-1.pps" style="color: blue" target="_blank">
                Java Overview
            </a> <br>
            <a href="resources/SLIDES_01_Statements.pps" style="color: blue" target="_blank">
                Java Statements
            </a>
		`,
		show: true
	},
	{
		title: "Lecture 02 - TBD",
		date: "January 18, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lecture 03 - TBD",
		date: "January 21, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lecture 04 - TBD",
		date: "January 25, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lecture 05 - TBD",
		date: "January 28, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Lectures", LECTURES);
});
