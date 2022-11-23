let tokenTypes = {
  myTweets: "me:",
  inMyFollowers: "follows:",
  from: "from:",
};

let el;
let input = document.querySelector("[data-testid=SearchBox_Search_Input]");
let currentTokenType = "";

input.addEventListener(
  "keyup",
  (e) => {
    let text = e.target.value;

    if (currentTokenType && e.keyCode == 8 && text.length == "") {
      currentTokenType = "";
      input.value = "";

      if (el) {
        el.remove();
      }
    }

    switch (e.target.value) {
      case tokenTypes.from:
        createTokenizedText(tokenTypes.from);
        console.log("from");
        break;

      case tokenTypes.myTweets:
        createTokenizedText(tokenTypes.myTweets);
        console.log("me");
        break;

      case tokenTypes.inMyFollowers:
        createTokenizedText(tokenTypes.inMyFollowers);
        console.log("in my followers");
        break;
    }
  },
  false
);

function createTokenizedText(tokenElement) {
  el = document.createElement("div");
  el.setAttribute("id", "token-text");
  el.innerHTML = tokenElement;

  el.style.fontWeight = 900;
  el.style.color = "#A9A90A";

  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";

  el.style.width = 35;
  el.style.height = 35;

  input.parentNode.insertBefore(el, input);
  input.value = "";

  currentTokenType = tokenElement;
}

function searchFromTweets(fromValue) {
  // Potentially use something like Bloodhound (twitter search engine) here.
}
