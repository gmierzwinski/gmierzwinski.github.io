/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const LABS = [
	{
		title: "Lab 01 - Setup and Hello World",
		date: "January 15, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_01.pdf" style="color: blue" target="_blank">
                Lab Instructions (due January 22nd)
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lab 02 - Arrays",
		date: "January 22, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_02.pdf" style="color: blue" target="_blank">
                Lab Instructions (due January 29th)
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 03 - Objects, and Class Methods",
		date: "January 29, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_03.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 04 - Interfaces, and Inheritance",
		date: "February 12, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_04.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 05 - Midterm Review with Iterators",
		date: "February 19, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_05.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 06 - Orchestras",
		date: "February 26, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_06.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 07 - Java GUI Building (Bonus Lab)",
		date: "March 11, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_07.pdf" style="color: blue" target="_blank">
                Lab Instructions (due by April 1st)
            </a> <br>
            If this lab is completed, then the lowest scored lab will be removed from the overall grade. <br>
		`,
		show: false
	},
	{
		title: "Lab 08 - Patterns, and derivation",
		date: "March 18, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_08.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 09 - Tripleton, and Observer Pattern",
		date: "March 25, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_09.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	},
	{
		title: "Lab 10 - The Multithreaded Cook",
		date: "April 1, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_10.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: false
	}
];


window.addEventListener("load", function() {
	populate_sections("Lab Assignments", LABS);
});