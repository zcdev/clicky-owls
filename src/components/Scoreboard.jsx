export default function Scoreboard({ score, highestScore, owls }) {
    return (
        <section className="scoreboard" aria-live="polite">
            <h2 className="sr-only">Scoreboard</h2>
            <p>Current Score: <strong>{score}</strong></p>
            <p>Highest Score: <strong>{highestScore}</strong> / <strong>{owls.length}</strong></p>
        </section>
    )
}