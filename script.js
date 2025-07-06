
function generateVoucher() {
    document.getElementById('vGuestName').textContent = document.getElementById('guestName').value;
    document.getElementById('vBookingId').textContent = document.getElementById('bookingId').value;
    document.getElementById('vBookingRef').textContent = document.getElementById('bookingRef').value;
    document.getElementById('vHotelName').textContent = document.getElementById('hotelName').value;
    document.getElementById('vAddress').textContent = document.getElementById('address').value;
    document.getElementById('vCheckIn').textContent = document.getElementById('checkIn').value;
    document.getElementById('vCheckOut').textContent = document.getElementById('checkOut').value;
    document.getElementById('vRooms').textContent = document.getElementById('rooms').value;
    document.getElementById('vAdults').textContent = document.getElementById('adults').value;
    document.getElementById('vChildren').textContent = document.getElementById('children').value;
    document.getElementById('vRoomType').textContent = document.getElementById('roomType').value;
    document.getElementById('vBenefits').textContent = document.getElementById('benefits').value;
}
