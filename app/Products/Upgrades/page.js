import Image from 'next/image';
import Link from 'next/link';

const ugExhibits = [
  {
    id: 1,
    name: 'Implant-1',
    type: 'arm',
    price: 3500,
    img: '/CP-pics/Arm_implants.png',
    alt: 'Biomechanical Arm',
  },
  {
    id: 2,
    name: 'Implant-2',
    type: 'face',
    price: 6500,
    img: '/CP-pics/face_implants.png',
    alt: 'Ultra-Realistic Face',
  },
  {
    id: 3,
    name: 'Implant-3',
    type: 'skin',
    price: 9000,
    img: '/CP-pics/virtual_skin_implants.png',
    alt: 'Hyper-Realistic Skin',
  },
  {
    id: 4,
    name: 'Implant-4',
    type: 'body-Armor',
    price: 9000,
    img: '/CP-pics/body_Armor.png',
    alt: 'Nano Body Armor',
  },
];
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
