// JavaScript source code
function girisEkraniGoster() {
    document.getElementById("girisEkrani").style.display = "none";
    document.getElementById("ogrenciEklemeFormu").style.display = "block";
}

function ogrenciEkle() {
    var ogrenciNo = document.getElementById("ogrenciNo").value;
    var tcNo = document.getElementById("tcNo").value;
    var ogrenciAd = document.getElementById("ogrenciAd").value;
    var ogrenciSoyad = document.getElementById("ogrenciSoyad").value;
    var ogrenciSinif = document.getElementById("ogrenciSinif").value; 
    var veliAd = document.getElementById("veliAd").value;
    var veliSoyad = document.getElementById("veliSoyad").value;
    var ogretmenAd = document.getElementById("ogretmenAd").value;
    var ogretmenSoyad = document.getElementById("ogretmenSoyad").value;
    if (!ogrenciNo || !tcNo || !ogrenciAd || !ogrenciSoyad || !ogrenciSinif ) {
            alert("Raporlama için *öðrenci bilgileri* kýsmýný doldurmak zorunludur!.");
            return;
        }
    do {
        ogrenciNo = prompt("Lütfen 6 basamaklý bir sayý giriniz:");
        } while (ogrenciNo.length !== 6 || isNaN(ogrenciNo));

    var raporBilgileri = document.getElementById("raporBilgileri");

    var raporListesi = document.createElement("div"); 

    // Bilgileri listeye ekle 
    raporListesi.innerHTML = "<strong>Öðrenci Bilgileri:</strong><br>" +
        "Öðrenci Numarasý: " + ogrenciNo + "<br>" +
        "TC Numarasý: " + tcNo + "<br>" +
        "Ad: " + ogrenciAd + "<br>" +
        "Soyad: " + ogrenciSoyad + "<br>" +
        "Sýnýf: " + ogrenciSinif + "<br>" +
        "Sorumlu öðretmen: " + ogretmenAd + ogretmenSoyad + "<br>" +
        "Veli Ad & Soyad: " + veliAd + veliSoyad + "<br>";
    raporBilgileri.appendChild(raporListesi);

    // Formu sýfýrla
    document.getElementById("ogrenciForm").reset();
    //document.getElementById("ogrenciEklemeFormu").style.display = "none";
    document.getElementById("rapor").style.display = "block";   
}
