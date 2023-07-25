import { useParams } from "react-router-dom";
import { useGamesBasquet } from "../hooks/useGamesBasquet";
import { Matchs } from "../components/Matchs";
import {SectionBet} from "../components/SectionBet"

export function MatchsBasquet(){
    const {idLeague} = useParams()
    const [result] = useGamesBasquet(idLeague)

    return(
        <>
            <section className="sec_estadistica ">
                {<Matchs result={result} />}
            </section>
            <SectionBet />
        </>
    )
}