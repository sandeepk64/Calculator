//display content in calcScreen

const displayContent = (content) => {
    calcScreen.value += content;
}

const clearCalScreen = () => {
    calcScreen.value = "" ;
}

const showResult = () => {
    try {
        calcScreen.value = eval(calcScreen.value);
    } catch {
        calcScreen.value = "";
        calcScreen.placeholder = 'Invalid expression!!';
    } finally {
        console.log('finally block');
    }
}

// remove last

const removeLast = ()=>{
    calcScreen.value = calcScreen.value.slice(0,-1)
}
