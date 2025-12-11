import { useState } from "react";
import "./m.css";
import menuPdf from "../../assets/wedding-menu.pdf";

const FoodMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="foodmenu" id="food-menu">
      <h2 className="timeline_title foodmenu_title">Food Menu</h2>
      <p className="foodmenu_p">Take a look at the menu for the day.</p>
      <button className="foodmenu_btn" onClick={() => setOpen(true)}>
        View Menu
      </button>

      {open && (
        <div className="foodmenu_modal" role="dialog" aria-modal="true">
          <div className="foodmenu_modal_content">
            <button
              className="foodmenu_close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <embed src={menuPdf} type="application/pdf" className="foodmenu_embed" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
