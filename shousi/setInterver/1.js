// setTimeout 实现 setInterval



function mySetInterval(delay, fn) {
    let time = null;
    let stopped = false;

    function interval() {
        if (stopped) return;
        fn();
        time = setTimeout(interval, delay);
    }

    time = setTimeout(interval, delay);
    return () => {
        stopped = true;
        clearTimeout(time);
    };
}

const clear = mySetInterval(1000, () => {
    console.log(1);
});

setTimeout(() => {
    clear();
}, 5000);
