import Image from 'next/image';
import Link from 'next/link';
import { stExhibits } from '../../../database/finalExhibits';

export default function StoragePage() {
  return (
    <main className="stMain">
      <h1 class="cyberpunk">Samurai Storage</h1>
      <h2>Collectors Edition</h2>
      {stExhibits.map((exhibit) => {
        return (
          <a key={`Exhibit-div-${exhibit.id}`}>
            <Link
              href={'/Storage/${exhibit.id}'}
              data-test-id={`product-${exhibit.id}`}
            >
              {exhibit.name};
              <Image
                src={exhibit.img}
                width={200}
                height={200}
                alt="Stored Valuables"
              />
            </Link>
          </a>
        );
      })}
    </main>
  );
}
