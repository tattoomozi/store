const stExhibits = [
  {
    id: 1,
    name: 'Storage-1',
    type: 'Humanoid Bot',
    price: 3500,
    img: '/CP-pics/cyborg_slave_alt.png',
    alt: 'Broken Cyborg Slave',
    width: '500',
    height: '500',
  },
  {
    id: 2,
    name: 'Storage-2',
    type: 'Humanoid Bot',
    price: 3500,
    img: '/CP-pics/cyborg_slave_alt_2.png',
    alt: 'Broken Cyborg Slave',
    width: '500',
    height: '500',
  },
];

export default function StoragePage() {
  return (
    <main className="STMain">
      <h2>Samurai Storage</h2>
      <h3>Collectors Edition</h3>
      {stExhibits.map((exhibit) => {
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
              alt="Stored Valuables"
            />
          </a>
        );
      })}
    </main>
  );
}
