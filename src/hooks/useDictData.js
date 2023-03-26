import { useEffect, useState } from 'react'
import axios from 'axios'

const useDictData = (word) => {
    const [definition, setDefinition] = useState('')
    useEffect(() => {
        if (!word) {
            return
        }
        axios({
            url: `http://localhost:8080/${word}`,
            method: 'GET'
        }).then((response) => {
            setDefinition(response.data.definition)
        }).catch((error) => {
            console.log(error)
        })
    }, [word])

    return definition
}

export default useDictData