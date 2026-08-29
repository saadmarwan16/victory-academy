type VerticalBrandLockupProps = {
  className?: string;
};

export default function VerticalBrandLockup({ className = "" }: VerticalBrandLockupProps) {
  return (
    <div className={`vertical-brand-lockup ${className}`.trim()} role="img" aria-label="Victory Academy İngilizce Kursu">
      <img src="/victory-emblem.png" alt="" />
      <span className="stacked-brand-text">
        <strong className="stacked-brand-victory">VICTORY</strong>
        <span className="stacked-brand-academy">
          <i aria-hidden="true" />
          <b>Academy</b>
          <i aria-hidden="true" />
        </span>
        <small className="stacked-brand-course">İNGİLİZCE KURSU</small>
      </span>
    </div>
  );
}
