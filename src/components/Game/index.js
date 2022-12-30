import "./style.css";

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) =>{
    return(
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedWord}</span>
            </h3>
            <p>Voce ainda tem {guesses} tentativas(s).</p>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"/>
                    )
                ))}
                {console.log(letters)}
            </div>
            <div className="letterContainer">
                <p>Tente advinha uma letra da palavra:</p>
                <form>
                    <input type="text" name="latter" maxLength={1} required />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                <span>a,</span>
                <span>b,</span>
            </div>
        </div>
    )
}

export default Game