export default function OwlGrid({ children }) {
    return (
        <section aria-label="Owl grid">
            <ul className="owl-grid">
                {children}
            </ul>
        </section>
    )
}