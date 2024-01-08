import {FC} from 'react';
import Timer from "./Timer.tsx";
import appleIcon from "../assets/svg/apple-green.svg"
import redAppleIcon from "../assets/svg/apple.svg"
import {useAppSelector} from "../store/hooks/types.ts";

const Header:FC = () => {
    const {foodCount} = useAppSelector(state => state.snakeSlice)
    return <>
        <div className="bg-[var(--skyblue)] rounded-[0.125rem] relative">
            <div className="text-[length:var(--title-size)] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center">
                <img src={appleIcon} className="mr-[0.38rem] translate-y-[-0.1rem]"  width={25} alt=""/>
                <span className="text-[color:var(--darkblue)] mr-[0.38rem]">
                    TypeScript
                </span>
                <span className="text-[color:var(--white)]">Snake</span>
            </div>
            <Timer/>
            <div className="absolute top-1/2 -translate-y-1/2 right-[2rem] flex items-center text-[1.4rem] text-[color:var(--white)]">
                <img src={redAppleIcon} className="-translate-y-[2px] mr-[0.25rem]" alt=""/>
                x{foodCount}
            </div>
        </div>
    </>
};

export default Header;