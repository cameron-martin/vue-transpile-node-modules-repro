// This is an example of a module that doesn't compile to ES5 and so needs to be
// compiled by babel using the `transpileDependencies` option
import AppAuthHelper from 'appauthhelper/appAuthHelperCompat';


// This is some ES2015+ syntax used in the actual app
(() => {
    console.log('Hi');
})();