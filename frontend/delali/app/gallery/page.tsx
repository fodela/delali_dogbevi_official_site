"use client";
import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [selected, setSelected] = useState<HTMLLIElement | null>(null);
  const [yPos, setYPos] = useState<number>(0);

  const handleRetraction = () => {
    if (selected) {
      retract(selected);
    }
  };

  const retract = (item: HTMLLIElement) => {
    const retraction = vt(() => {
      window.scrollTo(0, yPos);
      item.classList.remove("full");
    });
    retraction.finished.then(() => {
      item.dataset.expanded = "false";
      item.style.zIndex = "1";
      setSelected(null);
      document.body.removeEventListener("click", handleRetraction);
    });
  };

  const expand = (item: HTMLLIElement) => {
    item.dataset.expanded = "true";
    item.classList.add("full");
    item.scrollIntoView({
      block: "center",
    });
    document.body.addEventListener("click", handleRetraction);
  };

  const handleExpansion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const item = event.currentTarget.closest("li") as HTMLLIElement;
    if (item.dataset.expanded === "true") {
      // We are taking it down.
      retract(item);
    } else {
      // Check if there is an expansion already...
      const expanded = document.querySelector('[data-expanded="true"]');
      if (expanded) {
        document.body.removeEventListener("click", handleRetraction);
      }
      setSelected(item);
      item.style.zIndex = "10";
      setYPos(window.pageYOffset);
      const expansion = vt(() => {
        if (expanded) {
          expanded.classList.remove("full");
          expanded.dataset.expanded = "false";
          expanded.style.zIndex = "1";
        }
        expand(selected);
      });
    }
  };

  const vt = (update: () => void) => {
    if (!document.startViewTransition) update();
    return document.startViewTransition(update);
  };

  useEffect(() => {
    const COUNT = 58;
    const LIST = document.querySelector("ul");

    for (let i = 0; i < COUNT; i++) {
      const LI = Object.assign(document.createElement("li"), {
        style: `view-transition-name: item-${i}`,
        innerHTML: `
          <button>
            <img src="https://picsum.photos/800/800?random=${i}" />
          </button>
        `,
      });
      LI.dataset.index = i;
      LIST.appendChild(LI);
    }

    const BUTTONS = LIST.querySelectorAll("button");
    BUTTONS.forEach((BUTTON) => {
      BUTTON.addEventListener("click", handleExpansion);
    });
  }, []);

  return (
    <div>
      <ul className="my_grid"></ul>
    </div>
  ); // React component should return JSX
};

export default App;
