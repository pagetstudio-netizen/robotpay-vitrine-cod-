export default function PaymentCard() {
  return (
    <div className="visual-area">
      <div className="visual-orb orb-one" />
      <div className="visual-orb orb-two" />

      <div className="payment-card-main">
        <div className="card-top">
          <span className="card-label">ROBOTPAY</span>
          <span className="card-chip">◈</span>
        </div>

        <div className="card-number">
          4821&nbsp;&nbsp;0934&nbsp;&nbsp;7251&nbsp;&nbsp;6408
        </div>

        <div className="card-bottom">
          <div>
            <small>CARD HOLDER</small>
            <strong>ROBOTPAY BUSINESS</strong>
          </div>
          <div>
            <small>VALID THRU</small>
            <strong>12 / 29</strong>
          </div>
        </div>

        <div className="card-logo">R</div>
      </div>

      <div className="transaction-card">
        <div className="transaction-icon">✓</div>
        <div className="transaction-info">
          <strong>Payment received</strong>
          <span>Today · 14:32</span>
        </div>
        <strong className="transaction-amount">+ ₣125,000</strong>
      </div>

      <div className="balance-card">
        <div className="balance-header">
          <span>Available balance</span>
          <span>•••</span>
        </div>

        <strong>₣ 8,492,500</strong>

        <div className="balance-chart">
          <svg viewBox="0 0 300 90" preserveAspectRatio="none">
            <path
              d="M0 72 C30 68 35 54 65 60 C95 66 102 40 132 48 C158 55 170 25 195 34 C220 44 230 16 255 25 C270 31 285 12 300 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="balance-footer">
          <span>+18.42%</span>
          <span>Last 30 days</span>
        </div>
      </div>

      <div className="secure-card">
        <div className="secure-icon">✓</div>
        <div>
          <strong>Secure payment</strong>
          <span>Protected by RobotPay</span>
        </div>
      </div>
    </div>
  );
}
