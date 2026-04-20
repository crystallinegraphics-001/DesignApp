document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;

    let message =
`NEW DESIGN ORDER 🚀
---------------------
Name: ${name}
Contact: ${contact}
Design Type: ${type}
Description: ${description}
---------------------
First design: FREE 🎁`;

    let encodedMessage = encodeURIComponent(message);

    let phone = "260764606477";

    // TRY APP FIRST (direct WhatsApp)
    let appUrl = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;

    // FALLBACK (browser)
    let webUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    // Try opening WhatsApp app
    window.location.href = appUrl;

    // If it fails, use web version
    setTimeout(() => {
      window.location.href = webUrl;
    }, 2000);

  });

});