import "./BurgerMenu.css";

function BurgerMenu({ onClick }) {
  return (
    <div className={"burger-menu"}>
      <div className="burger-menu__icon" onClick={() => onClick()}></div>
    </div>
  );
}
export default BurgerMenu;
