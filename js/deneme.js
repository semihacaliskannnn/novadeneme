 {"use strict";
   var _slayt = document.getElementsByClassName("box_urn");
   var slaytSayisi = _slayt.length;
   var slaytNo = 0;
   var i = 0;

   slaytGoster(slaytNo);

   function sonrakiSlayt() {
     slaytNo++;
     slaytGoster(slaytNo);
   }

   function oncekiSlayt() {
     slaytNo--;
     slaytGoster(slaytNo);
   }

   function slaytGoster(slaytNumarasi) {
     slaytNo = slaytNumarasi;

     if (slaytNumarasi >= slaytSayisi) slaytNo = 0;

     if (slaytNumarasi < 0) slaytNo = slaytSayisi - 1;

     for (i = 0; i < slaytSayisi; i++) {
       _slayt[i].style.display = "block";
     }

     _slayt[slaytNo].style.display = "none";

   }
 }
 {
   "use strict1";
   var _slayt1 = document.getElementsByClassName("container-5-3");
   var slaytSayisi1 = _slayt1.length;
   var slaytNo1 = 0;
   var i = 0;

   slaytGoster1(slaytNo1);

   function sonrakiSlayt1() {
     slaytNo1++;
     slaytGoster1(slaytNo1);
   }

   function oncekiSlayt1() {
     slaytNo1--;
     slaytGoster1(slaytNo1);
   }

   function slaytGoster1(slaytNumarasi1) {
     slaytNo1 = slaytNumarasi1;

     if (slaytNumarasi1 >= slaytSayisi1) slaytNo1 = 0;

     if (slaytNumarasi1 < 0) slaytNo1 = slaytSayisi1 - 1;

     for (i = 0; i < slaytSayisi1; i++) {
       _slayt1[i].style.display = "block";
     }

     _slayt1[slaytNo1].style.display = "none";

   }
 }




let respon = document.querySelectorAll(".ftr_ana1");
respon[0].addEventListener("click", function () {
    if (window.matchMedia("(max-width: 975px)").matches) {
      if (document.getElementById("footer-item1").style.display == "block") {
        document.getElementById("footer-item1").style.display = "none";
      } else {
        document.getElementById("footer-item1").style.display = "block";
      }
    }
  });
  respon[1].addEventListener("click", function () {
    if (window.matchMedia("(max-width: 975px)").matches) {
      if (document.getElementById("footer-item2").style.display == "block") {
        document.getElementById("footer-item2").style.display = "none";
      } else {
        document.getElementById("footer-item2").style.display = "block";
      }
    }
  });
  respon[2].addEventListener("click", function () {
    if (window.matchMedia("(max-width: 975px)").matches) {
      if (document.getElementById("footer-item3").style.display == "block") {
        document.getElementById("footer-item3").style.display = "none";
      } else {
        document.getElementById("footer-item3").style.display = "block";
      }
    }
  });
  respon[3].addEventListener("click", function () {
    if (window.matchMedia("(max-width: 975px)").matches) {
      if (document.getElementById("footer-item4").style.display == "block") {
        document.getElementById("footer-item4").style.display = "none";
      } else {
        document.getElementById("footer-item4").style.display = "block";
      }
    }
  });
  respon[4].addEventListener("click", function () {
    if (window.matchMedia("(max-width: 975px)").matches) {
      if (document.getElementById("footer-item5").style.display == "block") {
        document.getElementById("footer-item5").style.display = "none";
      } else {
        document.getElementById("footer-item5").style.display = "block";
      }
    }
  });
  
  
  