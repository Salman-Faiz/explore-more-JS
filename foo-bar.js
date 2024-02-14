function foobar() {
    let index;
    for (let i = 1; i <= 50; i++) {
        index = i;
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('foobar');
        }
        else if (index % 3 === 0) {
            console.log('foo');
        }
        else if (index % 5 === 0) {
            console.log('bar');

        }
        else {
            console.log(index);
        }
    }
    return index;
}
foobar();