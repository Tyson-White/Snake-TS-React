import {FC} from 'react';
import {useAppSelector} from "../store/hooks/types.ts";
const SideBar:FC = () => {
    const {keys} = useAppSelector(state=> state.snakeSlice)
    return <>
        <div
            className="col-start-2 row-start-1 row-end-3 rounded-[0.125rem] bg-[var(--skyblue)] pt-[1rem] flex flex-col items-center">
            <div className="text-[length:var(--title-size)] text-[color:var(--white)]">Control</div>
            <div className="w-[90%] h-[0.4rem] bg-[var(--white)] rounded-[5rem] drop-shadow-md my-[1.25rem]"></div>
            <div
                className="grid grid-cols-[repeat(3,_2.5rem)] grid-rows-[repeat(2,_2.5rem)] text-[length:1.2rem] text-[color:var(--skyblue)] gap-2">
                <div
                    className="bg-[var(--white)] h-[100%] w-[100%] rounded-[5px] drop-shadow-md flex justify-center items-center col-start-2">{keys.up.toUpperCase()}</div>
                <div
                    className="bg-[var(--white)] h-[100%] w-[100%] rounded-[5px] drop-shadow-md flex justify-center items-center col-start-1">{keys.left.toUpperCase()}</div>
                <div
                    className="bg-[var(--white)] h-[100%] w-[100%] rounded-[5px] drop-shadow-md flex justify-center items-center">{keys.down.toUpperCase()}</div>
                <div
                    className="bg-[var(--white)] h-[100%] w-[100%] rounded-[5px] drop-shadow-md flex justify-center items-center">{keys.right.toUpperCase()}</div>
            </div>
            <div className="w-[90%] h-[0.4rem] bg-[var(--white)] rounded-[5rem] drop-shadow-md my-[1.25rem]"></div>
        </div>
    </>
};

export default SideBar;