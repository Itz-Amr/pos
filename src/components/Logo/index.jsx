import { PiCashRegisterFill } from "react-icons/pi";
export default function Logo({ className }) {
    return (
        <div className={`d-flex align-items-center gap-2 ${className}`}>
            <PiCashRegisterFill className="fs-3" style={{ color: "var(--red)" }} />
            <p className="m-0 fw-bolder" >Smart <span style={{ color: "var(--red)" }}>POS</span></p>
        </div>
    )
}
