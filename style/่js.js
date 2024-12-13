const images = [
    { src: "./style/depositphotos_395633744-stock-illustration-kids-toys-teddy-bear-head.jpg", caption: "ຂອງຂວັນຢູ່ທາງຫນ້ານີ້ແລ້ວວວ" },
    { src: "./style/c24861acdcdba2a80fd22eaa355d5f81_high.webp", caption: "ຂອງຂວັນຢູ່ໃກ້ໆນີ້ແລ້ວວວ" },
    { src: "./style/7c0948ac69a90aac021fe06632e5a667.jpg", caption: "Um...ใกล้แล้วว" },
    { src: "./style/pngtree-cartoon-bear-image-for-facebook-vector-png-image_12225914.png", caption: "ເກັ່ງຫລາຍທີ່ມາຮອດນີ້ແລ້ວຄົນເກັ່ງ" },
    { src: "./style/a7bd990217426361aa33d802509c3ba9_high.webp", caption: "ມາຮອດນີ້ເມື່ອຍບໍຄົນເກັ່ງ" },
    { src: "./style/5ce16deff6f21a59ca48fda94fbb0263_high.webp", caption: "ເກັ່ງຫຼາຍມາຮອດປາຍທາງແລ້ວ" }
];

let currentIndex = 0;




function showNextImage() {
    currentIndex++;
    if (currentIndex < images.length) {

        document.getElementById("display-image").src = images[currentIndex].src;
        document.getElementById("image-caption").textContent = images[currentIndex].caption;
    } else {
        document.getElementById("next-button").style.display = "none";
        document.getElementById("action-buttons").style.display = "block";
    }
}


function saySorry() {
    Swal.fire({
        title: 'ຮັບຂອງຂວັນສຳຮັບເອື້ອຍທີ່ມາຮອດນີ້ຢາກບອກວ່າເກັ່ງຫຼາຍໆ',
        imageUrl: './style/ee5a9394fc87fbc6383fe04cca52a94d_high.webp',
        imageWidth: 200,
        imageHeight: 300,
        confirmButtonText: 'ປິດ',
        confirmButtonColor: '#3ed8ff',
        html: '<button id="open-link-btn">Open Link🎁</button>'
    });
    const openLinkBtn = document.getElementById('open-link-btn');
    openLinkBtn.addEventListener('click', () => {
        window.open('https://bcel.la/onecash/6129205513907', '_blank');
    });
}