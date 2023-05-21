import Image from 'next/image';
import Link from 'next/link';
import { ugExhibits } from '../../../database/finalExhibits';

export default function UpgradesPage() {
  return (
    <main className="ugMain">
      <h1 class="cyberpunk">Samurai Upgrades</h1>
      <h2>Bigger - Better - Stronger</h2>
      {ugExhibits.map((exhibit) => {
        return (
          <a key={`Exhibit-div-${exhibit.id}`}>
            <Link
              href={'/Upgrades/${exhibit.id}'}
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
