async function loadDashboard() {
  try {
    const r = await fetch("/admin/api/stats", { credentials: "same-origin" });
    if (!r.ok) throw new Error("Unauthorized");

    const data = await r.json();

    document.getElementById("users").textContent = data.totalUsers ?? 0;
    document.getElementById("active").textContent = data.activeUsers ?? 0;
    document.getElementById("premium").textContent = data.premiumUsers ?? 0;
    document.getElementById("requests").textContent = data.requests ?? 0;
    document.getElementById("todayUsers").textContent = data.todayUsers ?? 0;
    document.getElementById("todayRequests").textContent = data.todayRequests ?? 0;

    loadRecentUsers();
  } catch (err) {
    console.error("Dashboard stats error:", err);
  }
}

async function loadRecentUsers() {
  try {
    const r = await fetch("/admin/api/users", { credentials: "same-origin" });
    if (!r.ok) throw new Error("Users unavailable");

    const users = await r.json();
    const table = document.getElementById("userTable");

    if (!users.length) {
      table.innerHTML = '<tr><td colspan="4">No user data yet.</td></tr>';
      return;
    }

    table.innerHTML = users.map(user => `
      <tr>
        <td>${user.id.slice(0, 8)}...</td>
        <td>${user.blocked ? "🔴 Blocked" : "🟢 Active"}</td>
        <td>${user.plan === "premium" ? "⭐ Premium" : "Free"}</td>
        <td>${user.requests}</td>
      </tr>
    `).join("");
  } catch (err) {
    console.error("Recent users error:", err);
  }
}

loadDashboard();
