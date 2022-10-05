export interface Tabledata {
	id: number;
	date: string;
	name: string;
	quantity: number;
	distance: number;
}

export type TabledataProp = keyof Omit<Tabledata, 'date'>

export type SortType = 'up' | 'down' | null;

export interface SortConfig {
	key: TabledataProp,
	sortType: SortType,
}