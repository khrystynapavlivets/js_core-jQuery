/*
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео iPhone, а саме:

потрібно анімаційно зменшувати зелений блок відносно кількості часу
коли час завершився анімація не має вже запускатися
------------------------------------------------------------------------------------------ */

$(window).on("load", function () {
  const $greenBlock = $(".green-block");
  const $blackBlock = $(".black-block");

  $blackBlock.animate(
    {
      height: "449px",
    },
    60000,
    "linear",
    function () {
      // По завершенні першої анімації чекаємо 5 секунд перед другою анімацією
      setTimeout(function () {
        $blackBlock.animate(
          {
            height: "0px",
          },
          60000,
          "linear"
        );
      }, 4000);
    }
  );
});
setTimeout(function () {
  $("h1").text(1);
}, 62000);
setTimeout(function () {
  $("h1").text(0);
}, 126000);
/*
Завдання 2.

Потрібно скопіювати в документ html в тег body нижче вказаний код. З допомогою команд jquery потрібно отримати текстове вмістиме кожного з елементів, 
які вказані в списку нижче. Отримані текстові значення потрібно об’єднати в стрічку і вивести командою alert().

Список елементів:

Тег span з id ”s1”;
Тег b з класом ”s2”;
Тег i, вкладений в блок “second”
Тег q з вспливаючою підказкою
Силка, яка відкривається в новій вкладці
Тег span з класом extra, який є другий по послідовності на сторінці.
------------------------------------------------------------------------------------------*/

$(document).ready(function () {
  const spanText = $("#s1").text();
  const bText = $(".s2").text();
  const iText = $("#second i").text();
  const qText = $('q[title="hello"]').text();
  const linkText = $('a[target="_blank"]').text();
  const extraSpanText = $(".extra:eq(1)").text();
  const combinedText = `${spanText}${bText}${iText}${qText}${linkText}${extraSpanText}`;
  alert(combinedText);
});
