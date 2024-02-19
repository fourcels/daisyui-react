import { Divider, Countdown, Toggle } from 'daisyui-react';
import React, { useEffect, useState } from 'react';

const useCountdown = (start: number) => {
    const [counter, setCounter] = useState(start);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(counter > 0 ? counter - 1 : start);
        }, 1000);

        return () => clearTimeout(timer)

    }, [counter, start]);
    return counter;
}

export default function App() {
    const value = useCountdown(50)
    const [vertical, setVertical] = React.useState(false)
    const [box, setBox] = React.useState(false)

    return (
        <div>
            <div className='flex flex-wrap gap-8'>
                <Toggle label="Vertical"
                    checked={vertical}
                    onChange={(e) => setVertical(e.target.checked)}
                />
                <Toggle label="Box"
                    checked={box}
                    onChange={(e) => setBox(e.target.checked)}
                />

            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Countdown.Group
                    box={box}
                    vertical={vertical}
                >
                    <Countdown value={15} className='text-4xl'>days</Countdown>
                    <Countdown value={10} className='text-4xl'>hours</Countdown>
                    <Countdown value={24} className='text-4xl'>min</Countdown>
                    <Countdown value={value} className='text-4xl'>sec</Countdown>
                </Countdown.Group>
            </div>
        </div>
    )
}
