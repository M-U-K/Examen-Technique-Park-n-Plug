console.log(initXY(100, 50));

function initXY(initX, initY) {
    const posX = [];
    const posY = [];

    for (let i = 0; i < 20; i++) {
        const x = initX + i * 40;
        const y = initY + i * 30;
        posX.push(x);
        posY.push(y);
    }
    return { posX, posY };
}