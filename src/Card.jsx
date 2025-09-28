// ---internal, external css ----
import profilePic from './assets/image.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Fazle Rabbi Rakib</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque soluta minus quidem voluptatem sunt inventore adipisci magnam sit quod voluptatibus esse, ullam vitae reiciendis explicabo minima blanditiis quaerat! Neque.</p>
        </div>
    );
}

export default Card;