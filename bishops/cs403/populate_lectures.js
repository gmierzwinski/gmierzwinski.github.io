/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
a JSON defined in this file.
*/

const LECTURES = [
	{
		title: "Lecture Set 01 - Course Outline, and History of Programming Languages",
		date: "September 8th, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Course_Outline.pdf" id="a_blue_link" target="_blank">
                Course Outline
            </a> <br>
            <a href="resources/CS403_Lecture_01.pdf" id="a_blue_link" target="_blank">
                History of Programming Languages
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture Set 02 - Haskell",
		date: "",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_02.pdf" id="a_blue_link" target="_blank">
                Haskell Slides
            </a> <br>
            <a href="resources.html#functional-resources" id="a_blue_link">
                Functional Programming Resources
            </a>
            <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture Set 03 - Prolog",
		date: "",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_03.pdf" id="a_blue_link" target="_blank">
                Prolog Slides
            </a> <br>
            <a href="resources.html#logic-resources" id="a_blue_link">
                Logic Programming Resources
            </a> <br>
            <a href="resources/bst.pl" id="a_blue_link">
                BST Example
            </a> <br>
            <a href="resources/cgw.pl" id="a_blue_link">
                 Cabbage, Goat, Wolf Example
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture Set 04 - Parsing",
		date: "",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_04.pdf" id="a_blue_link" target="_blank">
                Parsing Slides
            </a> <br>
            <a href="resources.html#parsing-resources" id="a_blue_link">
                Parsing Resources
            </a> <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture Set 05 - Semantic Analysis",
		date: "",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_05.pdf" id="a_blue_link" target="_blank">
                Semantic Analysis Slides
            </a> <br>
            <a href="resources.html#semantic-resources" id="a_blue_link">
                Semantics Resources
            </a> <br> <br>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Lectures", LECTURES);
});
