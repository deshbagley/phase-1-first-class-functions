function receivesAFunction (myCallback) {
    myCallback() 
    return 5;
}
function returnsANamedFunction(){
    function simpleFunc(){console.log("Desh")}
return simpleFunc
}

function returnsAnAnonymousFunction(){
    return (() => {})
}