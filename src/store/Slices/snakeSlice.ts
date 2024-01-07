import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {keyBindingsType, SpawnFoodType} from "../../Types/types.ts";

interface ISnakeState {
    isStart: boolean,
    isPause: boolean,
    foodCount: number,
    food: number[],
    snakeBody: any[],
    snakeHead: number[],
    snakeDirection: "up" | "down" | "right" | "left",
    keys: keyBindingsType
}

const initialState: ISnakeState= {
    isStart: false,
    isPause: false,
    foodCount: 0,
    snakeHead: [0, 3],
    snakeBody: [[0, 2], [0, 1]],
    food: [],
    snakeDirection: "right",
    keys: {
        up: "w",
        down: "s",
        right: "d",
        left: "a"
    }
}

export const snakeSlice = createSlice({
    name: 'snake',
    initialState,
    reducers: {
        setSnakePosition: (state) => {
            const latestList = state.snakeBody

            state.snakeBody = latestList.map((_, index) => {
                if (index === 0) return [state.snakeHead[0], state.snakeHead[1]]
                return [latestList[index - 1][0], latestList[index - 1][1]]
            })

            switch (state.snakeDirection) {
                case "up":
                    state.snakeHead[0] -= 1;
                    break;
                case "down":
                    state.snakeHead[0] += 1;
                    break;
                case "right":
                    state.snakeHead[1] += 1;
                    break;
                case "left":
                    state.snakeHead[1] -= 1;
                    break;
            }
        },
        setDirection: (state, action) => {
            if ((action.payload === "right" && state.snakeDirection !== "left")
                || (action.payload === "left" && state.snakeDirection !== "right")
                || (action.payload === "up" && state.snakeDirection !== "down")
                || (action.payload === "down" && state.snakeDirection !== "up")
            ) {
                state.snakeDirection = action.payload
            }

        },
        spawnFood: (state, action: PayloadAction<SpawnFoodType>) => {
            state.food = [Math.floor(Math.random() * action.payload.rows), Math.floor(Math.random() * action.payload.cols)]
        },
        addCount: (state) => {
            state.foodCount += 1
            state.snakeBody = [...state.snakeBody, [state.snakeBody[state.snakeBody.length - 1][0], state.snakeBody[state.snakeBody.length - 1][1]]]
        },
        startGame: (state) => {
            state.isStart = true
            state.snakeHead = [0, 3]
            state.snakeBody = [[0, 2], [0, 1]]
            state.foodCount = 0
            state.snakeDirection = "right"
        },
        endGame: (state) => {
            state.isStart = false
        },
        setPause: (state) => {
            state.isPause = !state.isPause
        }
    },
})

export const snakeActions = snakeSlice.actions

export default snakeSlice.reducer