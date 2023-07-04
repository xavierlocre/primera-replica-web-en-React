import './atomos/Textos.css'

const Texto = () => {

    return (
        <section>
            <div className='contenedor'>
                <img src="./src/screenshot-2.jpg" alt="imagen" />


                <div className='contenedortexto'>
                    <h2 className='h2'> Organize Your Time
                        And Start Getting
                        Results
                    </h2>
                    <p>
                        Sync is the first mobile app on the market to harness <thead>power of social connections to help you stop procrastinating</thead>
                        and start getting things done. Give it a try and see <thead>changes right away</thead>
                    </p>
                    <ul>

                        <li className="il"> Analyse and evaluate your current status and productivity</li>
                        <li>Begin monitoring your day to day routine with Sync app</li>
                        <li>See the improved results in no more than a couple of weeks</li>

                    </ul>
                    <button className="boton">LIGHTBOX</button>
                </div>

            </div>

        </section>

    )

};

export default Texto;