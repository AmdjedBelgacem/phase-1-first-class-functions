function receivesAFunction(callBackFunction){
    callBackFunction();
}

function returnsANamedFunction(){
    return function aFunction(){
        return receivesAFunction(returnsAnAnonymousFunction);
    }
}

function returnsAnAnonymousFunction(){
    return function() {
        return receivesAFunction(returnsANamedFunction);
    }
}
