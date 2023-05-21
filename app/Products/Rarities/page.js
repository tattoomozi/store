import Image from 'next/image';
import Link from 'next/link';
import { rsExhibits } from '../../../database/finalExhibits';

console.log(rsExhibits);
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
