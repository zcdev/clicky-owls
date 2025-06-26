export default function OwlCard({ owl, onClick }) {
    return (
        <div className="owl-card" onClick={() => onClick(owl.id)}>
            <img src={`/assets/${owl.image}`} alt={`Owl ${owl.id}`} />
        </div>
    )
}