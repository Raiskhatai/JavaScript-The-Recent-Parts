// A tagged template literal allows a function to intercept a template literal, split it into string parts and values, and produce a customized output.

// strings — ek array jisme template ke literal parts hote hain (wo text jo ${} ke bahar tha).

// strings.length = values.length + 1
// Agar tumhare last placeholder ke baad koi literal text nahi hai →
// Wo strip uski empty string ban jati hai.

// Example: ["Hello", "@(", ")," wellcome to", ""]

// values — spread form me tumhare interpolated expressions ki values.
// Example: ["shahrukh", "shahrukh_sha","js recent parts"]

function upper(strings, ...values) {
  let str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      str += values[i - 1].toUpperCase();
      str += strings[i];
    } else {
      str += strings[i];
    }
  }
  return str;
}

const name = "shahrukh",
  twitter = "shahrukh_sha",
  topic = "js recent parts";

const val = upper`Hello ${name} (@${twitter}), wellcome to ${topic}`;
console.log(val); //Hello SHAHRUKH (@SHAHRUKH_SHA), wellcome to JS RECENT PARTS
