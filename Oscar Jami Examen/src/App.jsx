import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JugadorList from "./components/JugadorList";
import Footer from "./components/Footer";


function App(){


    const [totalJugadores, setTotalJugadores] = useState(0);



    function actualizarTotal(total){

        setTotalJugadores(total);

    }



    return (

        <>

            <Navbar 
                totalJugadores={totalJugadores}
            />


            <Header />


            <main>

                <JugadorList
                    actualizarTotal={actualizarTotal}
                />

            </main>


            <Footer />

        </>

    );


}


export default App;