const exhibits = [
  {
    id: 1,
    name: 'Exhibit-1',
    type: 'Pokemon',
    price: 3500,
    /*   img: './CP-pics/Pikachu_Cage_Steam.png', */
    alt: 'Enslaved Exhibit',
    width: '500',
    height: '500',
  },
  {
    id: 2,
    name: 'Exhibit-2',
    type: 'Pokemon',
    price: 6500,
    /* img: './CP-pics/Pokemon_Cage_Steam.png', */
    alt: 'Enslaved Exhibit',
    width: '500',
    height: '500',
  },
  {
    id: 3,
    name: 'Exhibit-3',
    type: 'Pokemon',
    price: 9000,
    /*  img: './CP-pics/Pokemon_Cage.png', */
    alt: 'Enslaved Exhibit',
  },
];

export default function LivestockPage() {
  return (
    <main>
      <h2>Samurai Livestock</h2>
      <br></br>
      <h3>something to eat - something to fight</h3>
      <br></br>
      {exhibits.map((exhibit) => {
        return (
          <div key={`Exhibit-div-${exhibit.id}`}>
            {exhibit.name}
            <br />
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
