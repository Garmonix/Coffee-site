import './mainsection.css';
import tower from "./images/tower.png";
import cup from "./images/cup.png";

function mainsection() {
    return (
        <section className="main">
            <div className="button-zone">
                <h1 className="slogan">Live, love, drink coffee</h1>
                <p className="smalslogan">This day has a chance to be even better!</p>
                <button className="choosebutton">Choose your coffee</button>
            </div>
            <div className="pictures">
                <img src={tower} alt="tower" className="tower"/>
                <img src={cup} alt="cup" className="cup"/>
            </div>


        </section>
    )
}

export default mainsection