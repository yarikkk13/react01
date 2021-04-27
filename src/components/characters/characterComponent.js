import './characterComponent.css'

function CharacterComponent(props) {
    return <div>
        <h2>
            {props.description}
        </h2>
        <img src={props.image} alt=""/>
    </div>;
}

export default CharacterComponent;