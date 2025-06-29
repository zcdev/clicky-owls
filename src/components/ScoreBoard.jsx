export default function ScoreBoard({ score, highScore }) {
    return (
        <div className="scoreboard">
            <h3>Score: {score} | High Score: {highScore}</h3>
        </div>
    )
}