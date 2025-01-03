"use client"
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function App() {
    useEffect(()=> {
        require("bootstrap/dist/js/bootstrap")
      }, [])
}