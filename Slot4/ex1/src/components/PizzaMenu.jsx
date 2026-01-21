import "../pizzaMenu.css";
import { pizzaList } from "../data/pizzaList";
import PizzaCard from "./PizzaCard";

export default function PizzaMenu() {
  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-grid">
        {pizzaList.map((item) => (
          <PizzaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
