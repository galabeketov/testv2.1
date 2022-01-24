import ListeningGameWrapper from "./ListeningGameWrapper";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Button } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { shuffle, slowSpeak, speak } from "../../functions/functions";
import { useEffect, useState } from "react";

const GenerateButtons = ({ arr, click }) => {
  return (
    <>
      {arr.map((text) => (
        <Button
          key={text}
          variant={"outlined"}
          className="me-1"
          onClick={() => click(text)}
        >
          {text}
        </Button>
      ))}
    </>
  );
};

const ListeningGame = ({ test }) => {
  const [answers, setAnswers] = useState([]);
  const [variants, setVariants] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const { question, answer, words } = test;
    const variants = [...answer.split(" "), ...(words || [])];

    shuffle(variants);

    setVariants([...variants]);
    setQuestion(question);
    setAnswers([]);
  }, [test]);

  const deleteAnswer = (variant) => {
    const index = answers.indexOf(variant);
    const arr = [...answers];
    arr.splice(index, 1);
    setAnswers(arr);

    setVariants([...variants, variant]);
  };
  const addAnswer = (word) => {
    const index = variants.indexOf(word);
    const arr = [...variants];
    arr.splice(index, 1);
    setVariants(arr);

    setAnswers([...answers, word]);
  };

  return (
    <ListeningGameWrapper>
      <div className="translate-header">
        <h2 className="text-center">Berilgan gapni tarjima qiling!</h2>
      </div>
      <div className="translate-body">
        <div className="translate-question-box d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-end gap-5">
            <Button
              variant={"text"}
              onClick={() => {
                speak(question);
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <VolumeUpIcon
                style={{
                  fontSize: "100px",
                  color: "white",
                  backgroundColor: "#1cb0f6",
                  borderRadius: "20px",
                  padding: "5px",
                  margin: "0px",
                }}
              />
            </Button>
            <Button
              variant={"text"}
              onClick={() => {
                slowSpeak(question);
              }}
            >
              <SlowMotionVideoIcon
                style={{
                  fontSize: "65px",
                  color: "white",
                  backgroundColor: "#1cb0f6",
                  borderRadius: "20px",
                  padding: "5px",
                  margin: "0px",
                }}
              />
            </Button>
          </div>
        </div>
        <div className="result-words py-4">
          <GenerateButtons arr={answers} click={deleteAnswer} />
        </div>
        <div className="variant-words">
          <GenerateButtons arr={variants} click={addAnswer} />
        </div>
      </div>
    </ListeningGameWrapper>
  );
};
export default ListeningGame;
