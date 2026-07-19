import "./JugadorCard.css";


function JugadorCard({ jugador }) {


    return (

        <div className="card">

    <img
        src={
            jugador.photoUrl
                ? jugador.photoUrl
                : "https://jugadores.up.railway.app/images/generic.svg"
        }
        alt={jugador.name}
        onError={(e) => {
            e.target.src = "https://jugadores.up.railway.app/images/generic.svg";
        }}
    />

    <div className="card-body">

        <h2>{jugador.name}</h2>

        <p><strong>Selección:</strong> {jugador.nationalTeam}</p>
        <p><strong>Club:</strong> {jugador.currentClub}</p>
        <p><strong>Posición:</strong> {jugador.position}</p>
        <p><strong>Número:</strong> {jugador.number}</p>
        <p><strong>Edad:</strong> {jugador.age} años</p>
        <p><strong>Fecha nacimiento:</strong> {jugador.birthDate}</p>

    </div>

</div>
    );


}


export default JugadorCard;