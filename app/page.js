import NavScrollEffect from '@/components/NavScrollEffect'
import RevealObserver from '@/components/RevealObserver'
import AuditForm from '@/components/AuditForm'

export default function Home() {
  return (
    <>
      <NavScrollEffect />
      <RevealObserver />

      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="nav-i">
          <a href="#top" className="logo">
            <span className="logo-icon">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="26" height="26" rx="7" stroke="url(#nlg)" strokeWidth="1.4" />
                <circle cx="14" cy="14" r="4" fill="#5ad0f4" />
                <circle cx="14" cy="14" r="7.5" stroke="#5ad0f4" strokeOpacity="0.35" strokeWidth="1" />
                <defs>
                  <linearGradient id="nlg" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#5ad0f4" />
                    <stop offset="1" stopColor="#4a7dff" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            Cynkroniz Labs
            <span className="logo-tag">Labs</span>
          </a>
          <ul className="nav-links">
            <li><a href="#moat">The Moat</a></li>
            <li><a href="#help">How We Help</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#audit">Free Audit</a></li>
          </ul>
          <a href="#audit" className="btn btn-p" style={{ padding: '11px 20px', fontSize: '14px' }}>
            Request Free Audit <span className="arrow">→</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-video-wrap">
          <video autoPlay loop muted playsInline preload="auto">
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <div className="hero-content">
            <span className="label">Cynkroniz Labs</span>
            <h1>Build Your Small<br />Business Moat<br />in the AI Era.</h1>
            <div className="manifesto">
              <p>
                <span className="m-line">The moat is not the website.</span>
                <span className="m-line">The moat is not the chatbot.</span>
                <span className="m-line">The moat is not the automation.</span>
              </p>
              <p><span className="m-pause">Those are tools.</span></p>
              <p><span className="m-thesis">The moat is consistent attention, relevance, trust, and follow-up.</span></p>
            </div>
            <p className="hero-sub">
              Cynkroniz Labs helps busy business owners stay visible, trusted, and relevant using practical AI systems for content, marketing, lead capture, and follow-up.
            </p>
            <div className="hero-ctas">
              <a href="#audit" className="btn btn-p">Request a Free Business Audit <span className="arrow">→</span></a>
              <a href="#process" className="btn btn-g">See How It Works</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sec" id="problem">
        <div className="wrap">
          <div className="problem-wrap">
            <div className="problem-text rv">
              <span className="label">The Reality</span>
              <h2>Running A Business Is Already A Full-Time Job.</h2>
              <div className="problem-copy">
                <p>Most business owners already know they should be creating content.</p>
                <p>They know they should be improving their website. They know they should be showing up online more consistently. They know they should be following up faster.</p>
                <p>The problem isn&apos;t awareness.</p>
                <p><strong>The problem is time. The problem is bandwidth. The problem is trying to do everything yourself.</strong></p>
              </div>
            </div>

            <div className="demands-wrap rv">
              <div className="demands-svg-container">
                <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5ad0f4" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#5ad0f4" stopOpacity="0" />
                    </radialGradient>
                    <filter id="blur4"><feGaussianBlur stdDeviation="4" /></filter>
                  </defs>
                  <circle cx="220" cy="220" r="180" fill="url(#cg)" />
                  <circle cx="220" cy="220" r="155" stroke="rgba(90,208,244,0.10)" strokeWidth="1" strokeDasharray="3 7" />
                  <circle cx="220" cy="220" r="108" stroke="rgba(90,208,244,0.16)" strokeWidth="1" />
                  <line x1="220" y1="220" x2="220" y2="74" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="346" y2="120" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="376" y2="220" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="346" y2="330" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="220" y2="372" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="94" y2="330" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="64" y2="220" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="220" y1="220" x2="94" y2="120" stroke="rgba(90,208,244,0.18)" strokeWidth="1" strokeDasharray="3 4" />
                  <circle cx="220" cy="220" r="48" fill="rgba(6,8,15,0.95)" stroke="rgba(90,208,244,0.5)" strokeWidth="1.2" />
                  <circle cx="220" cy="220" r="38" fill="rgba(90,208,244,0.06)" />
                  <text x="220" y="216" textAnchor="middle" fontFamily="Space Grotesk" fontSize="13" fontWeight="500" fill="#e6ecf5">YOU</text>
                  <text x="220" y="232" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#586070" letterSpacing="2">OWNER</text>
                  <rect x="154" y="52" width="132" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="220" y="73" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Content Creation</text>
                  <rect x="312" y="96" width="106" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="365" y="117" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Client Work</text>
                  <rect x="348" y="204" width="106" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="401" y="225" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Social Media</text>
                  <rect x="312" y="314" width="96" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="360" y="335" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Follow-Up</text>
                  <rect x="155" y="356" width="130" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="220" y="377" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Email Marketing</text>
                  <rect x="24" y="314" width="98" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="73" y="335" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Admin / Ops</text>
                  <rect x="2" y="204" width="100" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="52" y="225" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Bookkeeping</text>
                  <rect x="24" y="96" width="126" height="32" rx="8" fill="rgba(11,15,26,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="87" y="117" textAnchor="middle" fontFamily="Inter" fontSize="12.5" fill="#a8b4c8">Website / SEO</text>
                  <text x="4" y="16" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(88,96,112,0.5)" letterSpacing="1">CYNKRONIZ / REALITY MAP</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="div-line" />

      {/* MOAT */}
      <section className="sec" id="moat">
        <div className="wrap">
          <div className="moat-head rv">
            <span className="label">The Framework</span>
            <h2>What Actually Creates A Business Moat?</h2>
          </div>
          <div className="moat-grid rv-stag">
            <div className="pillar">
              <div className="pillar-n">01 · TRUST</div>
              <h3>Trust</h3>
              <p>People understand who you are, what you do, and why they should choose you over anyone else.</p>
            </div>
            <div className="pillar">
              <div className="pillar-n">02 · VISIBILITY</div>
              <h3>Visibility</h3>
              <p>People consistently see your business and remember it when they need help — not a competitor&apos;s.</p>
            </div>
            <div className="pillar">
              <div className="pillar-n">03 · SPEED</div>
              <h3>Speed</h3>
              <p>Your business responds, publishes, and adapts faster than the competition can keep up with.</p>
            </div>
            <div className="pillar">
              <div className="pillar-n">04 · FOLLOW-UP</div>
              <h3>Follow-Up</h3>
              <p>Opportunities don&apos;t disappear because nobody responded or stayed in touch long enough.</p>
            </div>
          </div>
          <div className="moat-foot rv">
            <p>AI will not replace strong small businesses. But businesses that use AI to <strong>stay visible, communicate clearly, move faster, and follow up consistently</strong> will outperform businesses that rely on guesswork and inconsistency.</p>
          </div>
        </div>
      </section>

      <div className="div-line" />

      {/* HOW WE HELP */}
      <section className="sec" id="help">
        <div className="wrap">
          <div className="help-head rv">
            <span className="label">How We Help</span>
            <h2>We Build Leverage.</h2>
            <p className="sub">Not more work.<br />Not more complexity.</p>
          </div>
          <div className="help-grid rv-stag">
            <div className="help-card">
              <div className="hc-n">01</div>
              <div className="hc-title">Content Systems</div>
              <p className="hc-desc">Help eliminate the constant question: <em>&quot;What should I post?&quot;</em> — with repeatable workflows that keep your business visible without starting from scratch every week.</p>
            </div>
            <div className="help-card">
              <div className="hc-n">02</div>
              <div className="hc-title">Storytelling &amp; Positioning</div>
              <p className="hc-desc">Turn your expertise into the kind of content that builds trust and earns attention — before a prospect even reaches out.</p>
            </div>
            <div className="help-card">
              <div className="hc-n">03</div>
              <div className="hc-title">Website Optimization</div>
              <p className="hc-desc">Make your website support your business instead of simply existing — clearer messaging, better conversion, and a stronger first impression.</p>
            </div>
            <div className="help-card">
              <div className="hc-n">04</div>
              <div className="hc-title">Lead Capture &amp; Follow-Up</div>
              <p className="hc-desc">Turn interest into conversations — with systems that capture, organize, and follow up with new inquiries so nothing falls through the cracks.</p>
            </div>
            <div className="help-card">
              <div className="hc-n">05</div>
              <div className="hc-title">AI Assistants</div>
              <p className="hc-desc">Help visitors get answers without waiting — and help your business respond to common questions at any hour, without additional overhead.</p>
            </div>
            <div className="help-card">
              <div className="hc-n">06</div>
              <div className="hc-title">Business Audits</div>
              <p className="hc-desc">Identify the specific bottlenecks holding your business back — in your website, messaging, content, visibility, or lead flow.</p>
            </div>
          </div>
          <div className="help-note rv">
            <div className="help-note-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L4 14h8l-1 8 9-12h-8z" />
              </svg>
            </div>
            <p><strong>These are not separate services.</strong> They are components of one connected system — built around your specific bottlenecks, not a generic package.</p>
          </div>
        </div>
      </section>

      <div className="div-line" />

      {/* OUTCOMES */}
      <section className="sec" id="outcomes">
        <div className="wrap">
          <div className="outcomes-wrap">
            <div className="outcomes-text rv">
              <span className="label">What This Looks Like</span>
              <h2>More Visibility.<br />More Trust.<br />Less Overwhelm.</h2>
              <ul className="outcome-list rv-stag">
                <li className="outcome-item">
                  <span className="outcome-n">01</span>
                  <span>A coach repurposes existing expertise and reaches dramatically more people — without creating from scratch each week.</span>
                </li>
                <li className="outcome-item">
                  <span className="outcome-n">02</span>
                  <span>A local business improves its messaging and starts generating more inquiries from the same traffic.</span>
                </li>
                <li className="outcome-item">
                  <span className="outcome-n">03</span>
                  <span>A business owner stops guessing what to post and publishes consistently — on a system that runs itself.</span>
                </li>
                <li className="outcome-item">
                  <span className="outcome-n">04</span>
                  <span>A website becomes a real business asset — not a brochure that collects dust online.</span>
                </li>
                <li className="outcome-item">
                  <span className="outcome-n">05</span>
                  <span>A lead receives a response even when the owner is busy — and stays in the conversation long enough to buy.</span>
                </li>
              </ul>
            </div>
            <div className="outcomes-right rv">
              <div className="outcome-card">
                <div className="oc-label">Before</div>
                <div className="oc-q">&ldquo;I know I should be doing more online but I never have time.&rdquo;</div>
                <div className="oc-a">Visibility drops. Competitors gain ground. Opportunities disappear quietly.</div>
              </div>
              <div className="outcome-card">
                <div className="oc-label">After</div>
                <div className="oc-q">&ldquo;The system handles the consistency. I focus on the work I&apos;m actually good at.&rdquo;</div>
                <div className="oc-a">Content publishes. Leads come in. Follow-up happens — even when you&apos;re busy.</div>
              </div>
              <div className="outcome-card" style={{ background: 'rgba(90,208,244,0.04)', borderColor: 'rgba(90,208,244,0.18)' }}>
                <div className="oc-label" style={{ color: 'var(--cyan)' }}>The shift</div>
                <div className="oc-q">From doing everything manually to building leverage.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="div-line" />

      {/* PROCESS */}
      <section className="sec-sm" id="process">
        <div className="wrap">
          <div className="process-head rv">
            <span className="label">Process</span>
            <h2>Simple. Practical. Measurable.</h2>
          </div>
          <div className="process-steps rv-stag">
            <div className="p-step">
              <div className="p-step-n">STEP 01 — AUDIT</div>
              <h3>Audit</h3>
              <p>Identify bottlenecks. We review your website, messaging, content, and lead flow to pinpoint exactly where you&apos;re losing visibility, trust, or opportunities.</p>
            </div>
            <div className="p-step">
              <div className="p-step-n">STEP 02 — STRATEGY</div>
              <h3>Strategy</h3>
              <p>Prioritize what matters most. We build a clear picture of what to fix first — not a 40-page plan, but a focused direction tied to your actual business goals.</p>
            </div>
            <div className="p-step">
              <div className="p-step-n">STEP 03 — IMPLEMENTATION</div>
              <h3>Implementation</h3>
              <p>Build systems that support visibility, trust, speed, and follow-up — working as one connected system you can actually run your business on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT CTA */}
      <section className="cta-sec" id="audit">
        <div className="wrap">
          <div className="cta-card rv">
            <div className="cta-inner">
              <div className="cta-left">
                <span className="label">Free Business Audit</span>
                <h2>Where Is Your Business Losing Attention?</h2>
                <p className="sub">Submit your business, website, or current marketing process and receive a personalized audit showing where you may be losing visibility, trust, opportunities, or momentum.</p>
                <ul className="cta-checks">
                  <li className="cta-check">
                    <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    Personalized review of your actual situation — not a checklist.
                  </li>
                  <li className="cta-check">
                    <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    3–5 specific areas where you may be losing visibility or leads.
                  </li>
                  <li className="cta-check">
                    <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    Honest read on where leverage will make the biggest difference.
                  </li>
                  <li className="cta-check">
                    <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    No sales pressure. No subscription. No obligation.
                  </li>
                </ul>
              </div>
              <div className="cta-right">
                <AuditForm />
              </div>
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
                <span className="logo-icon">
                  <svg viewBox="0 0 28 28" fill="none">
                    <rect x="1" y="1" width="26" height="26" rx="7" stroke="#5ad0f4" strokeOpacity="0.45" strokeWidth="1.4" />
                    <circle cx="14" cy="14" r="4" fill="#5ad0f4" />
                    <circle cx="14" cy="14" r="7.5" stroke="#5ad0f4" strokeOpacity="0.3" strokeWidth="1" />
                  </svg>
                </span>
                Cynkroniz Labs
              </a>
              <p>Helping small businesses stay visible, trusted, and relevant in the AI era.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Navigate</h4>
                <ul>
                  <li><a href="#moat">The Moat</a></li>
                  <li><a href="#help">How We Help</a></li>
                  <li><a href="#outcomes">Outcomes</a></li>
                  <li><a href="#process">Process</a></li>
                  <li><a href="#audit">Free Audit</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:hello@cynkronizlabs.com">hello@cynkronizlabs.com</a></li>
                  <li><a href="#audit">Request a Free Audit</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Visibility · Trust · Speed · Follow-Up</span>
            <span>© 2026 Cynkroniz Labs. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
