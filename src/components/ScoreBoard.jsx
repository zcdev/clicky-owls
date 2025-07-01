export default function Scoreboard({ score, highScore }) {
    return (
        <section className="scoreboard" aria-live="polite">
            <h2 className="sr-only">Scoreboard</h2>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </section>
    )
}