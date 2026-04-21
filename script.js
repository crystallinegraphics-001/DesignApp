document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let type = document.getElementById("type").value;
    let requestType = document.getElementById("requestType").value;
    let description = document.getElementById("description").value;
    let title = document.getElementById("title").value;
    let designContact = document.getElementById("designContact").value;

    let message =
`🔥 NEW DESIGN ORDER 🔥
---------------------------
Client Name: ${name}
Client Contact: ${contact}

Design Category: ${type}
Request Type: ${requestType}

Business Name/Title: ${title}
Design Contact: ${designContact}

Description:
${description}

NOTE: Client will send reference images if needed.
First design: FREE 🎁`;

    let encodedMessage = encodeURIComponent(message);
    let phone = "260764606477";

    let url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    window.location.href = url;

  });

});