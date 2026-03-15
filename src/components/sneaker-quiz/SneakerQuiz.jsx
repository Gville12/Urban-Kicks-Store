import { useState } from "react";
import { sneakers } from "../../data/sneakers";
import DestinationCard from "../destination-card/DestinationCard";
import "./SneakerQuiz.css";

function SneakerQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [recommendation, setRecommendation] = useState(null);

    const questions = [
        {
            id: "style",
            text: "What's your primary style?",
            options: [
                { label: "Sporty & Athletic", value: "sport" },
                { label: "Casual Streetwear", value: "casual" }
            ]
        },
        {
            id: "vibe",
            text: "Do you prefer classic or modern looks?",
            options: [
                { label: "Retro/Classic", value: "retro" },
                { label: "Futuristic/Modern", value: "modern" }
            ]
        }
    ];

    const handleAnswer = (questionId, value) => {
        const newAnswers = { ...answers, [questionId]: value };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            calculateRecommendation(newAnswers);
        }
    };

    const calculateRecommendation = (finalAnswers) => {

        let found = null;
        if (finalAnswers.style === "sport" && finalAnswers.vibe === "modern") {
            found = sneakers.find(s => s.name.includes("Runner") || s.name.includes("Pulse"));
        } else if (finalAnswers.style === "casual" && finalAnswers.vibe === "retro") {
            found = sneakers.find(s => s.name.includes("Classic") || s.name.includes("Force"));
        } else {
            found = sneakers[0];
        }

        setRecommendation(found || sneakers[0]);
        setStep(step + 1);
    };

    const resetQuiz = () => {
        setStep(0);
        setAnswers({});
        setRecommendation(null);
    };

    return (
        <div className="sneaker-quiz-container">
            <div className="quiz-header">
                <span className="quiz-badge">New Feature</span>
                <h2 className="quiz-title">Sneaker Matchmaker</h2>
                <p className="quiz-subtitle">Answer 2 simple questions to find your perfect pair.</p>
            </div>

            <div className="quiz-body">
                {step < questions.length && (
                    <div className="quiz-question-card">
                        <p className="question-counter">Question {step + 1} of {questions.length}</p>
                        <h3 className="question-text">{questions[step].text}</h3>
                        <div className="options-grid">
                            {questions[step].options.map((opt) => (
                                <button
                                    key={opt.value}
                                    className="quiz-option-btn"
                                    onClick={() => handleAnswer(questions[step].id, opt.value)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === questions.length && recommendation && (
                    <div className="quiz-result-card">
                        <h3 className="result-title"> We found your match!</h3>
                        <div className="result-sneaker">
                            <DestinationCard
                                title={recommendation.name}
                                description={recommendation.description}
                                image={recommendation.image}
                                brand={recommendation.brand}
                                price={recommendation.price}
                                isNew={recommendation.isNew}
                            />
                        </div>
                        <button className="quiz-reset-btn" onClick={resetQuiz}>
                            Take Quiz Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SneakerQuiz;
