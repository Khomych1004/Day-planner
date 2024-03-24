
// Getting the current date element
const $dateEl = $("#currentDay");
// Getting the element to insert
const container = $('.container');

// Array for standard and business hours
const businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

// Saving to local storage
function saveButtonClick() {
    var $btnId = $(this).attr("id");
    var $text = $("#description_" + $btnId).val();

    saveLocalStorage($btnId, $text)
}

$(document).ready(function () {

    // Getting and writing the current date
    $dateEl.text(getDateForPage());

    businessHours.forEach((hour, index) => {
        let load = loadLocalStorage(index)
        let textArea = load == null ? " " : load

        const timeBlock = $('<div>').addClass('row time-block')
        const hourCol = $('<div>').addClass('col-md-1 hour').text(hour)
        const textAreaCol = $('<textarea>')
            .attr("id", "description_" + index)
            .addClass('col-md-10 description')
            .val(textArea)

        // Adding a class to customize the color
        if (index + 9 < currentHour()) {
            textAreaCol.addClass('past')
        } else if (index + 9 === currentHour()) {
            textAreaCol.addClass('present')
        } else {
            textAreaCol.addClass('future')
        }

        const saveBtnCol = $('<div>').addClass('col-md-1 saveBtn')
        const saveBtn = $('<i>')
            .addClass('fas fa-save')
            .attr("id", index)
            .on("click", saveButtonClick);

        // Append elements to container
        timeBlock.append(hourCol, textAreaCol, saveBtnCol)
        container.append(timeBlock)
        saveBtnCol.append(saveBtn)
    })
});