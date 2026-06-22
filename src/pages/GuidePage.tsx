import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { LinkButton } from "../components/LinkButton";
import type { GuideSection } from "../data/content";

type GuidePageProps = {
  section: GuideSection;
};

export function GuidePage({ section }: GuidePageProps) {
  const Icon = section.icon;

  return (
    <>
      <section className={`guide-hero accent-${section.accent}`}>
        <div className="section-inner guide-hero-inner">
          <div>
            <span className="section-kicker">{section.eyebrow}</span>
            <h1>{section.title}</h1>
            <p>{section.intro}</p>
            <div className="tag-row">
              {section.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="guide-emblem" aria-hidden="true">
            <Icon size={76} strokeWidth={1.8} />
          </div>
        </div>
      </section>

      <section className="section-inner page-section">
        <div className="info-grid">
          {section.blocks.map((block) => {
            const BlockIcon = block.icon;
            return (
              <article className="info-card" key={block.title}>
                <div className="info-title">
                  <BlockIcon size={24} aria-hidden="true" />
                  <h2>{block.title}</h2>
                </div>
                <ul>
                  {block.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="reminder-band">
        <div className="section-inner reminder-inner">
          <div className="reminder-title">
            <AlertCircle size={26} aria-hidden="true" />
            <div>
              <span className="section-kicker">Remember</span>
              <h2>新手提醒</h2>
            </div>
          </div>
          <div className="reminder-list">
            {section.reminders.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-inner related-section">
        <h2>接著可以看</h2>
        <div className="related-actions">
          {section.related.map((item, index) => (
            <LinkButton key={item.path} href={item.path} variant={index === 0 ? "primary" : "ghost"}>
              {item.label}
            </LinkButton>
          ))}
          <LinkButton href="/" variant="secondary">
            回首頁
          </LinkButton>
        </div>
        <ArrowRight className="related-mark" size={34} aria-hidden="true" />
      </section>
    </>
  );
}
