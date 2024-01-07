import { bindActionCreators } from 'redux'
import { useAppDispatch } from "./types.ts";
import { snakeActions } from "../Slices/snakeSlice.ts";

const allActions = {
    ...snakeActions,
}
export function useActions() {
    const dispatch = useAppDispatch()

    return bindActionCreators(allActions, dispatch)
}