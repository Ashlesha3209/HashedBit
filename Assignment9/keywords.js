function scopeExample() {
    var a = 10;    // function-scoped
    let b = 20;    // block-scoped
    const c = 30;  // block-scoped

    if (true) {
        var a = 100;   // same variable (function scope)
        let b = 200;   // new variable (block scope)
        const c = 300;
    }

    console.log(a); // 100
    console.log(b); // 20
    console.log(c); // 30
}
scopeExample();
