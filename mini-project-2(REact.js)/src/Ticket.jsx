import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket, isWinning }) {

    return (
        <div
            className={`ticket ${isWinning ? "winning-ticket" : ""
                }`}
        >

            {ticket.map((num, idx) => (
                <TicketNum
                    num={num}
                    key={idx}
                />
            ))}

        </div>
    );
}