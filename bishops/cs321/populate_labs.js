/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just rermove entries from
a JSON defined in this file.
*/

const LABS = [
	{
		title: "Lab 01 - Setup and Hello World",
		date: "January 18, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_01.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lab 02 - Arrays",
		date: "January 25, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_02.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lab 03 - Objects, and Class Methods",
		date: "February 1, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_03.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lab 04 - Interfaces, and Inheritance",
		date: "February 8, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_04.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lab 05 - Midterm Review with Iterators",
		date: "February 8, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lab_05.pdf" style="color: blue" target="_blank">
                Lab Instructions
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lab 06 - TBD",
		date: "February 8, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lab 07 - TBD",
		date: "February 8, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lab 08 - TBD",
		date: "February 8, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	}
];


window.addEventListener("load", function() {
	populate_sections("Lab Assignments", LABS);
});