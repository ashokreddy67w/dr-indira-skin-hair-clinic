export default function CTA() {
    return (
        <section className="cta-section">
            <div className="cta-left">
                <h2>
                    Book Your Dermatology Consultation
                </h2>
                <p>
                    For skin and hair consultations, contact the clinic directly.
                    Appointments are recommended for smoother scheduling.
                </p>
                <div className="cta-note">
                    For service details, consultation timings, and availability —
                    please call the clinic.
                </div>
            </div>

            <div className="cta-right">
                <a href="tel:+917995511344" className="cta-btn cta-btn-call">
                    Call Now
                </a>

                <a
                    href="https://wa.me/917995511344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-wa"
                >
                    WhatsApp
                </a>
            </div>
        </section>
    )
}