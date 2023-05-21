import Image from 'next/image';
import Link from 'next/link';

const rsExhibits = [
  {
    id: 1,
    name: 'Rarity-1',
    type: 'Car',
    price: 3500,
    img: '/CP-pics/future_car_front.png',
    alt: 'Silverado 2077 Design',
  },
  {
    id: 2,
    name: 'Rarity-2',
    type: 'Car',
    price: 6500,
    img: '/CP-pics/future_car_back.png',
    alt: 'CyberCar 2077 Design',
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
    <main className="rsMain">
      <h1 class="cyberpunk">Samurai Rarities</h1>
      <h2>Unique yet Unexpensive</h2>
      {rsExhibits.map((exhibit) => {
        return (
          <a key={`Exhibit-div-${exhibit.id}`}>
            <Link
              href={'/Rarities/${exhibit.id}'}
              data-test-id={`product-${exhibit.id}`}
            >
              {exhibit.name};
              <Image
                src={exhibit.img}
                width={200}
                height={200}
                alt="Rare goods"
              />
            </Link>
          </a>
        );
      })}
    </main>
  );
}
