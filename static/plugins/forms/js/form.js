// time picker start here
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

var twelveHour = $('.timepicker-12-hr').wickedpicker();
$('.time').text('//JS Console: ' + twelveHour.wickedpicker('time'));
$('.timepicker-24-hr').wickedpicker({ twentyFour: true });
$('.timepicker-12-hr-clearable').wickedpicker({ clearable: true });

$(function () {
    $('.my-colorpicker1').colorpicker({
        inline: false,
        container: false,
        format: null,
        customClass: 'colorpicker-2x',
        sliders: {
            saturation: {
                maxLeft: 200,
                maxTop: 200
            },
            hue: {
                maxTop: 200
            },
            alpha: {
                maxTop: 200
            }
        },

    });
});

//  timepicker js end here

//  datepicker js start here

$(function () {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0, // Set minimum selectable date (0 = today)
        maxDate: "+1y", // Set maximum selectable date (+1y = 1 year from today)
        showOtherMonths: true, // Display dates from other months
        selectOtherMonths: true, // Allow selecting dates from other months
        showButtonPanel: true // Show the "Today" button in the date picker
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var customSelect = document.querySelector(".custom-select");
    var selectSelected = customSelect.querySelector(".select-selected");
    var selectDropdown = customSelect.querySelector(".select-dropdown");
    var selectOptions = customSelect.querySelectorAll(".select-option");

    selectSelected.addEventListener("click", function () {
        selectDropdown.style.display = "block";
    });

    selectOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            selectSelected.innerHTML = option.innerHTML;
            selectDropdown.style.display = "none";
        });
    });

    document.addEventListener("click", function (event) {
        if (!customSelect.contains(event.target)) {
            selectDropdown.style.display = "none";
        }
    });
});

new MultiSelectTag('countries');
