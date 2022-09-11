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
		title: "Lecture 02 - Haskell (1/4)",
		date: "September 13th, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_02.pdf" id="a_blue_link" target="_blank">
                Haskell
            </a> (1-20) <br>
            <a href="resources.html#functional-resources" id="a_blue_link" target="_blank">
                Functional Programming Resources
            </a>
            <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 03 - Haskell (2/4)",
		date: "September 15th, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_02.pdf" id="a_blue_link" target="_blank">
                Haskell
            </a> (20-40) <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 04 - Haskell (3/4)",
		date: "September 20th, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_02.pdf" id="a_blue_link" target="_blank">
                Haskell
            </a> (40-65) <br> <br>
		`,
		show: true
	},
	{
		title: "Lecture 05 - Haskell (4/4)",
		date: "September 22nd, 2022",
		subtitle: "",
		summary: `
            <a href="resources/CS403_Lecture_02.pdf" id="a_blue_link" target="_blank">
                Haskell
            </a> (final slides + review) <br> <br>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Lectures", LECTURES);
});
