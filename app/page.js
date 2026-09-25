import NavScrollEffect from '@/components/NavScrollEffect'
import RevealObserver from '@/components/RevealObserver'
import ConsultationForm from '@/components/ConsultationForm'

// The audit request lives in a Google Form so its questions can change without
// a deploy. Every "Request My AI Workflow Audit" button points here.
const AUDIT_FORM_URL = 'https://forms.gle/zuffpP4zJmcWbc3e9'

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="4,12.5 9.5,18 20,6.5" /></svg>
)

// Rook: three merlons, tapered neck, flared base. Used in the nav and the
// footer, so it lives here rather than being pasted into both.
const RookMark = () => (
  <span className="logo-mark">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4 3H8V5.5H10V3H14V5.5H16V3H20V8L17 10.5V15L19 18L20 21H4L5 18L7 15V10.5L4 8Z"
        fill="#0e1116"
        stroke="#0e1116"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

const AuditButton = ({ className = 'btn btn-p' }) => (
  <a href={AUDIT_FORM_URL} className={className} target="_blank" rel="noopener noreferrer">
    Request My AI Workflow Audit <span className="arrow">→</span>
  </a>
)

const PAINS = [
  ['Leads wait.', 'Inquiries sit in an inbox until someone has time to qualify them and reply.'],
  ['Onboarding runs on memory.', 'Every new client depends on someone remembering the next step.'],
  ['Reports get rebuilt.', 'The same numbers, pulled from the same tools, assembled by hand every month.'],
  ['Data gets copied.', 'The CRM, the spreadsheet and the project tool each hold a slightly different version of the truth.'],
  ['Client emails get rewritten.', 'Updates, reminders and follow-ups are typed from scratch every time.'],
  ['Knowledge lives in people’s heads.', 'When one person is out, the process slows down or stops.'],
]

// One realistic service-firm workflow, split into the three lanes. This is the
// page's argument made visible, so the steps are concrete rather than generic.
const LANES = [
  {
    tag: 'Manual',
    title: 'Stays human',
    note: 'Judgement, relationships and anything that changes every time.',
    steps: ['Scoping call with the client', 'Pricing and contract terms', 'Sign-off on the delivery plan'],
  },
  {
    tag: 'Hybrid',
    title: 'AI drafts, a person decides',
    note: 'AI does the first 80%. Nothing leaves without review.',
    steps: ['Kickoff summary drafted from call notes', 'Welcome email drafted for review', 'Risks flagged from intake answers'],
  },
  {
    tag: 'Automated',
    title: 'Runs on rules',
    note: 'Stable, repeatable steps with a clear right answer.',
    steps: ['Intake form sent when the contract is signed', 'Client folder and project created', 'Tasks assigned, reminders scheduled', 'Weekly status digest sent'],
  },
]

const DIFFERENTIATORS = [
  ['Diagnosis before tools', 'We map how the work really happens, not how the process document says it should.'],
  ['Deliberate boundaries', 'Every step is assigned to a person, to AI, or to rule-based automation, and we can tell you why.'],
  ['Tool-agnostic', 'Zapier, Make, an agent, a script or the CRM you already pay for. The workflow decides, not our preferred stack.'],
  ['More than triggers', 'Validation, quality checks, routing, research and decision support, added where app-to-app connections fall short.'],
]

const WORK = [
  {
    title: 'Quality control for AI-generated output',
    builtFor: 'AI avatar video production',
    problem: 'Every generated image and clip needed a manual check for realism errors, and the same flaws were caught inconsistently.',
    system: 'Standardised realism checks applied to every output, with failures routed back for regeneration before anyone reviews them.',
    change: 'Review moved from ad-hoc checking of everything to one pass against a fixed checklist, with fewer cleanup steps.',
  },
  {
    title: 'Structured prompt generation',
    builtFor: 'Repeatable AI image and video production',
    problem: 'Prompts were written from scratch for each shot, so quality depended on who wrote them and how much time they had.',
    system: 'A prompt system that assembles each prompt from a fixed brief, reference descriptions and shot requirements.',
    change: 'Prompt writing became a standard step instead of a craft exercise, and output became consistent enough to review quickly.',
  },
  {
    title: 'Research pipeline',
    builtFor: 'Market and competitor research',
    problem: 'Researching a market meant hours of manual searching, copying and summarising across scattered sources.',
    system: 'A research workflow that gathers sources, extracts the relevant points and produces a structured first draft.',
    change: 'Research now starts from an organised draft. Human time goes into judgement, not collection.',
  },
]

export default function Home() {
  return (
    <>
      <NavScrollEffect />
      <RevealObserver />

      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="nav-i">
          <a href="#top" className="logo">
            <RookMark />
            Cynkroniz Labs
          </a>
          <ul className="nav-links">
            <li><a href="#what-we-build">What we build</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
          <a href="#audit" className="btn btn-p btn-sm">Start here</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        {/* The robot loop, fading into the page on its left edge so the headline
            keeps full contrast. Muted + playsInline so mobile browsers autoplay it;
            reduced-motion visitors get the still poster instead. */}
        <div className="hero-media" aria-hidden="true">
          <video autoPlay loop muted playsInline preload="auto" poster="/assets/hero-poster.jpg">
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <div className="hero-in">
            <span className="eyebrow">For consulting firms, agencies and professional-service teams</span>
            <h1>
              AI and automation for service businesses that have{' '}
              <span className="hl">outgrown their manual workflows.</span>
            </h1>
            <p className="lead">
              We redesign the repetitive work between your people, software and clients so fewer
              things depend on copying, chasing and remembering.
            </p>
            <div className="hero-ctas">
              <AuditButton />
              <a href="#what-we-build" className="btn btn-g">See what we build</a>
            </div>
            <p className="hero-note"><b>Free audit</b> · No technical knowledge required · Built around the tools you already use</p>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="sec" id="problem">
        <div className="wrap">
          <div className="head rv">
            <span className="eyebrow">The problem</span>
            <h2>You&apos;ve added people and software, but the work between those systems is still manual.</h2>
            <p className="lead">
              Most growing firms already have the tools they need. The drag lives in the gaps between
              them, and it gets worse with every new client and every new hire.
            </p>
          </div>

          <ul className="pain-grid rv-stag">
            {PAINS.map(([title, body]) => (
              <li key={title} className="pain">
                <strong>{title}</strong> {body}
              </li>
            ))}
          </ul>

          <p className="model-foot rv">
            <strong>AI is useful when it fixes that work.</strong> Not when it becomes another subscription.
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="sec" id="what-we-build" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head rv">
            <span className="eyebrow">What we build</span>
            <h2>Systems for the work that repeats every week.</h2>
            <p className="lead">
              Six areas where service firms lose the most time between tools. Each system is built
              around how your team already works.
            </p>
          </div>

          <div className="inc-grid rv-stag">
            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4V5Z" /><path d="M8.5 10.5h7" /></svg>
              </div>
              <h3>Lead handling and follow-up</h3>
              <p>
                Capture inquiries, qualify them, draft the first response and trigger follow-up, so no
                opportunity waits in an inbox.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.4" /><path d="M3 20c.6-3.4 3-5.4 6-5.4s5.4 2 6 5.4" /><path d="M16.5 8.5h5M19 6v5" /></svg>
              </div>
              <h3>Client onboarding</h3>
              <p>
                Collect intake information, generate documents, assign work and send updates, so every
                new client moves through the same steps.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>
              </div>
              <h3>Reporting and administration</h3>
              <p>
                Pull data from multiple sources, organise it and prepare the report, instead of
                rebuilding it by hand every cycle.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg>
              </div>
              <h3>Research and document handling</h3>
              <p>
                Gather sources, summarise and compare them, and produce the first draft of work that
                currently takes hours.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
              </div>
              <h3>Client communication</h3>
              <p>
                Turn recordings, documents and team knowledge into repeatable updates, summaries and
                content your clients actually read.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><circle cx="6" cy="6.5" r="2.6" /><circle cx="18" cy="17.5" r="2.6" /><path d="M8.6 6.5h5.4a3.4 3.4 0 0 1 3.4 3.4v4.9M15.4 17.5H10a3.4 3.4 0 0 1-3.4-3.4V9.2" /></svg>
              </div>
              <h3>Custom workflows</h3>
              <p>
                When an off-the-shelf tool doesn&apos;t fit the process, we design the system around how
                your business actually operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH: the centrepiece. The lanes show the human / AI / automation
          boundary on a real workflow instead of just claiming it. */}
      <section className="approach" id="approach">
        <div className="wrap">
          <div className="head-c rv">
            <span className="eyebrow">Our approach</span>
            <h2>We don&apos;t start with AI.<br />We start with the workflow.</h2>
            <p className="lead">
              Most AI projects start with a tool and go looking for a problem. We start with how the
              work actually happens, then decide what belongs to people, what belongs to AI, and what
              belongs to plain automation.
            </p>
          </div>

          <div className="flow rv">
            <div className="flow-cap">Example: client onboarding at a 20-person firm</div>
            <div className="flow-lanes">
              {LANES.map((lane) => (
                <div key={lane.tag} className={`lane lane-${lane.tag.toLowerCase()}`}>
                  <span className="lane-tag">{lane.tag}</span>
                  <h3>{lane.title}</h3>
                  <p className="lane-note">{lane.note}</p>
                  <ul>
                    {lane.steps.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="flow-foot">
              <strong>We don&apos;t automate unstable processes.</strong> If a step changes every time,
              it stays manual until it settles. Automation comes after the process is clear, not before.
            </p>
          </div>

          <div className="diff-grid rv-stag">
            {DIFFERENTIATORS.map(([title, body]) => (
              <div key={title} className="diff">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" id="how-it-works">
        <div className="wrap">
          <div className="head-c rv">
            <span className="eyebrow">How it works</span>
            <h2>Five steps, in this order.</h2>
          </div>

          <div className="steps steps-5 rv-stag">
            <div className="step">
              <div className="step-n">1</div>
              <h3>Map the workflow</h3>
              <p>What happens today, step by step. Not how the process is supposed to work. How it really works.</p>
            </div>
            <div className="step">
              <div className="step-n">2</div>
              <h3>Find the bottlenecks</h3>
              <p>Repetitive work, unnecessary handoffs, delays, duplicated effort and places where information gets lost.</p>
            </div>
            <div className="step">
              <div className="step-n">3</div>
              <h3>Design the system</h3>
              <p>What AI handles, what traditional automation handles, and where a person stays in control.</p>
            </div>
            <div className="step">
              <div className="step-n">4</div>
              <h3>Build and test</h3>
              <p>We connect the pieces and test the workflow against the situations it will actually meet.</p>
            </div>
            <div className="step">
              <div className="step-n">5</div>
              <h3>Improve it</h3>
              <p>Once it runs, we measure what works, fix what doesn&apos;t and expand only when it makes sense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK: Problem → System → Operational change. A number only
          appears here when it was actually measured. */}
      <section className="sec work" id="work">
        <div className="wrap">
          <div className="head rv">
            <span className="eyebrow">Selected work</span>
            <h2>Systems, not demos.</h2>
            <p className="lead">
              We build and run these systems in our own production work. The domain differs from
              yours. The mechanisms are the ones service firms need: validation, structured
              generation, routing and review.
            </p>
          </div>

          <div className="work-grid rv-stag">
            {WORK.map((w) => (
              <article key={w.title} className="work-card">
                <span className="work-for">Built for: {w.builtFor}</span>
                <h3>{w.title}</h3>
                <dl>
                  <dt>Problem</dt><dd>{w.problem}</dd>
                  <dt>System</dt><dd>{w.system}</dd>
                  <dt>Operational change</dt><dd>{w.change}</dd>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT REQUEST */}
      <section className="band on-dark" id="audit">
        <div className="wrap">
          <div className="offer-card rv">
            <div className="offer-l">
              <span className="eyebrow light">Free AI Workflow Audit</span>
              <h2>Find your first automation opportunity.</h2>
              <p>
                You don&apos;t need to know which AI tools to use. Start with something repetitive,
                manual or frustrating inside your business. Tell us how it works today, and we&apos;ll
                review it and come back to you.
              </p>
              <AuditButton />
              <p className="offer-note">Free · No obligation</p>
            </div>
            <div className="offer-r">
              <h4>The audit shows you</h4>
              <ul className="offer-list">
                <li><Check />Where the workflow is breaking down</li>
                <li><Check />Which steps AI could handle</li>
                <li><Check />What should stay human</li>
                <li><Check />Whether the workflow is ready for automation</li>
                <li><Check />The first thing worth fixing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-card rv">
            <div className="contact-l">
              <span className="eyebrow">Talk to us</span>
              <h2>Already know what workflow needs fixing?</h2>
              <p>
                Show us how it works today. We&apos;ll help you figure out what the better version
                should look like.
              </p>
              <ul className="contact-checks">
                <li><Check />A reply from the people who would build it</li>
                <li><Check />An honest view on whether it&apos;s worth automating yet</li>
              </ul>
            </div>
            <div className="contact-r">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#top" className="logo">
                <RookMark />
                Cynkroniz Labs
              </a>
              <p>AI workflow systems for professional-service businesses that have outgrown their manual processes.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Navigate</h4>
                <ul>
                  <li><a href="#what-we-build">What we build</a></li>
                  <li><a href="#approach">Approach</a></li>
                  <li><a href="#how-it-works">How it works</a></li>
                  <li><a href="#work">Work</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:hello@cynkronizlabs.cloud">hello@cynkronizlabs.cloud</a></li>
                  <li><a href={AUDIT_FORM_URL} target="_blank" rel="noopener noreferrer">Request a free audit</a></li>
                  <li><a href="#contact">Talk to us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>AI Workflow Design · Automation · Intelligent Systems</span>
            <span>© 2026 Cynkroniz Labs. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
