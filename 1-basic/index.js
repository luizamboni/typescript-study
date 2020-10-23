(function () {
    var minPrice = 10;
    console.log('minPrice:', minPrice);
    var minPriceInMultipleFormats = '15';
    console.log('minPriceInMultipleFormats:', minPriceInMultipleFormats);
    minPriceInMultipleFormats = 15;
    console.log('minPriceInMultipleFormats:', minPriceInMultipleFormats);
    var prices = [1, 2, 5, 48, 5];
    console.log('prices:', prices);
    var prices2 = [1, 2, 5, 48, 5];
    console.log('prices2:', prices2);
    var tuple = ["abc", 123];
    console.log('tuple:', tuple);
    // Enum
    var Status;
    (function (Status) {
        Status[Status["Ready"] = 0] = "Ready";
        Status[Status["Active"] = 1] = "Active";
        Status[Status["Sleep"] = 2] = "Sleep";
    })(Status || (Status = {}));
    var status = Status.Active;
    console.log('status:', status);
    // Unknow and Any
    var unknowAtCompilationMoment = 1;
    unknowAtCompilationMoment = 'blalbaba';
    unknowAtCompilationMoment = [1, 154];
    console.log('unknowAtCompilationMoment:', unknowAtCompilationMoment);
    var anything = 1;
    try {
        anything.abc();
    }
    catch (err) {
        // do not check in compile time
    }
    finally {
        anything.toFixed();
    }
    console.log('anything:', anything);
    // void -  when a funcion not return
    var notReturn = function () { };
    console.log('notReturn', notReturn());
    // object - represents all not primitives
    var objectCanBe = {};
    console.log('objectCanBe', objectCanBe);
    objectCanBe = [];
    console.log('objectCanBe', objectCanBe);
    objectCanBe = function () { };
    console.log('objectCanBe', objectCanBe);
    // objectCanBe = 1 it can not
    // type assertion
    // if you need 'cast' compatible types
    var unknowCanBeAText = 'blablalbalb';
    if (typeof unknowCanBeAText === 'string') {
        console.log('unknowCanBeAText', unknowCanBeAText.length);
    }
})();
