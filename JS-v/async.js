const asyncTimer = () =>
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123456);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);

    return data;
};

simpleFunc()
.then(data => {
    console.log(data);
})
    .catch(err => {
        console.log(err);
    });