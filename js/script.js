var menu = document.querySelector(".menu-btn");
var menuClose = true;
var navigation = document.querySelector(".main-navigation");
var close =  document.querySelector(".menu-close");

var formHeader = document.querySelector(".form-header");
var formInner = document.querySelector(".form__inner");
var formClose = true;

var grown = document.querySelector("#grown");
var grownMinus = document.querySelector(".grown__minus");
var grownPlus = document.querySelector(".grown__plus");
var children = document.querySelector("#children");
var childrenMinus = document.querySelector(".children__minus");
var childrenPlus = document.querySelector(".children__plus");
var grownAddTemplate = document.querySelector("#grown-add").innerHTML;
var grownList = document.querySelector(".grown-list__items");
var grownElem = document.createElement("div");
var i;
var grownAdd;
var grownAddLength;
var childrenAddTemplate = document.querySelector("#children-add").innerHTML;
var childrenList = document.querySelector(".children-list__items");
var childrenElem = document.createElement("div");
var childrenAdd;
var childrenAddLength;

var arrival = document.querySelector("#arrival");
var arrivalCalendarIcon = document.querySelector(".arrival__calendar-icon");
var departure = document.querySelector("#departure");
var departureCalendarIcon = document.querySelector(".departure__calendar-icon");

var menuBtnBefore = document.querySelector(".menu-btn__before");
var menuBtn = document.querySelector(".menu-btn");
var menuCloseBtn = document.querySelector(".menu-close");
var introWelcome = document.querySelector(".intro__welcome");
var introGeorgeus = document.querySelector(".intro__georgeus");
var introSedona = document.querySelector(".intro__sedona");
var introGrandcanyon = document.querySelector(".intro__grandcanyon");
var glukhankoLogo = document.querySelector(".glukhanko");
var htmlAcademyLogo = document.querySelector(".html-academy");

grownElem.innerHTML = "";

menu.addEventListener("click", function(event) {
  event.preventDefault();
  if (menuClose) {
    navigation.classList.add("main-navigation-show");
    close.classList.add("menu-close-show");
    menuClose = false;
  } else {
    navigation.classList.remove("main-navigation-show");
    close.classList.remove("menu-close-show");
    menuClose = true;
  }
});

formHeader.addEventListener("click", function(event) {
  event.preventDefault();
  if (formClose) {
    formInner.classList.add("form__inner-show");
    formClose = false;
  } else {
    formInner.classList.remove("form__inner-show");
    formClose = true;
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  navigation.classList.remove("main-navigation-show");
  close.classList.remove("menu-close-show");
  menuClose = true;
});

grownMinus.addEventListener("click", function(event) {
    event.preventDefault();
    if (grown.value < 1) {
      grown.value = 0;
    } else {
      grown.value = Math.round(grown.value - 1);
      grownList.removeChild(grownElem);
      grownAdd = grownAddTemplate;
      for (i = 0; i<20; i++) {
        grownAdd = grownAdd.replace("{{grownValue}}", grown.value);
      };
      grownAddLength = -grownAdd.length;
      grownElem.innerHTML = grownElem.innerHTML.slice(0, grownAddLength);
      grownList.appendChild(grownElem);
    }
});
grownPlus.addEventListener("click", function(event) {
  event.preventDefault();
  grown.value++;
  grown.value = Math.round(grown.value);
  grownAdd = grownAddTemplate;
  for (i = 0; i<20; i++) {
    grownAdd = grownAdd.replace("{{grownValue}}", grown.value);
  };
  grownAddLength = -grownAdd.length;
  grownElem.innerHTML = grownElem.innerHTML + grownAdd;
  grownList.appendChild(grownElem);

});
childrenMinus.addEventListener("click", function(event) {
  event.preventDefault();
  if (children.value < 1) {
    children.value = 0;
  } else {
  children.value = Math.round(children.value - 1);
  childrenList.removeChild(childrenElem);
  childrenAdd = childrenAddTemplate;
  for (i = 0; i<20; i++) {
    childrenAdd = childrenAdd.replace("{{childrenValue}}", children.value);
  };
  childrenAddLength = -childrenAdd.length;
  childrenElem.innerHTML = childrenElem.innerHTML.slice(0, childrenAddLength);
  childrenList.appendChild(childrenElem);
  }
});
childrenPlus.addEventListener("click", function(event) {
  event.preventDefault();
  children.value++;
  children.value = Math.round(children.value);
  childrenAdd = childrenAddTemplate;
  for (i = 0; i<20; i++) {
    childrenAdd = childrenAdd.replace("{{childrenValue}}", children.value);
  };
  childrenAddLength = -childrenAdd.length;
  childrenElem.innerHTML = childrenElem.innerHTML + childrenAdd;
  childrenList.appendChild(childrenElem);
});

arrivalCalendarIcon.addEventListener("click", function(event) {
  event.preventDefault();
    $(document).ready(function() {
      $("#arrival").datepicker({
          monthNames:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
          dayNamesMin:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          firstDay:1,
          dateFormat:"dd.mm.yy"
       });
       $("#arrival").focus();
     });
});
arrival.addEventListener("click", function(event) {
  event.preventDefault();
  $("#arrival").datepicker("hide");
});

departureCalendarIcon.addEventListener("click", function(event) {
  event.preventDefault();
    $(document).ready(function() {
      $("#departure").datepicker({
          monthNames:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
          dayNamesMin:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          firstDay:1,
          dateFormat:"dd.mm.yy"
       });
       $("#departure").focus();
     });
});
departure.addEventListener("click", function(event) {
  event.preventDefault();
  $("#departure").datepicker("hide");
});


if (!Modernizr.cssmask) {
  menuBtnBefore.classList.add("menu-btn__before-png");
  menuBtn.classList.add("menu-btn-png");
  menuCloseBtn.classList.add("menu-close-png");
  introWelcome.classList.add("intro__welcome-png");
  introGeorgeus.classList.add("intro__georgeus-png");
  introSedona.classList.add("intro__sedona-png");
  introGrandcanyon.classList.add("intro__grandcanyon-png");
  glukhankoLogo.classList.add("glukhanko-svg");
  htmlAcademyLogo.classList.add("html-academy-svg");
};
