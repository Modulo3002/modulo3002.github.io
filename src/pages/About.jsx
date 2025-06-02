import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1>Over Schaaktafels</h1>
      <p>
        <strong>Schaaktafels.nl</strong> is een initiatief om alle openbare schaaktafels in Nederland in kaart te brengen. 
        Of je nu een fanatieke schaker bent of gewoon op zoek naar een gezellige plek om buiten een potje te spelen – 
        hier vind je snel een schaaktafel bij jou in de buurt.
      </p>

      <p>
        Deze website is ontstaan vanuit de liefde voor het spel en het idee dat schaken mensen verbindt. 
        Met behulp van de interactieve kaart kun je eenvoudig schaaklocaties ontdekken, filteren op plaats of postcode, 
        en zelfs direct je route plannen via Google Maps.
      </p>

      <p>
        De informatie wordt verzameld uit openbare bronnen en bijdragen van gebruikers. Ontbreekt er een tafel? 
        Laat het ons weten, zodat we samen deze kaart completer kunnen maken!
      </p>

      <h2>Gebruikte technieken</h2>
      <ul>
        <li><strong>React</strong> voor component-gedreven opbouw</li>
        <li><strong>React Router</strong> voor navigatie</li>
        <li><strong>Leaflet</strong> voor de interactieve kaart</li>
        <li><strong>CSS</strong> voor styling en responsive design</li>
        <li><strong>JSON</strong> als eenvoudige datastructuur voor schaaktafels</li>
      </ul>

      <p><em>Samen maken we schaken toegankelijk, zichtbaar en uitnodigend voor iedereen.</em></p>
    </div>
  );
}
