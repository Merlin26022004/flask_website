// Cursor sparkle trail
document.addEventListener("mousemove", (e) => {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 400);
});

// Scroll-reveal for sections & book pages
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

// sections
document.querySelectorAll(".section").forEach((sec) => {
    observer.observe(sec);
});

// book pages
document.querySelectorAll(".book-page").forEach((page) => {
    observer.observe(page);
});
