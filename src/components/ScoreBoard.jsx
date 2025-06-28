export default function ScoreBoard({ score, highScore }) {
    return (
        <div className="scoreboard">
            Score: {score} | High Score: {highScore}
        </div>
    )
}