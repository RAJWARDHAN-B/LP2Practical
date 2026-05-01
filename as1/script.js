const products = [
    {
        name: "Wireless Headphones",
        price: "₹7,999",
        desc: "Noise-cancelling over-ear headphones.",
        img: "../images/headphones.jpg"
    },
    {
        name: "Smartwatch",
        price: "₹12,999",
        desc: "Fitness tracking smartwatch.",
        img: "../images/smartwatch.jpg"
    },
    {
        name: "Gaming Mouse",
        price: "₹2,499",
        desc: "Ergonomic gaming mouse.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Laptop Stand",
        price: "₹1,999",
        desc: "Adjustable aluminium stand.",
        img: "../images/laptop-stand.jpg"
    },
    // Add more products to test pagination
    {
        name: "Keyboard",
        price: "₹3,499",
        desc: "Mechanical keyboard.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Monitor",
        price: "₹15,999",
        desc: "24-inch full HD monitor.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Speaker",
        price: "₹4,999",
        desc: "Bluetooth speaker.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Webcam",
        price: "₹2,999",
        desc: "HD webcam.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Tablet",
        price: "₹18,999",
        desc: "Android tablet.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Charger",
        price: "₹999",
        desc: "Fast charger.",
        img: "../images/mouse.jpg"
    },
    {
        name: "Power Bank",
        price: "₹1,499",
        desc: "10000mAh power bank.",
        img: "../images/mouse.jpg"
    }
];

const rowsPerPage = 10;
let currentPage = 1;

function displayProducts() {
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = products.slice(start, end);

    pageItems.forEach(product => {
        const row = `
            <tr>
                <td><img src="${product.img}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.desc}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    document.getElementById("pageInfo").innerText =
        `Page ${currentPage} of ${Math.ceil(products.length / rowsPerPage)}`;

    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled =
        currentPage === Math.ceil(products.length / rowsPerPage);
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentPage--;
    displayProducts();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentPage++;
    displayProducts();
});

displayProducts();