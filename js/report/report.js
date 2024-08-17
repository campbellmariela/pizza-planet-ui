fetch("http://127.0.0.1:5000/report/")
    .then((response) => response.json())
    .then((report) => {
        renderMostRequestedIngredient(report.most_requested_ingredient);
        renderMonthWithMostRevenue(report.month_with_most_revenue);
        renderTopCustomers(report.top_customers);
    });

function renderMostRequestedIngredient(report) {
    let ingredientName = report.ingredient_name;
    let totalOrders = report.total_orders;

    document.getElementById(
        "most-requested-ingredient-content"
    ).innerHTML = `${ingredientName} orders`;
    document.getElementById("most-requested-ingredient-orders").textContent =
        totalOrders;
}

function renderMonthWithMostRevenue(report) {
    let month_list = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = month_list[report.month - 1];
    let revenue = `$${report.revenue.toFixed(2)}`;

    document.getElementById("month-with-most-revenue-content").innerHTML =
        month;
    document.getElementById("month-with-most-revenue-amount").textContent =
        revenue;
}

function renderTopCustomers(report) {
    document.getElementById(
        "first-place-customer"
    ).innerText = `${report[0].client_name} ${report[0].total_orders} orders`;
    document.getElementById(
        "second-place-customer"
    ).innerText = `${report[1].client_name} ${report[1].total_orders} orders`;
    document.getElementById(
        "third-place-customer"
    ).innerText = `${report[2].client_name} ${report[2].total_orders} orders`;
}
