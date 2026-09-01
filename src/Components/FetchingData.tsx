import React from "react"

export function FetchingData(props:any){
    const [starWarsData, setStarWarsData] = React.useState(null)

    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))

    return(
        <div>
            <pre>{JSON.stringify((starWarsData), null, 2)}</pre>
        </div>
    )
    
}