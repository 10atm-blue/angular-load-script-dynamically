//alert("Hello you");

function loadScript(url) {
  // let url = "../../partners/mediamarkt/script.js";
  let script = document.createElement("script");
  script.src = url;
  script.id = "partner-script";
  script.type = "text/javascript";
  script.async = true;
  script.charset = "utf-8";
  document.getElementsByTagName("head")[0].appendChild(script);
}

function loadStyle(url) {
  //  let url = "../../partners/mediamarkt/style.css";
  let style = this.document.createElement("link");
  style.id = "partner-style";
  style.rel = "stylesheet";
  style.href = url;
  document.getElementsByTagName("head")[0].appendChild(style);
}

let partnerName = "mediamarkt";
if (partnerName === "mediamarkt") {
  // id="partner-script"
  // id="partner-style"
  loadStyle("../../partners/" + partnerName + "/style.css");
  loadScript("../../partners/" + partnerName + "/script.js");
}
