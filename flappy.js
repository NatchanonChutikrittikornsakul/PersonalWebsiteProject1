context = c.getContext(`2d`);
const hamster = new Image();
hamster.src = "./img/hamster.png"
hamsterX = hamsterDY = score = bestScore = 0;
hamsterSize = 100;
pipeWidth = topPipeBottomY = 50;
interval = 25;
hamsterY = pipeGap = 200;
canvasSize = pipeX = 500;
c.onclick = () => { hamsterDY = 8 }
setInterval(() => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvasSize, canvasSize); // Draw sky
    hamsterY -= hamsterDY -= 0.5; // Gravity
    context.drawImage(hamster, hamsterX, hamsterY, hamsterSize, hamsterSize); // Draw Hamster
    context.fillStyle = "brown";
    pipeX -= 10; // Move pipe
    pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())) // reset pipe and random pipe gap
    context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); //Draw top pipe
    context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); //Draw bottom pipe
    context.fillStyle = "black";
    context.fillText(score++, 10, 15); // increase and draw score
    bestScore = bestScore < score ? score : bestScore; // New best score
    context.fillText(`Best: ${bestScore}`, 10, 25); // Draw best score
    (((hamsterY < topPipeBottomY || hamsterY > topPipeBottomY + pipeGap) && pipeX < hamsterSize) // hamster hit pipe 
    || hamsterY > canvasSize) && // hamster falls of screen
    ((hamsterDY = 0), (hamsterY = 200), (pipeX = canvasSize), (score = 0)); // hamster died
}, interval)