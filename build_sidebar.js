/*
Build up the sidebar for the given page.
*/

const ROOT = "gmierzwinski.github.io";

const SIDEBAR_CONTENTS = {
	bishops: {
		cs321: {
			Home: "index.html",
			Lectures: "lectures.html",
			Assignments: "assignments.html",
			Labs: "labs.html",
			"Final Project": "final_project.html",
			References: "references.html",
			Contact: "contact.html"
		}
	}
};

let SIDEBAR_ENTRY = '<div class=".sidebar_text">| <a href="{0}">{1} </a>&nbsp;</div>';

let SIDEBAR_TITLE = `
	<a href="http://cs.ubishops.ca/" alt="CS @ Bishop's University">
		<img src="{0}images/BU-logo-purpleHR.png" id="bu_logo" alt="Bishop's University"></img>
	</a>
	<div id="namediv">
	    CS321 <br> Advanced Programming <br>Techniques <br>
	</div>
`

function run_setup() {
	// Ensure we can format strings
	if (!String.format) {
		String.format = function(format) {
			var args = Array.prototype.slice.call(arguments, 1);
			return format.replace(/{(\d+)}/g, function(match, number) { 
				return typeof args[number] != 'undefined'
					? args[number] 
					: match
				;
			});
		};
	}

	// Setup the paths for the images
	let img_location = "";
	for (let i of window.location.href.split("/").reverse()) {
		if (i.includes(".html") || i == "") continue;
		if (i == ROOT) break;
		img_location += "../";
	}
	SIDEBAR_TITLE = String.format(SIDEBAR_TITLE, img_location);
}


function build_sidebar() {
	let sidebar_title_location = document.querySelector("div #aside_cover");
	sidebar_title_location.insertAdjacentHTML("afterbegin", SIDEBAR_TITLE);

	let sidebar = document.querySelector("div .sidebar-nav");
	const location = window.location.href;

	let count = 0;
	let entry = SIDEBAR_CONTENTS;
	while (typeof(entry[Object.keys(entry)[0]]) != "string" && count < 10) {
		count++;
		for (let key in entry) {
			if (location.toLowerCase().includes(key)) {
				entry = entry[key];
			}
		}
	}

	for (let [key, val] of Object.entries(entry)) {
		sidebar.insertAdjacentHTML("beforeend", String.format(SIDEBAR_ENTRY, val, key));
	}
}


// Setup the sidebar, then populate it
run_setup();
window.addEventListener("load", function () {
	build_sidebar();
});
