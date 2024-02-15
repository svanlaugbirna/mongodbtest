'use client'
import { useEffect } from "react"

export default function Front(){
    useEffect(() => {
        console.log("Hello front end")
    })
    return (<h1>Some content</h1>)
}