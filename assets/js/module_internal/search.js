import { $ } from "js/helper.js";
import Fuse from "../module_external/fuse.js";

export const searchHandler = async () => {
  const searchInput = $("#searchInput");
  const resultsContainer = $("#results");

  if (!searchInput || !resultsContainer) return;

  const resultsPanel = $("#searchContainerResults");

  const clearSearch = () => {
    searchInput.value = "";
    resultsContainer.innerHTML = "";
    resultsPanel.hidden = true;
  };

  try {
    const searchUrl = searchInput.closest(".search")?.dataset.search;
    if (!searchUrl) throw new Error("Search URL not found");

    const response = await fetch(searchUrl);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

    const store = await response.json();

    const fuse = new Fuse(store, {
      keys: ["title", "tags", "description", "id", "date", "image"],
      threshold: 0.3,
      minMatchCharLength: 1,
    });

    const displayResults = (results, query) => {
      if (!query) return clearSearch();

      resultsContainer.innerHTML = results.length
        ? results
            .map((res) => {
              const item = res.item;
              return `
              <div class="multi-column__item">
                <article class="featured">
                  <header class="featured__header">
                    ${
                      item.image
                        ? `<div class="featured__img-container">
                            <img
                              src="${item.image}"
                              alt="Image In ${item.title}"
                              class="featured__img" />
                          </div>`
                        : ""
                    }
                    <h2 class="featured__title"><a href="${item.url}">${item.title}</a></h2>
                  </header>
                  <div class="featured__body">
                    <p>${item.description}</p>
                  </div>
                  <footer class="featured__footer">
                    <time datetime="" class="featured__time">${item.date}</time>
                    <a href="${item.url}" class="featured__btn">Read More</a>
                  </footer>
                </article>
              </div>`;
            })
            .join("")
        : `<p class="link-broken">No results found for: "${query}"</p>`;

      resultsPanel.hidden = false;
    };

    const handleSearch = (event) => {
      event?.preventDefault();
      const query = searchInput.value.trim();
      const results = query.length >= 2 ? fuse.search(query) : [];
      displayResults(results, query);
    };

    const debounce = (fn, wait = 300) => {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
      };
    };

    // Event listener
    searchInput.addEventListener("input", debounce(handleSearch, 300));

    const closeBtn = $(".search-bar__btn-close");
    if (closeBtn) closeBtn.addEventListener("click", clearSearch);

    // Prefill dari URL
    const params = new URLSearchParams(location.search);
    const initialQuery = params.get("query");
    if (initialQuery) {
      searchInput.value = initialQuery;
      setTimeout(() => handleSearch(new Event("input")), 100);
    }
  } catch (err) {
    console.error("Search error:", err);
    resultsPanel.hidden = false;
    resultsContainer.innerHTML = `
      <p class="link-broken">Search is currently unavailable</p>`;
  }
};
