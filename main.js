const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};


const form = document.getElementById("regForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const parentName = document.getElementById("parentName").value.trim();
  const childName  = document.getElementById("childName").value.trim();
  const age        = document.getElementById("age").value.trim();
  const phone      = document.getElementById("phone").value.trim();
  const program    = document.getElementById("program").value;

  if(parentName === "" || childName === "" || age === "" || phone === "" || program === ""){
    alert("من فضلك أكمل جميع البيانات");
    return;
  }

  if(age <= 0 || age > 10){
    alert("من فضلك أدخل سن صحيح للطفل");
    return;
  }

  if(phone.length < 11){
    alert("رقم الهاتف غير صحيح");
    return;
  }

  /* 🔴 رقم واتساب الخاص بالحضانة */
  const whatsappNumber = "201145320595"; 
  // الصيغة: كود الدولة + الرقم بدون صفر

  const message =
`طلب تسجيل جديد:
اسم ولي الأمر: ${parentName}
اسم الطفل: ${childName}
سن الطفل: ${age}
رقم الهاتف: ${phone}
البرنامج: ${program}`;

  const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});

