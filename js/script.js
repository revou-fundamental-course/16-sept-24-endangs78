// JavaScript for dynamic name and form validation

document.addEventListener("DOMContentLoaded", function() {
    // Mengisi nama pengguna di halaman home
    const userName = prompt("Masukkan nama Anda:", "Endang");
    if (userName) {
        document.getElementById("userName").textContent = userName;
    }

    document.getElementById("messageForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah submit form
    
        // Ambil nilai dari form
        const name = document.getElementById("fname").value;
        const birthDate = document.getElementById("lname").value;
        const genderElement = document.querySelector('input[name="gender"]:checked'); // Memeriksa elemen radio
        const message = document.getElementById("messageText").value;
    
        // Cek apakah gender sudah dipilih
        if (!genderElement) {
            alert("Pilih jenis kelamin!");
            return;
        }
    
        const gender = genderElement.value; // Ambil nilai dari elemen radio yang dipilih
    
        // Tampilkan hasil form di kolom sebelahnya
        const resultDiv = document.getElementById("formResult");
        resultDiv.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
    });    
});
