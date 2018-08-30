/*Dropdown Menu*/
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


//CHECKBOX
var data = {
  price: 6979.76,
  open: {
    hour: 6977.19,
    day: 7036.23,
    week: 6388.48,
    month: 8140.7
  },
  changes: {
    hour: 0.01,
    day: -0.83,
    week: 9.22,
    month: -14.29
  }
};
var price = document.getElementsByClassName("val1");
var hour = document.getElementsByClassName("val3");
var day = document.getElementsByClassName("val4");
var week = document.getElementsByClassName("val5");
var month = document.getElementsByClassName("val6");

price.innerHTML = data.price;
price[0].innerHTML = "$" + data.price;
price[1].innerHTML = "$" + data.price;
price[2].innerHTML = "$" + data.price;
hour[0].innerHTML = "$" + data.open.hour;
hour[1].innerHTML = "$" + data.open.hour;
hour[2].innerHTML = "$" + data.open.hour;
day[0].innerHTML = "$" + data.open.day;
day[1].innerHTML = "$" + data.open.day;
day[2].innerHTML = "$" + data.open.day;
week[1].innerHTML = "$" + data.open.week;
week[0].innerHTML = "$" + data.open.week;
week[2].innerHTML = "$" + data.open.week;
month[0].innerHTML = "$" + data.open.hour;
month[1].innerHTML = "$" + data.open.hour;
month[2].innerHTML = "$" + data.open.hour;

function check_ms() {
  var checkBox = document.getElementById("checkbox");
  var hour = document.getElementsByClassName("val3");
  var day = document.getElementsByClassName("val4");
  var week = document.getElementsByClassName("val5");
  var month = document.getElementsByClassName("val6");
  if (checkBox.checked == true) {
    hour[0].innerHTML = data.changes.hour + " %";
    day[0].innerHTML = data.changes.day + " %";
    week[0].innerHTML = data.changes.week + " %";
    month[0].innerHTML = data.changes.month + " %";
  } else {
    hour[0].innerHTML = "$" + data.open.hour;
    day[0].innerHTML = "$" + data.open.day;
    week[0].innerHTML = "$" + data.open.week;
    month[0].innerHTML = "$" + data.open.hour;
  }
}
function check_ms1() {
  var checkBox1 = document.getElementById("checkbox2");
  var hour = document.getElementsByClassName("val3");
  var day = document.getElementsByClassName("val4");
  var week = document.getElementsByClassName("val5");
  var month = document.getElementsByClassName("val6");
  if (checkBox1.checked == true) {
    hour[1].innerHTML = data.changes.hour + " %";
    day[1].innerHTML = data.changes.day + " %";
    week[1].innerHTML = data.changes.week + " %";
    month[1].innerHTML = data.changes.month + " %";
  } else {
    hour[1].innerHTML = "$" + data.open.hour;
    day[1].innerHTML = "$" + data.open.day;
    week[1].innerHTML = "$" + data.open.week;
    month[1].innerHTML = "$" +  data.open.hour;
  }
}
function check_ms2() {
  var checkBox2 = document.getElementById("checkbox3");
  var hour = document.getElementsByClassName("val3");
  var day = document.getElementsByClassName("val4");
  var week = document.getElementsByClassName("val5");
  var month = document.getElementsByClassName("val6");
  if (checkBox2.checked == true) {
    hour[2].innerHTML = data.changes.hour + " %";
    day[2].innerHTML = data.changes.day + " %";
    week[2].innerHTML = data.changes.week + " %";
    month[2].innerHTML = data.changes.month + " %";
  } else {
    hour[2].innerHTML = "$" + data.open.hour;
    day[2].innerHTML = "$" + data.open.day;
    week[2].innerHTML = "$" + data.open.week;
    month[2].innerHTML = "$" + data.open.hour;
  }
}

