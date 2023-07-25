import { useContext } from "react"
import { BetsContext } from "../context/bets"

export function SectionBet(){
    const {bets} = useContext(BetsContext)
    
    return(
        <aside className="sec_apuesta">
            <h2 className="apuesta_titulo">Tu Apuesta</h2>
            {bets && bets.map((bet) => 
            <div className="cont_apuesta" key={bet.id}>
                <p  >{bet.estado}</p>
                <p>{bet.local}</p>        
                <p>{bet.marcador}</p>
                <p>{bet.visitante}</p>
                <p className="apuesta_ganador">GANADOR: {bet.select.ganador}</p>
            </div>   
            )}
            {
                bets.length === 0 ? <p>No hay apuestas</p> :  
                <form className="form_apuesta" >
                <label>Monto de Apuesta</label>
                <input type="number" name="" id=""/>
                <input type="submit" value="APOSTAR"/>
                </form>
            }
           
        </aside>
    )
}

