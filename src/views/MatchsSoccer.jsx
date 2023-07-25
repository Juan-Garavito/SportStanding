import { useParams } from "react-router-dom";
import { useFixturesSoccer } from "../hooks/useFixturesSoccer";
import { Matchs } from "../components/Matchs";
import {SectionBet} from "../components/SectionBet"

export function MatchsSoccer() {
    const { idLeague } = useParams()
    const [result] = useFixturesSoccer(idLeague)

    return (
        <>
            <section className="sec_estadistica ">
                {<Matchs result={result} />}
            </section>
            <SectionBet />
        </>

    )
}