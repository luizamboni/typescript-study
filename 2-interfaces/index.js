// implicit interface in method signature
function a(arg) {
    console.log('a()', arg.label);
}
a({ label: '123 ' });
function b(arg) {
    console.log('b()', arg.label);
}
b({ label: '345' });
function c(arg) {
    console.log('c()', arg.label, arg.complement);
}
c({ label: '345' });
c({ label: '345', complement: '232' });
// note: interface is a minimum of structure that need match
// note 2: need to be 'casted' becouse have a extra porpertie
c({ label: '345', complement: '232', otherProp: 'bibliblib' });
function d(arg) {
    console.log('d()', arg.label, arg.complement);
}
d({ label: '345', complement: '232', otherProp: 'bibliblib' });
var imutable = {
    a: "abc",
    b: "def"
};
// it product a compile error
// imutable.b = "erasdfasdfa";
console.log(imutable);
var arr = [1, 2, 5, 7, 8];
// it product a compile error
// arr[0] = 4;
console.log(arr);
var typedFunction = function (a1, b2) { return true; };
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.quark = function () {
        console.log(this.mote, this.mote, this.mote);
    };
    return Duck;
}());
var duck = new Duck();
duck.mote = "bla";
duck.quark();
