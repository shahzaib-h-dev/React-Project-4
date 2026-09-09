import React from "react"

export function UseEffectPractice(props:any){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    React.useEffect(()=> {
        fetch(`https://swapi.dev/pi/people/${count}`)
        .then(res => res.json() )
        .then (data => setStarWarsData(data))
    }, [count])

    return(
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => +1)}>Get next character</button>  
            <pre>{JSON.stringify((starWarsData), null, 2)}</pre>
        </div>
    )
}

