function extractFilters(message) {
    message = message.toLowerCase();

    let budget = null;
    let location = null;

    // extract numbers (budget)
    const budgetMatch = message.match(/\d+/);
    if (budgetMatch) {
        budget = parseInt(budgetMatch[0]);
    }

    // known locations from your DB
    const locations = [
        "charleston", "portland", "tokyo",
        "florence", "boston", "bali","switzerland",
        "united states", "japan", "italy", "indonesia", "dubai", "mexico"
    ];

    for (let loc of locations) {
        if (message.includes(loc)) {
            location = loc;
            break;
        }
    }

    // smart defaults
    if (message.includes("cheap")) {
        budget = 1500;
    }

    return { budget, location };
}

module.exports = { extractFilters };