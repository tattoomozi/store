const exhibits = [
  {
    id: 1,
    name: 'Exhibit-1',
    type: 'Pokemon',
    price: 3500,
    img: '../public/CP-pics/Pikachu_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
    width: '500',
    height: '500',
  },
  {
    id: 2,
    name: 'Exhibit-2',
    type: 'Pokemon',
    price: 6500,
    img: '../public/CP-pics/Pokemon_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
    width: '500',
    height: '500',
  },
  {
    id: 3,
    name: 'Exhibit-3',
    type: 'Pokemon',
    price: 9000,
    img: '../public/CP-pics/Pokemon_Cage.png',
    alt: 'Enslaved Exhibit',
  },
];

export default function LivestockPage() {
  return (
    <main className="LSMenu">
      <h2>Samurai Livestock</h2>
      <h3>something to eat - something to fight</h3>
      {exhibits.map((exhibit) => {
        return (
          <a
            data-test={`product-${exhibit.id}`}
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
