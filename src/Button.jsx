import './Button.css'



const Button = () => {

    const clickMe = () => {
        console.log('Hello world')
    }

    return(
        <button  onClick={clickMe}>Click me</button>
    )
}

export default Button