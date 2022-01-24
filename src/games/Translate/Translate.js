import TranslateGameWrapper from "./TranslateGameWrapper";
import {Button, Typography} from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {shuffle, speak} from "../../functions/functions";
import {useEffect, useState} from "react";

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

const TranslateGame = ({test}) => {
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
	}, [test])

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
	}

	return (
		<TranslateGameWrapper>
			<div className="translate-header">
				<h2>Berilgan gapni tarjima qiling!</h2>
			</div>
			<div className="translate-body">
				<div className="translate-question-box d-flex align-items-center">
					<img src="https://d2pur3iezf4d1j.cloudfront.net/images/50af330449fbbaf257fc9868c4321586" alt=""/>
					<div className="d-flex align-items-center">
						<Button variant={"text"} onClick={() => {speak(question)}}>
							<VolumeUpIcon />
						</Button>
						<Typography variant={"h5"} className={"m-0 ms-2"}>
							{question}
						</Typography>
					</div>
				</div>
				<div className="result-words py-4">
					<GenerateButtons arr={answers} click={deleteAnswer} />
				</div>
				<div className="variant-words">
					<GenerateButtons arr={variants} click={addAnswer} />
				</div>
			</div>
		</TranslateGameWrapper>
	);
}
export default TranslateGame;