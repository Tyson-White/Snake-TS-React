import {FC} from 'react';
import {useAppSelector} from "../store/hooks/types.ts";
const SideBar:FC = () => {
    const {foodCount} = useAppSelector(state=> state.snakeSlice)
    return <>
    <div className="col-start-2 row-start-1 row-end-3 rounded-[0.125rem] bg-[var(--skyblue)]">
        {foodCount}
    </div>
    </>
};

export default SideBar;