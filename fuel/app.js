import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const translations = {
  tr: {
    app_title: "RoadFuel Defteri",
    app_subtitle: "Araclarin yakit gecmisini, maliyetini ve verimliligini takip edin",
    language: "Dil",
    lang_tr: "Turkce",
    lang_en: "Ingilizce",
    dashboard: "Panel",
    create_vehicle: "Arac Ekle",
    create_vehicle_desc: "Her araci bir kez kaydedin, sonra yakit fislerini ekleyin.",
    vehicle_name: "Arac Adi",
    plate: "Plaka",
    brand: "Marka",
    model: "Model",
    year: "Yil",
    add_vehicle: "Arac Ekle",
    edit_vehicle: "Arac Bilgilerini Duzenle",
    save_vehicle_changes: "Arac Bilgilerini Kaydet",
    quick_actions: "Hizli Islemler",
    open_edit_popup: "Arac Bilgilerini Duzenle",
    open_fuel_popup: "Yeni Yakit Kaydi",
    close: "Kapat",
    total_records: "Toplam Kayit",
    total_fuel: "Toplam Yakit (L)",
    total_cost: "Toplam Maliyet",
    vehicles: "Araclar",
    entries: "Kayit",
    avg_price_per_l: "Ortalama Litre Fiyati",
    cost_per_km: "KM Basi Maliyet",
    l_per_100km: "100 KM Tuketim",
    open_detail: "Detaya Git",
    delete: "Sil",
    no_vehicles: "Henuz arac yok",
    create_first_vehicle: "Ilk aracinizi yukaridaki formdan ekleyin.",
    latest_fuel: "Son Yakit Alimlari",
    date: "Tarih",
    vehicle: "Arac",
    type: "Tur",
    location: "Konum",
    liters: "Miktar",
    total: "Toplam",
    km: "KM",
    no_fuel_records: "Henuz yakit kaydi yok.",
    back_to_dashboard: "Panele Don",
    add_fuel_record: "Yakit Kaydi Ekle",
    fuel_type: "Yakit Turu",
    select: "Seciniz",
    gasoline: "Benzin",
    diesel: "Dizel",
    lpg: "LPG",
    electric: "Elektrik",
    liters_or_kwh: "Litre / kWh",
    total_cost_tl: "Toplam Tutar (TL)",
    odometer: "Kilometre (KM)",
    station_location: "Istasyon / Konum",
    payment_method: "Odeme Yontemi",
    notes: "Notlar",
    save_fuel_record: "Yakit Kaydini Kaydet",
    total_entries: "Toplam Kayit",
    distance: "Mesafe",
    fuel_history: "Yakit Gecmisi",
    amount: "Miktar",
    unit_price: "Birim Fiyat",
    payment: "Odeme",
    actions: "Islem",
    from_prev_km: "Oncekinden KM",
    tl_per_km_prev: "TL/KM (Onceki Kayda Gore)",
    l_per_100km_prev: "L/100KM (Onceki Kayda Gore)",
    avg_tl_per_km: "Ort. TL/KM",
    avg_l_per_100km: "Ort. L/100KM",
    no_vehicle_records: "Bu arac icin henuz kayit yok.",
    confirm_delete_vehicle: "Bu araci silmek istiyor musunuz?",
    confirm_delete_fuel: "Bu yakit kaydini silmek istiyor musunuz?",
    msg_vehicle_required: "Arac adi ve plaka zorunludur.",
    msg_plate_exists: "Bu plaka zaten kayitli.",
    msg_vehicle_added: "Arac eklendi.",
    msg_vehicle_updated: "Arac bilgileri guncellendi.",
    msg_year_invalid: "Yil gecersiz. Lutfen sayisal bir deger girin.",
    msg_numeric_required: "Litre, toplam tutar ve kilometre sayisal olmali.",
    msg_required_fields: "Tarih, konum ve yakit turu zorunludur.",
    msg_positive_values: "Degerler pozitif olmali.",
    msg_fuel_saved: "Yakit kaydi kaydedildi.",
    msg_vehicle_deleted: "Arac silindi.",
    msg_fuel_deleted: "Yakit kaydi silindi.",
    setup_title: "Supabase ayari gerekli",
    setup_desc: "GitHub Pages surumu icin veriler online PostgreSQL veritabaninda tutulur. Asagidaki ayari tamamlamadan uygulama calismaz.",
    setup_step_1: "Supabase projesi ac",
    setup_step_2: "schema.sql dosyasini calistir",
    setup_step_3: "config.js icine URL ve ANON KEY yaz",
    setup_step_4: "GitHub Pages workflow ile deploy et",
    loading: "Veriler yukleniyor...",
  },
  en: {
    app_title: "RoadFuel Ledger",
    app_subtitle: "Track vehicle fuel history, cost and efficiency insights",
    language: "Language",
    lang_tr: "Turkish",
    lang_en: "English",
    dashboard: "Dashboard",
    create_vehicle: "Create Vehicle",
    create_vehicle_desc: "Register each vehicle once, then add fuel receipts over time.",
    vehicle_name: "Vehicle Name",
    plate: "Plate",
    brand: "Brand",
    model: "Model",
    year: "Year",
    add_vehicle: "Add Vehicle",
    edit_vehicle: "Edit Vehicle Details",
    save_vehicle_changes: "Save Vehicle Changes",
    quick_actions: "Quick Actions",
    open_edit_popup: "Edit Vehicle Details",
    open_fuel_popup: "New Fuel Record",
    close: "Close",
    total_records: "Total Records",
    total_fuel: "Total Fuel (L)",
    total_cost: "Total Cost",
    vehicles: "Vehicles",
    entries: "Entries",
    avg_price_per_l: "Avg Price / L",
    cost_per_km: "Cost / KM",
    l_per_100km: "L / 100KM",
    open_detail: "Open Detail",
    delete: "Delete",
    no_vehicles: "No vehicles yet",
    create_first_vehicle: "Create your first vehicle using the form above.",
    latest_fuel: "Latest Fuel Purchases",
    date: "Date",
    vehicle: "Vehicle",
    type: "Type",
    location: "Location",
    liters: "Liters",
    total: "Total",
    km: "KM",
    no_fuel_records: "No fuel records yet.",
    back_to_dashboard: "Back to Dashboard",
    add_fuel_record: "Add Fuel Record",
    fuel_type: "Fuel Type",
    select: "Select",
    gasoline: "Gasoline",
    diesel: "Diesel",
    lpg: "LPG",
    electric: "Electric",
    liters_or_kwh: "Liters / kWh",
    total_cost_tl: "Total Cost (TL)",
    odometer: "Odometer (KM)",
    station_location: "Station / Location",
    payment_method: "Payment Method",
    notes: "Notes",
    save_fuel_record: "Save Fuel Record",
    total_entries: "Total Entries",
    distance: "Distance",
    fuel_history: "Fuel History",
    amount: "Amount",
    unit_price: "Unit Price",
    payment: "Payment",
    actions: "Actions",
    from_prev_km: "KM From Previous",
    tl_per_km_prev: "TL/KM (vs Previous)",
    l_per_100km_prev: "L/100KM (vs Previous)",
    avg_tl_per_km: "Avg TL/KM",
    avg_l_per_100km: "Avg L/100KM",
    no_vehicle_records: "No records for this vehicle yet.",
    confirm_delete_vehicle: "Delete this vehicle?",
    confirm_delete_fuel: "Delete this fuel record?",
    msg_vehicle_required: "Vehicle name and plate are required.",
    msg_plate_exists: "This plate already exists.",
    msg_vehicle_added: "Vehicle added.",
    msg_vehicle_updated: "Vehicle details updated.",
    msg_year_invalid: "Invalid year. Please enter a numeric value.",
    msg_numeric_required: "Liters, total cost and odometer must be numeric.",
    msg_required_fields: "Date, location and fuel type are required.",
    msg_positive_values: "Values must be positive.",
    msg_fuel_saved: "Fuel record saved.",
    msg_vehicle_deleted: "Vehicle deleted.",
    msg_fuel_deleted: "Fuel record deleted.",
    setup_title: "Supabase configuration required",
    setup_desc: "The GitHub Pages version stores data in an online PostgreSQL database. The app will not run until the setup below is completed.",
    setup_step_1: "Create a Supabase project",
    setup_step_2: "Run the schema.sql file",
    setup_step_3: "Put URL and ANON KEY into config.js",
    setup_step_4: "Deploy with the GitHub Pages workflow",
    loading: "Loading data...",
  },
};

const localeMap = { tr: "tr-TR", en: "en-US" };
const config = window.APP_CONFIG || {};
const isConfigured = Boolean(config.SUPABASE_URL && config.SUPABASE_ANON_KEY);
const supabase = isConfigured ? createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY) : null;

const state = {
  lang: localStorage.getItem("roadfuel-lang") || "tr",
  vehicles: [],
  records: [],
  loading: false,
  flash: null,
};

const appRoot = document.getElementById("app-root");
const modalRoot = document.getElementById("modal-root");
const flashContainer = document.getElementById("flash-container");
const setupBanner = document.getElementById("setup-banner");
const brandLink = document.getElementById("brand-link");
const brandSubtitle = document.getElementById("brand-subtitle");
const langSwitcher = document.getElementById("lang-switcher");

function t(key) {
  return translations[state.lang]?.[key] || translations.tr[key] || key;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatCurrency(value) {
  return new Intl.NumberFormat(localeMap[state.lang], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value || 0));
}

function formatDecimal(value) {
  return new Intl.NumberFormat(localeMap[state.lang], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value || 0));
}

function formatDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat(localeMap[state.lang]).format(new Date(`${value}T00:00:00`));
}

function setFlash(type, message) {
  state.flash = { type, message };
  renderFlash();
  window.clearTimeout(setFlash.timerId);
  setFlash.timerId = window.setTimeout(() => {
    state.flash = null;
    renderFlash();
  }, 3000);
}

function renderFlash() {
  flashContainer.innerHTML = state.flash
    ? `<article class="flash flash-${escapeHtml(state.flash.type)}">${escapeHtml(state.flash.message)}</article>`
    : "";
}

function renderHeader() {
  document.documentElement.lang = state.lang;
  document.title = t("app_title");
  brandLink.textContent = t("app_title");
  brandSubtitle.textContent = t("app_subtitle");
  langSwitcher.innerHTML = `
    <button type="button" class="lang-btn ${state.lang === "tr" ? "active" : ""}" data-lang="tr">${t("lang_tr")}</button>
    <button type="button" class="lang-btn ${state.lang === "en" ? "active" : ""}" data-lang="en">${t("lang_en")}</button>
  `;
}

function normalizeVehicle(row) {
  return {
    ...row,
    id: Number(row.id),
    year: row.year == null ? null : Number(row.year),
  };
}

function normalizeRecord(row) {
  return {
    ...row,
    id: Number(row.id),
    vehicle_id: Number(row.vehicle_id),
    liters: Number(row.liters),
    total_cost: Number(row.total_cost),
    odometer_km: Number(row.odometer_km),
  };
}

function byDisplayOrder(a, b) {
  if (a.fuel_date !== b.fuel_date) return a.fuel_date < b.fuel_date ? 1 : -1;
  if (a.odometer_km !== b.odometer_km) return b.odometer_km - a.odometer_km;
  return b.id - a.id;
}

function byCalcOrder(a, b) {
  if (a.odometer_km !== b.odometer_km) return a.odometer_km - b.odometer_km;
  if (a.fuel_date !== b.fuel_date) return a.fuel_date > b.fuel_date ? 1 : -1;
  return a.id - b.id;
}

function currentVehicleId() {
  const match = window.location.hash.match(/^#\/vehicle\/(\d+)$/);
  return match ? Number(match[1]) : null;
}

function recordsForVehicle(vehicleId, sortFn = byDisplayOrder) {
  return state.records.filter((record) => record.vehicle_id === vehicleId).sort(sortFn);
}

function calculateVehicleMetrics(vehicleId) {
  const rows = recordsForVehicle(vehicleId, byCalcOrder);
  if (!rows.length) {
    return {
      record_count: 0,
      total_liters: 0,
      total_cost: 0,
      avg_price_per_liter: 0,
      distance_km: 0,
      cost_per_km: 0,
      liters_per_100km: 0,
    };
  }

  const totalLiters = rows.reduce((sum, row) => sum + row.liters, 0);
  const totalCost = rows.reduce((sum, row) => sum + row.total_cost, 0);
  const distanceKm = Math.max(rows.at(-1).odometer_km - rows[0].odometer_km, 0);

  return {
    record_count: rows.length,
    total_liters: totalLiters,
    total_cost: totalCost,
    avg_price_per_liter: totalLiters > 0 ? totalCost / totalLiters : 0,
    distance_km: distanceKm,
    cost_per_km: distanceKm > 0 ? totalCost / distanceKm : 0,
    liters_per_100km: distanceKm > 0 ? (totalLiters / distanceKm) * 100 : 0,
  };
}

function buildRowMetrics(vehicleId) {
  const rows = recordsForVehicle(vehicleId, byCalcOrder);
  const metrics = {};
  let previous = null;
  let cumulativeDistance = 0;
  let cumulativeLiters = 0;
  let cumulativeCost = 0;

  for (const row of rows) {
    const data = {
      distance_from_prev: null,
      interval_cost_per_km: null,
      interval_liters_per_100km: null,
      avg_cost_per_km: null,
      avg_liters_per_100km: null,
    };

    if (previous) {
      const distance = row.odometer_km - previous.odometer_km;
      if (distance > 0) {
        cumulativeDistance += distance;
        cumulativeLiters += row.liters;
        cumulativeCost += row.total_cost;

        data.distance_from_prev = distance;
        data.interval_cost_per_km = row.total_cost / distance;
        data.interval_liters_per_100km = (row.liters / distance) * 100;
        data.avg_cost_per_km = cumulativeCost / cumulativeDistance;
        data.avg_liters_per_100km = (cumulativeLiters / cumulativeDistance) * 100;
      }
    }

    metrics[row.id] = data;
    previous = row;
  }

  return metrics;
}

function globalMetrics() {
  return {
    totalRecords: state.records.length,
    totalLiters: state.records.reduce((sum, row) => sum + row.liters, 0),
    totalCost: state.records.reduce((sum, row) => sum + row.total_cost, 0),
  };
}

function showSetupBanner() {
  if (isConfigured) {
    setupBanner.hidden = true;
    setupBanner.innerHTML = "";
    return;
  }

  setupBanner.hidden = false;
  setupBanner.className = "setup-panel";
  setupBanner.innerHTML = `
    <h2>${t("setup_title")}</h2>
    <p>${t("setup_desc")}</p>
    <ol>
      <li>${t("setup_step_1")}</li>
      <li>${t("setup_step_2")}</li>
      <li>${t("setup_step_3")}</li>
      <li>${t("setup_step_4")}</li>
    </ol>
    <pre>window.APP_CONFIG = {
  SUPABASE_URL: "https://YOUR_PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY",
};</pre>
  `;
}

function renderDashboard() {
  const totals = globalMetrics();
  const recentRecords = [...state.records].sort(byDisplayOrder).slice(0, 12);

  appRoot.innerHTML = `
    <section class="hero-grid">
      <article class="panel panel-accent">
        <h2>${t("create_vehicle")}</h2>
        <p>${t("create_vehicle_desc")}</p>
        <form id="add-vehicle-form" class="form-grid">
          <label>${t("vehicle_name")}<input type="text" name="nickname" required /></label>
          <label>${t("plate")}<input type="text" name="plate" required /></label>
          <label>${t("brand")}<input type="text" name="brand" /></label>
          <label>${t("model")}<input type="text" name="model" /></label>
          <label>${t("year")}<input type="number" name="year" min="1950" max="2100" /></label>
          <button type="submit">${t("add_vehicle")}</button>
        </form>
      </article>

      <article class="panel stats-grid">
        <div class="metric"><span>${t("total_records")}</span><strong>${totals.totalRecords}</strong></div>
        <div class="metric"><span>${t("total_fuel")}</span><strong>${formatDecimal(totals.totalLiters)}</strong></div>
        <div class="metric"><span>${t("total_cost")}</span><strong>${formatCurrency(totals.totalCost)} TL</strong></div>
      </article>
    </section>

    <section>
      <h2 class="section-title">${t("vehicles")}</h2>
      <div class="cards">
        ${state.vehicles.length ? state.vehicles.map(renderVehicleCard).join("") : `
          <article class="panel empty-state">
            <h3>${t("no_vehicles")}</h3>
            <p>${t("create_first_vehicle")}</p>
          </article>
        `}
      </div>
    </section>

    <section>
      <h2 class="section-title">${t("latest_fuel")}</h2>
      <div class="panel table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("date")}</th>
              <th>${t("vehicle")}</th>
              <th>${t("type")}</th>
              <th>${t("location")}</th>
              <th>${t("liters")}</th>
              <th>${t("total")}</th>
              <th>${t("km")}</th>
            </tr>
          </thead>
          <tbody>
            ${recentRecords.length ? recentRecords.map((record) => {
              const vehicle = state.vehicles.find((item) => item.id === record.vehicle_id);
              return `
                <tr>
                  <td>${formatDate(record.fuel_date)}</td>
                  <td>${escapeHtml(vehicle?.nickname || "-")} (${escapeHtml(vehicle?.plate || "-")})</td>
                  <td>${escapeHtml(record.fuel_type)}</td>
                  <td>${escapeHtml(record.location)}</td>
                  <td>${formatDecimal(record.liters)}</td>
                  <td>${formatCurrency(record.total_cost)} TL</td>
                  <td>${record.odometer_km}</td>
                </tr>
              `;
            }).join("") : `<tr><td colspan="7" class="muted">${t("no_fuel_records")}</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;

  modalRoot.innerHTML = "";
}

function renderVehicleCard(vehicle) {
  const metrics = calculateVehicleMetrics(vehicle.id);
  return `
    <article class="panel vehicle-card">
      <header>
        <h3>${escapeHtml(vehicle.nickname)}</h3>
        <span class="pill">${escapeHtml(vehicle.plate)}</span>
      </header>
      <p class="muted">${escapeHtml(vehicle.brand || "-")} ${escapeHtml(vehicle.model || "")} ${vehicle.year ? `(${vehicle.year})` : ""}</p>
      <div class="small-metrics">
        <div><span>${t("entries")}</span><b>${metrics.record_count}</b></div>
        <div><span>${t("avg_price_per_l")}</span><b>${formatCurrency(metrics.avg_price_per_liter)} TL</b></div>
        <div><span>${t("cost_per_km")}</span><b>${formatCurrency(metrics.cost_per_km)} TL</b></div>
        <div><span>${t("l_per_100km")}</span><b>${formatDecimal(metrics.liters_per_100km)}</b></div>
      </div>
      <div class="card-actions">
        <a class="link-btn" href="#/vehicle/${vehicle.id}">${t("open_detail")}</a>
        <button type="button" class="danger" data-delete-vehicle="${vehicle.id}">${t("delete")}</button>
      </div>
    </article>
  `;
}

function renderVehicleDetail(vehicle) {
  const metrics = calculateVehicleMetrics(vehicle.id);
  const rowMetrics = buildRowMetrics(vehicle.id);
  const records = recordsForVehicle(vehicle.id, byDisplayOrder);

  appRoot.innerHTML = `
    <section class="detail-head panel">
      <div>
        <h1>${escapeHtml(vehicle.nickname)}</h1>
        <p class="muted">${escapeHtml(vehicle.plate)} | ${escapeHtml(vehicle.brand || "-")} ${escapeHtml(vehicle.model || "")} ${vehicle.year ? `(${vehicle.year})` : ""}</p>
      </div>
      <a href="#/">${t("back_to_dashboard")}</a>
    </section>

    <section class="panel">
      <h2>${t("quick_actions")}</h2>
      <div class="detail-actions">
        <button type="button" data-open-modal="vehicle-edit-modal">${t("open_edit_popup")}</button>
        <button type="button" class="btn-secondary" data-open-modal="fuel-add-modal">${t("open_fuel_popup")}</button>
      </div>
    </section>

    <section class="metric-cards">
      <article class="panel metric"><span>${t("total_entries")}</span><strong>${metrics.record_count}</strong></article>
      <article class="panel metric"><span>${t("total_fuel")}</span><strong>${formatDecimal(metrics.total_liters)}</strong></article>
      <article class="panel metric"><span>${t("total_cost")}</span><strong>${formatCurrency(metrics.total_cost)} TL</strong></article>
      <article class="panel metric"><span>${t("avg_price_per_l")}</span><strong>${formatCurrency(metrics.avg_price_per_liter)} TL</strong></article>
      <article class="panel metric"><span>${t("distance")}</span><strong>${metrics.distance_km} KM</strong></article>
      <article class="panel metric"><span>${t("cost_per_km")}</span><strong>${formatCurrency(metrics.cost_per_km)} TL</strong></article>
      <article class="panel metric"><span>${t("l_per_100km")}</span><strong>${formatDecimal(metrics.liters_per_100km)}</strong></article>
    </section>

    <section class="panel table-wrap">
      <div class="section-head">
        <h2>${t("fuel_history")}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>${t("date")}</th>
            <th>${t("type")}</th>
            <th>${t("location")}</th>
            <th>${t("amount")}</th>
            <th>${t("total_cost")}</th>
            <th>${t("unit_price")}</th>
            <th>${t("km")}</th>
            <th>${t("from_prev_km")}</th>
            <th>${t("tl_per_km_prev")}</th>
            <th>${t("l_per_100km_prev")}</th>
            <th>${t("avg_tl_per_km")}</th>
            <th>${t("avg_l_per_100km")}</th>
            <th>${t("payment")}</th>
            <th>${t("notes")}</th>
            <th>${t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          ${records.length ? records.map((record) => {
            const row = rowMetrics[record.id] || {};
            return `
              <tr>
                <td>${formatDate(record.fuel_date)}</td>
                <td>${escapeHtml(record.fuel_type)}</td>
                <td>${escapeHtml(record.location)}</td>
                <td>${formatDecimal(record.liters)}</td>
                <td>${formatCurrency(record.total_cost)} TL</td>
                <td>${formatCurrency(record.total_cost / record.liters)} TL</td>
                <td>${record.odometer_km}</td>
                <td>${row.distance_from_prev ?? "-"}</td>
                <td>${row.interval_cost_per_km != null ? `${formatCurrency(row.interval_cost_per_km)} TL` : "-"}</td>
                <td>${row.interval_liters_per_100km != null ? formatDecimal(row.interval_liters_per_100km) : "-"}</td>
                <td>${row.avg_cost_per_km != null ? `${formatCurrency(row.avg_cost_per_km)} TL` : "-"}</td>
                <td>${row.avg_liters_per_100km != null ? formatDecimal(row.avg_liters_per_100km) : "-"}</td>
                <td>${escapeHtml(record.payment_method || "-")}</td>
                <td>${escapeHtml(record.notes || "-")}</td>
                <td><button type="button" class="danger btn-sm" data-delete-record="${record.id}">${t("delete")}</button></td>
              </tr>
            `;
          }).join("") : `<tr><td colspan="15" class="muted">${t("no_vehicle_records")}</td></tr>`}
        </tbody>
      </table>
    </section>
  `;

  modalRoot.innerHTML = `
    <div id="vehicle-edit-modal" class="modal-overlay" hidden>
      <article class="modal-card panel" role="dialog" aria-modal="true" aria-labelledby="vehicle-edit-title">
        <header class="modal-header">
          <h2 id="vehicle-edit-title">${t("edit_vehicle")}</h2>
          <button type="button" class="close-btn" data-close-modal="vehicle-edit-modal">${t("close")}</button>
        </header>
        <form id="update-vehicle-form" class="form-grid" data-vehicle-id="${vehicle.id}">
          <label>${t("vehicle_name")}<input type="text" name="nickname" required value="${escapeHtml(vehicle.nickname)}" /></label>
          <label>${t("plate")}<input type="text" name="plate" required value="${escapeHtml(vehicle.plate)}" /></label>
          <label>${t("brand")}<input type="text" name="brand" value="${escapeHtml(vehicle.brand || "")}" /></label>
          <label>${t("model")}<input type="text" name="model" value="${escapeHtml(vehicle.model || "")}" /></label>
          <label>${t("year")}<input type="number" name="year" min="1950" max="2100" value="${vehicle.year ?? ""}" /></label>
          <button type="submit">${t("save_vehicle_changes")}</button>
        </form>
      </article>
    </div>

    <div id="fuel-add-modal" class="modal-overlay" hidden>
      <article class="modal-card panel" role="dialog" aria-modal="true" aria-labelledby="fuel-add-title">
        <header class="modal-header">
          <h2 id="fuel-add-title">${t("add_fuel_record")}</h2>
          <button type="button" class="close-btn" data-close-modal="fuel-add-modal">${t("close")}</button>
        </header>
        <form id="add-fuel-form" class="form-grid form-grid-wide" data-vehicle-id="${vehicle.id}">
          <label>${t("date")}<input type="date" name="fuel_date" required value="${new Date().toISOString().slice(0, 10)}" /></label>
          <label>${t("fuel_type")}
            <select name="fuel_type" required>
              <option value="">${t("select")}</option>
              <option value="Gasoline">${t("gasoline")}</option>
              <option value="Diesel">${t("diesel")}</option>
              <option value="LPG">${t("lpg")}</option>
              <option value="Electric">${t("electric")}</option>
            </select>
          </label>
          <label>${t("liters_or_kwh")}<input type="number" name="liters" min="0.1" step="0.01" required /></label>
          <label>${t("total_cost_tl")}<input type="number" name="total_cost" min="0.1" step="0.01" required /></label>
          <label>${t("odometer")}<input type="number" name="odometer_km" min="0" step="1" required /></label>
          <label>${t("station_location")}<input type="text" name="location" required /></label>
          <label>${t("payment_method")}<input type="text" name="payment_method" /></label>
          <label class="col-span-full">${t("notes")}<textarea name="notes" rows="3"></textarea></label>
          <button type="submit">${t("save_fuel_record")}</button>
        </form>
      </article>
    </div>
  `;
}

function renderApp() {
  renderHeader();
  showSetupBanner();

  if (!isConfigured) {
    appRoot.innerHTML = "";
    modalRoot.innerHTML = "";
    return;
  }

  if (state.loading) {
    appRoot.innerHTML = `<article class="panel loader">${t("loading")}</article>`;
    return;
  }

  const vehicleId = currentVehicleId();
  if (vehicleId) {
    const vehicle = state.vehicles.find((item) => item.id === vehicleId);
    if (!vehicle) {
      window.location.hash = "#/";
      return;
    }
    renderVehicleDetail(vehicle);
    return;
  }

  renderDashboard();
}

async function loadData() {
  if (!isConfigured) {
    renderApp();
    return;
  }

  state.loading = true;
  renderApp();

  const [vehiclesResponse, recordsResponse] = await Promise.all([
    supabase.from("vehicles").select("*").order("created_at", { ascending: false }),
    supabase.from("fuel_records").select("*").order("fuel_date", { ascending: false }).order("odometer_km", { ascending: false }).order("id", { ascending: false }),
  ]);

  state.loading = false;

  if (vehiclesResponse.error || recordsResponse.error) {
    setFlash("error", vehiclesResponse.error?.message || recordsResponse.error?.message || "Unexpected error");
    renderApp();
    return;
  }

  state.vehicles = (vehiclesResponse.data || []).map(normalizeVehicle);
  state.records = (recordsResponse.data || []).map(normalizeRecord);
  renderApp();
}

async function createVehicle(form) {
  const formData = new FormData(form);
  const nickname = String(formData.get("nickname") || "").trim();
  const plate = String(formData.get("plate") || "").trim().toUpperCase();
  const brand = String(formData.get("brand") || "").trim();
  const model = String(formData.get("model") || "").trim();
  const yearRaw = String(formData.get("year") || "").trim();

  if (!nickname || !plate) {
    setFlash("error", t("msg_vehicle_required"));
    return;
  }

  if (state.vehicles.some((vehicle) => vehicle.plate === plate)) {
    setFlash("error", t("msg_plate_exists"));
    return;
  }

  const year = yearRaw ? Number(yearRaw) : null;
  if (yearRaw && Number.isNaN(year)) {
    setFlash("error", t("msg_year_invalid"));
    return;
  }

  const { error } = await supabase.from("vehicles").insert({ nickname, plate, brand, model, year });
  if (error) {
    setFlash("error", error.message);
    return;
  }

  setFlash("success", t("msg_vehicle_added"));
  await loadData();
  const vehicle = state.vehicles.find((item) => item.plate === plate);
  if (vehicle) window.location.hash = `#/vehicle/${vehicle.id}`;
}

async function updateVehicle(form) {
  const vehicleId = Number(form.dataset.vehicleId);
  const current = state.vehicles.find((vehicle) => vehicle.id === vehicleId);
  if (!current) return;

  const formData = new FormData(form);
  const nickname = String(formData.get("nickname") || "").trim();
  const plate = String(formData.get("plate") || "").trim().toUpperCase();
  const brand = String(formData.get("brand") || "").trim();
  const model = String(formData.get("model") || "").trim();
  const yearRaw = String(formData.get("year") || "").trim();

  if (!nickname || !plate) {
    setFlash("error", t("msg_vehicle_required"));
    return;
  }

  const conflict = state.vehicles.find((vehicle) => vehicle.plate === plate && vehicle.id !== vehicleId);
  if (conflict) {
    setFlash("error", t("msg_plate_exists"));
    return;
  }

  const year = yearRaw ? Number(yearRaw) : null;
  if (yearRaw && Number.isNaN(year)) {
    setFlash("error", t("msg_year_invalid"));
    return;
  }

  const { error } = await supabase.from("vehicles").update({ nickname, plate, brand, model, year }).eq("id", vehicleId);
  if (error) {
    setFlash("error", error.message);
    return;
  }

  closeModal("vehicle-edit-modal");
  setFlash("success", t("msg_vehicle_updated"));
  await loadData();
}

async function deleteVehicle(vehicleId) {
  const { error } = await supabase.from("vehicles").delete().eq("id", vehicleId);
  if (error) {
    setFlash("error", error.message);
    return;
  }

  setFlash("success", t("msg_vehicle_deleted"));
  window.location.hash = "#/";
  await loadData();
}

async function createFuelRecord(form) {
  const vehicleId = Number(form.dataset.vehicleId);
  const formData = new FormData(form);
  const fuel_date = String(formData.get("fuel_date") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const fuel_type = String(formData.get("fuel_type") || "").trim();
  const payment_method = String(formData.get("payment_method") || "").trim();
  const notes = String(formData.get("notes") || "").trim();
  const liters = Number(formData.get("liters") || 0);
  const total_cost = Number(formData.get("total_cost") || 0);
  const odometer_km = Number(formData.get("odometer_km") || 0);

  if (!fuel_date || !location || !fuel_type) {
    setFlash("error", t("msg_required_fields"));
    return;
  }

  if (Number.isNaN(liters) || Number.isNaN(total_cost) || Number.isNaN(odometer_km)) {
    setFlash("error", t("msg_numeric_required"));
    return;
  }

  if (liters <= 0 || total_cost <= 0 || odometer_km < 0) {
    setFlash("error", t("msg_positive_values"));
    return;
  }

  const { error } = await supabase.from("fuel_records").insert({
    vehicle_id: vehicleId,
    fuel_date,
    location,
    fuel_type,
    liters,
    total_cost,
    odometer_km,
    payment_method,
    notes,
  });

  if (error) {
    setFlash("error", error.message);
    return;
  }

  closeModal("fuel-add-modal");
  setFlash("success", t("msg_fuel_saved"));
  await loadData();
}

async function deleteFuelRecord(recordId) {
  const { error } = await supabase.from("fuel_records").delete().eq("id", recordId);
  if (error) {
    setFlash("error", error.message);
    return;
  }

  setFlash("success", t("msg_fuel_deleted"));
  await loadData();
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("click", async (event) => {
  const langButton = event.target.closest("[data-lang]");
  if (langButton) {
    state.lang = langButton.dataset.lang;
    localStorage.setItem("roadfuel-lang", state.lang);
    renderApp();
    return;
  }

  const openButton = event.target.closest("[data-open-modal]");
  if (openButton) {
    openModal(openButton.dataset.openModal);
    return;
  }

  const closeButton = event.target.closest("[data-close-modal]");
  if (closeButton) {
    closeModal(closeButton.dataset.closeModal);
    return;
  }

  if (event.target.classList.contains("modal-overlay")) {
    closeModal(event.target.id);
    return;
  }

  const deleteVehicleButton = event.target.closest("[data-delete-vehicle]");
  if (deleteVehicleButton) {
    if (window.confirm(t("confirm_delete_vehicle"))) {
      await deleteVehicle(Number(deleteVehicleButton.dataset.deleteVehicle));
    }
    return;
  }

  const deleteRecordButton = event.target.closest("[data-delete-record]");
  if (deleteRecordButton) {
    if (window.confirm(t("confirm_delete_fuel"))) {
      await deleteFuelRecord(Number(deleteRecordButton.dataset.deleteRecord));
    }
  }
});

document.addEventListener("submit", async (event) => {
  if (!isConfigured) return;
  event.preventDefault();

  if (event.target.id === "add-vehicle-form") {
    await createVehicle(event.target);
    return;
  }

  if (event.target.id === "update-vehicle-form") {
    await updateVehicle(event.target);
    return;
  }

  if (event.target.id === "add-fuel-form") {
    await createFuelRecord(event.target);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    if (!modal.hidden) closeModal(modal.id);
  });
});

window.addEventListener("hashchange", renderApp);

renderFlash();
renderApp();
loadData();