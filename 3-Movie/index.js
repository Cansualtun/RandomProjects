//Fetch Data
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "2797bfdf",
      s: searchTerm,
    },
  });
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};
//We create html template in Javascript.
//We want the process to be executed globally within the javascript file.
const root = document.querySelector(".autocomplete");
root.innerHTML = `
<label><b>Search For a Movie</b></label>
<input class="input" />
<div class="dropdown">
<div class="dropdown-menu">
 <div class="dropdown-content results"></div>
</div>
</div> 
`;
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  //Yazılan film silindiği zaman çalışacak fonksiyon
  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }
  resultsWrapper.innerHTML = "";
  //Movie Rendering
  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    option.innerHTML = `
  <img src="${movie.Poster}"/>
  ${movie.Title}
  `;
    option.addEventListener("click", (event) => {
      dropdown.classList.remove("is-active");
      input.value = movie.Title;
    });
    resultsWrapper.appendChild(option);
  }
};
input.addEventListener("input", debounce(onInput, 500));
//Root elementleri dışında başka classlarla iletişime geçildiği an dropdown kapanışı
document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
