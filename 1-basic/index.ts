

(() => {
    // simple type
    type Price = Number;
    
    const minPrice: Price = 10;
    console.log('minPrice:', minPrice);

    // type with options
    type PriceInMultipleFormats = Number | String;

    let minPriceInMultipleFormats: PriceInMultipleFormats = '15';
    console.log('minPriceInMultipleFormats:', minPriceInMultipleFormats);
    minPriceInMultipleFormats = 15
    console.log('minPriceInMultipleFormats:', minPriceInMultipleFormats);


    // arrays
    type Prices = Price[];
    let prices = [ 1, 2, 5, 48, 5]
    console.log('prices:', prices);

    // or by other way
    type Prices2 = Array<Price>;
    let prices2 = [ 1, 2, 5, 48, 5] as Prices2;
    console.log('prices2:', prices2);

    // Tuple
    type TupleType = [ String, Number ]
    let tuple: TupleType = [ "abc", 123 ]
    console.log('tuple:', tuple);


    // Enum
    enum Status {
        Ready,
        Active,
        Sleep,
    }

    let status: Status = Status.Active;
    console.log('status:', status);

    // Unknow and Any
    let unknowAtCompilationMoment: unknown = 1;
    unknowAtCompilationMoment = 'blalbaba';
    unknowAtCompilationMoment = [ 1, 154];
    console.log('unknowAtCompilationMoment:', unknowAtCompilationMoment);
    
    let anything: any = 1;
    try {
        anything.abc()
    } catch (err) {
        // do not check in compile time
    } finally {
        anything.toFixed()
    }
    console.log('anything:', anything);

    // void -  when a funcion not return
    let notReturn = () : void => { }
    console.log('notReturn', notReturn())

    // object - represents all not primitives

    let objectCanBe : object = {}
    console.log('objectCanBe', objectCanBe)

    objectCanBe = []
    console.log('objectCanBe', objectCanBe)

    objectCanBe = () => {}
    console.log('objectCanBe', objectCanBe)
    // objectCanBe = 1 it can not


    // type assertion
    // if you need 'cast' compatible types
    let unknowCanBeAText: unknown = 'blablalbalb';
    if (typeof unknowCanBeAText === 'string') {
        console.log('unknowCanBeAText', (unknowCanBeAText as string).length)
    }
})();
