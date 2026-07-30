console.log("Welcome to Crème & Charm Bakery!");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function (event) {

        if (button.textContent.includes("Order")) {
            event.preventDefault();

            alert("Thank you for visiting Crème & Charm Bakery! Online ordering will be available soon.");
        }

    });
});