const divisorNum = (num, divisor) => {
    num.forEach((element) => {
        if (element % divisor === 0) {
            console.log(element);
        }
    });
};

divisorNum([1, 2, 3, 4, 5, 6], 2);
