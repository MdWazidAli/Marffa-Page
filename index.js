const articles = [
  { title: "How to Learn JavaScript", isPopular: true, date: "2023-12-01" },
  { title: "Understanding CSS Grid", isPopular: false, date: "2024-11-20" },
  {
    title: "Responsive Web Design Basics",
    isPopular: true,
    date: "2024-11-15",
  },
  { title: "Mastering React in 30 Days", isPopular: false, date: "2024-10-25" },
];

function renderResults(filteredArticles) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (filteredArticles.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  filteredArticles.forEach((article) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `<h3>${article.title}</h3><p>Date: ${article.date}</p>`;
    resultsDiv.appendChild(item);
  });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filterPopular = document.getElementById("filterPopular").checked;
  const filterRecent = document.getElementById("filterRecent").checked;

  let filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm)
  );

  if (filterPopular) {
    filteredArticles = filteredArticles.filter((article) => article.isPopular);
  }

  if (filterRecent) {
    filteredArticles = filteredArticles.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  renderResults(filteredArticles);
});

renderResults(articles);
