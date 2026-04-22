// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "DesigApp.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function placeOrder() {

  let order = {
    name: document.getElementById("name").value,
    contact: document.getElementById("contact").value,
    type: document.getElementById("type").value,
    requestType: document.getElementById("requestType").value,
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    designContact: document.getElementById("designContact").value,
    createdAt: new Date()
  };

  db.collection("orders").add(order)
    .then(() => {
      alert("Order sent successfully ✅");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });

}