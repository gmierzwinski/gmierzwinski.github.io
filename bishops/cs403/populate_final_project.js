/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
a JSON defined in this file.
*/

const PROJECT_SECTIONS = [
	{
		title: `<div style="color:red">Due: December 30th (midnight)`,
		date: "",
		subtitle: "",
		summary: `
			<a href="resources/CS403_Final_Project.pdf" style="color: blue" target="_blank">
                PDF Instructions (See here for Grading Criteria)
            </a> <br>
            <p> <b> You can find the skeleton project on Moodle. </b> </p> <br>
		`,
		show: true
	},
	{
		title: "Submission Guidelines",
		date: "",
		subtitle: "",
		summary: `
		<ul>
			<li> Submit a zipped folder of the project by email with the name following the pattern (using my name as example): 'MIER_GRE_FINAL.zip' </li>
            <li> Submission exporting guidelines using Github (ensure that you create a private repo):
                <ol>
                    <li> Download the Github project as a zip (option on the main page of your Github repo)</li>
                    <li> Rename the zip following the format mentionedin the point above, then send that zip to me by email. </li>
                </ol>
            </li>
        </ul>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("CS403 Final Project", PROJECT_SECTIONS);
});
