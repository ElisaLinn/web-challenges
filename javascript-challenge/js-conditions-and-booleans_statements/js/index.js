console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Acces denied!");
}

// Part 2: Even / Odd
const number = 6 !== 5;

// Part 3: Hotdogs
const numberOfHotdogs = 10;
if (numberOfHotdogs < 5) {
  console.log("2 Euro per Hotdog");
} else if (numberOfHotdogs >= 5) {
  console.log("1.50 Euro per Hotdog");
} else if (numberOfHotdogs >= 100) {
  console.log("1 Euro per Hotdog");
} else if (numberOfHotdogs <= 1000000) {
  console.log("0.10 per Hotdog");
}
// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "still need to learn" : "Partytime";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === "Archibald" ? "coach" : userName) + "!";

console.log(greeting);
