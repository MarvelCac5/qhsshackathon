'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  BriefcaseBusiness,
  Clock3,
  Code2,
  Cpu,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'

const members = [
  { name: 'Maya Chen', role: 'President', bio: 'Builds tiny tools with big opinions about typography.', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80' },
  { name: 'Jordan Rivera', role: 'Technical Lead', bio: 'Full-stack tinkerer, robotics nerd, and weekend drummer.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { name: 'Aisha Okafor', role: 'Community Lead', bio: 'Designs welcoming spaces where first-time hackers thrive.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
  { name: 'Eli Park', role: 'Sponsorships', bio: 'Connects curious students with companies doing meaningful work.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Sofia Williams', role: 'Design Director', bio: 'Turns rough ideas into interfaces people want to use.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' },
]

const gallery = [
  ['Midnight builds', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80'],
  ['Demo day energy', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'],
  ['Mentor office hours', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80'],
  ['Teams in flow', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'],
  ['Shipping together', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'],
  ['Big ideas, small bugs', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'],
  ['The final pitch', 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80'],
  ['After the awards', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'],
]

const schedule = [
  ['09:00', 'Check-in + breakfast', 'Grab a badge, meet your team, and get your first caffeine fix.'],
  ['10:00', 'Opening ceremony', 'Rules, prompts, prizes, and the official countdown.'],
  ['11:00', 'Hacking begins', 'Turn the blank canvas into something useful, weird, or both.'],
  ['14:00', 'Workshop: Ship it', 'A practical session on taking an idea from local to live.'],
  ['18:30', 'Dinner + mentor rounds', 'Refuel and get unstuck with people who have done this before.'],
  ['09:00', 'Judging + demos', 'Show the room what you made and why it matters.'],
  ['11:00', 'Awards + closing', 'Celebrate every launch, learn, and late-night breakthrough.'],
]

const faqs = [
  ['Who can participate?', 'Any high school student with curiosity and a willingness to learn. No prior experience required.'],
  ['Do I need experience?', 'Not at all. We have beginner-friendly workshops, mentors, and plenty of time to learn as you build.'],
  ['Do I need a team?', 'Come solo or bring up to three friends. We will also run a team matching session at check-in.'],
  ['What should I bring?', 'A laptop, charger, water bottle, and anything that helps you think. We provide food, Wi-Fi, and good energy.'],
  ['Is it free?', 'Yes. Registration is completely free thanks to our community sponsors.'],
  ['What are the prizes?', 'Prizes include hardware, software credits, mentorship sessions, and bragging rights for a year.'],
]

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

function Countdown() {
  const [time, setTime] = useState({ days: 42, hours: 8, minutes: 17, seconds: 33 })
  useEffect(() => {
    const timer = setInterval(() => setTime((current) => {
      let { days, hours, minutes, seconds } = current
      if (seconds > 0) seconds -= 1
      else { seconds = 59; if (minutes > 0) minutes -= 1; else { minutes = 59; if (hours > 0) hours -= 1; else { hours = 23; days = Math.max(0, days - 1) } } }
      return { days, hours, minutes, seconds }
    }), 1000)
    return () => clearInterval(timer)
  }, [])
  return <div className="countdown" aria-label="Countdown to event"><span><b>{String(time.days).padStart(2, '0')}</b><small>days</small></span><i>:</i><span><b>{String(time.hours).padStart(2, '0')}</b><small>hrs</small></span><i>:</i><span><b>{String(time.minutes).padStart(2, '0')}</b><small>min</small></span><i>:</i><span><b>{String(time.seconds).padStart(2, '0')}</b><small>sec</small></span></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [member, setMember] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setMember((value) => (value + 1) % members.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <nav className="nav"><a href="#top" className="brand"><span className="brand-mark">&gt;_</span> BYTE//FEST</a><div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#people" onClick={() => setMenuOpen(false)}>People</a><a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a><a href="#sponsors" onClick={() => setMenuOpen(false)}>Sponsors</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></div><a href="#register" className="nav-cta">Register <ArrowUpRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></nav>

      <section className="hero section-pad" id="top"><div className="hero-orbit" /><div className="hero-grid" /><div className="hero-copy"><div className="eyebrow"><span className="live-dot" />STUDENT HACKATHON / 001</div><h1>Build what<br /><em>matters.</em><span className="cursor">_</span></h1><p className="hero-sub">A 24-hour collision of curious minds, bold ideas, and the code to bring them to life.</p><div className="hero-actions"><a className="button primary" href="#register">Register now <ArrowUpRight size={17} /></a><a className="button secondary" href="#about">Explore the event <ArrowDown size={16} /></a></div><div className="hero-meta"><span><CalendarDays size={15} /> OCT 18—19, 2025</span><span><MapPin size={15} /> NORTHSIDE HIGH / ATLANTA</span><span><Clock3 size={15} /> 24 HOURS</span></div></div><div className="countdown-wrap"><span className="countdown-label">EVENT STARTS IN</span><Countdown /></div></section>

      <section className="section-pad about" id="about"><div className="section-heading"><SectionLabel>01 / ABOUT</SectionLabel><h2>Ideas are only<br /><span>the beginning.</span></h2></div><div className="about-content"><div className="about-intro"><p className="large-copy">Byte//Fest is where students stop waiting for permission and start making things.</p><p>Hosted by Northside Code Club, we bring together high school builders of every skill level for one unforgettable day of learning, collaboration, and shipping. No grades. No gatekeeping. Just a room full of people who want to see what is possible.</p><a className="text-link" href="#register">Get in the room <ArrowRight size={16} /></a></div><div className="stat-grid"><div><b>100<span>+</span></b><small>hackers</small></div><div><b>24</b><small>hours</small></div><div><b>$5K</b><small>in prizes</small></div><div><b>10<span>+</span></b><small>projects launched</small></div></div></div><div className="beginner-card"><div className="icon-box"><Terminal /></div><div><SectionLabel>NEW TO THIS?</SectionLabel><h3>What is a hackathon?</h3><p>It is a creative sprint where you team up, learn something new, and build a project from scratch. Think less “competition” and more “permission to try.”</p></div><ArrowUpRight className="corner-arrow" /></div></section>

      <section className="section-pad people-section" id="people"><div className="section-heading split"><div><SectionLabel>02 / THE CREW</SectionLabel><h2>Meet the people<br /><span>behind the magic.</span></h2></div><div className="carousel-controls"><button onClick={() => setMember((member - 1 + members.length) % members.length)} aria-label="Previous member"><ArrowLeft /></button><button onClick={() => setMember((member + 1) % members.length)} aria-label="Next member"><ArrowRight /></button></div></div><div className="member-card"><div className="member-image-wrap"><img src={members[member].image} alt={members[member].name} /><span className="image-tag">NORTHSIDE / 2025</span></div><div className="member-info"><span className="member-number">0{member + 1} / 0{members.length}</span><div><p className="role">{members[member].role}</p><h3>{members[member].name}</h3><p>{members[member].bio}</p></div><div className="dots">{members.map((_, index) => <button key={index} className={index === member ? 'active' : ''} onClick={() => setMember(index)} aria-label={`Show member ${index + 1}`} />)}</div></div></div></section>

      <section className="section-pad gallery-section" id="gallery"><div className="section-heading split"><div><SectionLabel>03 / FIELD NOTES</SectionLabel><h2>Proof of<br /><span>what happens.</span></h2></div><p className="heading-note">A little archive of late nights,<br />loud laughs, and live demos.</p></div><div className="gallery-grid">{gallery.map(([caption, image], index) => <button className={`gallery-item item-${index}`} key={caption} onClick={() => setLightbox(index)}><img src={image} alt={caption} /><span>{caption} <ArrowUpRight size={14} /></span></button>)}</div></section>

      <section className="section-pad schedule-section" id="schedule"><div className="section-heading"><SectionLabel>04 / THE RUN OF SHOW</SectionLabel><h2>Make time<br /><span>for momentum.</span></h2></div><div className="timeline">{schedule.map(([time, title, description]) => <div className="timeline-item" key={`${time}-${title}`}><div className="timeline-time">{time}</div><div className="timeline-node" /><div className="timeline-copy"><h3>{title}</h3><p>{description}</p></div></div>)}</div></section>

      <section className="section-pad sponsors-section" id="sponsors"><div className="section-heading split"><div><SectionLabel>05 / IN GOOD COMPANY</SectionLabel><h2>Back the<br /><span>next big thing.</span></h2></div><p className="heading-note">Built by students.<br />Supported by believers.</p></div><div className="sponsor-tiers"><div className="tier"><span className="tier-label">GOLD PARTNERS</span><div className="logo-grid"><div><Zap /> NEXUS</div><div><Cpu /> LATTICE</div><div><Sparkles /> NOVA LABS</div></div></div><div className="tier"><span className="tier-label">SILVER PARTNERS</span><div className="logo-grid small"><div>BRIGHT//CO</div><div>STACKHOUSE</div><div>ROOT SYSTEMS</div><div>FORM & FUNCTION</div></div></div><div className="tier"><span className="tier-label">COMMUNITY PARTNERS</span><div className="logo-grid small"><div>ATL TECH</div><div>DEVREL CLUB</div><div>MAKERSPACE</div><div>CODE.ORG</div></div></div></div></section>

      <section className="section-pad sponsor-cta"><div className="section-heading"><SectionLabel>06 / FOR SPONSORS</SectionLabel><h2>Put your brand<br /><span>in the future.</span></h2></div><div className="sponsor-cta-body"><p className="large-copy">The next generation is already building. Give them the tools, context, and encouragement to go further.</p><a className="button primary" href="mailto:hello@bytefest.example">Become a sponsor <ArrowUpRight size={17} /></a></div><div className="impact-row"><div><b>70%</b><span>first-time hackers</span></div><div><b>18</b><span>schools represented</span></div><div><b>92%</b><span>would return</span></div><div><b>1</b><span>shared mission</span></div></div></section>

      <section className="section-pad faq-section" id="faq"><div className="section-heading split"><div><SectionLabel>07 / QUESTIONS, ANSWERED</SectionLabel><h2>Good to<br /><span>know.</span></h2></div><MessageCircle className="faq-icon" /></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>0{index + 1}</span>{question}{openFaq === index ? <Minus /> : <Plus />}</button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <footer className="footer section-pad" id="register"><div className="footer-top"><div><a href="#top" className="brand"><span className="brand-mark">&gt;_</span> BYTE//FEST</a><p>Make something worth<br />talking about.</p></div><div className="footer-register"><SectionLabel>READY TO SHIP?</SectionLabel><h2>Your next idea<br /><span>starts here.</span></h2><a className="button primary" href="mailto:register@bytefest.example">Register your interest <ArrowUpRight size={17} /></a></div></div><div className="footer-bottom"><span>© 2025 NORTHSIDE CODE CLUB</span><span>ATLANTA, GA / USA</span><div className="socials"><a href="https://github.com" aria-label="GitHub"><Code2 /></a><a href="https://instagram.com" aria-label="Instagram"><Camera /></a><a href="https://linkedin.com" aria-label="LinkedIn"><BriefcaseBusiness /></a><a href="mailto:hello@bytefest.example" aria-label="Email"><Mail /></a></div></div></footer>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery"><X /></button><img src={gallery[lightbox][1]} alt={gallery[lightbox][0]} onClick={(event) => event.stopPropagation()} /><p>{gallery[lightbox][0]}</p></div>}
    </main>
  )
}
