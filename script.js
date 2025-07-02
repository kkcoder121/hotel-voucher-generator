
document.getElementById("voucherForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const get = id => document.getElementById(id).value;
  const checkIn = new Date(get("checkIn"));
  const checkOut = new Date(get("checkOut"));
  const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  const output = document.getElementById("voucherOutput");

  output.innerHTML = `
    <div class="voucher-box">
      <h2>FLYMAXT TRAVELS PRIVATE LIMITED</h2>
      <p><strong>Guest:</strong> ${get("guestName")}</p>
      <p><strong>Booking ID:</strong> ${get("bookingId")}</p>
      <p><strong>Hotel:</strong> ${get("hotelName")}</p>
      <p><strong>Address:</strong> ${get("hotelAddress")}</p>
      <p><strong>Contact:</strong> ${get("hotelContact")} | ${get("hotelEmail")}</p>
      <p><strong>Stay:</strong> ${checkIn.toDateString()} to ${checkOut.toDateString()} (${nights} nights)</p>
      <p><strong>Room:</strong> ${get("roomType")} | ${get("occupancy")} | Meal Plan: ${get("mealPlan")}</p>
      <p><em>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s).</em></p>
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
  html2pdf().from(el).save('hotel_voucher.pdf');
}
