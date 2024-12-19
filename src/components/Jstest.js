import { useState, useEffect } from "react";

function Jstest() {
    const [x, setX] = useState(10);
    const [y, setY] = useState(100);

    useEffect(() => {
        console.log(x);
    }, [y]);

    useEffect(() => {
        console.log(y);
    }, [x]);

    return (
        <>
            <div>현재 x값은: {x}</div>
            <button onClick={() => setX(x + 1)}>x를 더해보세요</button>
            <br />
            <div>현재 y값은: {y}</div>
            <button onClick={() => setY(y + 1)}>y를 더해보세요</button>
            <hr />
        </>
    );
}

export default Jstest;
