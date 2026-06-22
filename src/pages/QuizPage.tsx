import { Check, ClipboardCheck, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { dogProfiles, quizQuestions } from "../data/content";

type Answers = Record<string, number>;

function getScores(answers: Answers) {
  const scores = Object.fromEntries(dogProfiles.map((dog) => [dog.id, 0])) as Record<string, number>;

  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = quizQuestions.find((item) => item.id === questionId);
    const option = question?.options[optionIndex];

    if (!option) {
      return;
    }

    Object.entries(option.weights).forEach(([dogId, score]) => {
      scores[dogId] = (scores[dogId] ?? 0) + score;
    });
  });

  return scores;
}

export function QuizPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const completed = Object.keys(answers).length === quizQuestions.length;

  const results = useMemo(() => {
    const scores = getScores(answers);
    return [...dogProfiles]
      .sort((a, b) => scores[b.id] - scores[a.id])
      .slice(0, 3)
      .map((dog) => ({ dog, score: scores[dog.id] }));
  }, [answers]);

  const progress = Math.round((Object.keys(answers).length / quizQuestions.length) * 100);

  return (
    <>
      <section className="quiz-hero">
        <div className="section-inner quiz-hero-inner">
          <div>
            <span className="section-kicker">Breed finder</span>
            <h1>適合犬種測驗</h1>
            <p>
              這份測驗會依生活空間、時間、活動量與照護偏好，推薦「較可能適合」你的常見犬種。結果不是唯一答案，實際選擇仍要看個別狗狗性格與專業建議。
            </p>
          </div>
          <div className="progress-card" aria-label={`完成進度 ${progress}%`}>
            <Sparkles size={30} aria-hidden="true" />
            <strong>{progress}%</strong>
            <span>完成進度</span>
            <div className="progress-track">
              <div style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-inner quiz-section">
        <div className="question-list">
          {quizQuestions.map((question, questionIndex) => (
            <article className="question-card" key={question.id}>
              <div className="question-heading">
                <span>{String(questionIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{question.question}</h2>
                  <p>{question.helper}</p>
                </div>
              </div>
              <div className="option-grid" role="radiogroup" aria-label={question.question}>
                {question.options.map((option, optionIndex) => {
                  const selected = answers[question.id] === optionIndex;
                  return (
                    <button
                      className={selected ? "option-card is-selected" : "option-card"}
                      key={option.label}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: optionIndex,
                        }))
                      }
                    >
                      <span className="option-check" aria-hidden="true">
                        {selected && <Check size={16} />}
                      </span>
                      <strong>{option.label}</strong>
                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <aside className="result-panel">
          <div className="result-sticky">
            <div className="result-heading">
              <ClipboardCheck size={24} aria-hidden="true" />
              <div>
                <span className="section-kicker">Result</span>
                <h2>{completed ? "你的推薦結果" : "完成題目後看結果"}</h2>
              </div>
            </div>

            {!completed && (
              <p className="empty-result">
                目前已完成 {Object.keys(answers).length} / {quizQuestions.length} 題。全部作答後，這裡會顯示前三個較可能適合你的犬種。
              </p>
            )}

            {completed && (
              <div className="result-list">
                {results.map(({ dog }, index) => (
                  <article className="dog-result" key={dog.id}>
                    <span className="rank">推薦 {index + 1}</span>
                    <h3>{dog.name}</h3>
                    <p>{dog.bestFor}</p>
                    <dl>
                      <div>
                        <dt>體型</dt>
                        <dd>{dog.size}</dd>
                      </div>
                      <div>
                        <dt>活動量</dt>
                        <dd>{dog.activity}</dd>
                      </div>
                      <div>
                        <dt>美容/掉毛</dt>
                        <dd>{dog.grooming}</dd>
                      </div>
                      <div>
                        <dt>新手難度</dt>
                        <dd>{dog.difficulty}</dd>
                      </div>
                    </dl>
                    <div className="tag-row compact">
                      {dog.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <small>{dog.reminder}</small>
                  </article>
                ))}
                <p className="result-note">
                  測驗結果只是一個起點。實際選狗前，仍建議了解個別狗狗的年齡、健康、過去生活、收容或認養資訊，必要時諮詢獸醫或訓練師。
                </p>
              </div>
            )}

            <button className="button button-secondary reset-button" type="button" onClick={() => setAnswers({})}>
              <RotateCcw size={18} aria-hidden="true" />
              <span>重新測驗</span>
            </button>
          </div>
        </aside>
      </section>
    </>
  );
}
