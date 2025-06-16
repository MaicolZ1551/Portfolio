function GitHubLink(url) {
  const elements = document.querySelectorAll(".info2");
  elements.forEach(e => {
    e.addEventListener("click", () => {
      window.open(url, "_blank", "noopener");
    });
  });
}
// Call Link
GitHubLink("https://github.com/MaicolZ1551");




function LinkedInLink(url) {
  const elements = document.querySelectorAll(".info4");
  elements.forEach(e => {
    e.addEventListener("click", () => {
      window.open(url, "_blank", "noopener");
    });
  });
}
// Call Link
LinkedInLink("https://www.linkedin.com/in/maicol-zuluaga-arias-b1661836a/");




function project1(url) {
  const elements = document.querySelectorAll(".project1");
  elements.forEach(e => {
    e.addEventListener("click", () => {
      window.open(url, "_blank", "noopener");
    });
  });
}
// Call Link
project1("https://digital-clock741.netlify.app");