// arrays
let question_index = 0;
const quiz_question = [
	{
		question: "What is normal human body temperature?",
		a: "96F",
		b: "97F",
		c: "94F",
		d: "95F",
		correct: "a",
	},

	{
		question: "What is normal human blodd pressure?",
		a: "80 - 90",
		b: "80 - 100",
		c: "80 - 110",
		d: "80 - 120",
		correct: "d",
	},

	{
		question: "Human body compose of __.",
		a: "Millions of cell",
		b: "Billions of cell",
		c: "Trillions of cell",
		d: "Countless cells",
		correct: "c",
	},
];
// --

// variabled
let container = document.querySelector(".quiz-container");
let start_btn = document.getElementById("start-btn");
let sv_nxt_btn = document.getElementById("sv-nxt-btn");
let marks = 0;

// -> functions
function render_html() {
	let question_h2 = document.createElement("h2");
	question_h2.id = "question";
	question_h2.textContent = quiz_question[question_index].question;

	container.appendChild(question_h2);

	let div = document.createElement("div");
	div.classList.add("quiz-options");

	let ul = document.createElement("ul");

	let li_1 = document.createElement("li");
	let label_1 = document.createElement("label");
	label_1.setAttribute("for", "a");
	label_1.textContent = quiz_question[question_index].a;
	let input_1 = document.createElement("input");
	input_1.type = "radio";
	input_1.name = "option";
	input_1.id = "a";
	input_1.classList.add("options");
	li_1.appendChild(input_1);
	li_1.appendChild(label_1);

	let li_2 = document.createElement("li");
	let label_2 = document.createElement("label");
	label_2.setAttribute("for", "b");
	label_2.textContent = quiz_question[question_index].b;
	let input_2 = document.createElement("input");
	input_2.type = "radio";
	input_2.name = "option";
	input_2.id = "b";
	input_2.classList.add("options");
	li_2.appendChild(input_2);
	li_2.appendChild(label_2);

	let li_3 = document.createElement("li");
	let label_3 = document.createElement("label");
	label_3.setAttribute("for", "c");
	label_3.textContent = quiz_question[question_index].c;
	let input_3 = document.createElement("input");
	input_3.type = "radio";
	input_3.name = "option";
	input_3.id = "c";
	input_3.classList.add("options");
	li_3.appendChild(input_3);
	li_3.appendChild(label_3);

	let li_4 = document.createElement("li");
	let label_4 = document.createElement("label");
	label_4.setAttribute("for", "d");
	label_4.textContent = quiz_question[question_index].d;
	let input_4 = document.createElement("input");
	input_4.type = "radio";
	input_4.name = "option";
	input_4.id = "d";
	input_4.classList.add("options");
	li_4.appendChild(input_4);
	li_4.appendChild(label_4);

	ul.append(li_1, li_2, li_3, li_4);

	div.appendChild(ul);

	let sv_nxt_btn = document.createElement("button");
	sv_nxt_btn.type = "button";
	sv_nxt_btn.id = "sv-nxt-btn";
	sv_nxt_btn.textContent = "Save and Next";

	div.appendChild(sv_nxt_btn);

	container.appendChild(div);

	sv_nxt_btn.addEventListener(
		"click",
		function (e) {
			e.preventDefault();

			// check
			let options = document.querySelectorAll(".options");
			options.forEach((option) => {
				if (option.checked) {
					if (option.id === quiz_question[question_index].correct) {
						marks++;
					}
				}
			});

			container.innerHTML = "";
			question_index++;
			if (question_index < quiz_question.length) {
				render_html();
			} else {
				// result
				let result = `<h2>Result: <span>${marks}</span> / ${quiz_question.length} </h2>`;

				let retake_btn = document.createElement("button");
				retake_btn.type = "button";
				retake_btn.id = "retake-btn";
				retake_btn.textContent = "Retake";

				container.innerHTML = result;
				container.appendChild(retake_btn);

				retake_btn.addEventListener(
					"click",
					function (e) {
						e.preventDefault();

						question_index = 0;
						marks = 0;

						container.innerHTML = "";
						render_html();
					},
					false,
				);
			}
		},
		false,
	);
}
// --

// event
start_btn.addEventListener(
	"click",
	function (e) {
		e.preventDefault();

		start_btn.style.display = "none";
		render_html();
	},
	false,
);
// --
