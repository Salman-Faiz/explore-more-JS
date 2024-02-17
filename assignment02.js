function matchFinder(str1, str2) {
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        
// match function is used for matching the value of two strings
            if (str1.match(str2)) {
                console.log('true');
            }
            else {
                console.log('false');
            }
        }
    else {
        console.log('please enter a number');
    }

}
const a = 'john hardy';
const b = 'john';
matchFinder(a, b);