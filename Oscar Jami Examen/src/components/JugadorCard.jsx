import "./JugadorCard.css";


function JugadorCard({ jugador }) {


    return (

        <div className="jugador-card">


            <img
                src={
                    jugador.photoUrl
                        ? jugador.photoUrl
                        : "https://jugadores.up.railway.app/images/generic.svg"
                }
                alt={jugador.name}
                className="jugador-imagen"
                onError={(e) => {
                    e.target.src = "https://jugadores.up.railway.app/images/generic.svg";
                }}
            />


            <div className="jugador-info">


                <h2>
                    {jugador.name}
                </h2>


                <p>
                    <strong>Selección:</strong> {jugador.nationalTeam}
                </p>


                <p>
                    <strong>Club:</strong> {jugador.currentClub}
                </p>


                <p>
                    <strong>Posición:</strong> {jugador.position}
                </p>


                <p>
                    <strong>Número:</strong> {jugador.number}
                </p>


                <p>
                    <strong>Edad:</strong> {jugador.age} años
                </p>


                <p>
                    <strong>Fecha nacimiento:</strong> {jugador.birthDate}
                </p>


            </div>


        </div>

    );


}


export default JugadorCard;