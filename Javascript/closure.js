
//call 2: outer scope gets call first 
function test(){

    let b=1;
//call 1 : inner scope is called after the outer func
    function inner(){
        return b;
    }
    return inner;

}

let test1=test();//will inner() be called?
let test2=inner();
//scope: inner function with outer function
//dependency : 
//1. scope: one func dependent on the other
//2. value : the runtime value is dependent on the other