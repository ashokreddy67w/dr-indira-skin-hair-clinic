export default function TrustBar() {
    const items = [
        { icon: '⭐', label: '4.9 / 5 Rating', sub: '870+ Google Reviews Verified' },
        { icon: '👥', label: 'MBBS, DDVL', sub: 'Specialist Qualified · 13+ Years' },
        { icon: '🕐', label: 'Mon – Sat Open', sub: '9am–1pm & 4pm–8pm' },
        { icon: '📍', label: '6th Ln, Nallacheruvu  ', sub: 'Guntur, Andhra Pradesh' },
    ]

    return (
        <div className="trust-bar">
            {items.map((item, i) => (
                <div className="trust-item" key={i}>
                    <div className="ti-ico">{item.icon}</div>
                    <div>
                        <span className="ti-label">{item.label}</span>
                        <span className="ti-sub">{item.sub}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}