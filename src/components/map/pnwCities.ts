// Core PNW states we service, plus surrounding states shown for geographic context.
// FIPS state codes: https://www.census.gov/library/reference/code-lists/ansi.html
export const CORE_STATE_FIPS = ['53', '41', '16']; // Washington, Oregon, Idaho
export const NEIGHBOR_STATE_FIPS = ['06', '32', '30', '49', '56']; // CA, NV, MT, UT, WY
export const MAP_STATE_FIPS = [...CORE_STATE_FIPS, ...NEIGHBOR_STATE_FIPS];

interface LabelOffset {
  dx: number;
  dy: number;
  textAnchor: 'start' | 'middle' | 'end';
}

export interface City {
  name: string;
  state: string;
  coordinates: [number, number];
  isHQ?: boolean;
  services?: string[];
  labelOffset: LabelOffset;
}

// Data-driven city list — add a city by appending an entry here.
// labelOffset controls where the text sits relative to the pin so labels don't collide.
export const CITIES: City[] = [
  {
    name: 'Salem',
    state: 'OR',
    coordinates: [-123.0351, 44.9429],
    isHQ: true,
    services: ['Headquarters', 'Distribution'],
    labelOffset: { dx: 11, dy: -7, textAnchor: 'start' },
  },
  {
    name: 'Portland',
    state: 'OR',
    coordinates: [-122.6765, 45.5231],
    labelOffset: { dx: 10, dy: 5, textAnchor: 'start' },
  },
  {
    name: 'Eugene',
    state: 'OR',
    coordinates: [-123.0868, 44.0521],
    labelOffset: { dx: -9, dy: 5, textAnchor: 'end' },
  },
  {
    name: 'Bend',
    state: 'OR',
    coordinates: [-121.3153, 44.0582],
    labelOffset: { dx: 9, dy: 5, textAnchor: 'start' },
  },
  {
    name: 'Seattle',
    state: 'WA',
    coordinates: [-122.3321, 47.6062],
    labelOffset: { dx: 10, dy: -7, textAnchor: 'start' },
  },
  {
    name: 'Tacoma',
    state: 'WA',
    coordinates: [-122.4443, 47.2529],
    labelOffset: { dx: -9, dy: 15, textAnchor: 'end' },
  },
  {
    name: 'Spokane',
    state: 'WA',
    coordinates: [-117.426, 47.6588],
    labelOffset: { dx: 10, dy: -7, textAnchor: 'start' },
  },
  {
    name: 'Boise',
    state: 'ID',
    coordinates: [-116.2023, 43.615],
    labelOffset: { dx: 10, dy: 5, textAnchor: 'start' },
  },
];
