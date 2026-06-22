import { ArrowRight, CheckCircle2, ClipboardList, PawPrint, PlayCircle } from "lucide-react";
import heroImage from "../assets/dog-guide-hero.png";
import { LinkButton } from "../components/LinkButton";
import { guideSections, homeSteps } from "../data/content";
import { navigateTo } from "../router";

export function HomePage() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="eyebrow">
              <PawPrint size={18} aria-hidden="true" />
              台灣新手飼主的第一份路線圖
            </div>
            <h1>狗狗新手指南</h1>
            <p>
              從養狗前評估、日常照護、訓練到健康觀察，幫你把「好想養狗」整理成真正做得到的生活準備。
            </p>
            <div className="hero-actions">
              <LinkButton href="/prepare">開始準備</LinkButton>
              <LinkButton href="/quiz" variant="secondary">
                做犬種測驗
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-band">
        <div className="section-inner quick-grid">
          <div>
            <span className="section-kicker">Quick start</span>
            <h2>先抓住四個節奏</h2>
          </div>
          <div className="steps-row">
            {homeSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="step-card" key={step.title}>
                  <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-inner page-section">
        <div className="section-heading">
          <span className="section-kicker">Guide map</span>
          <h2>依照現在最需要的問題開始</h2>
          <p>每一頁都整理成新手能直接採取行動的重點，不需要一次讀完。</p>
        </div>
        <div className="feature-grid">
          {guideSections.map((section) => {
            const Icon = section.icon;
            return (
              <a
                className={`feature-card accent-${section.accent}`}
                href={`/${section.slug}`}
                key={section.slug}
                onClick={(event) => navigateTo(event, `/${section.slug}`)}
              >
                <div className="feature-icon">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <span>{section.eyebrow}</span>
                <h3>{section.title}</h3>
                <p>{section.summary}</p>
                <strong>
                  前往閱讀
                  <ArrowRight size={16} aria-hidden="true" />
                </strong>
              </a>
            );
          })}
        </div>
      </section>

      <section className="quiz-strip">
        <div className="section-inner quiz-strip-inner">
          <div>
            <span className="section-kicker">Breed finder</span>
            <h2>還不知道哪種狗狗適合你？</h2>
            <p>
              回答 5 個生活型態問題，看看哪些犬種「比較可能」符合你的時間、空間、活動量與照護期待。
            </p>
          </div>
          <a className="button button-primary" href="/quiz" onClick={(event) => navigateTo(event, "/quiz")}>
            <PlayCircle size={18} aria-hidden="true" />
            <span>開始測驗</span>
          </a>
        </div>
      </section>

      <section className="section-inner note-section">
        <ClipboardList size={28} aria-hidden="true" />
        <div>
          <h2>這不是完美飼主考試</h2>
          <p>
            養狗會遇到變動、失誤和重新調整。這個網站的目標，是讓你先知道該觀察什麼、準備什麼、何時該找專業幫忙。
          </p>
        </div>
        <CheckCircle2 size={28} aria-hidden="true" />
      </section>
    </>
  );
}
