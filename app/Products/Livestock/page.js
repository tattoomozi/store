import Image from 'next/image';
import Link from 'next/link';

const lsExhibits = [
  {
    id: 1,
    name: 'Exhibit-1',
    type: 'Pokemon',
    price: 3500,
    img: '/CP-pics/Pikachu_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
    width: '500',
    height: '500',
  },
  {
    id: 2,
    name: 'Exhibit-2',
    type: 'Pokemon',
    price: 6500,
    img: '/CP-pics/Pokemon_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
    width: '500',
    height: '500',
  },
  {
    id: 3,
    name: 'Exhibit-3',
    type: 'Pokemon',
    price: 9000,
    img: '/CP-pics/Pokemon_Cage.png',
    alt: 'Enslaved Exhibit',
  },
];

export default function LivestockPage() {
  return (
    <main className="lsMain">
      <h1>Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>
      {lsExhibits.map((exhibit) => {
        return (
          <a
            data-test-id={`product-${exhibit.id}`}
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