

// generate a random class name
function generateRandomClassName() {
  // create a random string of characters
  let className = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 10; i++) {
    className += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return className;
}

// select the element(s) with the class that we want to change
const elements = document.querySelectorAll(".old-class-name");

// generate the new, random class name
const newClassName = generateRandomClassName();

// change the class name on the selected elements
elements.forEach((element) => {
  element.classList.remove("old-class-name");
  element.classList.add(newClassName);
});

// change the class name in the CSS stylesheet
const stylesheet = document.styleSheets[0];
stylesheet.replace(".old-class-name", "." + newClassName);
