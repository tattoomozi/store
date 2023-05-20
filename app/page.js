export default function HomePage() {
  return (
    <main className="HPMain">
      <section className="menu">
        <h1>Samurai Warehouse</h1>
        <ul>
          <li>
            <a href="/Livestock">Livestock</a>
          </li>
          <li>
            <a href="/Rarities">Rarities</a>
          </li>
          <li>
            <a href="/Upgrades">Upgrades</a>
          </li>
          <li>Storage</li>
          {/* missing a element because it destroys the effects*/}
          <li>Checkout</li>
        </ul>
      </section>
      <section className="smenu">
        <h1>Samurai Warehouse</h1>
        <ul>
          <li>
            <a href="/Livestock">Livestock</a>
          </li>
          <li>
            <a href="/Rarities">Rarities</a>
          </li>
          <li>
            <a href="/Upgrades">Upgrades</a>
          </li>
          <li>Storage</li>
          {/* missing a element because it destroys the effects*/}
          <li>Checkout</li>
        </ul>
      </section>
    </main>
  );
}
