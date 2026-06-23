// Property Data (Scraped from Sallami Imobiliária)
const propertiesData = [
  {
    ref: "57",
    title: "Propriedade Rural 21 hectares à venda",
    category: "area-rural",
    purpose: "venda",
    location: "ZONA RURAL, CAMPO NOVO - MG",
    price: 1200000,
    oldPrice: null,
    image: "assets/rural_area.png",
    description:
      "Excelente propriedade rural de 21 hectares localizada na Zona Rural de CAMPO NOVO. Solo altamente fértil, perfeito para cultivo agrícola ou atividade pecuária. Conta com boa topografia, piquetes divididos e fartura de água com córrego natural corrente. Uma das melhores opções de terra na região de CAMPO NOVO.",
    specs: {
      quartos: 0,
      suites: 0,
      banheiros: 0,
      area: "21 ha",
      vagas: 0,
    },
  },
  {
    ref: "39",
    title: "Terreno à venda, PLANALTO, CAMPO NOVO - MG",
    category: "terreno",
    purpose: "venda",
    location: "PLANALTO, CAMPO NOVO - MG",
    price: 60000,
    oldPrice: null,
    image: "assets/modern_house.png",
    description:
      "Excelente terreno residencial à venda no Bairro Planalto em CAMPO NOVO - MG. Terreno plano, seco, pronto para receber construção imediata. Bairro tranquilo, com rede de energia elétrica, iluminação pública e água encanada já disponíveis na rua. Perfeito para quem busca sair do aluguel ou investir na casa própria.",
    specs: {
      quartos: 0,
      suites: 0,
      banheiros: 0,
      area: "360 m²",
      vagas: 0,
    },
  },
  {
    ref: "11",
    title: "Vende Terreno 420m², Bairro Jequitibá- CAMPO NOVO - MG",
    category: "terreno",
    purpose: "venda",
    location: "Jequitibá, CAMPO NOVO - MG",
    price: 110000,
    oldPrice: 120000,
    image: "assets/modern_house.png",
    description:
      "Ótima oportunidade de investimento! Amplo terreno com 420 metros quadrados, situado no conceituado Bairro Jequitibá em CAMPO NOVO. Lote com demarcações corretas, em rua projetada para asfalto próximo. Localização em franco desenvolvimento com forte índice de valorização imobiliária residencial.",
    specs: {
      quartos: 0,
      suites: 0,
      banheiros: 0,
      area: "420 m²",
      vagas: 0,
    },
  },
  {
    ref: "62",
    title: "Casa à venda, 04 QUARTOS, PLANALTO, CAMPO NOVO - MG",
    category: "casa",
    purpose: "venda",
    location: "PLANALTO, CAMPO NOVO - MG",
    price: 450000,
    oldPrice: null,
    image: "assets/modern_house.png",
    description:
      "Belíssima e espaçosa residência contendo 4 quartos, ideal para famílias grandes. Localizada no Bairro Planalto, a casa dispõe de salas integradas, copa, cozinha bem iluminada, despensa, área de serviços e uma excelente varanda na frente. Garagem coberta e quintal totalmente murado proporcionando total segurança.",
    specs: {
      quartos: 4,
      suites: 0,
      banheiros: 2,
      area: "180 m²",
      vagas: 2,
    },
  },
  {
    ref: "64",
    title: "Terreno à venda, INDUSTRIAL, CAMPO NOVO - MG",
    category: "terreno",
    purpose: "venda",
    location: "INDUSTRIAL, CAMPO NOVO - MG",

    price: 40000,
    oldPrice: null,
    image: "assets/modern_house.png",
    description:
      "Terreno urbano comercial/residencial de 300m² no Bairro Industrial de CAMPO NOVO. Lote plano e limpo, muito bem localizado na região industrial, ideal para pequenas oficinas, depósitos ou moradias operárias. Excelente custo-benefício.",
    specs: {
      quartos: 0,
      suites: 0,
      banheiros: 0,
      area: "300 m²",
      vagas: 0,
    },
  },
  {
    ref: "51",
    title: "Casa à venda Apta Financiar, CAMPO NOVO - MG",
    category: "casa",
    purpose: "venda",
    location: "JATOBA, CAMPO NOVO - MG",
    price: 260000,
    oldPrice: 290000,
    image: "assets/modern_house.png",
    description:
      "Aproveite esta excelente promoção! Casa nova, recém-construída e com documentação 100% regularizada, totalmente apta para financiamento por qualquer banco. O imóvel conta com 1 quarto aconchegante, 1 suíte confortável, banheiro social, sala de estar espaçosa integrada à cozinha e área de serviço externa. Acabamento fino.",
    specs: {
      quartos: 2,
      suites: 1,
      banheiros: 2,
      area: "110 m²",
      vagas: 2,
    },
  },
  {
    ref: "41",
    title: "Terreno Comercial para locação, ESPLANADA DO BOSQUE, CAMPO NOVO - MG",
    category: "terreno-comercial",
    purpose: "locacao",
    location: "RO 010, LOTEAMENTO ESPLANADA DO BOSQUE, CAMPO NOVO - MG",
    price: 2400,
    oldPrice: null,
    image: "assets/luxury_condo.png",
    description:
      "Excelente terreno comercial disponível para locação, localizado estrategicamente nas margens da rodovia RO-010, no Loteamento Esplanada do Bosque. Ponto comercial com altíssima visibilidade, ideal para exposição de máquinas agrícolas, caminhões, revendedora de veículos, depósitos de materiais ou construção de galpão sob medida (built to suit).",
    specs: {
      quartos: 0,
      suites: 0,
      banheiros: 0,
      area: "600 m²",
      vagas: 0,
    },
  },
  {
    ref: "60",
    title: "IMOVEL Comercial à venda, Centro, CAMPO NOVO - MG",
    category: "comercio",
    purpose: "venda",
    location: "Centro, CAMPO NOVO - MG",
    price: 1300000,
    oldPrice: 1900000,
    image: "assets/luxury_condo.png",
    description:
      "Excelente prédio comercial com preço promocional reduzido. Localizado no coração do Centro de CAMPO NOVO, este imóvel tem grande fluxo de pedestres e carros. Possui amplo salão comercial térreo com portas de enrolar, divisórias, mezanino para escritório, banheiros masculino/feminino adaptados e refeitório.",
    specs: {
      quartos: 0,
      suites: 0,
      banheiros: 3,
      area: "350 m²",
      vagas: 2,
    },
  },
  {
    ref: "19",
    title: "Edifício Prédio à venda, Centro, CAMPO NOVO - MG",
    category: "predio-e-edificio",
    purpose: "venda",
    location: "Centro, CAMPO NOVO - MG",
    price: 650000,
    oldPrice: 700000,
    image: "assets/luxury_condo.png",
    description:
      "Edifício residencial com fins comerciais no Centro de CAMPO NOVO. Possui 2 salas comerciais amplas no piso inferior e 4 apartamentos de 2 quartos no piso superior. Excelente oportunidade para investidores que desejam renda imediata através da locação mensal das unidades.",
    specs: {
      quartos: 8,
      suites: 0,
      banheiros: 6,
      area: "480 m²",
      vagas: 4,
    },
  },
  {
    ref: "3",
    title: "Casa à venda, Centro, CAMPO NOVO - MG, 196,95m² construído",
    category: "casa",
    purpose: "venda",
    location: "Centro, CAMPO NOVO - MG",
    price: 750000,
    oldPrice: 790000,
    image: "assets/modern_house.png",
    description:
      "Bela casa de alvenaria à venda no Centro de CAMPO NOVO. Conta com 196,95m² de área construída em lote de 450m². Dispõe de 3 dormitórios, sendo 1 suíte master, ampla sala de estar e jantar conjugadas, copa, cozinha planejada, edícula com churrasqueira no fundo e lavanderia coberta. Casa muito segura e confortável.",
    specs: {
      quartos: 3,
      suites: 1,
      banheiros: 2,
      area: "197 m²",
      vagas: 2,
    },
  },
  {
    ref: "23",
    title: "Casa à venda Alto Padrão, CONDOMÍNIO KLUSKA, CAMPO NOVO - MG",
    category: "casa",
    purpose: "venda",
    location: "CONDOMÍNIO KLUSKA, Centro, CAMPO NOVO - MG",
    price: 1250000,
    oldPrice: 1400000,
    image: "assets/luxury_condo.png",
    description:
      "Extraordinária casa térrea de alto padrão localizada no Condomínio Fechado Kluska, o mais seguro e cobiçado de CAMPO NOVO. Acabamento primoroso com piso em porcelanato polido de grandes formatos, rebaixamento em gesso com projeto luminotécnico instalado. Possui 3 amplos quartos sendo 2 suítes elegantes, sala de estar com pé direito duplo, cozinha gourmet com churrasqueira integrada, quintal gramado e garagem coberta para até 4 veículos.",
    specs: {
      quartos: 3,
      suites: 2,
      banheiros: 3,
      area: "240 m²",
      vagas: 4,
    },
  },
];

// Active Filter States
let filters = {
  searchQuery: "",
  purpose: "todos",
  category: "todos",
  rooms: "todos",
  maxPrice: 1500000,
};

// Global App Initialization
document.addEventListener("DOMContentLoaded", () => {
  initScrollVideo();
  initFilters();
  initDrawer();
  initFinderForm();
  renderProperties();

  // Header scrolled class trigger
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu trigger
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu on nav link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});

/* --- Scroll-Controlled Video Hero Logic --- */
function initScrollVideo() {
  const video = document.getElementById("hero-video");
  const scrollWrapper = document.getElementById("hero-trigger");
  const slides = document.querySelectorAll(".hero-slide");
  const progressBar = document.getElementById("video-progress");

  let videoDuration = 8; // default guess if metadata fails
  let ticking = false;

  video.addEventListener("loadedmetadata", () => {
    videoDuration = video.duration;
  });

  if (video.readyState >= 1) {
    videoDuration = video.duration;
  }

  function updateVideoFrame() {
    const rect = scrollWrapper.getBoundingClientRect();
    const wrapperHeight = rect.height;
    const viewHeight = window.innerHeight;

    // Check if the scroll container is visible
    const scrollTop = -rect.top;
    const maxScroll = wrapperHeight - viewHeight;

    let progress = scrollTop / maxScroll;
    progress = Math.max(0, Math.min(1, progress));

    // Set video frame
    if (videoDuration) {
      video.currentTime = progress * videoDuration;
    }

    // Fill the progress bar
    if (progressBar) {
      progressBar.style.width = `${progress * 100}%`;
    }

    // Display textual overlays on specific scroll intervals
    slides.forEach((slide, index) => {
      let active = false;
      if (index === 0 && progress < 0.3) {
        active = true;
      } else if (index === 1 && progress >= 0.3 && progress < 0.65) {
        active = true;
      } else if (index === 2 && progress >= 0.65) {
        active = true;
      }

      if (active) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateVideoFrame);
      ticking = true;
    }
  });
}

/* --- Interactive Filter & Search Controls --- */
function initFilters() {
  const searchInput = document.getElementById("search-input");
  const purposeButtons = document.querySelectorAll("#purpose-filter .purpose-btn");
  const categorySelect = document.getElementById("category-select");
  const roomButtons = document.querySelectorAll("#rooms-filter .room-btn");
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  const clearBtn = document.getElementById("clear-filters-btn");
  const resetBtn = document.getElementById("reset-filters-btn");

  // Search Keyup
  searchInput.addEventListener("input", (e) => {
    filters.searchQuery = e.target.value.toLowerCase().trim();
    renderProperties();
  });

  // Purpose buttons (Compra/Aluguel)
  purposeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      purposeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filters.purpose = btn.dataset.purpose;
      renderProperties();
    });
  });

  // Category select
  categorySelect.addEventListener("change", (e) => {
    filters.category = e.target.value;
    renderProperties();
  });

  // Rooms buttons
  roomButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      roomButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filters.rooms = btn.dataset.rooms;
      renderProperties();
    });
  });

  // Price range slider
  priceRange.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    filters.maxPrice = val;

    if (val >= 1500000) {
      priceValue.textContent = "Qualquer";
    } else {
      priceValue.textContent = `Até R$ ${val.toLocaleString("pt-BR")}`;
    }

    renderProperties();
  });

  // Clear filters
  function resetAll() {
    filters = {
      searchQuery: "",
      purpose: "todos",
      category: "todos",
      rooms: "todos",
      maxPrice: 1500000,
    };

    searchInput.value = "";
    purposeButtons.forEach((b) => b.classList.remove("active"));
    document.querySelector("[data-purpose='todos']").classList.add("active");
    categorySelect.value = "todos";
    roomButtons.forEach((b) => b.classList.remove("active"));
    document.querySelector("[data-rooms='todos']").classList.add("active");
    priceRange.value = 1500000;
    priceValue.textContent = "Qualquer";

    renderProperties();
  }

  clearBtn.addEventListener("click", resetAll);
  resetBtn.addEventListener("click", resetAll);
}

// Global filter helper setter for external click (like footer options)
window.setCategoryFilter = function (category) {
  const categorySelect = document.getElementById("category-select");
  if (categorySelect) {
    categorySelect.value = category;
    filters.category = category;
    renderProperties();
  }
};

/* --- Render Properties Engine --- */
function renderProperties() {
  const grid = document.getElementById("properties-grid");
  const countLabel = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");

  // Filter Array
  const filtered = propertiesData.filter((item) => {
    // Search keyword query (matching title, location, ref, or description)
    if (filters.searchQuery) {
      const matchText = `${item.title} ${item.location} ref ${item.ref} ${item.description}`.toLowerCase();
      if (!matchText.includes(filters.searchQuery)) return false;
    }

    // Purpose (Comprar/Alugar)
    if (filters.purpose !== "todos" && item.purpose !== filters.purpose) return false;

    // Category (casa, terreno, etc.)
    if (filters.category !== "todos" && item.category !== filters.category) return false;

    // Rooms
    if (filters.rooms !== "todos") {
      const minRooms = parseInt(filters.rooms);
      if (item.specs.quartos < minRooms) return false;
    }

    // Max Price
    if (item.price > filters.maxPrice) return false;

    return true;
  });

  // Render
  grid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    grid.style.display = "none";
    countLabel.textContent = "Nenhum imóvel encontrado";
  } else {
    noResults.style.display = "none";
    grid.style.display = "grid";
    countLabel.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? "imóvel" : "imóveis"}`;

    filtered.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "property-card";
      card.style.animationDelay = `${index * 0.05}s`;

      const priceFormatted = item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      const oldPriceFormatted = item.oldPrice
        ? item.oldPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        : null;

      // Spec summaries
      let specSummaryHtml = `
        <div class="spec-item">
          <span>📏</span>
          <span>${item.specs.area}</span>
        </div>
      `;

      if (item.specs.quartos > 0) {
        specSummaryHtml += `
          <div class="spec-item">
            <span>🛏️</span>
            <span>${item.specs.quartos} Quarto${item.specs.quartos > 1 ? "s" : ""}</span>
          </div>
        `;
      }

      if (item.specs.banheiros > 0) {
        specSummaryHtml += `
          <div class="spec-item">
            <span>🚿</span>
            <span>${item.specs.banheiros} Banheiro${item.specs.banheiros > 1 ? "s" : ""}</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${item.title}" class="card-img">
          <div class="card-badges">
            <span class="badge-purpose ${item.purpose}">${item.purpose === "venda" ? "Venda" : "Aluguel"}</span>
            ${item.oldPrice ? `<span class="badge-promo">Oferta</span>` : ""}
          </div>
          <span class="card-ref">Ref. ${item.ref}</span>
        </div>
        <div class="card-info">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-address">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${item.location.split(",")[0]}</span>
          </p>
          <div class="card-specs">
            ${specSummaryHtml}
          </div>
          <div class="card-price-row">
            <div class="card-price-box">
              ${oldPriceFormatted ? `<span class="promo-tag-label">De ${oldPriceFormatted}</span>` : ""}
              <span class="card-price">${priceFormatted}</span>
            </div>
            <button class="card-details-btn" onclick="openPropertyDetails('${item.ref}')">Ver Detalhes</button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }
}

/* --- Drawer Detail Overlay Slide Logic --- */
function initDrawer() {
  const overlay = document.getElementById("detail-drawer-overlay");
  const drawer = document.getElementById("detail-drawer");
  const closeBtn = document.getElementById("drawer-close");

  function closeDrawer() {
    overlay.classList.remove("active");
    drawer.classList.remove("active");
    document.body.style.overflow = ""; // restore scrolling
  }

  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDrawer();
  });

  // Close drawer with escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

window.openPropertyDetails = function (ref) {
  const item = propertiesData.find((p) => p.ref === ref);
  if (!item) return;

  const overlay = document.getElementById("detail-drawer-overlay");
  const drawer = document.getElementById("detail-drawer");

  // Populate drawer
  document.getElementById("drawer-img").src = item.image;
  document.getElementById("drawer-img").alt = item.title;

  const purposeBadge = document.getElementById("drawer-purpose-badge");
  purposeBadge.textContent = item.purpose === "venda" ? "Venda" : "Locação";
  purposeBadge.className = `drawer-purpose-badge ${item.purpose}`;

  document.getElementById("drawer-ref").textContent = `Referência: ${item.ref}`;
  document.getElementById("drawer-title").textContent = item.title;
  document.getElementById("drawer-address").textContent = item.location;

  const priceFormatted = item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("drawer-price").textContent = priceFormatted;

  const oldPriceLabel = document.getElementById("drawer-old-price");
  if (item.oldPrice) {
    const oldPriceFormatted = item.oldPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    oldPriceLabel.textContent = `De: ${oldPriceFormatted}`;
    oldPriceLabel.style.display = "block";
  } else {
    oldPriceLabel.style.display = "none";
  }

  document.getElementById("drawer-description").textContent = item.description;

  // Build specs grid
  const specsGrid = document.getElementById("drawer-specs-grid");
  specsGrid.innerHTML = `
    <div class="drawer-spec-item">
      <span class="drawer-spec-icon">📐</span>
      <span class="drawer-spec-val">${item.specs.area}</span>
      <span class="drawer-spec-lbl">Área total</span>
    </div>
  `;

  if (item.specs.quartos > 0) {
    specsGrid.innerHTML += `
      <div class="drawer-spec-item">
        <span class="drawer-spec-icon">🛏️</span>
        <span class="drawer-spec-val">${item.specs.quartos}</span>
        <span class="drawer-spec-lbl">Quarto(s)</span>
      </div>
    `;
  }

  if (item.specs.suites > 0) {
    specsGrid.innerHTML += `
      <div class="drawer-spec-item">
        <span class="drawer-spec-icon">⭐</span>
        <span class="drawer-spec-val">${item.specs.suites}</span>
        <span class="drawer-spec-lbl">Suíte(s)</span>
      </div>
    `;
  }

  if (item.specs.banheiros > 0) {
    specsGrid.innerHTML += `
      <div class="drawer-spec-item">
        <span class="drawer-spec-icon">🚿</span>
        <span class="drawer-spec-val">${item.specs.banheiros}</span>
        <span class="drawer-spec-lbl">Banheiro(s)</span>
      </div>
    `;
  }

  if (item.specs.vagas > 0) {
    specsGrid.innerHTML += `
      <div class="drawer-spec-item">
        <span class="drawer-spec-icon">🚗</span>
        <span class="drawer-spec-val">${item.specs.vagas}</span>
        <span class="drawer-spec-lbl">Vaga(s)</span>
      </div>
    `;
  }

  // Build WhatsApp button link
  const message = `Olá Aurora Imobiliária! Fiquei interessado no imóvel Ref. ${item.ref} (${item.title}). Gostaria de agendar uma visita ou receber mais informações.`;
  const encodedMsg = encodeURIComponent(message);
  document.getElementById("drawer-whatsapp-btn").href = `https://api.whatsapp.com/send?phone=5569984866004&text=${encodedMsg}`;

  // Show drawer
  overlay.classList.add("active");
  drawer.classList.add("active");
  document.body.style.overflow = "hidden"; // lock page scroll while viewing details
};

/* --- Finder Wizard Form Submit Logic --- */
function initFinderForm() {
  const form = document.getElementById("finder-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("finder-name").value;
    const purpose = document.getElementById("finder-purpose").value;
    const type = document.getElementById("finder-type").value;
    const budget = document.getElementById("finder-budget").value;
    const rooms = document.getElementById("finder-rooms").value;
    const notes = document.getElementById("finder-notes").value;

    // Build Whatsapp message
    const message = `Olá Aurora Imobiliária! Gostaria que encontrassem um imóvel sob medida para mim. Seguem minhas preferências:
- Nome: ${name}
- Ação: Quero ${purpose}
- Tipo: ${type}
- Orçamento: ${budget || "Não definido"}
- Quartos mínimos: ${rooms}
- Observações/Bairro: ${notes || "Sem observações"}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5569984866004&text=${encodedMsg}`;

    // Redirect to whatsapp
    window.open(whatsappUrl, "_blank");
  });
}

