const Menu = ({ menu }) => {
  return (
    <ul>
      {Object.entries(menu).map(([name, price], index) => (
        <li key={index + Date.now()}>
          {name} {price}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
