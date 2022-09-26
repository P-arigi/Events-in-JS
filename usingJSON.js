let instructors = ["Elie", "Matt", "Tim"];

// the JSON.stringify call converts the instructors array into a JSON string
localStorage.setItem("instructors", JSON.stringify(instructors));

// JSON.parse converts the JSON string back into JavaScript (in this case, a valid array)
JSON.parse(localStorage.getItem("instructors"));
