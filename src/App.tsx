import {useEffect} from "react";
import GameWindow from "./components/GameWindow.tsx";
import Header from "./components/Header.tsx";
import SideBar from "./components/SideBar.tsx";
import {useGetSettingsQuery} from "./api/api.ts";

import {useActions} from "./store/hooks/useActions.ts";
function App() {
  const {data, isLoading} = useGetSettingsQuery("")
  const {setKeys} = useActions()

  useEffect(() => {
    if (data) {
      setKeys(data.control)
    }
  }, [isLoading]);
  return <>
    {!isLoading && <div
        className="font-jua grid grid-rows-[4.25rem,_auto] grid-cols-[auto,_15rem] gap-[1.25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Header/>
      <GameWindow cols={20} rows={20} speed={100}/>
      <SideBar/>
    </div>}
  </>
}

export default App
