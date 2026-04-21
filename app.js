let codes = [];

fetch('icd10.json')
  .then(res => res.json())
  .then(data => {
    codes = data;
  });

document.getElementById("search").addEventListener("input", function(e) {
  let query = e.target.value.toLowerCase();

  let results = codes.filter(item =>
    item.description.toLowerCase().includes(query) ||
    item.keywords.some(k => k.includes(query))
  );

  displayResults(results);
});

function displayResults(results) {
  let container = document.getElementById("results");
  container.innerHTML = "";

  results.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.code}</h3>
        <p>${item.description}</p>
        <small>${item.category}</small>
      </div>
    `;
  });
}
