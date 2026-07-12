import styles from "./page.module.css";

// Body split into small section components purely to satisfy the
// max-lines-per-function lint rule. Each returns a fragment, so the h2/p/ul
// stay direct children of `.body` and the `.body > *` prose selectors match.

function IntroSection() {
  return (
    <>
      <p>This website is the personal portfolio of Victor Demin.</p>
      <p>
        The website has no user accounts, contact forms, or comment fields and does not ask visitors
        to submit personal information directly. However, limited technical and analytics data is
        processed when you visit the website.
      </p>

      <h2>Who is responsible</h2>
      <p>Victor Demin is responsible for the processing described in this notice.</p>
      <p>
        If you have questions about this notice or would like to make a request concerning your
        personal data, contact me through{" "}
        <a href="https://t.me/sg4tech" target="_blank" rel="noreferrer">
          Telegram
        </a>
        .
      </p>
    </>
  );
}

function AnalyticsSection() {
  return (
    <>
      <h2>Analytics</h2>
      <p>
        This website uses Umami Cloud, a cookieless analytics service provided by Umami Software,
        Inc., to understand how visitors use the website.
      </p>
      <p>Umami may process the following information:</p>
      <ul>
        <li>pages visited;</li>
        <li>referring website or source;</li>
        <li>date and time of the visit;</li>
        <li>browser and operating system;</li>
        <li>device type;</li>
        <li>approximate country;</li>
        <li>
          IP address and user-agent information used to generate a pseudonymous session identifier.
        </li>
      </ul>
      <p>
        Umami does not place analytics cookies on your device. According to Umami, IP addresses are
        not stored in their raw form. They are used to generate pseudonymous identifiers for
        analytics purposes.
      </p>
      <p>
        Although this information does not normally identify you by name, technical identifiers and
        pseudonymous usage data may still be considered personal data under applicable data
        protection laws.
      </p>
      <p>Analytics data is retained for up to six months.</p>
      <p>
        Umami Software, Inc. processes analytics data on infrastructure located in the United States.
        It acts as a service provider processing analytics data on my behalf.
      </p>
      <p>
        The purpose of this processing is to measure website usage and improve its content. Where
        applicable, this processing is based on my legitimate interest in understanding whether the
        website is useful while using analytics designed to minimise the impact on visitors&rsquo;
        privacy.
      </p>
      <p>
        For more information, see{" "}
        <a href="https://umami.is/privacy" target="_blank" rel="noreferrer">
          Umami&rsquo;s Privacy Policy
        </a>
        .
      </p>
    </>
  );
}

function HostingSection() {
  return (
    <>
      <h2>Hosting</h2>
      <p>This website is hosted using GitHub Pages, a service provided by GitHub, Inc.</p>
      <p>
        When you visit a GitHub Pages website, GitHub logs and stores your IP address for security
        purposes. GitHub may also process other technical information, such as device information,
        request details, pages viewed, and referring sources, in accordance with its own privacy
        statement.
      </p>
      <p>
        GitHub determines how it uses information processed for its own security and operational
        purposes.
      </p>
      <p>
        For more information, see the{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noreferrer"
        >
          GitHub General Privacy Statement
        </a>
        .
      </p>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <h2>Contact through Telegram</h2>
      <p>
        If you contact me through Telegram, I may receive information that you choose to provide,
        such as your name, Telegram username, profile information, message content, and any files you
        send.
      </p>
      <p>
        This information is used only to respond to your message, discuss a possible professional
        engagement, or maintain necessary records of our communication.
      </p>
      <p>
        Communication data is retained only for as long as reasonably necessary for these purposes or
        as required to establish, exercise, or defend legal claims. Telegram also processes your
        information under its own privacy policy.
      </p>

      <h2>Cookies and browser storage</h2>
      <p>
        This website does not itself set analytics or advertising cookies and does not use local
        storage or session storage for tracking.
      </p>
      <p>
        Third-party services may use their own cookies or similar technologies after you follow a
        link to their websites. Their practices are governed by their own privacy policies.
      </p>

      <h2>Links to other services</h2>
      <p>
        This website contains links to third-party services, including Telegram, LinkedIn, GitHub,
        Medium, Habr, and YouTube.
      </p>
      <p>
        When you follow one of these links, you leave this website. The relevant third party may
        process your information under its own privacy policy. This notice does not govern
        third-party websites or services.
      </p>
    </>
  );
}

function RightsSection() {
  return (
    <>
      <h2>International processing</h2>
      <p>
        Umami Software, Inc. and GitHub, Inc. are based in the United States, and technical or
        analytics data may be processed there.
      </p>
      <p>
        Data protection laws in the United States may differ from those applicable in your country of
        residence. The service providers are responsible for the safeguards applicable to processing
        carried out under their respective services and privacy terms.
      </p>

      <h2>Your rights</h2>
      <p>Depending on the law applicable to you, you may have the right to:</p>
      <ul>
        <li>request information about personal data processed about you;</li>
        <li>request access to or a copy of that data;</li>
        <li>request correction, updating, or deletion;</li>
        <li>object to or request restriction of processing;</li>
        <li>withdraw consent where processing is based on consent;</li>
        <li>
          lodge a complaint with a competent data protection authority or seek judicial protection.
        </li>
      </ul>
      <p>
        Because this website does not ask you to identify yourself and analytics identifiers are
        pseudonymous, I may be unable to associate analytics data with you. I will not collect
        additional personal information solely to identify you unless applicable law requires
        otherwise.
      </p>
      <p>
        To exercise your rights, contact me through{" "}
        <a href="https://t.me/sg4tech" target="_blank" rel="noreferrer">
          Telegram
        </a>
        . I may need limited information to verify and process your request.
      </p>
    </>
  );
}

function ClosingSection() {
  return (
    <>
      <h2>Children&rsquo;s privacy</h2>
      <p>
        This website is intended for a general professional audience and is not directed specifically
        at children. It does not knowingly request personal information from children.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        This notice may be updated if the website, its service providers, or applicable requirements
        change. When it is updated, the &ldquo;Last updated&rdquo; date at the top of the page will
        also be changed.
      </p>
    </>
  );
}

export function PrivacyBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <AnalyticsSection />
      <HostingSection />
      <ContactSection />
      <RightsSection />
      <ClosingSection />
    </div>
  );
}
