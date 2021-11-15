import React, {useEffect, useState} from "react";

export const Clock = () => {
    let [ticker, setTicker] = useState(0);

    useEffect(()=> {
        setTimeout(() => {
            setTicker(ticker + 1)
        }, 1000)
    }, [ticker])

    return (
        <div>
            <div className={'time'}>Exact Moscow time</div>
            <div className={'clock'}>{new Date().toLocaleTimeString()}</div>
            <div className={'data'}>{new Date().toDateString()}</div>
        </div>
    )
}