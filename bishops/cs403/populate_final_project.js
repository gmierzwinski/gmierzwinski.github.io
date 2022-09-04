/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
a JSON defined in this file.
*/

const PROJECT_SECTIONS = [
	{
		title: `<div style="color:red">UNDER CONSTRUCTION`,
		date: "",
		subtitle: "Projected Start Date: Nov. 30th / Projected End Date: Dec. 16th ",
		summary: `
			<p>Final Project will involve building a cross-process communication system for communicating with autonomous machines (e.g. rovers, drones, ...). </p> 
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("CS403 Final Project", PROJECT_SECTIONS);
});
