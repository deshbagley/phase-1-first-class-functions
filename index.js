function receivesAFunction (myCallback) {
    myCallback() 
    return 5;
}
function returnsANamedFunction(){
    function myCallback(){console.log("Desh")}
return myCallback
}

function returnsAnAnonymousFunction(){
    return (() => {})
}