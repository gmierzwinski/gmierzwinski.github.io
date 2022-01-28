/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
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
            <a href="resources/CS321_Lecture_01.pptx" style="color: blue" target="_blank">
                Quick Java Overview and Hello World!
            </a> <br>
            <a href="https://www.oracle.com/java/technologies/downloads/#jdk17-windows" style="color: blue" target="_blank">
            	JDK Download for \`javac\` and \`java\` Example
            </a> <br> <br>
            <hr>
            <b>Additional Resources:</b> <br>
            <a href="resources/AP16_01_overview_JavaForCPP_Programmers-1.pps" style="color: blue" target="_blank">
                Java Overview
            </a> <br>
		`,
		show: true
	},
	{
		title: "Lecture 02 - Java Basics I",
		date: "January 18, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_02.pptx" style="color: blue" target="_blank">
                Java Basics I – Variables, Expressions, and Operators
            </a> <br> <br>
            <hr>
            <b>Additional Resources:</b> <br>
            <a href="resources/SLIDES_01_Statements.pps" style="color: blue" target="_blank">
                Java Statements
            </a>
		`,
		show: true
	},
	{
		title: "Lecture 03 - Control, Strings, and Arrays",
		date: "January 21, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_03A.pptx" style="color: blue" target="_blank">
                Control Statements
            </a> <br>
            <a href="resources/CS321_Lecture_03B.pptx" style="color: blue" target="_blank">
                Strings, and Arrays
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 04 - Methods, Objects, and Assignment #1",
		date: "January 25, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_04.pptx" style="color: blue" target="_blank">
                Methods, and Objects
            </a> <br>
            <a href="resources/CS321_Assignment_1_Java_Arrays.pdf" style="color: blue" target="_blank">
                Assignment #1
            </a> <br>
            <a href="https://github.com/ubishops-cs321/github-starter-course" style="color: blue" target="_blank">
                Github Starter Coruse
            </a> <br> <br>
            <hr>
            <b>Additional Resources:</b> <br>
            <a href="resources/SLIDES_01_Statements.pps" style="color: blue" target="_blank">
                Parameter Passing
            </a>
		`,
		show: true
	},
	{
		title: "Lecture 05 - Industrial Class Design",
		date: "January 28, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_05.pptx" style="color: blue" target="_blank">
                Industrial Class Design
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 06 - TBD",
		date: "February 1, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lecture 07 - TBD",
		date: "February 4, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lecture 08 - TBD",
		date: "February 8, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	},
	{
		title: "Lecture 09 - TBD",
		date: "February 11, 2022",
		subtitle: "",
		summary: `
            <br>
            TBD
		`,
		show: true
	}
];


window.addEventListener("load", function() {
	populate_sections("Lectures", LECTURES);
});
