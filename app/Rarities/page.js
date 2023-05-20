const exhibits = [
  {
    id: 4,
    name: 'Rarity-1',
    type: 'Car',
    price: 3500,
    /*   img: './CP-pics/future_car_front.png', img: './CP-pics/future_car_back.png', */
    alt: 'Silverado 2077 Design',
    width: '500',
    height: '500',
  },
  {
    id: 5,
    name: 'Rarity-2',
    type: 'Gun',
    price: 6500,
    /* img: './CP-pics/Pokemon_Cage_Steam.png', */
    alt: 'Plasma Gun',
    width: '500',
    height: '500',
  },
  {
    id: 6,
    name: 'Rarity-3',
    type: 'Armor',
    price: 9000,
    /*  img: './CP-pics/Pokemon_Cage.png', */
    alt: 'Nono-Tech Armor',
  },
];
export default function RaritiesPage() {
  return (
    <main>
      <h2>Samurai Rarities</h2>
      <h3>Stuff you only find in your dreams</h3>
      <br></br>
      {exhibits.map((exhibit) => {
        return (
          <div key={`Exhibit-div-${exhibit.id}`}>
            {exhibit.name};<br></br>
            <img
              src={`/CP-pics/${exhibit.name}.png`}
              width={300}
              height={300}
              alt="Enslaved Exhibit"
            />
          </div>
        );
      })}
    </main>
  );
}
