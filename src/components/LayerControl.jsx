const MAP_STYLES = {
  hibrido: 'https://api.maptiler.com/maps/hybrid/style.json?key=wxRpMoRkMeIY1OWMwquv',
  calles: 'https://api.maptiler.com/maps/streets-v2/style.json?key=wxRpMoRkMeIY1OWMwquv',
  topo: 'https://api.maptiler.com/maps/topo-v2/style.json?key=wxRpMoRkMeIY1OWMwquv',
  satelite: 'https://api.maptiler.com/maps/satellite/style.json?key=wxRpMoRkMeIY1OWMwquv',
  base: 'https://api.maptiler.com/maps/base-v4/style.json?key=wxRpMoRkMeIY1OWMwquv',
};

function LayerControl({ onStyleChange }) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="w-12 h-12 bg-[#1a2332] hover:bg-[#252d3d] border border-gray-700/50 rounded-lg flex items-center justify-center text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-4.477a2.25 2.25 0 0 1 2.092 0L22.25 12l-8.954 4.477a2.25 2.25 0 0 1-2.092 0L2.25 12Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954 4.477a2.25 2.25 0 0 0 2.092 0L22.25 12M2.25 15l8.954 4.477a2.25 2.25 0 0 0 2.092 0L22.25 15" />
        </svg>
      </div>

      <ul tabIndex={0} className="dropdown-content menu bg-[#1a2332] border border-gray-700/50 rounded-lg z-[1] w-48 p-2 shadow-2xl mt-2">
        <li className="menu-title text-[10px] opacity-50 uppercase font-bold text-[#13ec37] px-3 py-1">Mapa Base</li>
        <li>
          <button className="py-2 text-sm text-white hover:bg-[#252d3d]" onClick={() => onStyleChange(MAP_STYLES.hibrido)}>
            🌳 Hibrido
          </button>
        </li>
        <li>
          <button className="py-2 text-sm text-white hover:bg-[#252d3d]" onClick={() => onStyleChange(MAP_STYLES.topo)}>
            ⛰️ Relieve
          </button>
        </li>
        <li>
          <button className="py-2 text-sm text-white hover:bg-[#252d3d]" onClick={() => onStyleChange(MAP_STYLES.calles)}>
            🛣️ Calles
          </button>
        </li>
        <li>
          <button className="py-2 text-sm text-white hover:bg-[#252d3d]" onClick={() => onStyleChange(MAP_STYLES.satelite)}>
            🛰️ Satélite
          </button>
        </li>
        <li>
          <button className="py-2 text-sm text-white hover:bg-[#252d3d]" onClick={() => onStyleChange(MAP_STYLES.base)}>
            🏠 Base
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LayerControl;