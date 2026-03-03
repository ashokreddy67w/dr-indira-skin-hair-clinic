const checks = [
    'Dedicated Dermatology Practice',
    'Dedicated Procedure Room',
    'Paediatric to Geriatric',
    'Appointments Recommended',
]

const cards = [
    {
        icon: '🔬',
        title: 'Clinical Diagnosis',
        desc: 'Focused dermatology consultations with structured evaluation of skin and hair conditions.',
    },
    {
        icon: '⭐',
        title: '4.9★ Patient Rating',
        desc: 'Highly rated by 58 patients for clear explanation, problem analysis, and treatment care.',
    },
    {
        icon: '👩‍⚕️',
        title: 'Personal Consultations',
        desc: 'Every consultation is conducted directly by Dr. Indira — not delegated.',
    },
    {
        icon: '📍',
        title: 'Accessible Location',
        desc: 'Conveniently located in Nallacheruvu, Guntur for easy patient access.',
    },
]

export default function About() {
    return (
        <section className="about" id="about">
            <div>
                <div className="section-label">About the Clinic</div>
                <h2 className="section-title">
                    Your Trusted Specialist<br />Dermatology Clinic
                </h2>

                <p className="about-body">
                    Dr. Indira's Skin & Hair Clinic is a specialist dermatology practice
                    in Guntur. Every consultation is personally conducted by
                    <strong> Dr. Indira</strong>, [Degree Here], providing structured
                    diagnosis and evidence-based treatment for skin and hair conditions.
                </p>
                <p className="about-body">
                    With <strong>X+ years of clinical experience</strong> and a
                    <strong> 4.9★ rating from 58 verified reviews</strong>, the clinic
                    provides focused dermatology care for skin and hair conditions.
                    All consultations are personally conducted by <strong>Dr. Indira</strong>.
                </p>
                <p className="about-body">
                    Dr. Indira maintains a patient-focused dermatology practice, staying
                    attentive to evolving clinical approaches in skin and hair treatment
                    while prioritizing structured diagnosis and clear treatment guidance.
                </p>

                <div className="about-checks">
                    {checks.map((text, i) => (
                        <div className="chk-row" key={i}>
                            <div className="chk-ico">✓</div>
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-right">
                {cards.map((card, i) => (
                    <div className="about-card" key={i}>
                        <div className="ac-ico">{card.icon}</div>
                        <div>
                            <div className="ac-title">{card.title}</div>
                            <div className="ac-desc">{card.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}