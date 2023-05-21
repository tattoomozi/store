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
  },
  {
    id: 2,
    name: 'Exhibit-2',
    type: 'Pokemon',
    price: 6500,
    img: '/CP-pics/Pokemon_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
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
      <h1 class="cyberpunk">Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>
      {lsExhibits.map((exhibit) => {
        return (
          <a key={`Exhibit-div-${exhibit.id}`}>
            <Link
              href={'/Livestock/${exhibit.id}'}
              data-test-id={`product-${exhibit.id}`}
            >
              {exhibit.name};
              <Image
                src={exhibit.img}
                width={200}
                height={200}
                alt="Enslaved Exhibit"
              />
            </Link>
          </a>
        );
      })}
    </main>
  );
}
