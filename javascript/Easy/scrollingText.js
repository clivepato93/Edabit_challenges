

function scrollingText(text){
    const newText = text.toUpperCase();
    const f =  Array.from({length: text.length-1},(_,i)=>{
        return newText.slice(i+1,)+newText.slice(_,i+1)
    })

    f.unshift(newText)
    return f
  }

console.log(scrollingText("abc"), ["ABC","BCA","CAB"]);