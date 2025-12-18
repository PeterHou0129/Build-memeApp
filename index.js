import {catsData} from '/data.js'

const emotionRadios = document.getElementById("emotion-radios")

function getEmotionsArray(cats){
    const emotionArray = []
    for (let cat of cats){
        for(let emotion of cat.emotionTags){
            emotionArray.push(emotion)
        }
    }
    return emotionArray
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
