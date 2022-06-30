export const baseWork = (Worsheet, operation) => {
    var x = []
    var y = []
    var i = 0
    var j = 0
    var worksheetBase =[]
    const difficulty = Math.pow(10, Worsheet.diffLvl)

    const prepareRandomNumbers = (diffX, diffY) => {
        if (diffX === operation) {
            x = [1, 2, 5, 10, 15, 25, 50, 75, 85, 90, 95, 105, 110, 120, 150, 200]
        } else {
            for(i = 0; i < Worsheet.x; i++){
                x.push(Math.floor(Math.random()*diffX) + 1)
            }
        }
        
        for(i = 0; i < Worsheet.y; i++){
            y.push(Math.floor(Math.random()*diffY) + 1)
        }
    }

    switch(operation) {
        case 'addition':
        case 'subtraction': {
            prepareRandomNumbers(difficulty, difficulty)
            break
        }
        case 'multiplication': {
            prepareRandomNumbers(30, 20)
            break
        }
        case 'division': {
            prepareRandomNumbers(15, difficulty)
            break
        }
        case 'percentage': {
            prepareRandomNumbers(operation, difficulty)
            Worsheet.x = x.length
            break
        }
    }
    
    for(i = 0; i < (Worsheet.x+1); i++){
        if(i === 0) {
            worksheetBase[i] = [undefined, ...y]
        } else {
            worksheetBase[i] = new Array()
            for(j = 0; j < (Worsheet.y+1); j++){ 
                if( j === 0) {
                    worksheetBase[i].push(x[i-1])
                } else {
                    worksheetBase[i].push(worksheetAnswer(x[i-1],y[j-1],operation))
                }
            }
        }
    }
    return worksheetBase
}

const worksheetAnswer = (x, y, operation) => {
    switch(operation){
        case 'addition': {
            return x + y
        }
        case 'subtraction': {
            return x - y
        }
        case 'multiplication': {
            return x * y
        }
        case 'division': {
            return (y/x).toFixed(3)
        }
        case 'percentage': {
            return (y*x/100)
        }
    }
}

export const checkAnswers = (submittion, actual) => {
    const keys = Object.keys(submittion)
    let i, j
    keys.map(key => {
        i = key.split(",")[0]
        j = key.split(",")[1]
        if(submittion[key] != actual[j][i]) {
            document.getElementById(key).style.borderColor = 'red'
        }
    })
}