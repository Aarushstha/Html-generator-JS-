class Component {
  open(tagName) {
    return "<" + tagName + ">";
  }

  close(tagName) {
    return "</" + tagName + ">";
  }
  inputTag(name, type) {
    return `<input name="${name}" type="${type}" />`;
  }
}
// HtmlTag class that extends component
class HtmlTag extends Component {
  html() {
    let tagName = "html";
    let htmlElements = this.head() + this.body() + "\n";
    return this.openAndCloseTag(tagName, htmlElements);
  }
  openAndCloseTag(tagName, mid) {
    return "\n" + this.open(tagName) + mid + this.close(tagName);
  }
  head() {
    let tagName = "head";
    return this.openAndCloseTag(tagName, this.title() + "\n");
  }
  title() {
    let tagName = "title";
    let text = "HTML Generator";
    return this.openAndCloseTag(tagName, text);
  }
  body() {
    let tagName = "body";
    let bodyElements =
      this.h1("Form") +
      this.label("FirstName:") +
      this.input("FirstName", "text") +
      this.label("LastName:") +
      this.input("LastName", "text") +
      this.label("Gender") +
      this.select("Male", "Female", "others") +
      this.label("Are you single?") +
      this.input("yes", "radio") +
      this.label("Yes") +
      this.input("yes", "radio") +
      this.label("No") +
      this.label("Comments:") +
      this.textArea() +
      this.button() +
      "\n";
    return this.openAndCloseTag(tagName, bodyElements);
  }
  h1(text) {
    let tagName = "h1";
    return this.openAndCloseTag(tagName, text);
  }
  label(labelName) {
    let tagName = "label";
    return this.openAndCloseTag(tagName, labelName) + "<br>";
  }
  input(inputName, inputType) {
    return "\n" + this.inputTag(inputName, inputType) + "<br>";
  }
  select(option1, option2, option3) {
    return (
      "\n" +
      this.open("select") +
      this.open("option") +
      option1 +
      this.close("option") +
      "\n" +
      this.open("option") +
      option2 +
      this.close("option") +
      "\n" +
      this.open("option") +
      option3 +
      this.close("option") +
      "\n" +
      this.close("select") +
      "<br>"
    );
  }
  textArea() {
    let tagName = "textarea";
    let text = "";
    return this.openAndCloseTag(tagName, text) + "<br>";
  }
  button() {
    let tagName = "button";
    let text = "Submit";
    return (
      "\n" +
      this.open(tagName + " type = 'Submit'") +
      text +
      this.close(tagName)
    );
  }
}

//New File generator File system module
let fs = require("fs");
let htmltag = new HtmlTag();
let htmlfile = htmltag.html();
fs.writeFile("./Form.html", htmlfile, function (err) {
  if (err) throw err;
  console.log("Replaced!");
});
