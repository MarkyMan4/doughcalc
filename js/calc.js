const flourInp = document.querySelector("#flour-inp");
const hydrationInp = document.querySelector("#hydration-inp");
const outputContainer = document.querySelector("#output-container");

function calculateIngredients() {
    let flour = flourInp.value;
    let water = Math.round((flour * (hydrationInp.value / 100)) * 100) / 100;
    let salt = Math.round((flour * 0.018) * 100) / 100;
    let yeast = Math.round((flour * 0.01) * 100) / 100;

    let html = `
    <table>
        <thead>
            <tr>
                <th>ingredient</th>
                <th>grams</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>flour</td>
                <td>${flour}</td>
            </tr>
            <tr>
                <td>water</td>
                <td>${water}</td>
            </tr>
            <tr>
                <td>salt</td>
                <td>${salt}</td>
            </tr>
            <tr>
                <td>yeast</td>
                <td>${yeast}</td>
            </tr>
        </tbody>
    </table>
    `;

    outputContainer.innerHTML = html;
}