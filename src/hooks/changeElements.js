import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Pls, say yes! ')
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')

    const options = ['Sure?', 'Ultramega-sure??', 'Come on, say yes...', 'Will not happen again', 'So, no? PLS YES', 'sURe?', 'I will give u a cookie', 'or unas sabritas de limon', 'or a kinder delice', 'omg u are really here? Pls yess']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif')
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif")
        setTextP('THANK U SO MUCH! <3 ')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image }
}