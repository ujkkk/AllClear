import React from "react";
import GameTitleScreen from "../components/game/gameTitleScreen";

export default function Page3() {
    const GAME_TITLE = "수강신청해부기"
    return (
       <GameTitleScreen title = {GAME_TITLE}/>
    );
}