import React, { useState } from "react";

export default function PruebaReact() {
  const [contador, setContador] = useState(0);

  return (
    <button
      onClick={() => setContador(contador + 1)}
      className="mt-5 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all"
    >
      ¡Soy React! Clics: {contador}
    </button>
  );
}
