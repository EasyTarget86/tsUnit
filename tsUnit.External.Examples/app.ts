import tsUnit = require('./Scripts/tsUnit/tsUnit');
import FizzBuzzTests = require('./Scripts/FizzBuzzTests');

window.onload = () => {
    // Instantiate tsUnit and pass in modules that contain tests
    var test = new tsUnit.Test(FizzBuzzTests);

    // Show the test results
    test.showResults(document.getElementById('result'), test.run());
};