import {FC, useEffect, useRef, useState} from 'react';
import {useAppSelector} from "../store/hooks/types.ts";

const Timer:FC = () => {
    const {isStart, isPause} = useAppSelector(state => state.snakeSlice)
    const [sec, setSec] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const timeoutId = useRef<number | null>(null);

    useEffect(() => {
        if (isPause && timeoutId.current) {
            clearInterval(timeoutId.current)
        }
        if (isStart && !isPause) {
            timeoutId.current = setTimeout(() => {
                if (sec < 59) {
                    setSec(prev => prev + 1)
                }
                else {
                    setSec(0)
                    setMin(prev => prev + 1)
                }
            }, 1000);
        }
        if (isPause && timeoutId.current) {
            clearInterval(timeoutId.current)
        }
    }, [isStart, isPause, sec])

    return <div className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-[length:1.2rem] text-[color:var(--white)]">
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}

    </div>
}

export default Timer;