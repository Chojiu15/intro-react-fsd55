


const User = () => {

    const myName = 'John'
    const myLastName = 'Doe'
    const myAge = 29
    const isSignedIn = false

    const infoUser = {
        myName: 'John',
        lastName: 'Doe'
    }

    return (
        <>
            {isSignedIn ?  (
                <>
                    <h1>Please sign in</h1>
                    <button>Sign IN</button>
                </>
            )
                : (
                    <>
                        <h1>Hello John</h1>
                        <button>logout</button>
                    </>

                )
            }

            {myAge > 30 && <h1>I am older than 30</h1>}

            {/* {myAge > 30 ? <h1>I am older than 30</h1> : <h1>I am youger than 30</h1>}
            <h1>Hello my name is : {infoUser.myName} {infoUser.lastName}</h1>
            <p>I like to play football and I am {myAge}</p>
             */}
        </>
    )
}

export default User