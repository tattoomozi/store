const rsExhibits = [
  {
    id: 1,
    name: 'Rarity-1',
    type: 'Car',
    price: 3500,
    img: '/CP-pics/future_car_front.png',
    alt: 'Silverado 2077 Design',
    width: '500',
    height: '500',
  },
  {
    id: 2,
    name: 'Rarity-2',
    type: 'Car',
    price: 6500,
    img: '/CP-pics/future_car_back.png',
    alt: 'CyberCar 2077 Design',
    width: '500',
    height: '500',
  },
  {
    id: 3,
    name: 'Rarity-3',
    type: 'Humanoid Bot',
    price: 9000,
    img: '/CP-pics/cyborg_slave.png',
    alt: 'Cyborg Slave',
  },
];
export default function RaritiesPage() {
  return (
    <main className="RSMain">
      <h2>Samurai Rarities</h2>
      <h3>Unique yet Unexpensive</h3>
      {rsExhibits.map((exhibit) => {
        return (
          <a
            data-test={`product-${exhibit.id}`}
            key={`Exhibit-div-${exhibit.id}`}
          >
            {exhibit.name};
            <img
              src={exhibit.img}
              width={300}
              height={300}
              alt="Enslaved Exhibit"
            />
          </a>
        );
      })}
    </main>
  );
}
