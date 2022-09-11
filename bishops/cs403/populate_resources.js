/*
Used to populate the section on lectures. Rather than having to write
out all the HTML myself constantly, I can just remove entries from
a JSON defined in this file.
*/

const RESOURCES = [
	{
		title: "",
		date: "",
		subtitle: "",
		summary: `
			There is no required textbook for this course.
			Electronic reference material will be provided here as the term progresses. <br> <br>

			Note: The main or “required” material is also mirrored locally whenever this is permitted by
			the license of the respective material. Note however that such a material has its own license. <br>
		`,
		show: true
	},
	{
		title: `<div id="functional-resources">Functional Programming (Haskell)</div>`,
		date: "",
		subtitle: "",
		summary: `
<a href="https://www.haskell.org/downloads/" id="a_blue_link" target="_blank"> Haskell Download </a>
<ul>

    <li>
        Main resources ("required"):
        <ul>
            <li><a id="a_blue_link" target="_blank"
              href="resources/cunningham-haskell.pdf">Notes on Functional Programming with
                 Haskell</a>
            by H. Conrad Cunningham (local
               copy).

            Class coverage: Sections 2, 3, 5, 6, 7, 8, and 15.

            </li>
            <li><a id="a_blue_link" target="_blank"
              href="http://www.haskell.org/tutorial/index.html">A Gentle Introduction to Haskell
                 98</a>
            by Paul Hudak,
               John Peterson, and Joseph Fasel (<a id="a_blue_link" target="_blank"
              href="resources/hudak-haskell-tutorial.pdf">local
                 copy</a>).

            Class coverage: all but Sections 6.3, 7, 9, and 13.

            </li>
            <li><a id="a_blue_link" target="_blank"
              href="https://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf">A Tutorial Introduction to the Lambda
                 Calculus</a>
            by Raúl Rojas

            </li>
        </ul>

    </li>

    <li>Other resources:
        <ul>
            <li><a id="a_blue_link" target="_blank"
              href="http://www.haskell.org/hoogle/">Hoogle</a>: a

            Haskell API search engine.
            <ul>
                <li>The <a id="a_blue_link" target="_blank"
                  href="http://www.haskell.org/onlinereport/standard-prelude.html">standard
                       Prelude</a>
                consists in all the functions that are guaranteed to be available
                     in any Haskell implementation.
                   </li>
            </ul>

            </li>
            <li><a id="a_blue_link" target="_blank"
              href="http://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf">Why Functional Programming
                 Matters</a>
            by John Hughes.
            </li>

            <li><a id="a_blue_link" target="_blank"
              href="http://www.haskell.org/haskellwiki/Haskell_in_practice">Haskell in
                 Practice</a>
            </li>

            <li>On recursion and more: <a id="a_blue_link" target="_blank"
              href="http://www.joelonsoftware.com/articles/ThePerilsofJavaSchools.html">The Perils of
                 JavaSchools</a>
            </li>
        </ul>
    </li>
</ul>
		`,
		show: true
	},
	{
		title: `<div id="logic-resources">Logic Programming (Prolog)</div>`,
		date: "",
		subtitle: "",
		summary: `
<ul>
    <li>
        Main resources ("required"):

        <ul>
            <li><a id="a_blue_link" target="_blank" href="https://web.archive.org/web/20190216125532/http://homepages.inf.ed.ac.uk/pbrna/prologbook/">Prolog Programming: A First
                 Course</a>
            by Paul Brna. Note that the original location is no longer up (has
               been down since early 2019) a <a id="a_blue_link" target="_blank" href="resources/brna-prolog.pdf">local
                 copy</a>
            is therefore available despite the unclear
               license.

            Class coverage: Chapters 2, 3, 4, 5, 6, and Section 7.2.
            </li>
        </ul>
    </li>

    <li>
        Other resources:
        <ul>
            <li><a id="a_blue_link" target="_blank" href="http://kti.mff.cuni.cz/~bartak/prolog/">On-Line Guide to Prolog
                 Programming</a>
            by Roman
               Barták.
            </li>

            <li><a id="a_blue_link" target="_blank" href="https://www.cpp.edu/~jrfisher/www/prolog_tutorial/contents.html">prolog :-
                 tutorial</a>
            by J. R. Fischer.
            </li>

            <li><a id="a_blue_link" target="_blank" href="http://www.lix.polytechnique.fr/~liberti/public/computing/prog/prolog/prolog-tutorial.html">Prolog
                 Tutorial</a>
            by Anthony Aaby.
            </li>

            <li><a id="a_blue_link" target="_blank" href="http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/lang/prolog/doc/pl_1000/">The Database of 1000 Prolog
                 Applications</a>
            (unfortunately extremely outdated)
            </li>

            <li>
                For the enthusiasts the following texts are available in the
                library:

                <ul>
                    <li>W. F. Clocksin and C. S. Mellish: <span id="book_title">Programming in
                           Prolog</span>, Springer, 4th edition, 1994.  Call number QA 76.73
                         .P76 C57 1987.
                    </li>

                    <li>L. Sterling and E. Shapiro: <span id="book_title">The Art of Prolog,
                           Advanced Programming Techniques</span>, The MIT Press, 2nd edition,
                         1994.  Call number QA 76.73 .P76 S74 1994

                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
		`,
		show: true
	},
];


window.addEventListener("load", function() {
	populate_sections("Resources", RESOURCES);
});
