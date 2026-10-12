let score = 0;
console.log(score);

// Question 1
let answer1 = prompt(
  " How many players does one soccer team have on the field?\nA. 9 players\nB. 11 players\nC. 10 players",
);

if (answer1 === "B") {
  score++;
}

// Qestion 2
let answer2 = prompt(
  " Who won the 2026 World Cup?\nA. USA\nB. Haiti\nC. Spain",
);

if (answer2 === "C") {
  score++;
}

// Question 3
let answer3 = prompt("How many world cups does Brazil have?\nA. 5\nB. 1\nC. 2");

if (answer3 === "A") {
  score++;
}

// Final score
if (score === 0) {
  alert(" do not be discouraged, you got this!");
} else if (score === 3) {
  alert(" Great job! you scored 5 out of 5");
} else {
  alert(" Not bad!" + score + " out of 5.");
}
