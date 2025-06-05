// components/UnderConstructionPopup.jsx
import { useState, useEffect } from "react";
import "./UnderConstruction.css";

export default function UnderConstructionPopup() {
  const [visible, setVisible] = useState(true);

  // Automatisch sluiten na bijv. 10 seconden (optioneel)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>🔧 Deze site is nog in aanbouw</h2>
        <p>
          We werken op dit moment actief aan deze webapplicatie. <br />
          Voor de beste ervaring raden we aan om de mobiele versie in <strong>Google Chrome</strong> te gebruiken.
          De applicatie is nog niet aangepast voor het gebruik op andere apparaten.
        </p>
        <button onClick={() => setVisible(false)}>Sluiten</button>
      </div>
    </div>
  );
}
