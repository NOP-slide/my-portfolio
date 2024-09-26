import * as React from "react"

const Typewriter = () => {
  const [currentText, setCurrentText] = React.useState("")
  const [wordIndex, setWordIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [cursorOn, setCursorOn] = React.useState(true)
  const [typeSpeed, setTypeSpeed] = React.useState(300)
  const [cursorInterval, setCursorInterval] = React.useState(null)

  const words = ["Programmer", "Developer", "Musician", "Friend"]
  const waitTime = 2500

  React.useEffect(() => {
    let typingTimeout

    const type = () => {
      const currentWord = words[wordIndex % words.length]
      let updatedText = isDeleting
        ? currentWord.substring(0, currentText.length - 1)
        : currentWord.substring(0, currentText.length + 1)

      setCurrentText(updatedText)

      let newTypeSpeed = isDeleting ? 150 : 300

      if (!isDeleting && updatedText === currentWord) {
        newTypeSpeed = waitTime
        setIsDeleting(true)

        if (cursorInterval === null) {
          setCursorInterval(
            setInterval(() => {
              setCursorOn(prev => !prev)
            }, 500)
          )
        }
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setWordIndex(prev => prev + 1)
        newTypeSpeed = 500

        if (cursorInterval === null) {
          setCursorInterval(
            setInterval(() => {
              setCursorOn(prev => !prev)
            }, 500)
          )
        }
      } else {
        setCursorOn(true)
        clearInterval(cursorInterval)
        setCursorInterval(null)
      }

      setTypeSpeed(newTypeSpeed)
      typingTimeout = setTimeout(type, newTypeSpeed)
    }

    typingTimeout = setTimeout(type, typeSpeed)

    return () => clearTimeout(typingTimeout)
  }, [currentText, isDeleting, typeSpeed, wordIndex, waitTime])

  return (
    <div className="text-3xl text-white md:text-4xl">
      <h1 className="leading-normal">
        Andrew Phelps:
        <br />
        <span
          className={`${
            cursorOn ? "border-r-[3px] border-gray-400" : "border-none"
          }`}
        >
          The {currentText}
        </span>
      </h1>
    </div>
  )
}

export default Typewriter
