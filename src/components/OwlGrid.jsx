export default function OwlGrid({ children, isGameWon }) {
    return (
        <section aria-label="Owl grid" className={isGameWon ? "game-freeze" : ""}>
            <ul className="owl-grid">
                {children}
            </ul>
        </section>
    )
}