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
            alert("Raporlama için *öğrenci bilgileri* kısmını doldurmak zorunludur!.");
            return;
        }
    if (ogrenciNo.length !== 6 || isNaN(ogrenciNo)) {
        alert("Lütfen 6 basamaklı bir sayı giriniz");
        return;
        } 
    
    var raporBilgileri = document.getElementById("raporBilgileri");
    var raporListesi = document.createElement("div"); 

    // Bilgileri listeye ekle 
    raporListesi.innerHTML = "<strong>Öğrenci Bilgileri:</strong><br>" +
        "Öğrenci Numarası: " + ogrenciNo + "<br>" +
        "TC Numarası: " + tcNo + "<br>" +
        "Ad: " + ogrenciAd + "<br>" +
        "Soyad: " + ogrenciSoyad + "<br>" +
        "Sınıf: " + ogrenciSinif + "<br>" +
        "Sorumlu öğretmen: " + ogretmenAd + ogretmenSoyad + "<br>" +
        "Veli Ad & Soyad: " + veliAd + veliSoyad + "<br>";
    raporBilgileri.appendChild(raporListesi);

    // Formu sıfırla
    document.getElementById("ogrenciForm").reset();
    //document.getElementById("ogrenciEklemeFormu").style.display = "none";
    document.getElementById("rapor").style.display = "block";   
}
