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
<a href="https://www.swi-prolog.org/download/stable" id="a_blue_link" target="_blank"> Prolog Download </a>
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
	{
		title: `<div id="parsing-resources">Scanning, and Parsing</div>`,
		date: "",
		subtitle: "",
		summary: `
<ul>
	<li>Main resources (“required”): 

		<p>
		</p>
		<ul>
			<li><a id="a_blue_link" href="http://www.cl.cam.ac.uk/teaching/0910/RLFA/reglfa.pdf">Lecture Notes on Regular Languages and
			     Finite
			     Automata</a>
			by Andrew M. Pitts (not mirrored locally since license is
			   unknown).

			<p>
			Class coverage: Chapter 1 and Section 2.1.  The rest of the text
			   may be interesting to read (but is not required).

			</p></li>
			<li><a id="a_blue_link" href="http://www.cs.binghamton.edu/~zdu/parsdemo/gramintro.html">Introduction to Grammars and Language
			     Analysis</a>
			by Zerksis D. Umrigar (not mirrored locally since license is
			   unknown).

			</li>
			<li><a id="a_blue_link"" href="http://www.cs.binghamton.edu/~zdu/parsdemo/recintro.html">Introduction to Recursive Descent
			     Parsing</a>
			by Zerksis D. Umrigar (not mirrored locally since license is
			   unknown).

			</li>
			<li><a id="a_blue_link" href="http://math.hws.edu/javanotes/c9/s5.html">A Simple Recursive Descent
			     Parser</a>
			from
			   <a id="a_blue_link" href="http://math.hws.edu/javanotes/index.html">Introduction to Programming Using Java, Seventh
			     Edition</a>
			by David J.
			   Eck (not mirrored locally since it is a small chapter from a
			   fairly large book).

			<p>
			Note that this presentation uses Java, though the principles and
			   algorithms are the same.
			 
			</p>
			</li>
		</ul>

		<p>
		</p>
	</li>
	<li>Other resources:
		<ul>
			<li><a id="a_blue_link" href="http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/080%20Formal%20Grammars.pdf">Formal grammars</a>
			and <a id="a_blue_link" href="http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/090%20Top-Down%20Parsing.pdf">Top down parsing</a>
			from <a id="a_blue_link" href="http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/">Stanford's Compilers course</a>
			</li>
			<li><a id="a_blue_link" href="https://www.engr.mun.ca/~theo/Misc/exp_parsing.htm">Parsing Expressions by Recursive
			     Descent</a>
			by
			   Theodore Norvell
			</li>
			<li><a id="a_blue_link" href="http://www.cs.cmu.edu/~me/212/handouts/parsing.pdf">Some Notes on Grammars and
			     Parsing</a>
			by
			   Michael Erdmann (quick introduction to context-free grammars and
			   parsing)
			 
			</li>
		</ul>
	</li>
</ul>
		`,
		show: true
	},
	{
		title: `<div id="semantic-resources">Semantic Analysis</div>`,
		date: "",
		subtitle: "",
		summary: `
<ul>
	<li>Main resources (“required”): 

	<ul>
	<li><a id="a_blue_link" href="http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/160%20Syntax-Directed%20Translation.pdf">Syntax-Directed Translation</a>
	and <a id="a_blue_link" href="http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/180%20Semantic%20Analysis.pdf">Semantic Analysis</a>
	from<a id="a_blue_link" href="http://web.stanford.edu/class/archive/cs/cs143/cs143.1128/">Stanford's Compilers course</a>
	(not
	   mirrored locally since license is unknown).
	</li>
	<li><a id="a_blue_link" href="http://www.csd.uwo.ca/~moreno//CS447/Lectures/TypeChecking.ps.gz">Type
	     checking</a>
	by Marc Moreno Maza (license unknown)
	 </li>
	</ul>

	</li>
	<li>Other resources:

	<ul>
	<li><a id="a_blue_link" href="http://infolab.stanford.edu/~ullman/dragon/slides2.pdf">Styles of Syntax-Directed
	     Translation</a>
	</li>
	<li><a id="a_blue_link" href="http://www.cse.chalmers.se/edu/year/2011/course/TIN321/lectures/proglang-07.html">Type
	     checking</a>
	by Aarne Ranta
	 
	</li>
	</ul>

	</li>
</ul>
		`,
		show: true
	},
	{
		title: `<div id="types-resources">Types, and Classes</div>`,
		date: "",
		subtitle: "",
		summary: `
<ul>

	<li>Main resources (“required”): 

	<ul>
	<li><a id="a_blue_link" href="http://www.cs.utexas.edu/users/wcook/papers/OOPvsADT/CookOOPvsADT90.pdf">Object-Oriented Programming Versus Abstract
	     Data
	     Types</a>
	by William R. Cook
	</li>
	<li><a id="a_blue_link" href="http://codebetter.com/raymondlewallen/2005/07/19/4-major-principles-of-object-oriented-programming/">4 major principles of Object-Oriented
	     Programming</a>
	</li>
	</ul>

	</li>
	<li>Other resources:

	<ul>
	<li><a id="a_blue_link" href="https://ece.uwaterloo.ca/~dwharder/aads/Abstract_data_types/">Abstract Data
	     Types</a>
	</li>
	</ul>
	</li>

</ul>
		`,
		show: true
	},
	{
		title: `<div id="subprograms-resources">Subprograms</div>`,
		date: "",
		subtitle: "",
		summary: `
<ul>

<li>Main resources (“required”): <a id="a_blue_link" href="http://cs2.uco.edu/~trt/cs4023/ch09.pdf">Fundamentals of
     Subprograms</a>
and
   <a id="a_blue_link" href="http://cs2.uco.edu/~trt/cs4023/ch10.pdf">Implementing
     Subprograms</a>
by Thomas
   R. Turner
</li>

</ul>
		`,
		show: true
	},
	{
		title: `<div id="pointers-resources">Pointers</div>`,
		date: "",
		subtitle: "",
		summary: `
<ul>


<li>Main resources (“required”): 

<ul>
<li><a id="a_blue_link" href="http://linuxconfig.org/c-understanding-pointers">C++ : Understanding
     pointers</a>
by
   Lubos Rendek
</li>
<li><a id="a_blue_link" href="http://ootips.org/yonat/4dev/smart-pointers.html">Smart Pointers - What, Why,
     Which?</a>
by
   Yonat Sharon
 
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
