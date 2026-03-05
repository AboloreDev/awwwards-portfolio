import { useState } from "react";

export default function ResumeButton() {
  const [setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        .resume-btn-wrapper {
          font-family: 'DM Sans', sans-serif;
          display: inline-block;
        }

        .resume-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          width: auto;
          gap: 10px;
          padding: 14px 28px;
          background: #0f0f0f;
          color: #f5f5f5;
          border: 1.5px solid #2a2a2a;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.01em;
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;
        }

        .resume-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: inherit;
        }

        .resume-btn:hover::before {
          opacity: 1;
        }

        .resume-btn:hover {
          border-color: #555;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.4);
          transform: translateY(-1px);
        }

        .resume-btn:active {
          transform: translateY(0px) scale(0.98);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: rgba(255,255,255,0.08);
          border-radius: 7px;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .resume-btn:hover .btn-icon {
          background: rgba(255,255,255,0.14);
        }

        .arrow-icon {
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .resume-btn:hover .arrow-icon {
          transform: translateY(2px);
        }

        .btn-text {
          position: relative;
          z-index: 1;
        }

        .btn-label {
          display: block;
          line-height: 1;
        }

        .btn-sublabel {
          display: block;
          font-size: 11px;
          color: #888;
          font-weight: 400;
          margin-top: 2px;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
        }

        .resume-btn:hover .btn-sublabel {
          color: #aaa;
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          width: 100px;
          height: 100px;
          margin-top: -50px;
          margin-left: -50px;
          animation: ripple-anim 0.6s ease-out forwards;
          pointer-events: none;
        }

        @keyframes ripple-anim {
          from { transform: scale(0); opacity: 1; }
          to   { transform: scale(4); opacity: 0; }
        }
      `}</style>

      <div className="resume-btn-wrapper">
        <a
          href="/assets/3pages.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick}
        >
          {clicked && (
            <span className="ripple" style={{ top: "50%", left: "50%" }} />
          )}

          <span className="btn-icon">
            {/* PDF icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </span>

          <span className="btn-text">
            <span className="btn-label">View Resume</span>
          </span>
        </a>
      </div>
    </>
  );
}
