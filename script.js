
  document.addEventListener("DOMContentLoaded", function () {
    const countryCode = document.getElementById("countryCode");
    countryCode.value = "+91";
  });


    const toggle = document.getElementById("mapToggle");
    const layoutMap = document.getElementById("layoutMap");
    const googleMap = document.getElementById("googleMap");

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            layoutMap.style.display = "none";
            googleMap.style.display = "block";
        } else {
            layoutMap.style.display = "block";
            googleMap.style.display = "none";
        }
    });


// contact foorm 
    
  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phone").value;
    const updates = document.getElementById("updates").checked ? "Yes" : "No";

    const fileContent = `Name: ${name}\nPhone: ${countryCode} ${phone}\nUpdates via SMS/WhatsApp: ${updates}`;

    alert("Simulated .txt File Content:\n\n" + fileContent);
     
    document.getElementById("textFileOutput").textContent = fileContent;

    this.reset()
    
  });


  
// Hide form 

  document.getElementById("delete").addEventListener("click", function () {
    document.querySelector(".form-card").style.display = "none";

    document.getElementById("showFormBtn").style.display = "block";
  });

  document.getElementById("showFormBtn").addEventListener("click", function () {
    document.querySelector(".form-card").style.display = "block";

    this.style.display = "none";
  });


  // contact form
  document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Form submitted successfully!');
        this.reset();
    });
