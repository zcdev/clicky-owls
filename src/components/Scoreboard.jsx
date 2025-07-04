export default function Scoreboard({ score, highestScore, owls }) {
    return (
        <section className="scoreboard" aria-live="polite">
            <h2 className="sr-only">Scoreboard</h2>
            <p>Score: {score}</p>
            <p>Highest Score: {highestScore}/{owls.length}</p>
        </section>
    )
}