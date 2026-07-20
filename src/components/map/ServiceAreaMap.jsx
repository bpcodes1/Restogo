import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { CITIES, CORE_STATE_FIPS, MAP_STATE_FIPS } from './pnwCities';

const US_STATES_TOPOJSON = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const COLORS = {
  background: '#ffffff',
  gridLine: 'rgba(17,28,45,0.06)',
  coreFill: '#eaf1fc',
  coreStroke: 'rgba(17,28,45,0.2)',
  neighborFill: 'rgba(17,28,45,0.03)',
  neighborStroke: 'rgba(17,28,45,0.1)',
  cityDot: '#1d2b3e',
  hqDot: '#0b3c8c',
  markerStroke: '#f9f9ff',
  labelText: 'rgba(17,28,45,0.75)',
  hqLabelText: '#0b3c8c',
  footerLabel: '#000000',
};

// Normalize FIPS ids so "6" and "06" both match California, etc.
const normalizeFips = (id) => String(id).padStart(2, '0');
const CORE_SET = new Set(CORE_STATE_FIPS);
const VISIBLE_SET = new Set(MAP_STATE_FIPS);

export default function ServiceAreaMap() {
  return (
    <div className="overflow-hidden bg-white">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [-117.95, 45.1], scale: 3600 }}
        width={1000}
        height={720}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <pattern id="pnw-map-grid" width={18} height={18} patternUnits="userSpaceOnUse">
            <path d="M 18 0 L 0 0 0 18" fill="none" stroke={COLORS.gridLine} strokeWidth={0.6} />
          </pattern>
        </defs>

        <rect x={0} y={0} width="100%" height="100%" fill={COLORS.background} />
        <rect x={0} y={0} width="100%" height="100%" fill="url(#pnw-map-grid)" />

        <Geographies geography={US_STATES_TOPOJSON}>
          {({ geographies }) =>
            geographies
              .filter((geo) => VISIBLE_SET.has(normalizeFips(geo.id)))
              .map((geo) => {
                const isCore = CORE_SET.has(normalizeFips(geo.id));
                const style = {
                  fill: isCore ? COLORS.coreFill : COLORS.neighborFill,
                  stroke: isCore ? COLORS.coreStroke : COLORS.neighborStroke,
                  strokeWidth: isCore ? 1.2 : 0.8,
                  outline: 'none',
                };
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{ default: style, hover: style, pressed: style }}
                  />
                );
              })
          }
        </Geographies>

        {CITIES.map((city) => {
          const { dx = 8, dy = -8, textAnchor = 'start' } = city.labelOffset || {};
          return (
            <Marker key={city.name} coordinates={city.coordinates}>
              <circle
                r={city.isHQ ? 7 : 4.5}
                fill={city.isHQ ? COLORS.hqDot : COLORS.cityDot}
                stroke={COLORS.markerStroke}
                strokeWidth={1.5}
              />
              <text
                x={dx}
                y={dy}
                textAnchor={textAnchor}
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontWeight: city.isHQ ? 700 : 600,
                  fontSize: city.isHQ ? 13 : 11,
                  fill: city.isHQ ? COLORS.hqLabelText : COLORS.labelText,
                }}
              >
                {city.name}
                {city.isHQ ? ' (HQ)' : ''}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

      <div className="border-t border-[rgba(17,28,45,0.08)] px-4 py-3 text-center">
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: COLORS.footerLabel }}
        >
          Restogo Service Area
        </span>
      </div>
    </div>
  );
}
