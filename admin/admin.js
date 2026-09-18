async function loadDashboard() {
  try {
    const r = await fetch("/admin/api/stats", { credentials: "same-origin" });

    if (!r.ok) throw new Error("Unauthorized");

    const data = await r.json();

    document.getElementById("users").textContent = data.totalUsers ?? 0;
    document.getElementById("active").textContent = data.activeUsers ?? 0;
    document.getElementById("premium").textContent = data.premiumUsers ?? 0;
    document.getElementById("requests").textContent = data.requests ?? 0;
  } catch (err) {
    console.error("Dashboard stats error:", err);
  }
}

loadDashboard();
