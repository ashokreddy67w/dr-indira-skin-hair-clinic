import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Dermatology Clinic in Guntur
                </div>

                <h1 className="hero-title">
                    Focused Skin & Hair Care.<br />
                    <span className="hl">Clear Diagnosis.</span><br />
                    Personal Consultation.
                </h1>

                <p className="hero-desc">
                    Dedicated dermatology care for skin and hair conditions,
                    located in Nallacheruvu, Guntur, Andhra Pradesh.
                </p>

                <div className="hero-rating-chip">
                    <span className="chip-stars">★★★★★</span>
                    <div>
                        <div className="chip-val">4.9 / 5.0</div>
                        <div className="chip-count">58 Verified Google Reviews</div>
                    </div>
                </div>

                <div className="hero-btns">
                    <a href="tel:+917995511344" className="btn-book">
                        Book Appointment
                    </a>

                    <a
                        href="https://wa.me/917995511344"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-img-wrap">
                    <div className="hero-img">
                        <Image
                            src="/dr-priyanka.png"   // Replace with actual image
                            alt="Dr. Indira"
                            width={420}
                            height={480}
                            priority
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                                borderRadius: "14px 14px 0 0",
                            }}
                        />
                    </div>

                    <div className="hero-float-bot">
                        <span className="flt-star">⭐</span>
                        <div>
                            <div className="flt-v">4.9★ Rated</div>
                            <div className="flt-s">58 Google Reviews</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>Scroll to explore</span>
                <div className="scroll-circle">↓</div>
            </div>
        </section>
    );
}