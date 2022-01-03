/*
Generalized method for populating section on a particular page.
*/

function populate_sections(sections_name, sections) {
	let section_location = document.querySelector("div #sections");

	let count = 0;
	let new_section = "";
	for (let section of sections) {
		if (!section["show"]) continue;

		new_section = String.format(
			ARTICLE_SECTION,
			count == 0 ? String.format(FIRST_SECTION_HEADER, sections_name) : "",
			section["date"],
			section["title"],
			section["subtitle"],
			section["summary"]
		)

		section_location.insertAdjacentHTML("beforeend", new_section);
		count++;
	}
}
