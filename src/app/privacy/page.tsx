import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Салон красоты Стенс",
  description: "Политика конфиденциальности и обработки персональных данных гостей салона красоты «Стенс» в Нижнем Новгороде.",
};

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="bg-[#B98A5E]/10 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-[0.12em]">
            Политика конфиденциальности
          </h1>
        </div>
      </section>

      {/* Main Text */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed font-light text-sm sm:text-base text-brand-dark/80 space-y-6">
        <p className="font-medium text-brand-dark">
          Настоящая политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей сайта салона красоты «Стенс».
        </p>

        <h3 className="font-serif-display text-lg font-bold text-brand-dark pt-4">1. Сбор персональных данных</h3>
        <p>
          Мы собираем персональные данные (имя, номер телефона) только тогда, когда вы добровольно оставляете их через интерактивные формы онлайн-записи или связи на нашем сайте. Это необходимо для корректного бронирования времени визита и подтверждения вашей записи по СМС или звонку.
        </p>

        <h3 className="font-serif-display text-lg font-bold text-brand-dark pt-4">2. Использование персональных данных</h3>
        <p>
          Все собранные данные используются исключительно для:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Подтверждения, изменения или отмены вашей записи в салон.</li>
          <li>Обратной связи и консультирования по вопросам предоставляемых услуг.</li>
          <li>Предоставления вам информации о скидках, акциях и специальных предложениях (только с вашего явного согласия).</li>
        </ul>

        <h3 className="font-serif-display text-lg font-bold text-brand-dark pt-4">3. Защита информации</h3>
        <p>
          Мы предпринимаем все необходимые технические и административные меры предосторожности для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Доступ к вашим данным имеют только сотрудники салона, непосредственно участвующие в предоставлении услуг.
        </p>

        <h3 className="font-serif-display text-lg font-bold text-brand-dark pt-4">4. Передача третьим лицам</h3>
        <p>
          Мы не продаем, не обмениваем и не передаем ваши личные данные сторонним организациям. Исключение составляют доверенные сервисы-партнеры (например, система онлайн-записи DIKIDI), используемые исключительно для технического обеспечения процесса вашей записи в салон, а также случаи, прямо предусмотренные законодательством РФ.
        </p>

        <h3 className="font-serif-display text-lg font-bold text-brand-dark pt-4">5. Согласие</h3>
        <p>
          Используя наш сайт и отправляя данные через формы записи или обратной связи, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Вы имеете право в любой момент запросить удаление ваших данных из нашей базы, связавшись с администрацией салона по телефону.
        </p>

        <div className="pt-8 border-t border-[#B98A5E]/10 flex justify-center">
          <Link href="/kontakty" className="text-xs uppercase font-bold tracking-[0.12em] text-brand-accent hover:text-brand-dark transition-colors py-3 min-h-[44px] flex items-center">
            Вернуться в контакты &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
