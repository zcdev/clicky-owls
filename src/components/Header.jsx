export default function Header({ message }) {
    return (
        <header className="header">
            <h1>Clicky Owls</h1>
            <h2>Don't click me twice!</h2>
            <p aria-live="polite" className="message">{ message }</p>
        </header>
    )
}