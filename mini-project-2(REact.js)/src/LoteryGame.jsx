import { useState } from "react";
import { genLoteryNumber, sum } from "./helper";
import Ticket from "./Ticket";
import "./LoteryGame.css";



export default function LoteryGame({ n, winCondition }) {

    const [ticket, setTicket] = useState(() =>
        genLoteryNumber(n)
    );

    const isWinning = winCondition(ticket);

    const getNewTicket = () => {
        setTicket(genLoteryNumber(n));
    };

    return (
        <div className={`lotery-game ${isWinning ? "winner" : ""}`}>

            {isWinning && (
                <div className="jackpot-rain">

                    {Array.from({ length: 100 }).map((_, index) => (
                        <span
                            key={index}
                            style={{
                                "--x": `${Math.random() * 100}%`,
                                "--size": `${Math.random() * 18 + 16}px`,
                                "--duration": `${Math.random() * 2 + 2.5}s`,
                                "--delay": `${Math.random() * 1.5}s`,
                            }}
                        >
                            {index % 3 === 0
                                ? "🪙"
                                : index % 3 === 1
                                ? "✨"
                                : "🎉"}
                        </span>
                    ))}

                </div>
            )}

            <div className="lottery-content">

                <h1>Lottery Game!</h1>

                <h2>Lottery Number</h2>

                <Ticket
                    ticket={ticket}
                    isWinning={isWinning}
                />

                <button
                    className="lottery-btn"
                    onClick={getNewTicket}
                >
                    Get New Ticket
                </button>

                {isWinning && (
                    <div className="jackpot">

                        <div className="jackpot-stars">
                            ✦ ✧ ✦
                        </div>

                        <h3>JACKPOT!</h3>

                        <p>
                            Your numbers add up to {sum(ticket)}! 🎉
                        </p>

                        <div className="winning-number">
                            {ticket.join(" + ")}
                        </div>

                        <div className="jackpot-stars">
                            ✦ ✧ ✦
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}