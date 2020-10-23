
// implicit interface in method signature
function a(arg: { label: string }) {
    console.log(arg.label);
}

a({ label: '123 '})


// explicit use of interface interface 
// as a separeted declaration
interface Arg {
    label: string;
}

function b(arg: Arg) {
    console.log(arg.label);
}

b({ label: '345' })

// optional fields

interface ArgToC {
    label: string;
    complement?: string;
}

function c(arg: ArgToC) {
    console.log(arg.label, arg.complement)
}

c({ label: '345' })
c({ label: '345', complement: '232' })


// note: interface is a minimum of structure that need match
c({ label: '345', complement: '232', otherProp: 'bibliblib' } as ArgToC)
