/*
Generalized method for populating section on a particular page.
*/

function populate_sections(sections_name, sections) {
	let section_location = document.querySelector("div #sections");
	let isMobile = window.mobileCheck();

	let count = 0;
	let new_section = "";
	for (let section of sections) {
		if (!section["show"]) continue;

		let first_section = "";
		if (count == 0) {
			first_section = String.format(
				FIRST_SECTION_HEADER,
				isMobile ? "section-title-mobile": "section-title",
				"<br>" + sections_name
			)
		}

		new_section = String.format(
			ARTICLE_SECTION,
			isMobile ? "section-mobile" : "section",
			first_section,
			section["date"],
			section["title"],
			section["subtitle"],
			section["summary"]
		)

		section_location.insertAdjacentHTML("beforeend", new_section);
		count++;
	}
}
