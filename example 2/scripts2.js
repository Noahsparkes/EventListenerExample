const BACKGROUNDS =[
    'red',
    'blue',
    'green',
    'purple',
    'brown',
    'black',
]

const buttonsList = document.querySelectorAll('button')
const buttonsArray = Array.from(buttonsList)

/**
 *  Returns a random color value, based on a random index used on the
 * {@link BACKGROUNDS}
 * 
 * @returns {string}
 */
 

const calcRandomColor = () => {
    const maxIndex  =BACKGROUNDS.length - 1
    const randomIndex = Math.round(maxIndex * Math.random())
    return BACKGROUNDS[randomIndex]
}
 
const handler = (event) => {

    const {target} = event
    target.style.color = 'white'
    target.style.background = calcRandomColor()
    
}

for (const button of buttonsArray) {
    button.addEventListener('click', handler)
}


// result is that each button needs to generate another color everytime it is clicked