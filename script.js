
function generateVoucher() {
  document.getElementById('vGuestName').textContent = document.getElementById('guestName').value;
  document.getElementById('vBookingId').textContent = document.getElementById('bookingId').value;
  document.getElementById('vReferenceNo').textContent = document.getElementById('referenceNo').value;
  document.getElementById('vHotelName').textContent = document.getElementById('hotelName').value;
  document.getElementById('vAddress').textContent = document.getElementById('address').value;
  document.getElementById('vCheckinDate').textContent = document.getElementById('checkinDate').value;
  document.getElementById('vCheckoutDate').textContent = document.getElementById('checkoutDate').value;
  document.getElementById('vRooms').textContent = document.getElementById('rooms').value;
  document.getElementById('vAdults').textContent = document.getElementById('adults').value;
  document.getElementById('vChildren').textContent = document.getElementById('children').value;
  document.getElementById('vRoomType').textContent = document.getElementById('roomType').value;
  document.getElementById('vBenefits').textContent = document.getElementById('benefits').value;
}
