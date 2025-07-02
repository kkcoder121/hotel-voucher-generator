
document.getElementById("voucherForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const get = id => document.getElementById(id).value;
  const checkIn = new Date(get("checkIn"));
  const checkOut = new Date(get("checkOut"));
  const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  const output = document.getElementById("voucherOutput");
  output.innerHTML = `
    <div>
      <h2 style="text-align:center;">FLYMAXT TRAVELS PRIVATE LIMITED</h2>
      <p style="text-align:center;">C-3/49 YAMUNA VIHAR | Contact: 9599366500 | Email: flymax121@gmail.com</p>
      <hr>
      <p><strong>Booking ID:</strong> ${get("bookingId")}</p>
      <p><strong>Guest Name:</strong> ${get("guestName")}</p>
      <p><strong>Hotel:</strong> ${get("hotelName")}</p>
      <p><strong>Address:</strong> ${get("hotelAddress")}</p>
      <p><strong>Contact:</strong> ${get("hotelContact")} | ${get("hotelEmail")}</p>
      <p><strong>Stay:</strong> ${checkIn.toLocaleDateString("en-GB")} to ${checkOut.toLocaleDateString("en-GB")} (${nights} Night(s))</p>
      <p><strong>Room Type:</strong> ${get("roomType")} | <strong>Occupancy:</strong> ${get("occupancy")}</p>
      <p><strong>Meal Plan:</strong> ${get("mealPlan")}</p>
      <p style="margin-top:20px;"><em>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s).</em></p>
    </div>
  `;

  const imgFile = document.getElementById("hotelImage").files[0];
  if (imgFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style = "max-width:100%;margin-top:10px;";
      output.appendChild(img);
    };
    reader.readAsDataURL(imgFile);
  }

  output.style.display = "block";
  document.getElementById("downloadBtn").style.display = "block";
});

function downloadPDF() {
  const el = document.getElementById("voucherOutput");
  html2pdf().from(el).save("hotel_voucher.pdf");
}
