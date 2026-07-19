import "./Navbar.css";


function Navbar({ totalJugadores }) {


    return (

        <nav className="navbar">


            <div className="navbar-logo">

                ⚽ Catálogo de Jugadores

            </div>


            <div className="navbar-contador">

                Jugadores:
                <strong>
                    {totalJugadores}
                </strong>

            </div>


        </nav>

    );


}


export default Navbar;