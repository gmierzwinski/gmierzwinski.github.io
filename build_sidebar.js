/*
Build up the sidebar for the given page.
*/

const ROOT = "gmierzwinski.github.io";

const HAMBURGER_MENU = `
  <div class="menu sidebar-nav-mobile"></div>
  <button class="hamburger">
    <i class="material-icons menuIcon">menu</i>
    <i class="material-icons closeIcon">close</i>
  </button>
`

const SIDEBAR_CONTENTS = {
	bishops: {
		cs321: {
			Home: "index.html",
			Lectures: "lectures.html",
			Assignments: "assignments.html",
			Labs: "labs.html",
			"Final Project": "final_project.html",
			References: "references.html",
			"Style Guidelines": "style_guidelines.html",
			Contact: "contact.html"
		}
	}
};

let SIDEBAR_ENTRY = '<div class="sidebar_text">| <a href="{0}">{1} </a>&nbsp;</div>';
let SIDEBAR_ENTRY_MOBILE = '<div class="sidebar_text_mobile">| <a href="{0}">{1} </a>&nbsp;</div>';

let SIDEBAR_TITLE = `
	<a href="http://cs.ubishops.ca/" alt="CS @ Bishop's University">
		<img src="{0}images/BU-logo-purpleHR.png" id="bu_logo" alt="Bishop's University"></img>
	</a>
	<div id="namediv">
	    CS321 <br> Advanced Programming <br>Techniques <br>
	</div>
`

let SIDEBAR_TITLE_MOBILE = `
	<div id="namediv-mobile">
	    CS321 <br> Advanced Programming <br>Techniques <br>
	</div>
`

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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


async function build_sidebar() {
	let isMobile = window.mobileCheck();

	async function get_content() {
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

		return entry;
	}

	if (isMobile) {
		let aside = document.querySelector("div #aside");
		let sections = document.querySelector("div #sections");
		aside.style.width = "0%";
		sections.style.width = "100%";

		// Setup the hamburger menu now
		let wrapper = document.querySelector("body");
		wrapper.insertAdjacentHTML("beforebegin", HAMBURGER_MENU);

		let sidebar = document.querySelector(".menu.sidebar-nav-mobile");
		sidebar.insertAdjacentHTML("afterbegin", SIDEBAR_TITLE_MOBILE);

		let entry = await get_content();
		for (let [key, val] of Object.entries(entry)) {
			sidebar.insertAdjacentHTML("beforeend", String.format(SIDEBAR_ENTRY_MOBILE, val, key));
		}
	} else {
		let sidebar_title_location = document.querySelector("div #aside_cover");
		sidebar_title_location.insertAdjacentHTML("afterbegin", SIDEBAR_TITLE);

		let sidebar = document.querySelector("div.sidebar-nav");

		let entry = await get_content();
		for (let [key, val] of Object.entries(entry)) {
			sidebar.insertAdjacentHTML("beforeend", String.format(SIDEBAR_ENTRY, val, key));
		}
	}

}


async function handle_mobile_conversion() {
	if (!window.mobileCheck()) return;

	let sections = document.querySelectorAll("#section");
	for (let section of sections) {
		section.id = "section-mobile";
	}
	sections = document.querySelectorAll("#section-title");
	for (let section of sections) {
		section.id = "section-title-mobile";
	}
}


// Setup the sidebar, then populate it
run_setup();
window.addEventListener("load", async function () {
	await handle_mobile_conversion();
	await build_sidebar();

	const menu = document.querySelector(".menu");
	const menuItems = document.querySelectorAll(".menuItem");
	const hamburger= document.querySelector(".hamburger");
	const closeIcon= document.querySelector(".closeIcon");
	const menuIcon = document.querySelector(".menuIcon");

	function toggleMenu() {
		if (menu.classList.contains("showMenu")) {
			menu.classList.remove("showMenu");
			closeIcon.style.display = "none";
			menuIcon.style.display = "block";
		} else {
			menu.classList.add("showMenu");
			closeIcon.style.display = "block";
			menuIcon.style.display = "none";
		}
	}

	hamburger.addEventListener("click", toggleMenu);
});
