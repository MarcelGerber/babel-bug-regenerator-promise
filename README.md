This repo shows a regression between Babel 7.6.2 and 7.7.2 where regenerator code does not use the correct `Promise`, such that in old browsers (IE11), the generated code does not work.

# Branches
* `working`: Uses Babel 7.6.2, such that everything works fine. The only changes are in `package.json` and `package-lock.json`.
* `master`: Uses Babel 7.7.2, such that the bug can be reproduced.

# Usage
Run `npm install`.
Run `npm run build`.
Run `npx serve` or some other way to serve the files.
Open the served `index.html` in IE11 and open the console, then reload the page.

* If it works: You'll see `hello world!` followed by `done!` (2 seconds later)
* If it doesn't work: You'll see an error saying "Promise" is not known or something
