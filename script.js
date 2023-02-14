// Get time with Day JS
const now = dayjs().format("dddd, MMMM D YYYY");
console.log(now);
// Print time to Jumbotron
$("#currentDay").append(now);

//Save Button Functionality
$(document).ready(function () {
  let timeSlots = [9, 10, 11, 12, 13, 14, 15, 16];
  function renderPlans() {
    for (let i = 0; i <= timeSlots.length; i++) {
      $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
    }
  }
  renderPlans();

  $(".saveBtn").click(function () {
    let dataHour = $(this).attr("data-hour");
    let inputField = $("#" + dataHour).val();

    localStorage.setItem(dataHour, inputField);
    console.log(inputField);
  });
});
//Clear Button Functionality
$("#9AMClearBTN").click(function () {
  $("#9").val("");
  localStorage.setItem(9, "");
});

$("#10AMClearBTN").click(function () {
  $("#10").val("");
  localStorage.setItem(10, "");
});

$("#11AMClearBTN").click(function () {
  $("#11").val("");
  localStorage.setItem(11, "");
});

$("#12PMClearBTN").click(function () {
  $("#12").val("");
  localStorage.setItem(12, "");
});

$("#1PMClearBTN").click(function () {
  $("#13").val("");
  localStorage.setItem(13, "");
});

$("#2PMClearBTN").click(function () {
  $("#14").val("");
  localStorage.setItem(14, "");
});

$("#3PMClearBTN").click(function () {
  $("#15").val("");
  localStorage.setItem(15, "");
});

$("#4PMClearBTN").click(function () {
  $("#16").val("");
  localStorage.setItem(16, "");
});
