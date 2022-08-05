import axios from "axios";
import { useEffect, useState } from "react";


const game = () => {
    const [text, setText] = useState();

    useEffect(()=> {
        axios
        .get('/api/card/callCard')
        .then((res) => {
            console.log(res.data);
            setText(res.data)
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
    }, [])
    

    return (
        <div>
            {
            }
        </div>
    )
}

export default game