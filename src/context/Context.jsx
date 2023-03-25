import { useState } from "react"

export let values = () => {

    let [hamState,setHam] = useState(false);

    let dummy= {
        name: "Riyad Mahrez",
        id: "#112113",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    }
    let [userState,setUser] = useState(dummy)


    let value = {hamState,setHam,userState}
    return(
        value
    )
}