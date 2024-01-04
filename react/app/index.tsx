import { useEffect, useState } from "react";

export default function App() {
    const [randomNumber, setRandomNumber] = useState<number>(0);

    useEffect(() => {
        const randomNumberRequest = setInterval(async () => {
            setRandomNumber(await electronAPI.exampleAPI.getRandomNumber());
        }, 2000);

        return () => {
            clearInterval(randomNumberRequest);
        };
    }, []);

    return (
        <h1>{randomNumber}</h1>
    );
}