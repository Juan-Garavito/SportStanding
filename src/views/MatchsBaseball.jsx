import { useParams } from "react-router-dom";
import { useGamesBaseball } from "../hooks/useGamesBaseball";
import { Matchs } from "../components/Matchs";
import {SectionBet} from "../components/SectionBet"

export function MatchsBaseball(){
    const {idLeague} = useParams()
    const [result] = useGamesBaseball(idLeague)

    return(
        <>
            <section className="sec_estadistica ">
                {<Matchs result={result} />}
            </section>
            <SectionBet />
        </>
    )
}