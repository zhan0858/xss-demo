// * step 1 && step 2
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
  location.href = `/search?q=${search.value}`;
});
