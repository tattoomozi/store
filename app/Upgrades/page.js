const exhibits = [
  {
    id: 7,
    name: 'Implant-1',
    type: 'arm',
    price: 3500,
    /*   img: './CP-pics/Arm_implants.png', */
    alt: 'Biomechanical Arm',
    width: '500',
    height: '500',
  },
  {
    id: 8,
    name: 'Implant-2',
    type: 'face',
    price: 6500,
    /* img: './CP-pics/face_implants.png', */
    alt: 'Ultra-Realistic Face',
    width: '500',
    height: '500',
  },
  {
    id: 9,
    name: 'Implant-3',
    type: 'skin',
    price: 9000,
    /*  img: './CP-pics/virtual_skin_implants.png', */
    alt: 'Hyper-Realistic Skin',
  },
];
export default function UpgradesPage() {
  return (
    <main>
      <h2>Samurai Upgrades</h2>
      <h3>Only the best on the Night-Market</h3>
      <br></br>
      {exhibits.map((exhibit) => {
        return (
          <div key={`Exhibit-div-${exhibit.id}`}>
            {exhibit.name};<br></br>
            <img
              src={`/CP-pics/${exhibit.name}.png`}
              width={300}
              height={300}
              alt="Enslaved Exhibit"
            />
          </div>
        );
      })}
    </main>
  );
}
