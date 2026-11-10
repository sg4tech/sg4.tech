// Article body sections, split out of page.tsx to satisfy ESLint
// max-lines-per-function and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: complexity grows on its own and AI speeds
// it up → seven levels of CI checks, cheapest first → one table of tools per
// language → checks beat written rules because an agent can't skip a red build
// → a ready-made Python template that bundles all of it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const VIBECODED_HREF = getPostPathInLocale("vibecoded-mvp-stopped-shipping", "ru");
const TEMPLATE_HREF = "https://github.com/sg4tech/python-guardrails-template";
const LEHMAN_HREF = "https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution";
const HOARE_HREF = "https://everythingsysadmin.com/2009/01/tony-hoare-apologizes-for-inve.html";
const HARNESS_HREF = "https://www.harness.io/blog/10-exception-types-in-production-java-applications";
// The playbook exists in English only; the agent reads it either way.
const PLAYBOOK_URL = "https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/playbook.md";
const MILLER_HREF = "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two";

export function ArticleLede(): ReactNode {
  return (
    <>
      Сложность кода растёт сама собой, так было всегда, а ИИ только ускорил этот процесс. Вот семь
      уровней проверок в CI, которые не дают копиться легаси, в том порядке, в каком я их добавляю.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Энтропия растёт сама собой. В физике это второе начало термодинамики. В разработке похоже:
        беспорядок накапливается легко, а порядок требует усилий.
      </p>
      <p>
        Так было всегда. С ростом проекта растёт и его сложность: копится легаси, проект труднее
        поддерживать, каждое изменение даётся тяжелее, а риск что-то сломать всё выше. В 1974 году
        Мэнни Леман сформулировал это как{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          закон эволюции программ
        </a>
        : сложность системы растёт, если специально не работать над её снижением. ИИ лишь ускорил
        накопление легаси.
      </p>
      <p>Код хочется держать максимально простым, и здесь помогают проверки в CI.</p>
    </>
  );
}

// The seven levels as a staircase: listed bottom-up in source order (cheapest
// first) and drawn with the cheapest step at the bottom. Level 7 is the only
// non-deterministic one, so it gets a dashed outline and a different tag.
const ladderSteps = [
  { level: 1, name: "Мёртвый код" },
  { level: 2, name: "Линтеры и форматтеры" },
  { level: 3, name: "Статический анализ" },
  { level: 4, name: "Юнит-тесты и покрытие" },
  { level: 5, name: "Сложность и дублирование" },
  { level: 6, name: "Архитектура и зависимости" },
  { level: 7, name: "Письменные правила (AGENTS.md)" }
] as const;

const SOFT_LEVEL = 7;

export function LevelLadder(): ReactNode {
  return (
    <figure className={styles.ladderFigure}>
      <ol className={styles.ladder}>
        {ladderSteps.map((step) => {
          const isSoft = step.level === SOFT_LEVEL;
          return (
            <li
              key={step.level}
              className={isSoft ? `${styles.ladderStep} ${styles.ladderStepSoft}` : styles.ladderStep}
              style={{ marginLeft: `calc(${step.level - 1} * var(--step-shift))` }}
            >
              <span className={styles.ladderNumber}>{step.level}</span>
              <span className={styles.ladderName}>{step.name}</span>
              <span className={styles.ladderTag}>{isSoft ? "CI не проверяет" : "валит сборку"}</span>
            </li>
          );
        })}
      </ol>
      <FigureCaption>
        Самые дешёвые проверки внизу. Уровни 1–6 каждый раз валят сборку; письменные правила наверху
        направляют агента, но остановить его не могут.
      </FigureCaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Мёртвый код</h2>
      <p>
        Самый простой шаг — удалить то, что больше не используется. Это тоже можно автоматизировать:
        поставьте в CI поиск мёртвого кода (vulture для Python, knip для JS/TS), и неиспользуемый код
        просто будет валить сборку.
      </p>
      <h2 id="linters">2. Линтеры и форматтеры</h2>
      <p>
        Дальше линтер: phpcs для PHP, ruff для Python, ESLint и Prettier для JS/TS и так далее. У
        каждого языка свой стиль кода, и какой именно вы выберете, неважно. Важно не тратить время и
        деньги на чтение кода и на комментарии в ревью вроде «поменяй двойные кавычки на одинарные».
        Договоритесь о стиле один раз, и дальше CI проверяет его автоматически.
      </p>
      <h2 id="static-analysis">3. Статический анализ</h2>
      <p>
        Следующий уровень — статические анализаторы: PHPStan для PHP, mypy для Python, tsc для JS/TS.
        Строгая статическая проверка типов ловит простые ошибки: строку передали туда, где ожидали
        число, или забыли, что значение может быть пустым. Логику она не проверит, но целый класс
        ошибок уберёт. Пустые значения — классический случай: Тони Хоар, придумавший нулевую ссылку,
        назвал её своей{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          «ошибкой на миллиард долларов»
        </a>
        , а по{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          данным Harness за 2020 год
        </a>{" "}
        NullPointerException всё ещё входил в топ-10 исключений в 70% изученных ими продакшен-сред на
        Java.
      </p>
      <h2 id="unit-tests">4. Юнит-тесты и 80% покрытия</h2>
      <p>
        Зачем? Затем, что плохой код очень трудно покрыть юнит-тестами. Чтобы код можно было покрыть
        тестами, его приходится делить на отдельные классы и функции, думать о зависимостях и
        интерфейсах, решать, что останется публичным, а что приватным, использовать внедрение
        зависимостей и избегать глобального состояния. Конечно, это не стопроцентная гарантия, тем
        более что ИИ легко раздувает покрытие тестами, которые почти ничего не проверяют. Но так или
        иначе порог накладывает ограничения на дизайн и повышает шансы на хороший код.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Сложность и дублирование</h2>
      <p>
        Рабочая память человека вмещает лишь несколько независимых элементов одновременно: Джордж
        Миллер в 1956 году{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          насчитал 7 ± 2
        </a>
        , а Нельсон Коуэн в 2001-м уточнил: около четырёх. Всё, что сверх этого, даётся тяжело и
        уходит в своп. Исследований на эту тему для ИИ я не видел, но если код понятен человеку,
        растут шансы, что ИИ не начнёт галлюцинировать. А если код настолько запутан, что человек в
        нём не разберётся, ИИ, скорее всего, нагромоздит сверху новые слои легаси.
      </p>
      <p>
        Поэтому я ставлю жёсткие лимиты на метрики дублирования и сложности. Лимит превышен → CI
        падает → приходится рефакторить и выносить код в отдельные методы и классы. Для Python,
        например, есть complexipy.
      </p>
      <p>
        Вот как это выглядит на реальном проекте. На платформе, над которой я работал, бэкенд в
        основном писали ИИ-агенты. Через шесть недель, когда ни одной из этих проверок ещё не было,
        первый замер нашёл 143 функции со сложностью выше 10 и 202 скопированных фрагмента — около 5%
        кода. Позже, когда ввели жёсткий потолок, самой сложной оказалась функция обработки чеков, то
        есть работы с деньгами: 490 строк и сложность 73. Как только потолок начал валить сборку,
        сложность за четыре дня рефакторинга, по одной функции на коммит, снизилась с 73 до 30. За два
        месяца после первого замера дублирование упало примерно до 3%.
      </p>
      <p>
        Если легаси уже накопилось, можно начать с того, что есть: поставьте лимит на уровне самой
        сложной функции, и хуже хотя бы не станет. Но долг от этого никуда не денется. Его гасят
        отдельно: выделяйте время на рефакторинг и после каждого шага снижайте лимит, чтобы закрепить
        результат. Задача проверок —
        сдерживать рост беспорядка; накопленное разбирают руками.
      </p>
    </>
  );
}

export function SectionArchitectureAndRules(): ReactNode {
  return (
    <>
      <h2 id="architecture">6. Архитектура и зависимости</h2>
      <p>
        Жёсткие границы тоже снижают сложность, только уровнем выше. Это как инкапсуляция в ООП:
        система собрана из крупных блоков, внутренности которых не нужно держать в голове, достаточно
        знать их контракт. А реализацию блока при необходимости можно заменить, не переписывая
        остальную систему. Вместо десятков классов и связей вы рассуждаете о нескольких крупных
        блоках. Вы снова сокращаете число вещей, которые приходится держать в голове одновременно, на
        этот раз на каждом уровне архитектуры.
      </p>
      <p>
        На практике это Clean Architecture и гексагональная архитектура: код разделён на слои, а
        зависимости между ними строго ограничены. Домен ничего не знает о базе данных, HTTP и внешних
        API, а внешний код обращается к нему через заранее определённые интерфейсы. Это тоже
        проверяется автоматически (например, import-linter для Python): появился запрещённый импорт —
        CI падает.
      </p>
      <h2 id="written-rules">7. Письменные правила</h2>
      <p>
        Последний уровень — письменные правила. Раньше это были гайдлайны и документация для
        разработчиков, теперь это файл AGENTS.md и документация для ИИ. В отличие от проверок выше,
        результат здесь не детерминирован: ИИ может прочитать правило и всё равно его нарушить.
        Поэтому письменные правила — последняя миля. В них остаётся только то, что не удалось
        покрыть проверками. При прочих равных вместо текста пишите жёсткую проверку в коде.
      </p>
      <p>
        ИИ то и дело пытается отключить проверку вместо того, чтобы исправить код: поднять лимит,
        добавить исключение, заглушить правило комментарием. Поэтому в моём файле с правилами об этом
        сказано отдельной строкой: ослабить проверку, чтобы она прошла, — значит обойти проблему;
        исправлять нужно код.
      </p>
    </>
  );
}

type ToolRow = {
  level: string;
  python: string;
  php: string;
  js: string;
};

const toolRows: ReadonlyArray<ToolRow> = [
  { level: "Мёртвый код", python: "vulture", php: "shipmonk/dead-code-detector (PHPStan)", js: "knip" },
  { level: "Линтеры и форматтеры", python: "ruff", php: "PHP_CodeSniffer (phpcs)", js: "ESLint + Prettier" },
  { level: "Статический анализ", python: "mypy (strict)", php: "PHPStan", js: "tsc (strict)" },
  { level: "Юнит-тесты и покрытие", python: "pytest + coverage", php: "PHPUnit", js: "Jest / Vitest" },
  {
    level: "Сложность",
    python: "complexipy",
    php: "PHPMD, cognitive-complexity (PHPStan)",
    js: "ESLint complexity"
  },
  { level: "Дублирование", python: "pylint duplicate-code", php: "jscpd", js: "jscpd" },
  { level: "Архитектура и зависимости", python: "import-linter", php: "Deptrac", js: "dependency-cruiser" }
];

export function SectionToolTable(): ReactNode {
  return (
    <>
      <h2 id="tools">Инструменты по языкам</h2>
      <table className={styles.toolTable}>
        <caption className={styles.tableCaption}>
          Вот что я использую на каждом уровне. Конкретные инструменты важны меньше, чем то, что
          каждый уровень валит сборку.
        </caption>
        <thead>
          <tr>
            <th scope="col">Уровень</th>
            <th scope="col">Python</th>
            <th scope="col">PHP</th>
            <th scope="col">JS/TS</th>
          </tr>
        </thead>
        <tbody>
          {toolRows.map((row) => (
            <tr key={row.level}>
              <th scope="row">{row.level}</th>
              <td data-label="Python">{row.python}</td>
              <td data-label="PHP">{row.php}</td>
              <td data-label="JS/TS">{row.js}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Есть и пошаговая версия этой статьи, написанная для ИИ-агентов:{" "}
        <a href={PLAYBOOK_URL}>плейбук по автопроверкам в CI</a> (на английском). Чтобы применить его к репозиторию,
        скажите агенту: <em>Примени {PLAYBOOK_URL} к этому репозиторию.</em>
      </p>
    </>
  );
}

export function SectionBottomLine(): ReactNode {
  return (
    <>
      <h2 id="bottom-line">Итог</h2>
      <p>
        Энтропия будет расти в любом случае, вопрос только в том, кто её сдерживает. Чем больше
        правил переезжает из письменных гайдлайнов в автоматические проверки в CI, тем меньше всё
        зависит от внимательности человека на ревью. ИИ сам запускает проверки, видит, что упало, и
        исправляет: строчку в AGENTS.md он пропустить может, а упавший CI — нет. И чем больше таких
        проверок, тем спокойнее можно отдавать ему код.
      </p>
      <p>
        Если вы основатель и не читаете код, этот список всё равно пригодится как набор вопросов к
        команде: какие из этих уровней действительно валят сборку? Каждый ответ «мы это ловим на
        ревью» — правило, которое держится на чьей-то внимательности в конкретный день. Почему коду
        от агентов вообще нужны такие автопроверки — отдельная история:{" "}
        <Link href={VIBECODED_HREF}>управляйте ИИ как джуном</Link>.
      </p>
    </>
  );
}

export function SectionTemplate(): ReactNode {
  return (
    <>
      <h2 id="python-template">Шаблон для Python</h2>
      <p>
        Подход не зависит от языка. Для Python я упаковал всё это в готовый шаблон, пользуйтесь:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Внутри:</p>
      <ul>
        <li>
          все проверки из этой статьи за одной командой <code>make verify</code> в Docker и та же
          команда в GitHub Actions;
        </li>
        <li>архитектурные слои с проверкой импортов;</li>
        <li>сканер секретов при коммите;</li>
        <li>AGENTS.md, где почти каждое правило ссылается на проверку, которая его обеспечивает;</li>
        <li>небольшой пример, чтобы проверки проходили сразу после создания проекта.</li>
      </ul>
      <p>Новый проект создаётся одной командой:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        А когда шаблон обновляется, <code>copier update</code> приносит новые проверки в
        существующие проекты и сохраняет ваши изменения. Больше не нужно настраивать всё с нуля в
        каждом новом проекте.
      </p>
    </>
  );
}
