
// implicit interface in method signature
function a(arg: { label: string }) {
    console.log('a()', arg.label);
}

a({ label: '123 '})


// explicit use of interface interface 
// as a separeted declaration
interface Arg {
    label: string;
}

function b(arg: Arg) {
    console.log('b()', arg.label);
}

b({ label: '345' })

// optional fields

interface ArgToC {
    label: string;
    complement?: string;
}

function c(arg: ArgToC) {
    console.log('c()',arg.label, arg.complement)
}

c({ label: '345' })
c({ label: '345', complement: '232' })


// note: interface is a minimum of structure that need match
// note 2: need to be 'casted' becouse have a extra porpertie
c({ label: '345', complement: '232', otherProp: 'bibliblib' } as ArgToC)

// to accept extra property
interface ArgToD {
    label: string;
    complement?: string;
    [propName: string]: any;
}

function d(arg: ArgToD) {
    console.log('d()',arg.label, arg.complement)
}

d({ label: '345', complement: '232', otherProp: 'bibliblib' })

// readyonly
interface ImutableExample {
    readonly a: string;
    readonly b: string;
}

const imutable = {
    a: "abc",
    b: "def",
} as ImutableExample;

// it product a compile error
// imutable.b = "erasdfasdfa";

console.log(imutable);

const arr : ReadonlyArray<number> = [ 1, 2, 5, 7, 8 ];

// it product a compile error
// arr[0] = 4;

console.log(arr);

// type function
interface TypeFuncion {
    (a: string, b: number ) : boolean
}


const typedFunction : TypeFuncion = (a1: string, b2: number) => true;

// fail
// const typedFunction : TypeFuncion = (a1: number, b2: number) => true;


// class interfaces
interface Quarkable {
    mote: string;
    quark: () => void;
}

class Duck implements Quarkable {
    mote: string;
    quark() {
        console.log(this.mote, this.mote, this.mote)
    }
}

const duck = new Duck();
duck.mote = "bla"
duck.quark();