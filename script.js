// State Management
let websites = [];
let favorites = new Set();
let activeCategory = "all";
let searchQuery = "";
let showFavoritesOnly = false;

// DOM Elements
const websiteGrid = document.getElementById("websiteGrid");
const sarkariBoxGrid = document.getElementById("sarkariBoxGrid");
const categoryTabsContainer = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const btnClearSearch = document.getElementById("btnClearSearch");
const mobileSearchToggle = document.getElementById("mobileSearchToggle");
const mobileCategoryToggle = document.getElementById("mobileCategoryToggle");
const contactToggle = document.getElementById("contactToggle");
const mobileQuickToggle = document.getElementById("mobileQuickToggle");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const favoritesFilterBtn = document.getElementById("favoritesFilterBtn");
const mobileWebMenuBtn = document.getElementById("mobileWebMenuBtn");
const mobileWebMenu = document.getElementById("mobileWebMenu");
const mobileMenuSearchInput = document.getElementById("mobileMenuSearchInput");
const addWebsiteBtn = document.getElementById("addWebsiteBtn");
const websiteModal = document.getElementById("websiteModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const addWebsiteForm = document.getElementById("addWebsiteForm");
const visibleCountEl = document.getElementById("visibleCount");
const totalCountEl = document.getElementById("totalCount");
const toastEl = document.getElementById("toast");
const marqueeText = document.getElementById("marqueeText");
const btnSarkariView = document.getElementById("btnSarkariView");
const btnCardView = document.getElementById("btnCardView");
let currentView = "sarkari";

// Icon mapping helper for categories
const categoryIcons = {
    all: "fa-border-all",
    coding: "fa-code",
    webdev: "fa-laptop-code",
    learning: "fa-graduation-cap",
    ai: "fa-brain",
    tools: "fa-screwdriver-wrench",
    jobs: "fa-briefcase",
    result: "fa-square-poll-vertical",
    government: "fa-building-columns",
    bihar: "fa-school",
    aadhaar: "fa-id-card"
    pan: "fa-id-card"
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    loadThemePreference();
    loadWebsitesAndFavorites();
    renderMarqueeNotices();
    renderCategoryTabs();
    renderWebsites();
    setupEventListeners();
});

function renderMarqueeNotices() {
    if (!marqueeText || !Array.isArray(marqueeNotice)) return;

    marqueeText.innerHTML = marqueeNotice.map((notice, index) => `
        <a class="update-link" href="${escapeAttribute(notice.url)}" target="_blank" rel="noopener noreferrer">
            <span class="update-type">${escapeHTML(notice.type)}</span>
            <span>${index === 0 ? "New: " : ""}${escapeHTML(notice.title)}</span>
        </a>
    `).join(`<span class="update-separator">|</span>`);
}

// Load Theme Preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem("cse_web_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector("i");
    if (theme === "light") {
        icon.className = "fas fa-moon";
    } else {
        icon.className = "fas fa-sun";
    }
}

// Toggle Dark / Light Theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("cse_web_theme", newTheme);
    updateThemeIcon(newTheme);
}

// Load Websites & Favorites from LocalStorage or Data.js
function loadWebsitesAndFavorites() {
    // All links are maintained in data.js; the public UI cannot add links.
    websites = [...initialWebsites];

    const savedFavorites = JSON.parse(localStorage.getItem("cse_favorites")) || [];
    favorites = new Set(savedFavorites);
}

// Save Favorites to LocalStorage
function saveFavorites() {
    localStorage.setItem("cse_favorites", JSON.stringify(Array.from(favorites)));
}

// Save Custom Websites to LocalStorage
function saveCustomWebsites(newWebsite) {
    const customWebsites = JSON.parse(localStorage.getItem("cse_custom_websites")) || [];
    customWebsites.push(newWebsite);
    localStorage.setItem("cse_custom_websites", JSON.stringify(customWebsites));
}

// Delete Custom Website
function deleteCustomWebsite(id) {
    let customWebsites = JSON.parse(localStorage.getItem("cse_custom_websites")) || [];
    customWebsites = customWebsites.filter(site => site.id !== id);
    localStorage.setItem("cse_custom_websites", JSON.stringify(customWebsites));

    websites = websites.filter(site => site.id !== id);
    favorites.delete(id);
    saveFavorites();

    renderCategoryTabs();
    renderWebsites();
    showToast("Website link removed successfully!");
}

// Render Category Tabs dynamically
function renderCategoryTabs() {
    categoryTabsContainer.innerHTML = "";

    // Count websites per category
    const counts = { all: websites.length };
    websites.forEach(site => {
        counts[site.category] = (counts[site.category] || 0) + 1;
    });

    Object.keys(categoryLabels).forEach(catKey => {
        const count = counts[catKey] || 0;
        const tab = document.createElement("button");
        tab.className = `category-tab ${catKey === activeCategory ? "active" : ""}`;
        tab.dataset.category = catKey;

        const iconClass = categoryIcons[catKey] || "fa-bookmark";
        tab.innerHTML = `
            <i class="fas ${iconClass}"></i>
            <span>${categoryLabels[catKey]}</span>
            <span class="count-badge">${count}</span>
        `;

        tab.addEventListener("click", () => {
            activeCategory = catKey;
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            categoryTabsContainer.classList.remove("mobile-menu-open");
            mobileCategoryToggle?.setAttribute("aria-expanded", "false");
            renderWebsites();
        });

        categoryTabsContainer.appendChild(tab);
    });
}

// Filter Websites based on category, search query, favorites
function getFilteredWebsites() {
    return websites.filter(site => {
        // Category Filter
        const matchesCategory = activeCategory === "all" || site.category === activeCategory;

        // Search Query Filter
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch = !query || 
            site.title.toLowerCase().includes(query) ||
            site.description.toLowerCase().includes(query) ||
            site.tags.some(tag => tag.toLowerCase().includes(query)) ||
            (categoryLabels[site.category] && categoryLabels[site.category].toLowerCase().includes(query));

        // Favorites Filter
        const matchesFavorites = !showFavoritesOnly || favorites.has(site.id);

        return matchesCategory && matchesSearch && matchesFavorites;
    });
}

// Render Website Cards Grid
function renderWebsites() {
    const filtered = getFilteredWebsites();
    websiteGrid.innerHTML = "";
    sarkariBoxGrid.innerHTML = "";

    // Update stats counters
    visibleCountEl.textContent = filtered.length;
    totalCountEl.textContent = websites.length;

    renderSarkariBoxes(filtered);

    if (filtered.length === 0) {
        websiteGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search empty-icon"></i>
                <h3 class="empty-title">Koi Website Nahi Mili!</h3>
                <p class="empty-desc">Aapki search query ya selected category ke liye koi result nahi mila. Search text change karein ya naye links add karein.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(site => {
        const isFav = favorites.has(site.id);
        const card = document.createElement("div");
        card.className = "card";

        // Category display label
        const catLabel = categoryLabels[site.category] || site.category;
        
        // Custom user added indicator
        const isCustom = site.isCustom === true;

        const tagsHTML = site.tags && site.tags.length > 0 
            ? site.tags.map(t => `<span class="tag">#${t}</span>`).join("")
            : "";

        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon-title">
                    <div class="card-icon">
                        <i class="fas ${getIconForSite(site)}"></i>
                    </div>
                    <div>
                        <h3 class="card-title">${escapeHTML(site.title)}</h3>
                    </div>
                </div>
                <button class="btn-star ${isFav ? "active" : ""}" title="${isFav ? "Remove from Favorites" : "Add to Favorites"}" data-id="${site.id}">
                    <i class="${isFav ? "fas" : "far"} fa-star"></i>
                </button>
            </div>
            
            <p class="card-description">${escapeHTML(site.description)}</p>
            
            <div class="card-tags">
                ${tagsHTML}
            </div>

            <div class="card-footer">
                <span class="category-badge"><i class="fas fa-folder-open"></i> ${escapeHTML(catLabel)}</span>
                <div class="card-actions">
                    <button class="btn-card-action btn-copy-link" data-url="${site.url}" title="Copy Link">
                        <i class="fas fa-copy"></i>
                    </button>
                    ${isCustom ? `
                        <button class="btn-card-action btn-delete-card" data-id="${site.id}" title="Delete Link">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    ` : ''}
                    <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-visit">
                        Visit <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;

        // Event listener for Favorite star
        const starBtn = card.querySelector(".btn-star");
        starBtn.addEventListener("click", () => toggleFavorite(site));

        // Copy Link Action
        const copyBtn = card.querySelector(".btn-copy-link");
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(site.url).then(() => {
                showToast("Link clipboard me copy ho gaya!");
            }).catch(err => {
                console.error("Copy failed", err);
            });
        });

        // Delete Custom Link Action
        const deleteBtn = card.querySelector(".btn-delete-card");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", () => {
                if (confirm(`Kya aap "${site.title}" link ko delete karna chahte hain?`)) {
                    deleteCustomWebsite(site.id);
                }
            });
        }

        websiteGrid.appendChild(card);
    });
}

function renderSarkariBoxes(filtered) {
    if (filtered.length === 0) {
        sarkariBoxGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search empty-icon"></i>
                <h3 class="empty-title">Koi Website Nahi Mili!</h3>
                <p class="empty-desc">Search ya category change karke dobara try karein.</p>
            </div>
        `;
        return;
    }

    const visibleCategories = activeCategory === "all"
        ? sarkariBoxConfig
        : sarkariBoxConfig.filter(config => config.category === activeCategory);

    visibleCategories.forEach(config => {
        const categorySites = filtered.filter(site => site.category === config.category);
        if (categorySites.length === 0) return;

        const box = document.createElement("section");
        box.className = "sarkari-box";
        box.style.setProperty("--box-border", config.borderColor);
        box.style.setProperty("--box-header-bg", config.headerBg);
        box.innerHTML = `
            <div class="sarkari-box-header">${config.title}</div>
            <div class="sarkari-box-body"></div>
        `;

        const body = box.querySelector(".sarkari-box-body");
        categorySites.forEach(site => body.appendChild(createSarkariLink(site)));
        sarkariBoxGrid.appendChild(box);
    });
}

function createSarkariLink(site) {
    const item = document.createElement("div");
    item.className = "sarkari-link-item";
    item.innerHTML = `
        <a class="link-left-content" href="${escapeAttribute(site.url)}" target="_blank" rel="noopener noreferrer">
            <i class="fas ${getIconForSite(site)}"></i>
            <span class="link-title-text">${escapeHTML(site.title)}</span>
        </a>
        <div class="link-badges">
            ${site.isNew ? `<span class="badge-new">${escapeHTML(site.badgeText || "NEW")}</span>` : ""}
            ${site.tags && site.tags[0] ? `<span class="badge-tag">#${escapeHTML(site.tags[0])}</span>` : ""}
            <button class="btn-star-mini ${favorites.has(site.id) ? "active" : ""}" title="Favorite">
                <i class="${favorites.has(site.id) ? "fas" : "far"} fa-star"></i>
            </button>
            ${site.isCustom ? `<button class="btn-delete-mini" title="Delete Link"><i class="fas fa-trash-alt"></i></button>` : ""}
        </div>
    `;

    item.querySelector(".btn-star-mini").addEventListener("click", () => toggleFavorite(site));
    const deleteButton = item.querySelector(".btn-delete-mini");
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            if (confirm(`Kya aap "${site.title}" link ko delete karna chahte hain?`)) {
                deleteCustomWebsite(site.id);
            }
        });
    }
    return item;
}

function toggleFavorite(site) {
    if (favorites.has(site.id)) {
        favorites.delete(site.id);
        showToast(`Removed "${site.title}" from favorites`);
    } else {
        favorites.add(site.id);
        showToast(`Added "${site.title}" to favorites`);
    }
    saveFavorites();
    renderWebsites();
}

function setView(view) {
    currentView = view;
    const showSarkari = view === "sarkari";
    sarkariBoxGrid.classList.toggle("hidden", !showSarkari);
    websiteGrid.classList.toggle("hidden", showSarkari);
    btnSarkariView.classList.toggle("active", showSarkari);
    btnCardView.classList.toggle("active", !showSarkari);
}

// Icon mapper for website card
function getIconForSite(site) {
    if (site.icon === "code" || site.category === "coding") return "fa-code";
    if (site.category === "webdev") return "fa-laptop-code";
    if (site.category === "learning") return "fa-graduation-cap";
    if (site.category === "ai") return "fa-brain";
    if (site.category === "tools") return "fa-screwdriver-wrench";
    if (site.category === "jobs") return "fa-briefcase";
    if (site.category === "result") return "fa-square-poll-vertical";
    if (site.category === "government") return "fa-building-columns";
    if (site.category === "bihar") return "fa-school";
    if (site.category === "aadhaar") return "fa-id-card";
    return "fa-globe";
}

// Setup Event Listeners
function setupEventListeners() {
    btnSarkariView.addEventListener("click", () => setView("sarkari"));
    btnCardView.addEventListener("click", () => setView("cards"));

    contactToggle?.addEventListener("click", () => {
        const contactStrip = contactToggle.closest(".contact-strip");
        const isOpen = contactStrip.classList.toggle("contact-open");
        contactToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileQuickToggle?.addEventListener("click", () => {
        const quickAccess = mobileQuickToggle.closest(".quick-access");
        const isOpen = quickAccess.classList.toggle("quick-open");
        mobileQuickToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".quick-access-link").forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;
            document.querySelectorAll(".category-tab").forEach(tab => {
                tab.classList.toggle("active", tab.dataset.category === activeCategory);
            });
            renderWebsites();
            document.getElementById("categoryTabs").scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });

    // Search input
    mobileSearchToggle?.addEventListener("click", () => {
        const isOpen = document.querySelector(".search-box").classList.toggle("mobile-search-open");
        mobileSearchToggle.setAttribute("aria-label", isOpen ? "Close search" : "Open search");
        if (isOpen) searchInput.focus();
    });

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.length > 0) {
            btnClearSearch.classList.add("visible");
        } else {
            btnClearSearch.classList.remove("visible");
        }
        renderWebsites();
    });

    // Clear search
    btnClearSearch.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        btnClearSearch.classList.remove("visible");
        renderWebsites();
    });

    mobileCategoryToggle?.addEventListener("click", () => {
        const isOpen = categoryTabsContainer.classList.toggle("mobile-menu-open");
        mobileCategoryToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Theme toggle
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Favorites filter toggle
    favoritesFilterBtn.addEventListener("click", () => {
        showFavoritesOnly = !showFavoritesOnly;
        if (showFavoritesOnly) {
            favoritesFilterBtn.style.background = "#f59e0b";
            favoritesFilterBtn.style.color = "#ffffff";
            showToast("Sirf Favorites dikhayi de rahe hain");
        } else {
            favoritesFilterBtn.style.background = "";
            favoritesFilterBtn.style.color = "";
        }
        renderWebsites();
    });

    mobileWebMenuBtn?.addEventListener("click", () => {
        const isOpen = mobileWebMenu.classList.toggle("is-open");
        mobileWebMenuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mobileWebMenu?.querySelectorAll("[data-menu-action]").forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.menuAction;
            if (action === "box") btnSarkariView.click();
            if (action === "cards") btnCardView.click();
            if (action === "favorites") favoritesFilterBtn.click();
            if (action === "theme") themeToggleBtn.click();
            if (action === "categories") mobileCategoryToggle?.click();
            if (action === "quick") mobileQuickToggle?.click();
            mobileWebMenu.classList.remove("is-open");
            mobileWebMenuBtn.setAttribute("aria-expanded", "false");
        });
    });

    mobileMenuSearchInput?.addEventListener("input", event => {
        searchInput.value = event.target.value;
        searchQuery = event.target.value;
        renderWebsites();
    });

    // Modal support remains optional for future admin-only builds.
    if (!addWebsiteBtn || !websiteModal || !addWebsiteForm) {
        setView(currentView);
        return;
    }

    addWebsiteBtn.addEventListener("click", () => {
        websiteModal.classList.add("active");
    });

    const closeModal = () => {
        websiteModal.classList.remove("active");
        addWebsiteForm.reset();
    };

    closeModalBtn.addEventListener("click", closeModal);
    cancelModalBtn.addEventListener("click", closeModal);

    websiteModal.addEventListener("click", (e) => {
        if (e.target === websiteModal) closeModal();
    });

    // Form submit for new website
    addWebsiteForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("siteTitle").value.trim();
        let url = document.getElementById("siteUrl").value.trim();
        const category = document.getElementById("siteCategory").value;
        const description = document.getElementById("siteDescription").value.trim();
        const tagsInput = document.getElementById("siteTags").value.trim();

        if (!title || !url) {
            alert("Kripya Title aur URL donon bharein!");
            return;
        }

        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        const tags = tagsInput ? tagsInput.split(",").map(t => t.trim()).filter(t => t.length > 0) : [category];

        const newSite = {
            id: Date.now().toString(),
            title,
            url,
            category,
            description: description || "No description provided.",
            tags,
            isCustom: true
        };

        saveCustomWebsites(newSite);
        websites.push(newSite);

        renderCategoryTabs();
        renderWebsites();
        closeModal();
        showToast(`"${title}" naya link successfully add ho gaya!`);
    });

    setView(currentView);
}

// Show Toast notification
function showToast(message) {
    const toastMsg = toastEl.querySelector(".toast-message");
    toastMsg.textContent = message;
    toastEl.classList.add("show");

    setTimeout(() => {
        toastEl.classList.remove("show");
    }, 3000);
}

// Helper: Escape HTML
function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function escapeAttribute(str) {
    return escapeHTML(String(str)).replace(/`/g, "&#96;");
}
