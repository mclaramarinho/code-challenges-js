export const maxSquares = (w, h, xMeasurements, yMeasurements) => {
    !xMeasurements.includes(0) && xMeasurements.unshift(0);
    !xMeasurements.includes(w) && xMeasurements.push(w);

    !yMeasurements.includes(0) && yMeasurements.unshift(0);
    !yMeasurements.includes(h) && yMeasurements.push(h);

    const allW = [];
    const allH = [];
    
    for(let i = 0; i < xMeasurements.length; i++) {
        for(let j = i+1; j < xMeasurements.length; j++) {
            const diff = xMeasurements[j] - xMeasurements[i];
            allW.push(diff);
        }
    }

    for(let i = 0; i < yMeasurements.length; i++) {
        for(let j = i+1; j < yMeasurements.length; j++) {
            const diff = yMeasurements[j] - yMeasurements[i];
            allH.push(diff);
        }
    }

    allH.sort((a, b) => a - b);
    
    let squareCount = 0;
    for(let i = 0; i < allW.length; i++) {
        const width = allW[i];
        for(let j = 0; j < allH.length; j++) {
            const height = allH[j];
            if(height > width) break;
            
            if(height===width) squareCount++;
        }
    }
    return squareCount;
}