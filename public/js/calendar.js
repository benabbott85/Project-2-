var winHeight = $(window).height();
var height = ( winHeight * 16.6666 ) / 100;
var lineHeight = height + "px";

$("li").css("line-height", lineHeight);
$("li").css("height", height);

// moment().calendar(null, {
//     sameDay: function (now) {
//       if (this.isBefore(now)) {
//         return '[Will Happen Today]';
//       } else {
//         return '[Happened Today]';
//       }
//     }
//   });

// $("#calendar").calendar({
//     lang: "en-us",                     // language
//     sundayFirst: false,             // first week day
//     years: "80",                    // years diapason
//     format: "DD.MM.YYYY",           // date format
//     onClick: function(date){        // click on day returns date
//         console.log(date);
//     }
// });
