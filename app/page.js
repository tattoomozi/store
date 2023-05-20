export default function HomePage() {
  return (
    <main className="hpMain">
      <section className="menu">
        <h1>Samurai Warehouse</h1>
        <ul>
          <li>
            <a href="Products/Livestock">
              <h2 class="cyberpunk glitched">Livestock</h2>
            </a>
          </li>
          <li>
            <a href="Products/Rarities">
              <h2 class="cyberpunk glitched">Rarities</h2>
            </a>
          </li>
          <li>
            <a href="Products/Upgrades">
              <h2 class="cyberpunk glitched">Upgrades</h2>
            </a>
          </li>
          <li>
            <a href="Products/Storage">
              <h2 class="cyberpunk glitched">Storage</h2>
            </a>
          </li>
          {/* missing a element because it destroys the effects*/}
          <li>
            <a href="Products/Storage">
              <h2 class="cyberpunk glitched">Cart</h2>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
