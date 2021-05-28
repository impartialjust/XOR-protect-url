function getInputValue() {
    var inputVal = document.getElementById("myInput").value;
    var yes = confirm('Are you using InPriavte windows?');

    if (yes) {
        protection(inputVal);
    } else {
        alert('Please use InPrivate windows.');
    }

}