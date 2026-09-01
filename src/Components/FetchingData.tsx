import React from "react"

export function FetchingData(props:any){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)


   React.useEffect(() =>{

       fetch("https://swapi.dev/api/people/1")
         .then(res => res.json())
         .then(data => setStarWarsData(data)) 

   },   []) //Changing value in dependency = requests function to run one more time. 

    return(
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => +1)}>ADD</button>  
            <pre>{JSON.stringify((starWarsData), null, 2)}</pre>
        </div>
    )
    
}

