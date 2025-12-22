import {catsData} from '/data.js'

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById('get-image-btn')

getImageBtn.addEventListener('click',getMatchingCatsArray)
emotionRadios.addEventListener('change',highlightCheckedOption)

function getMatchingCatsArray(){
    if(document.querySelector('input["type=radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotion)
    }
}

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
    
}

function getEmotionsArray(cats){
    const emotionArray = []
    for (let cat of cats){
        for(let emotion of cat.emotionTags){
            if (!emotionArray.includes(emotion)){
                emotionArray.push(emotion)
            }
            
        }
    }
    return emotionArray
}

function renderEmotionsRadios(cats){
    let radioItems =``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
            <div class="radio">
              <label for="${emotion}">${emotion}</label>
              <input 
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            >
            </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
