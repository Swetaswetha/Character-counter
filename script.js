var box = document.getElementById("box")
var max = document.getElementById("max")
var warning = document.getElementById("warning")

box.addEventListener("input", function () {

    var charcount = box.value.length
    if (charcount <= 200) {

        max.textContent = +charcount + "/200 characters"

    }
    else {
         warning.textContent = "You have reached the character limit!!!"
         box.disabled = true;
        
    }

})