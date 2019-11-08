async function delay (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}


async function main () {
    console.log('hello world!');
    await delay(2000);
    console.log('done!');
}


main();