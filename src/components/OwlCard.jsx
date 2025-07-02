export default function OwlCard({ owl, onClick }) {
    return (
        <li>
            <button className="owl-card" onClick={() => onClick(owl.id)} aria-label={`Owl ${owl.id}`}>
                <img src={`./assets/${owl.image}`} alt="" aria-hidden="true" />
            </button>
        </li>
    )
}