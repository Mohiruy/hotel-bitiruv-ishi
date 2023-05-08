$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });


  const optionMenu = document.querySelector("#select-menu1"),
  selectBtn = optionMenu.querySelector("#select-btn1"),
  options = optionMenu.querySelectorAll("#option1"),
  sBtn_text = optionMenu.querySelector("#sBtn-text1");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector("#option-text1").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

const optionMenu2 = document.querySelector("#select-menu2"),
  selectBtn2 = optionMenu2.querySelector("#select-btn2"),
  options2 = optionMenu2.querySelectorAll("#option2"),
  sBtn_text2 = optionMenu2.querySelector("#sBtn-text2");

selectBtn2.addEventListener("click", () =>
  optionMenu2.classList.toggle("active")
);

options2.forEach((option2) => {
  option2.addEventListener("click", () => {
    let selectedOption2 = option2.querySelector("#option-text2").innerText;
    sBtn_text2.innerText = selectedOption2;

    optionMenu2.classList.remove("active");
  });
});