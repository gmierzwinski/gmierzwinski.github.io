/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
a JSON defined in this file.
*/

const LECTURES = [
	{
		title: "Lecture 01 - Course Outline, and History of Programming Languages",
		date: "September 8th, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Course_Outline.pdf" style="color: blue" target="_blank">
                Course Outline
            </a> <br>
            <a href="resources/CS403_Lecture_01.pdf" style="color: blue" target="_blank">
                History of Programming Languages
            </a> <br> <br>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Lectures", LECTURES);
});
