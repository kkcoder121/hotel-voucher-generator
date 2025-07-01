document.getElementById("voucherForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const getVal = id => document.getElementById(id).value;
  const setVal = (id, val) => document.getElementById(id).innerText = val;

  setVal("v_bookingId", getVal("bookingId"));
  setVal("v_guestName", getVal("guestName"));
  setVal("v_guestEmail", getVal("guestEmail"));
  setVal("v_guestPhone", getVal("guestPhone"));
  setVal("v_hotelName", getVal("hotelName"));
  setVal("v_roomType", getVal("roomType"));
  setVal("v_mealPlan", getVal("mealPlan"));

  const checkIn = new Date(getVal("checkIn"));
  const checkOut = new Date(getVal("checkOut"));

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  setVal("v_checkIn", checkIn.toLocaleDateString("en-GB", options));
  setVal("v_checkOut", checkOut.toLocaleDateString("en-GB", options));

  const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  setVal("v_nights", nights);

  const imageInput = document.getElementById("hotelImage").files[0];
  if (imageInput) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("v_hotelImage").src = e.target.result;
    };
    reader.readAsDataURL(imageInput);
  }

  document.getElementById("voucher").style.display = "block";
});

function downloadPDF() {
  const element = document.getElementById("voucher");
  html2pdf().from(element).save("hotel_voucher.pdf");
}
