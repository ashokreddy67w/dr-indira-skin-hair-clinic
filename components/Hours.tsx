export default function Hours() {
    return (
        <section className="hours-loc" id="hours">
            <div>
                <div className="section-label">Visit Us</div>
                <h2 className="section-title">Hours & Location</h2>

                <div className="hours-h3">Monday – Saturday</div>

                <div className="hours-row">
                    <span className="hours-day">Morning Session</span>
                    <div className="hours-slots">
                        <span className="hslot">
                            <span className="tag-m">Morning</span>
                            9:00 AM – 2:00 PM
                        </span>
                    </div>
                </div>

                <div className="hours-row">
                    <span className="hours-day">Evening Session</span>
                    <div className="hours-slots">
                        <span className="hslot">
                            <span className="tag-e">Evening</span>
                            5:30 PM – 8:00 PM
                        </span>
                    </div>
                </div>

                <div className="hours-row">
                    <span className="hours-day">Sunday</span>
                    <div className="hours-slots">
                        <span className="tag-c">Closed</span>
                    </div>
                </div>

                <div className="addr-row">
                    <span className="addr-pin">📍</span>
                    <div>
                        <strong>Dr. Indira's Skin & Hair Clinic</strong><br />
                        6th Lane, Nallacheruvu<br />
                        Guntur, Andhra Pradesh – 522004
                    </div>
                </div>

                <div className="appt-box">
                    <span>ℹ️</span>
                    <span>
                        Consultation timings may vary on public holidays.
                        Please call to confirm availability before visiting.
                    </span>
                </div>
            </div>

            <div className="map-card" id="contact">
                <iframe
                    src="https://www.google.com/maps?q=Dr+Indira+Skin+%26+Hair+Clinic+Guntur&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Indira's Skin & Hair Clinic Location"
                />
                <div className="map-foot">
                    <div className="map-addr">
                        <strong>Nallacheruvu, Guntur</strong><br />
                        Andhra Pradesh – 522004
                    </div>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Dr+Indira+Skin+%26+Hair+Clinic+Guntur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dir"
                    >
                        ↗ Get Directions
                    </a>
                </div>
            </div>
        </section>
    );
}