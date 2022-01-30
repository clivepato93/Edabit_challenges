// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript

function uniTotal (string) {
    // total up dem unicodes!
    return [...string].reduce((t,el,i) => t+string.charCodeAt(i),0)
    }

