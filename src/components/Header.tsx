import {FC} from 'react';
import Timer from "./Timer.tsx";

const Header:FC = () => {
    return <>
        <div className="bg-[var(--skyblue)] rounded-[0.125rem] relative">
            <div className="text-[length:var(--title-size)] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="text-[color:var(--darkblue)]">
                    TypeScript
                </span>
                <span className="text-[color:var(--white)]"> Snake</span>
            </div>
            <Timer/>
        </div>
    </>
};

export default Header;