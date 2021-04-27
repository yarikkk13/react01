import './App.css';
import CharacterComponent from "./components/characters/characterComponent";

function App() {
    return (
        <div>
            <CharacterComponent description={'bart'}
                                image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <CharacterComponent description={'lisa'}
                                image={'https://i.pinimg.com/originals/ce/fd/4e/cefd4e17118437e660e1222896b44ab4.png'}/>
            <CharacterComponent description={'homer'}
                                image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <CharacterComponent description={'marge'}
                                image={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>

        </div>
    );
}

export default App;
