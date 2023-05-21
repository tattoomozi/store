import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import Link from 'next/link';
import {
  lsExhibits,
  rsExhibits,
  stExhibits,
  ugExhibits,
} from '../../../database/finalExhibits';

const allExhibits = lsExhibits.concat(rsExhibits, stExhibits, ugExhibits);
export default function ProductsPage({ params }) {
  const singleExhibit = allExhibits.find(
    (exhibits) => exhibits.name === params.name,
  );
  if (!singleExhibit) return <div>Get lost copper</div>;
  return (
    <main>
      <h1>This is the dynamic Site</h1>
      <Image src={`/CP-pics/${singleExhibit.png}`} width={200} height={200} />
      this is a {singleExhibit.type} for auction or buy {singleExhibit.name}
    </main>
  );
}
