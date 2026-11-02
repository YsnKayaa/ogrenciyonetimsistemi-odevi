
let ogrenciler = [];

function ogrenciEkle() {
    let isim = prompt("Öğrencinin adını giriniz:");

    if (isim === null) {
        return;
    }

    if (isim.trim() === "") {
        alert("Öğrenci adı boş olamaz!");
        return;
    }

    ogrenciler.push(isim.trim());
    alert("Öğrenci başarıyla eklendi!");
}

function ogrencileriListele() {
    if (ogrenciler.length === 0) {
        alert("Henüz öğrenci eklenmedi!");
        return;
    }

    let liste = "Öğrenci Listesi:\n";

    for (let i = 0; i < ogrenciler.length; i++) {
        liste += (i + 1) + "- " + ogrenciler[i] + "\n";
    }

    alert(liste);
}

function ogrenciSil() {
    if (ogrenciler.length === 0) {
        alert("Silinecek öğrenci yok!");
        return;
    }

    let liste = "Silmek istediğiniz öğrenciyi seçin:\n";

    for (let i = 0; i < ogrenciler.length; i++) {
        liste += (i + 1) + "- " + ogrenciler[i] + "\n";
    }

    let numara = prompt(liste);

    if (numara === null) {
        return;
    }

    if (numara.trim() === "" || isNaN(numara)) {
        alert("Geçerli bir numara giriniz!");
        return;
    }

    let sayi = Number(numara);

    if (!Number.isInteger(sayi) || sayi < 1 || sayi > ogrenciler.length) {
        alert("Böyle bir öğrenci yok!");
        return;
    }

    ogrenciler.splice(sayi - 1, 1);
    alert("Öğrenci başarıyla silindi!");
}

function uygulamayiBaslat() {
    let devam = true;

    while (devam) {
        let secim = prompt(
            "ÖĞRENCİ SİSTEMİ\n" +
            "1- Öğrenci Ekle\n" +
            "2- Öğrencileri Listele\n" +
            "3- Öğrenci Sil\n" +
            "4- Uygulamadan Çık\n\n" +
            "Seçiminizi giriniz:"
        );

        if (secim === "1") {
            ogrenciEkle();
        } else if (secim === "2") {
            ogrencileriListele();
        } else if (secim === "3") {
            ogrenciSil();
        } else if (secim === "4") {
            alert("Uygulamadan çıkış yapıldı.");
            devam = false;
        } else if (secim === null) {
            alert("Uygulamadan çıkış yapıldı.");
            devam = false;
        } else {
            alert("Hatalı seçim! 1 ile 4 arasında seçim yapınız.");
        }
    }
}

uygulamayiBaslat();
