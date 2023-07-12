import "./index.html";
import "./index.scss";

const div = document.createElement("div");
div.classList.add("test-div");
div.innerText = "test message";

document.body.appendChild(div);
