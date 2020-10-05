const teamListRef = document.querySelector(".team-list");

const options = {
  rootMargin: "-150px",
};

const io = new IntersectionObserver(entries, options);
