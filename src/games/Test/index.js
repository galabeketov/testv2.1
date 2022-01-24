import TypeTestWrapper from "./TypeTestWrapper";
import {speak} from "../../functions/functions";
import {useState} from "react";

const TypeTest = ({ test }) => {
  let { question, answer, words } = test;

  const [active, setActive] = useState(null)

  return (
    <TypeTestWrapper>
      <div className="container">
        <div className="question-block py-5">
          <div className="question my-5">
            <h2><span className="word">"{question}"</span> soz qanday tarjima qilinadi ?</h2>
          </div>

          <div className="variants">
            <ul>
              {words.map((word, item) => (
                <li
                  key={word}
                  className={item === active ? "active" : ""}
                  onClick={() => {
                    speak(word);
                    setActive(item)
                  }}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TypeTestWrapper>
  );
};

export default TypeTest;
