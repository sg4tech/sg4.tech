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
      Сложность кода всегда росла сама собой, ИИ только ускорил этот рост. Ниже семь уровней
      проверок в CI, которые не дают копиться легаси, в том порядке, в каком я их добавляю.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Энтропия растёт сама собой. В физике это второе начало термодинамики. В разработке то же
        самое: беспорядок копится сам, а на порядок нужны усилия.
      </p>
      <p>
        Так было всегда. Проект растёт, и вместе с ним растёт сложность: прибавляется легаси,
        поддерживать всё труднее, каждое изменение даётся тяжелее, а риск что-то сломать всё выше. В
        1974 году Мэнни Леман сформулировал{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          закон эволюции программ
        </a>
        : сложность системы растёт, если её специально не снижать. ИИ здесь ничего не изменил,
        легаси просто стало копиться быстрее.
      </p>
      <p>Поэтому код хочется держать как можно проще. С этим помогают проверки в CI.</p>
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
        Внизу самые дешёвые проверки. Уровни 1–6 валят сборку при каждом нарушении. Письменные
        правила наверху подсказывают агенту, что делать, но остановить его не могут.
      </FigureCaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Мёртвый код</h2>
      <p>
        Проще всего удалить то, что больше не используется. Это тоже автоматизируется: добавьте в CI
        поиск мёртвого кода (vulture для Python, knip для JS/TS), и неиспользуемый код будет валить
        сборку.
      </p>
      <h2 id="linters">2. Линтеры и форматтеры</h2>
      <p>
        Дальше линтер: phpcs для PHP, ruff для Python, ESLint и Prettier для JS/TS и так далее. У
        каждого языка свои стили кода, и какой вы выберете, неважно. Главное, чтобы никто не тратил
        время и деньги на вычитку кода и замечания в ревью вроде «поменяй двойные кавычки на
        одинарные». Договоритесь о стиле один раз, дальше его будет проверять CI.
      </p>
      <h2 id="static-analysis">3. Статический анализ</h2>
      <p>
        Следующий уровень — статические анализаторы: PHPStan для PHP, mypy для Python, tsc для JS/TS.
        Строгая статическая проверка типов ловит простые ошибки: строку передали туда, где ожидали
        число, или забыли, что значение может быть пустым. Логику она не проверит, но целый класс
        ошибок уберёт. С пустыми значениями история известная. Тони Хоар, который придумал нулевую
        ссылку, назвал её своей{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          «ошибкой на миллиард долларов»
        </a>
        . А по{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          данным Harness за 2020 год
        </a>
        , NullPointerException всё ещё входил в десятку самых частых исключений в 70% продакшен-сред
        на Java, которые они изучили.
      </p>
      <h2 id="unit-tests">4. Юнит-тесты и 80% покрытия</h2>
      <p>
        Плохой код очень трудно покрыть юнит-тестами. Чтобы покрыть код тестами, его приходится
        делить на отдельные классы и функции, продумывать связи и интерфейсы. Надо решить, что будет
        публичным, а что приватным, внедрять зависимости и обходиться без глобального состояния.
        Гарантии это не даёт, тем более что ИИ легко раздувает покрытие тестами, которые почти ничего
        не проверяют. Но порог так или иначе задаёт рамки для дизайна, и хороший код получается
        чаще.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Сложность и дублирование</h2>
      <p>
        Рабочая память человека удерживает одновременно лишь несколько независимых элементов. Джордж
        Миллер в 1956 году{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          насчитал 7 ± 2
        </a>
        , Нельсон Коуэн в 2001-м уточнил: около четырёх. Остальное даётся с трудом и уходит в своп.
        Таких исследований для ИИ я не видел. Но чем понятнее код человеку, тем меньше шансов, что
        ИИ начнёт галлюцинировать. А если код настолько запутан, что человек в нём не разберётся, ИИ,
        скорее всего, нагромоздит сверху новые слои легаси.
      </p>
      <p>
        Поэтому я ставлю жёсткие лимиты на сложность и дублирование. Лимит превышен → CI
        падает → приходится рефакторить и выносить код в отдельные методы и классы. Для Python,
        например, есть complexipy.
      </p>
      <p>
        Пример с реального проекта. На платформе, над которой я работал, бэкенд в основном писали
        ИИ-агенты. Первый замер сделали через шесть недель, когда ни одной из этих проверок ещё не
        было. Он показал 143 функции со сложностью выше 10 и 202 скопированных фрагмента, около 5%
        кода. Позже, когда ввели жёсткий потолок, самой сложной оказалась функция, которая
        обрабатывала чеки, то есть работала с деньгами: 490 строк, сложность 73. Когда потолок начал
        валить сборку, её разобрали за четыре дня рефакторинга, по одной функции на коммит, и
        сложность упала с 73 до 30. За два месяца после первого замера дублирование снизилось
        примерно до 3%.
      </p>
      <p>
        Если легаси уже накопилось, можно начать с того, что есть: поставьте лимит на уровне самой
        сложной функции, и хуже хотя бы не станет. Но долг от этого никуда не денется. Его гасят
        отдельно: выделяют время на рефакторинг и после каждого шага снижают лимит, чтобы закрепить
        результат. Проверки только сдерживают беспорядок, а накопленное приходится разбирать руками.
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
        система собрана из крупных блоков, и держать в голове их устройство не нужно, хватает
        контракта. А реализацию блока при необходимости можно заменить, не переписывая остальную
        систему. Вместо десятков классов и связей вы думаете о нескольких крупных блоках. Того, что
        надо держать в голове одновременно, снова становится меньше, теперь на каждом уровне
        архитектуры.
      </p>
      <p>
        На практике это Clean Architecture и гексагональная архитектура: код разделён на слои, а
        зависимости между ними строго ограничены. Домен ничего не знает о базе данных, HTTP и внешних
        API, а внешний код обращается к нему через заранее описанные интерфейсы. Это тоже
        проверяется автоматически, например import-linter для Python: появился запрещённый импорт, CI
        упал.
      </p>
      <h2 id="written-rules">7. Письменные правила</h2>
      <p>
        Последний уровень — письменные правила. Раньше это были гайдлайны и документация для
        разработчиков, теперь — файл AGENTS.md и документация для ИИ. Здесь, в отличие от проверок,
        результат не гарантирован: ИИ может прочитать правило и всё равно его нарушить. Поэтому в
        письменные правила попадает только то, что не удалось покрыть проверками. При прочих равных
        лучше написать жёсткую проверку в коде, чем абзац текста.
      </p>
      <p>
        ИИ то и дело пытается отключить проверку вместо того, чтобы исправить код: поднять лимит,
        добавить исключение, заглушить правило комментарием. Поэтому в моём файле с правилами есть
        отдельная строка: ослабить проверку, чтобы она прошла, — это обход, исправлять надо код.
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
          Что я использую на каждом уровне. Сами инструменты не так важны, главное — чтобы каждый
          уровень валил сборку.
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
        У этой статьи есть пошаговая версия для ИИ-агентов:{" "}
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
        Энтропия будет расти в любом случае. Вопрос в том, кто её сдерживает. Чем больше правил
        переезжает из гайдлайнов в проверки CI, тем меньше всё зависит от того, насколько внимателен
        человек на ревью. ИИ сам запускает проверки, видит, что упало, и
        исправляет: строчку в AGENTS.md он пропустить может, а упавший CI — нет. И чем больше таких
        проверок, тем спокойнее можно отдавать ему код.
      </p>
      <p>
        Если вы основатель и код не читаете, список всё равно пригодится: спросите команду, какие из
        этих уровней на деле валят сборку. Каждое «мы это ловим на ревью» — правило, которое держится
        на том, внимателен ли кто-то в этот день. Зачем коду от агентов такие автопроверки, я разбирал
        отдельно:{" "}
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
        Подход не зависит от языка. Для Python я собрал всё это в готовый шаблон, пользуйтесь:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Внутри:</p>
      <ul>
        <li>
          все проверки из статьи запускаются одной командой <code>make verify</code> в Docker, та же
          команда работает в GitHub Actions;
        </li>
        <li>архитектурные слои с проверкой импортов;</li>
        <li>сканер секретов при коммите;</li>
        <li>AGENTS.md, где почти каждое правило ссылается на проверку, которая за ним следит;</li>
        <li>небольшой пример, чтобы проверки проходили сразу после создания проекта.</li>
      </ul>
      <p>Новый проект создаётся одной командой:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        Когда шаблон обновляется, <code>copier update</code> добавляет новые проверки в уже
        созданные проекты и не трогает ваши изменения. Настраивать всё с нуля в каждом проекте
        больше не придётся.
      </p>
    </>
  );
}
