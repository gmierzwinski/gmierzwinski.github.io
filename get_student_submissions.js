/*
	Run this from the Bishops mail app.
*/
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


// Get all the emails in the current view/folder
let t = document.querySelectorAll("div[role='option']");

let attachement_submissions = [];
github_submissions = [];
for (i of t) {
	console.log(i.getAttribute("aria-label"));

	let attr = i.getAttribute("aria-label");
	if (attr.toLowerCase().includes("has attachment")) {
		attachement_submissions.push(i);
	} else {
		github_submissions.push(i);
	}
}

// Download the zips
async function download_attachments() {
	for (zip_ele of attachement_submissions) {
		zip_ele.querySelectorAll("div[title]")[0].click();
		await new Promise((resolve) => {
			setTimeout(2500, resolve);
		});
	}
}

// Download the github tarballs
let urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
for (git_ele of github_submissions) {
	let aria = git_ele.getAttribute("aria-label");
	let link = aria.match(urlRegex);

	if (!link) {
		console.log("Failed for " + aria);
	}

	let tarlink = link.replace("commit", "tarball");
	tarlink = link.replace("https", "http");
	gBrowser.loadOneTab(tarlink);
}
