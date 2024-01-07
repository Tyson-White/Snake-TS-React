import {FC, useCallback, useEffect, useRef} from 'react';
import {Settings} from "../Interfaces/interfaces.ts";
import {useAppSelector} from "../store/hooks/types.ts";
import {useActions} from "../store/hooks/useActions.ts";
import appleIcon from "../assets/svg/apple.svg"
import Pause from "./Pause.tsx";
import Start from "./Start.tsx";



const GameWindow:FC<Settings> = ({cols, rows, speed, }) => {

    const tableRef = useRef<HTMLDivElement | null>(null)
    const {isStart, isPause, snakeHead, snakeBody, food, keys, snakeDirection} = useAppSelector(state => state.snakeSlice)
    const {setSnakePosition, setPause, setDirection, spawnFood, endGame, addCount} = useActions()

    const checkFoodCollision = (foodPos: number[], headPos: number[]): void => {
        if (foodPos[0] === headPos[0] && foodPos[1] === headPos[1]) {
            spawnFood({rows, cols})
            addCount()
        }
    }

    const checkWallCollision = (headPos: any[]) => {
        if (headPos[0] > rows || headPos[0] < 0 || headPos[1] > cols || headPos[1] < 0) {
            endGame()
        }
    }

    const checkBodyCollision = (headPos: any[], body:any[]) => {
        body.map((item) => {
            if (headPos[0] === item[0] && headPos[1] === item[1]) {
                endGame()
            }

        })
    }

    const changeDirection = (e: KeyboardEvent) => {
        switch (e.key) {
            case keys.up:
                setDirection("up")
                break
            case keys.down:
                setDirection("down")
                break
            case keys.right:
                setDirection("right")
                break
            case keys.left:
                setDirection("left")
                break
        }
    }

    const setSnakeHeadBorder = (direction: "right" | "left" | "down" | "up") => {

        switch (direction) {
                case "right":
                    return "rounded-tr-[50%] rounded-br-[50%]";
                case "left":
                    return "rounded-tl-[50%] rounded-bl-[50%]"
                case "up":
                    return "rounded-tl-[50%] rounded-tr-[50%]"
                case "down":
                    return "rounded-bl-[50%] rounded-br-[50%]"

        }
    }

    const setSnakeTailBorder = (body: any[]): string => {
        const tailIndex: number = body.length - 1
        const tail: number[] = body[tailIndex]

        if (tail[0] - 1 === body[body.length - 2][0]) {
            return "rounded-bl-[50%] rounded-br-[50%]"
        }
        if (tail[0] + 1 === body[body.length - 2][0]) {
            return "rounded-tl-[50%] rounded-tr-[50%]"
        }
        if (tail[1] - 1 === body[body.length - 2][1]) {
            return "rounded-tr-[50%] rounded-br-[50%]"
        }
        if (tail[1] + 1 === body[body.length - 2][1]) {
            return "rounded-tl-[50%] rounded-bl-[50%]"
        }

        return ""
    }

    const gameLoop = useCallback((currentFood: any[], currentHead: any[], currentSnakeBody: any[]) => {

        if (!isPause) {
            setTimeout(() => {
                checkWallCollision(currentHead)
                checkBodyCollision(currentHead, currentSnakeBody)
                checkFoodCollision(currentFood, currentHead)
                setSnakePosition()
            }, speed)
        }


    }, [isPause])

    useEffect(() => {
        if (!isPause && isStart) {
            gameLoop(food, snakeHead, snakeBody)
        }
    }, [snakeHead, isStart, isPause]);

    useEffect(() => {
        if (isStart) {
            window.addEventListener("keydown", (e) => {
                if (e.code === "Escape") {
                    setPause()
                    return
                }
                changeDirection(e)
            })
            spawnFood({rows, cols})
        }

    }, [isStart])

    return (<>
        <div ref={tableRef} className={"bg-[var(--yellow)] relative "}>
            {!isStart && <Start/>}
            {isPause && <Pause/>}
            {[...new Array(rows)].map((_, row) => (
                <div className={`flex`}>
                    {[...new Array(cols)].map((_, col) => (
                        <div className={`min-w-[30px] min-h-[30px] relative flex items-center justify-center`}>
                            {snakeHead[0] === row && snakeHead[1] === col &&
                                <div className={`h-[100%] w-[100%] bg-[var(--green)] 
                                ${setSnakeHeadBorder(snakeDirection)}
                                `}></div>}
                            {snakeBody.map((item, index) => (
                                item[0] === row && item[1] === col &&
                                <div className={`h-[100%] w-[100%] bg-[var(--green)] duration-150 ${index === snakeBody.length - 1 && setSnakeTailBorder(snakeBody)}`}></div>
                            ))}
                            {food[0] === row && food[1] === col && <div className="absolute">
                                <img src={appleIcon} alt="" width={40} height={40}/>
                            </div>}

                        </div>
                    ))}
                </div>
            ))}
        </div>
    </>)
};

export default GameWindow;