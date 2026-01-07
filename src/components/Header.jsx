import icon from "../assets/react.svg"
export default function Header() {
    return (
        <header>
            <div className="logoName">
                <img src={icon} alt="chef logo" />
                <h1>Chef Claude</h1>
            </div>
            <p className="note">...Generate Your Recipe With Minimum Of 4 Ingredients..</p>
        </header>
    )
}