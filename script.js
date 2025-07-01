document.getElementById("voucherForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("voucher").style.display = "block";

  const ids = ["guestName", "guestEmail", "guestPhone", "bookingId", "hotelName", "checkIn", "checkOut", "roomType"];
  ids.forEach(id => {
    document.getElementById("v_" + id).innerText = document.getElementById(id).value;
  });

  const imageInput = document.getElementById("hotelImage").files[0];
  if (imageInput) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("v_hotelImage").src = e.target.result;
    }
    reader.readAsDataURL(imageInput);
  } else {
    document.getElementById("v_hotelImage").style.display = "none";
  }
});

function downloadPDF() {
  const element = document.getElementById("voucher");
  html2pdf().from(element).save("hotel_voucher.pdf");
}
