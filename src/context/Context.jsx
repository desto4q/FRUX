import { useState } from "react"

export let values = () => {

    let [hamState,setHam] = useState(false)


    let value = {hamState,setHam}
    return(
        value
    )
}