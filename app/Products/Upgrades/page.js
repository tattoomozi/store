const ugExhibits = [
  {
    id: 1,
    name: 'Implant-1',
    type: 'arm',
    price: 3500,
    img: '/CP-pics/Arm_implants.png',
    alt: 'Biomechanical Arm',
    width: '500',
    height: '500',
  },
  {
    id: 2,
    name: 'Implant-2',
    type: 'face',
    price: 6500,
    img: '/CP-pics/face_implants.png',
    alt: 'Ultra-Realistic Face',
    width: '500',
    height: '500',
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
      <h1>Samurai Upgrades</h1>
      <h2>Bigger - Better - Stronger</h2>
      {ugExhibits.map((exhibit) => {
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
