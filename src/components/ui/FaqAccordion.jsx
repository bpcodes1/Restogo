import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-border-soft rounded-xl border border-border-soft bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-heading">{item.question}</span>
              <span
                className={`shrink-0 text-xl text-primary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
              >
                +
              </span>
            </button>
            {isOpen && <div className="px-6 pb-4 text-text-muted">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
