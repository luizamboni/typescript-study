// implicit interface in method signature
function a(arg) {
    console.log(arg.label);
}
a({ label: '123 ' });
function b(arg) {
    console.log(arg.label);
}
b({ label: '345' });
function c(arg) {
    console.log(arg.label, arg.complement);
}
c({ label: '345' });
c({ label: '345', complement: '232' });
// note: interface is a minimum of structure that need match
c({ label: '345', complement: '232', otherProp: 'bibliblib' });
