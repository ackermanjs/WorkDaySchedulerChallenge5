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
