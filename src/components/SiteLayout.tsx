import { Bone, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigateTo } from "../router";

const navItems = [
  { label: "首頁", path: "/" },
  { label: "新手準備", path: "/prepare" },
  { label: "日常照護", path: "/care" },
  { label: "訓練與行為", path: "/training" },
  { label: "健康觀察", path: "/health" },
  { label: "犬種測驗", path: "/quiz" },
];

type SiteLayoutProps = {
  route: string;
  children: React.ReactNode;
};

export function SiteLayout({ route, children }: SiteLayoutProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setOpen(false);
    navigateTo(event, path);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" onClick={(event) => handleNav(event, "/")}>
          <span className="brand-mark" aria-hidden="true">
            <Bone size={22} strokeWidth={2.6} />
          </span>
          <span>
            <strong>狗狗新手指南</strong>
            <small>First Paw Guide</small>
          </span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="主要導覽">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={route === item.path ? "active" : ""}
              onClick={(event) => handleNav(event, item.path)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <Heart size={18} aria-hidden="true" />
          <span>以正向陪伴、穩定照護和專業諮詢為核心的新手養狗指南。</span>
        </div>
        <p>健康內容僅供日常觀察參考，不能取代獸醫診療。</p>
      </footer>
    </div>
  );
}
