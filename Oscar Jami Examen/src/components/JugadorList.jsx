import { useEffect, useState } from "react";
import "./JugadorList.css";
import JugadorCard from "./JugadorCard";


function JugadorList({ actualizarTotal }) {


    const [jugadores, setJugadores] = useState([]);

    const [cargando, setCargando] = useState(true);

    const [error, setError] = useState(null);



    useEffect(() => {


        async function cargarJugadores() {

            try {

                const respuesta = await fetch(
                    "https://jugadores.up.railway.app/players"
                );

                await new Promise(resolve => setTimeout(resolve, 300));


                const datos = await respuesta.json();


                console.log(datos);


                if (!datos.data) {

                    throw new Error("No se pudo obtener los jugadores");

                }


                setJugadores(datos.data);


                actualizarTotal(datos.data.length);


            } catch (error) {

                setError(error.message);

            } finally {

                setCargando(false);

            }


        }


        cargarJugadores();


    }, []);


    if (cargando) {

        return <h2>Cargando jugadores...</h2>;

    }



    if (error) {

        return <h2>Error: {error}</h2>;

    }



    if (jugadores.length === 0) {

        return <h2>No existen jugadores disponibles</h2>;

    }



    return (

        <div className="jugadores-container">


            {
                jugadores.map((jugador) => (


                    <JugadorCard
                        key={jugador.id}
                        jugador={jugador}
                    />


                ))
            }


        </div>

    );


}


export default JugadorList;