import {Cursor, useTypewriter} from "react-simple-typewriter";

const Typing = () => {
    const [text, count] = useTypewriter({
        words: [
            "<Giovanna Nascimento/>",
            "<Wegx for gaming friends/>",
            "<The girl who loves to draw and code/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="text-6xl flex-col flex items-center text-white p-4">
            <h2>Hi my name is</h2>
            <h1>
                <span className={"font-roboto-moto font-bold"}>{text}</span>
                <Cursor cursorColor={"#FF8000"}/>
            </h1>
        </div>
    )
}
export default Typing;

