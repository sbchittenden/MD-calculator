((function(window) {

    //////////////////
    //calculator.js //
    //////////////////

    /* ------------------------------------------------------------------------
    This Project Assignment will add functionality to the calculator you created in the HTML & CSS chapter projects.

    It will function by building a string based on the buttons pressed. Each button press should append the button’s value to the “screen” text input, with the exception of the CLEAR, =, and DELbuttons. Their functionality is specified below:

    The CLEAR button should clear the text input of all characters.

    The DEL button should remove the last character at the end of the text input.

    The = button should do the following:

    - Place the contents of the “screen” text input into a variable.

    - Run the built-in function eval on the variable. More on eval below.

    - Set the “screen” text input to be the result of the eval call.
    --------------------------------------------------------------------------*/

    ///////////////////////////////////////////
    // retrieve calculator elements from DOM //
    //////////////////////////////////////////

    // calculator display
    var calculatorDisplay = document.getElementById('display');

    // clear all key
    var allClearKey = document.getElementById('clear');

    // delete key
    var deleteKey = document.getElementById('del');

    // equals key
    var equalsKey = document.getElementById('equals');

    // decimal key
    var decimalKey = document.getElementById('decimal');

    // number keys
    var zeroKey = document.getElementById('0');
    var oneKey = document.getElementById('1');
    var twoKey = document.getElementById('2');
    var threeKey = document.getElementById('3');
    var fourKey = document.getElementById('4');
    var fiveKey = document.getElementById('5');
    var sixKey = document.getElementById('6');
    var sevenKey = document.getElementById('7');
    var eightKey = document.getElementById('8');
    var nineKey = document.getElementById('9');

    // operator keys
    var addKey = document.getElementById('addition');
    var subKey = document.getElementById('subtract');
    var multiKey = document.getElementById('multiply');
    var divideKey = document.getElementById('divide');

    ///////////////////////////////////////////////////////////
    // function for appending key press to calculator screen //
    ///////////////////////////////////////////////////////////

    function appendInput(input) {
        var currentDisplay = calculatorDisplay.innerHTML;
        console.log(currentDisplay);
        calculatorDisplay.innerHTML = currentDisplay + input;
        console.log(calculatorDisplay);
    }

    //////////////////////////////////////////
    // add event listeners for key presses //
    /////////////////////////////////////////

    /* ------------ decimal key ------------------ */

    decimalKey.addEventListener('click', function() {
        appendInput('.');
    });

    /* ------------ number keys ------------------ */

    zeroKey.addEventListener('click', function() {
        appendInput('0');
    });

    oneKey.addEventListener('click', function() {
        appendInput('1');
    });

    twoKey.addEventListener('click', function() {
        appendInput('2');
    });

    threeKey.addEventListener('click', function() {
        appendInput('3');
    });

    fourKey.addEventListener('click', function() {
        appendInput('4');
    });

    fiveKey.addEventListener('click', function() {
        appendInput('5');
    });

    sixKey.addEventListener('click', function() {
        appendInput('6');
    });

    sevenKey.addEventListener('click', function() {
        appendInput('7');
    });

    eightKey.addEventListener('click', function() {
        appendInput('8');
    });

    nineKey.addEventListener('click', function() {
        appendInput('9');
    });

    /* ------------ operator keys ------------- */

    addKey.addEventListener('click', function() {
        appendInput('+');
    });

    subKey.addEventListener('click', function() {
        appendInput('-');
    });

    multiKey.addEventListener('click', function() {
        appendInput('*');
    });

    divideKey.addEventListener('click', function() {
        appendInput('/');
    });

    /* ----------- clear all key --------------- */

    allClearKey.addEventListener('click', function() {
        calculatorDisplay.innerHTML = "";
    });

    /* ----------- delete key --------------- */

    deleteKey.addEventListener('click', function() {
        var deleted = calculatorDisplay.innerHTML.slice(0, -1);
        calculatorDisplay.innerHTML = deleted;
    });

/* ----------- equals key --------------- */

equalsKey.addEventListener('click', function(){
	var calcDisplayString = calculatorDisplay.innerHTML;
	var evaluatedInput = eval(calcDisplayString);
	calculatorDisplay.innerHTML = evaluatedInput;
});








})(window));
