document.getElementById("voucherForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const get = id => document.getElementById(id).value;
  const checkIn = new Date(get("checkIn"));
  const checkOut = new Date(get("checkOut"));
  const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  const dateOpts = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const imgFile = document.getElementById("hotelImage").files[0];

  const commonData = `
    <h2>Hotel Voucher</h2>
    <p><strong>Guest:</strong> ${get("guestName")} | <strong>Email:</strong> ${get("guestEmail")} | <strong>Phone:</strong> ${get("guestPhone")}</p>
    <p><strong>Booking ID:</strong> ${get("bookingId")}</p>
    <p><strong>Hotel:</strong> ${get("hotelName")}</p>
    <p><strong>Check-In:</strong> ${checkIn.toLocaleDateString("en-GB", dateOpts)} | <strong>Check-Out:</strong> ${checkOut.toLocaleDateString("en-GB", dateOpts)} | <strong>Nights:</strong> ${nights}</p>
    <p><strong>Room:</strong> ${get("roomType")} | <strong>Occupancy:</strong> ${get("occupancy")} | <strong>Meal Plan:</strong> ${get("mealPlan")}</p>
    <p><em>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s).</em></p>`;

  document.getElementById("flymaxtVoucher").innerHTML = `
    <div style='border:2px solid black;padding:20px;'>
      <h3 style="text-align:center;">FLYMAXT TRAVELS PRIVATE LIMITED<br>C-3/49 YAMUNA VIHAR<br>Contact: 9599366500 | Email: flymax121@gmail.com</h3>
      ${commonData}
    </div>
  `;

  document.getElementById("agodaVoucher").innerHTML = `
    <div style='border:1px dashed gray;padding:15px;'>
      <h3 style="text-align:center;">Your Booking is Confirmed</h3>
      ${commonData}
    </div>
  `;

  if (imgFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.querySelectorAll(".voucher").forEach(v => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style = "max-width:100%;margin-top:15px;";
        v.appendChild(img);
      });
    };
    reader.readAsDataURL(imgFile);
  }

  const selected = get("voucherStyle");
  document.getElementById("flymaxtVoucher").style.display = selected === "flymaxt" ? "block" : "none";
  document.getElementById("agodaVoucher").style.display = selected === "agoda" ? "block" : "none";
  document.getElementById("downloadBtn").style.display = "block";
});

function downloadPDF() {
  const style = document.getElementById("voucherStyle").value;
  const el = style === "flymaxt" ? document.getElementById("flymaxtVoucher") : document.getElementById("agodaVoucher");
  html2pdf().from(el).save("hotel_voucher.pdf");
}
