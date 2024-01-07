import {FC} from 'react';
import settingsIcon from "../assets/svg/settings.svg";

import {useActions} from "../store/hooks/useActions.ts";

const Start:FC = () => {

    const {startGame} = useActions()
    return <div>
        <div className="absolute top-0 left-0 h-[100%] w-[100%] z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <button
                    className="bg-[var(--white)] p-4 text-[color:var(--skyblue)] duration-150 text-[length:var(--btn-fz)] rounded-[5px] hover:opacity-[0.8]"
                    onClick={() => startGame()}>
                    Start game
                </button>
                <button
                    className="flex items-center bg-[var(--white)] p-4 mt-[0.68rem] text-[color:var(--skyblue)] duration-150 text-[length:var(--btn-fz)] rounded-[5px] hover:opacity-[0.8]">
                    Settings <img className="ml-[0.5rem]" width={23} src={settingsIcon} alt=""/>
                </button>
            </div>
        </div>
    </div>
}

export default Start;