import {FC, useEffect, useRef, useState} from 'react';
import {useAppSelector} from "../store/hooks/types.ts";

const Timer:FC = () => {
    const {isStart, isPause} = useAppSelector(state => state.snakeSlice)
    const timerRef = useRef<number | null>(null)
    const [sec, setSec] = useState<number>(0)
    const [min, setMin] = useState<number>(0)


    useEffect(() => {
        if (isStart && !isPause) {
            if (isPause && timerRef.current) {
                clearTimeout(timerRef.current)
                return
            }
            timerRef.current = setTimeout(() => {
                if (sec < 59) {
                    setSec(sec + 1)
                }
                else {
                    setSec(0)
                    setMin(prev => prev + 1)
                }
            }, 1000)

        }
    }, [isStart, sec])

    return <div className="absolute right-[2rem] top-1/2 -translate-y-1/2 text-[length:var(--btn-fz)] text-[color:var(--white)]">
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}

    </div>
}

export default Timer;