import NavScrollEffect from '@/components/NavScrollEffect'
import RevealObserver from '@/components/RevealObserver'
import ConsultationForm from '@/components/ConsultationForm'
import CountStat from '@/components/CountStat'

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
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#included">What&apos;s included</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#audit">Free audit</a></li>
          </ul>
          <a href="#audit" className="btn btn-p btn-sm">Book a free audit</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap">
          <div className="hero-in">
            <span className="eyebrow">Monthly growth membership</span>
            <h1>Marketing and follow-up systems for <span className="hl">local businesses.</span></h1>
            <p className="lead">
              One monthly subscription to keep your content, Google presence, website, and lead
              follow-up moving every month.
            </p>
            <div className="hero-ctas">
              <a href="#audit" className="btn btn-p">Book a free growth audit <span className="arrow">→</span></a>
              <a href="#included" className="btn btn-g">See what&apos;s included</a>
            </div>
            <p className="hero-note">
              Starting at <b>$997/mo</b> · Cancel anytime · No contracts, no retainers, no hiring
            </p>
          </div>

          <div className="not-strip rv">
            <span className="not-chip">Not an agency</span>
            <span className="not-chip">Not a freelancer you have to chase</span>
            <span className="not-chip">Not another tool to learn</span>
          </div>
        </div>
      </header>

      {/* MODEL */}
      <section className="sec" id="how-it-works">
        <div className="wrap">
          <div className="head rv">
            <span className="eyebrow">The model</span>
            <h2>One subscription.<br />Two types of work.</h2>
            <p className="lead">
              Marketing that never stops, plus one real project moving forward at all times.
              That&apos;s the whole thing.
            </p>
          </div>

          <div className="model-grid rv-stag">
            <div className="model-card">
              <span className="model-tag">Every month</span>
              <h3>Always-on marketing</h3>
              <p>
                The work that has to keep happening whether you think about it or not. It runs in the
                background, every month, without you sending a single request.
              </p>
              <ul className="model-ex">
                <li>Social content written, designed, and posted</li>
                <li>Google Business Profile kept active</li>
                <li>Missed-call texts and chat replies going out</li>
                <li>Lead follow-up firing on schedule</li>
              </ul>
            </div>

            <div className="model-card accent">
              <span className="model-tag">One at a time</span>
              <h3>One active project</h3>
              <p>
                The work with a finish line. Request as many as you like. We build them one at a
                time, in your order, until each one is done and approved.
              </p>
              <ul className="model-ex">
                <li>A rebuilt page that actually converts</li>
                <li>AI chat set up on your site</li>
                <li>A new CRM automation or booking flow</li>
                <li>Review requests, reactivation campaigns</li>
              </ul>
            </div>
          </div>

          <p className="model-foot rv">
            <strong>No hourly billing. No scope calls. No new hire.</strong>{' '}
            One flat monthly price, and the queue keeps moving.
          </p>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="sec" id="included" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head rv">
            <span className="eyebrow">What&apos;s included</span>
            <h2>Five things, handled.</h2>
            <p className="lead">Everything below is part of the membership. No tiers, no add-ons, no surprise invoices.</p>
          </div>

          <div className="inc-grid rv-stag">
            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="3.4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>
              </div>
              <h3>Social content</h3>
              <p>
                Posts written, designed, and scheduled for the platforms your customers actually use.
                Consistent and on-brand, without you writing a caption ever again.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
              </div>
              <h3>Google Business Profile</h3>
              <p>
                Photos, posts, services, hours, and review replies kept current, so you show up when
                someone nearby searches for exactly what you do.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><rect x="2.5" y="4" width="19" height="14" rx="3" /><path d="M2.5 8.5h19M8 21.5h8" /></svg>
              </div>
              <h3>Website improvements</h3>
              <p>
                Ongoing changes to the pages that make you money: clearer copy, faster load, better
                calls to action. Improved monthly, not once every three years.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><path d="M21 15.5v3a2 2 0 0 1-2.2 2A18.5 18.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3h3a2 2 0 0 1 2 1.7c.12.9.34 1.8.64 2.65a2 2 0 0 1-.45 2.1L9.5 10.6a14.5 14.5 0 0 0 4 4l1.15-1.15a2 2 0 0 1 2.1-.45c.85.3 1.75.52 2.65.64a2 2 0 0 1 1.7 2Z" /></svg>
              </div>
              <h3>Missed-call follow-up &amp; AI chat</h3>
              <p>
                Every missed call gets an instant text back. Every visitor gets an answer at 11pm.
                Nobody who wanted to hire you is left waiting for a callback that never comes.
              </p>
            </div>

            <div className="inc-card">
              <div className="inc-ico">
                <svg viewBox="0 0 24 24"><circle cx="6" cy="6.5" r="2.6" /><circle cx="18" cy="17.5" r="2.6" /><path d="M8.6 6.5h5.4a3.4 3.4 0 0 1 3.4 3.4v4.9M15.4 17.5H10a3.4 3.4 0 0 1-3.4-3.4V9.2" /></svg>
              </div>
              <h3>CRM automations</h3>
              <p>
                New leads land in one place and get followed up automatically: reminders, review
                requests, and win-back campaigns running whether you remember them or not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof">
        <div className="wrap">
          <div className="proof-grid rv-stag">
            <div>
              <CountStat value={3.8} decimals={1} suffix="M" />
              <div className="proof-l">Instagram views for one creator in a single 90 day stretch</div>
            </div>
            <div>
              <CountStat value={30000} />
              <div className="proof-l">New followers she picked up across those same 90 days</div>
            </div>
            <div>
              <CountStat value={2.9} decimals={1} suffix="M" />
              <div className="proof-l">TikTok views on her second account, with 33,000 shares</div>
            </div>
            <div>
              <CountStat value={1.2} decimals={1} suffix="M" />
              <div className="proof-l">Views across 8 videos on a channel built from zero</div>
            </div>
          </div>
          <p className="proof-cap">
            These numbers come from creator accounts, not local businesses, but it&apos;s the same
            system: find the angle, keep publishing, and build something that keeps working after the
            work stops.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="sec">
        <div className="wrap">
          <div className="head-c rv">
            <span className="eyebrow">How it works</span>
            <h2>Three steps. That&apos;s it.</h2>
          </div>

          <div className="steps rv-stag">
            <div className="step">
              <div className="step-n">1</div>
              <h3>Subscribe</h3>
              <p>
                Pick the membership and you&apos;re in. Onboarding is one call and about 30 minutes of
                your time. Then the always-on work starts immediately.
              </p>
            </div>
            <div className="step">
              <div className="step-n">2</div>
              <h3>Request</h3>
              <p>
                Send project requests any time, by text or email. Add as many as you want and put them
                in whatever order matters most to you this month.
              </p>
            </div>
            <div className="step">
              <div className="step-n">3</div>
              <h3>Receive</h3>
              <p>
                Monthly work ships on schedule. Projects come back for review in a few days. Revise
                until it&apos;s right, then we start the next one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing on-dark" id="pricing">
        {/* Decorative only. Muted + playsInline so mobile browsers will autoplay it,
            and hidden outright for anyone who asked for reduced motion. */}
        <div className="pricing-bg" aria-hidden="true">
          <video autoPlay loop muted playsInline preload="metadata">
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <div className="head-c rv">
            <span className="eyebrow light">Pricing</span>
            <h2>One price. Everything above.</h2>
            <p>No setup fees, no tiers to decode, and no contract holding you in.</p>
          </div>

          <div className="price-card rv">
            <div className="price-l">
              <div className="price-name">
                Growth Membership
                <span className="price-badge">Cancel anytime</span>
              </div>
              <span className="price-from">Starting at</span>
              <div className="price-amt">
                <span className="price-cur">$</span>
                <span className="price-num">997</span>
                <span className="price-per">/month</span>
              </div>
              <p className="price-sub">Pause the month you don&apos;t need us. Come back when you do.</p>
              <a href="#audit" className="btn btn-p">Book a free growth audit <span className="arrow">→</span></a>
              <p className="price-fine">
                Larger or multi-location businesses are quoted after the audit, never before.
              </p>
            </div>

            <div className="price-r">
              <h4>What you get</h4>
              <ul className="price-list">
                <li><Check />Always-on marketing: social content, Google profile, follow-up</li>
                <li><Check />One active project at a time, start to finish</li>
                <li><Check />Unlimited requests and unlimited revisions</li>
                <li><Check />Missed-call text-back and AI chat, running 24/7</li>
                <li><Check />A direct line to the person doing the work</li>
                <li><Check />One monthly report, in plain English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT */}
      <section className="audit" id="audit">
        <div className="wrap">
          <div className="audit-card rv">
            <div className="audit-l">
              <span className="eyebrow">Free growth audit</span>
              <h2>Start with a free audit.</h2>
              <p>
                Tell me about your business. I&apos;ll look at your website, your Google profile, and
                what happens to a lead after it comes in, then tell you the three things worth fixing
                first. Whether or not you ever hire us.
              </p>
              <ul className="audit-checks">
                <li><Check />A real look at your actual business, not a generic checklist</li>
                <li><Check />The three fixes that would move the needle fastest</li>
                <li><Check />An honest answer on whether the membership is even right for you</li>
                <li><Check />No pitch, no pressure, no obligation</li>
              </ul>
            </div>
            <div className="audit-r">
              <h3>Request your audit</h3>
              <p className="form-intro">Fill this in and I&apos;ll email you back with a time.</p>
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
              <p>A monthly growth membership for local businesses that need marketing and follow-up to just keep running.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Navigate</h4>
                <ul>
                  <li><a href="#how-it-works">How it works</a></li>
                  <li><a href="#included">What&apos;s included</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#audit">Free growth audit</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:hello@cynkronizlabs.cloud">hello@cynkronizlabs.cloud</a></li>
                  <li><a href="#audit">Book a free audit</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Content · Google · Website · Follow-up</span>
            <span>© 2026 Cynkroniz Labs. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
