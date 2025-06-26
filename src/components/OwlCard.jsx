export default function OwlCard({ owl, onClick }) {
    return (
        <div className="owl-card" onClick={onClick}>
            <img src={`./src/assets/${owl.image}`} alt={`Owl ${owl.id}`} />
        </div>
    )
}