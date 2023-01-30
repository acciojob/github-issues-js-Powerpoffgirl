//your code here
const pNoSpan = document.getElementById("pNo"),
  listElement = document.getElementById("list"),
  nextBtn = document.getElementById("load_next"),
  prevBtn = document.getElementById("load_prev");

let pageNumber = 1;

const renderIssues = (issues) => {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
  issues.forEach((issue) => {
    const li = document.createElement("li");
    li.textContent = issue.title;
    listElement.appendChild(li);
  });
};

const fetchIssues = async () => {
  pNoSpan.textContent = pageNumber;
  const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;
  const res = await fetch(url);
  const data = await res.json();

  renderIssues(data);
};

const handleNextClick = () => {
  pageNumber += 1;
  fetchIssues();
};

const handlePrevClick = () => {
  pageNumber -= 1;
  fetchIssues();
};

document.addEventListener("DOMContentLoaded", fetchIssues);
nextBtn.addEventListener("click", handleNextClick);
prevBtn.addEventListener("click", handlePrevClick);

