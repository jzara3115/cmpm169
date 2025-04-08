const fillers = {
  fish: ["Goldfish", "Sturgeon", "Beta Fish", "Tuna", "Sardine", "Squid"],

  fishNames: {
    "Goldfish": ["Gollum", "Goldy", "Bubbles"],
    "Sturgeon": ["Sergion", "Surge", "Oldwhisker"],
    "Beta Fish": ["Layla", "Bretta", "Theta"],
    "Tuna": ["Tony", "Luca", "Luna"],
    "Sardine": ["Sandy", "Nadine", "Sar"],
    "Squid": ["Inky", "Squidward", "Tim"]
  }
  
};

let currentFish = "";

const template = `$fish, interesting... I'm thinking a fish like this should be named $fishname
`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
  if (name === "fish") {
    const options = fillers.fish;
    currentFish = options[Math.floor(Math.random() * options.length)];
    return currentFish;
  }

  if (name === "fishname") {
    const nameOptions = fillers.fishNames[currentFish];
    if (nameOptions && nameOptions.length > 0) {
      return nameOptions[Math.floor(Math.random() * nameOptions.length)];
    } else {
      return "Finny";
    }
  }

  return `<UNKNOWN:${name}>`;
}

function generate() {
  let story = template;
  while (story.match(slotPattern)) {
    story = story.replace(slotPattern, replacer);
  }

  /* global box */
  box.innerText = story;
}

/* global clicker */
clicker.onclick = generate;

generate();


main();