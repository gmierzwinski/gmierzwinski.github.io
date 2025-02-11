/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
a JSON defined in this file.
*/

const LECTURES = [
	{
		title: "Lecture 01 - Introduction, Course Outline, and Java Basics",
		date: "January 9, 2025",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Course_Outline.pdf" style="color: blue" target="_blank">
                Course Outline
            </a> <br>
            <a href="resources/CS321_Lecture_01.pptx" style="color: blue" target="_blank">
                Quick Java Overview and Hello World!
            </a> <br>
            <a href="https://www.oracle.com/java/technologies/downloads/#jdk21-windows" style="color: blue" target="_blank">
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
		date: "January 14, 2025",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_02.pptx" style="color: blue" target="_blank">
                Java Basics I – Variables, Expressions, and Operators
            </a> <br>
            <a href="resources/CS321_Lecture_02.odp" style="color: blue" target="_blank">
                Java Basics I – Variables, Expressions, and Operators (LibreOffice version)
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
		date: "January 16, 2025",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_03A.ppt" style="color: blue" target="_blank">
                Control Statements
            </a> <br>
            <a href="resources/CS321_Lecture_03B.ppt" style="color: blue" target="_blank">
                Strings, and Arrays
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 04 - Methods, Objects, and Assignment #1",
		date: "January 21, 2025",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_04.pptx" style="color: blue" target="_blank">
                Methods, and Objects
            </a> <br>
            <a href="resources/CS321_Assignment_1_Java_Arrays.pdf" style="color: blue" target="_blank">
                Assignment #1
            </a> <br>
            <a href="resources/CS321_Assignment_1_Input.txt" style="color: blue" target="_blank">
                Assignment #1 Input
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
		date: "January 24, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_05.pptx" style="color: blue" target="_blank">
                Industrial Class Design
            </a> <br>
            <a href="resources/CloningExample.java" style="color: blue" target="_blank">
                Java Cloning Example Code
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 06 - Inheritance & Polymorphism",
		date: "January 29, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_06.pptx" style="color: blue" target="_blank">
                Inheritance & Polymorphism
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 07 - Abstract Classes, & Interfaces",
		date: "February 4, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_07A.pptx" style="color: blue" target="_blank">
                Inheritance
            </a> <br>
            <a href="resources/CS321_Lecture_07B.pptx" style="color: blue" target="_blank">
                Abstract Classes, and Interfacecs
            </a> <br>
            <a href="resources/CS321_Assignment_2_Objects.pdf" style="color: blue" target="_blank">
                Assignment #2
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 08 - Abstract Classes, Interfaces, & UML",
		date: "February 6, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_07B.pptx" style="color: blue" target="_blank">
                Abstract Classes, and Interfacecs
            </a> <br>
            <a href="resources/CS321_Lecture_08A.pptx" style="color: blue" target="_blank">
                UML Quick Overview
            </a> <br> <br>
            <hr>
            <b>Additional Resources:</b> <br>
            <a href="resources/SLIDES_08_UML_ClassDiagrams.pps" style="color: blue" target="_blank">
                UML Detailed
            </a>
		`,
		show: true
	},
	{
		title: "Lecture 09 - VCS, & Inner Classes",
		date: "February 14, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_08B.pptx" style="color: blue" target="_blank">
                VCS, Git, & Github
            </a> <br> 
            <a href="resources/CS321_Lecture_09.pptx" style="color: blue" target="_blank">
                Inner Classes
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 10 - Linting, and Exceptions",
		date: "February 19, 2024",
		subtitle: "",
		summary: `
            <a href="https://ensemble.ubishops.ca/Watch/t9A5Qoa7" style="color: blue" target="_blank">
                How to Auto-Format Your Code
            </a> <br>
            <a href="resources/CS321_Lecture_10A.pptx" style="color: blue" target="_blank">
                Linting
            </a> <br>
            <a href="resources/CS321_Lecture_10B.pptx" style="color: blue" target="_blank">
                Exceptions
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 11 - Java Generics",
		date: "February 21, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_11.pptx" style="color: blue" target="_blank">
                Generics
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Lecture 12 - Midterm Review",
		date: "February 26, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_12.pptx" style="color: blue" target="_blank">
                Midterm Review
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Lecture 13 - Rounding off OOP, and Java Swing GUIs",
		date: "March 11, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_13.pptx" style="color: blue" target="_blank">
                Testing, and OOP
            </a> <br>
            <a href="resources/CS321_Lecture_13A.pptx" style="color: blue" target="_blank">
                GUI Building
            </a> <br>
            <a href="resources/CS321_Lecture_13B.pptx" style="color: blue" target="_blank">
                Mouse Events
            </a> <br>
            <a href="resources/CS321_Lecture_13C.pptx" style="color: blue" target="_blank">
                Graphics
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Lecture 14 - Intro to Design Patterns",
		date: "March 13, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_14.pptx" style="color: blue" target="_blank">
                Intro to Design Patterns
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Lecture 15 - Design Patterns (Observer, Template, Singleton, Adapter)",
		date: "March 18, 2024 - March 21, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_15D.pptx" style="color: blue" target="_blank">
                Adapter
            </a> <br>
            <a href="resources/CS321_Lecture_15A.pptx" style="color: blue" target="_blank">
                Observer Pattern
            </a> <br>
            <a href="resources/CS321_Lecture_15B.pptx" style="color: blue" target="_blank">
                Template Method Pattern
            </a> <br>
            <a href="resources/CS321_Lecture_15C.pptx" style="color: blue" target="_blank">
                Singleton Pattern
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Lecture 16 - Intro to Threads, and Multi-threaded Programming",
		date: "March 25, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_16.pptx" style="color: blue" target="_blank">
                Threads
            </a> <br> <br>
		`,
		show: false
	},
	{
		title: "Lecture 17 - Thread Synchronization, and Semaphores",
		date: "March 27, 2024",
		subtitle: "",
		summary: `
            <a href="resources/CS321_Lecture_17A.pptx" style="color: blue" target="_blank">
                Thread Synchronization
            </a> <br>
            <a href="resources/CS321_Lecture_17B.pptx" style="color: blue" target="_blank">
                Semaphores
            </a> <br> <br>
		`,
		show: false
	},
];


window.addEventListener("load", function() {
	populate_sections("Lectures", LECTURES);
});
