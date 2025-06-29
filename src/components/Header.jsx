export default function Header({ message }) {
    return (
        <div className="header">
            <h1>Clicky Owls</h1>
            <h2>Don't click me twice!</h2>
            <h3>{ message }</h3>
        </div>
    )
}