import type { Metadata } from "next";
import Link from "next/link";
import GalleryFilters from "@/components/GalleryFilters";
import Button from "@/components/UI/Button";

export const metadata: Metadata = {
  title: "Работы мастеров — салон красоты «Стенс»",
  description:
    "Портфолио мастеров салона «Стенс»: окрашивания, стрижки, маникюр и естественный перманент.",
};

export default function GalleryPage() {
  return (
    <div className="inner-page">
      <section className="page-hero page-hero--dark">
        <div className="section-shell page-hero-grid">
          <div>
            <nav className="breadcrumbs breadcrumbs--light" aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>
              <span>/</span>
              <span>Работы</span>
            </nav>
            <p className="section-label section-label--light">Портфолио</p>
            <h1>Работы мастеров</h1>
          </div>
          <p className="page-hero-lead">
            Реальные результаты наших мастеров: форма, цвет и детали без
            фотостоков и чужих работ.
          </p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-shell">
          <GalleryFilters />
        </div>
      </section>

      <section className="simple-cta">
        <div className="section-shell simple-cta-grid">
          <div>
            <p className="section-label">Нравится результат?</p>
            <h2>Покажите мастеру пример</h2>
          </div>
          <div>
            <p>
              На консультации обсудим, как адаптировать форму или оттенок именно
              под вас.
            </p>
            <Button href="/kontakty#zapis">Записаться на консультацию</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
