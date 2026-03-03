interface WhyCard {
    num: string
    icon: string
    title: string
    desc: string
    link?: { href: string; text: string }
}

const cards: WhyCard[] = [
    {
        num: '01',
        icon: '⭐',
        title: '4.9★ Patient Rating',
        desc: 'Rated 4.9/5 based on 58 patient reviews highlighting clear explanation, accurate diagnosis, and attentive care.',
    },
    {
        num: '02',
        icon: '👩‍⚕️',
        title: 'Personal Consultations',
        desc: 'All consultations are conducted directly by Dr. Indira, ensuring focused evaluation and structured treatment guidance.',
    },
    {
        num: '03',
        icon: '🔬',
        title: 'Clinical Dermatology Focus',
        desc: 'Dedicated skin and hair clinic providing medically guided diagnosis and treatment — not cosmetic over-promising.',
    },
    {
        num: '04',
        icon: '🕐',
        title: 'Morning & Evening Hours',
        desc: 'Consultation sessions available in both morning and evening for patient convenience.',
        link: { href: '#hours', text: 'View clinic hours →' },
    },
    {
        num: '05',
        icon: '📍',
        title: 'Central Guntur Location',
        desc: 'Located in Nallacheruvu, Guntur — easily accessible for patients from surrounding areas.',
    },
    {
        num: '06',
        icon: '📞',
        title: 'Direct Phone Contact',
        desc: 'Patients can call directly for enquiries and appointment confirmation.',
    },
]
export default function Why() {
    return (
        <section className="why" id="why">
            <div className="why-head">
                <div className="section-label">Why Choose Dr. Indira</div>
                <h2 className="section-title">Structured Skin & Hair Care, Personally Delivered</h2>
            </div>

            <div className="why-grid">
                {cards.map((card, i) => (
                    <div className="why-card" key={i}>
                        <div className="why-num">{card.num}</div>
                        <div className="why-ico">{card.icon}</div>
                        <div className="why-title">{card.title}</div>
                        <p className="why-desc">
                            {card.desc}
                            {card.link && (
                                <>
                                    {' '}
                                    <a href={card.link.href}>{card.link.text}</a>
                                </>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}