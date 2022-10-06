import { SortConfig, Tabledata } from "../types/types"

export const getSortedArray = (array?: Tabledata[], config?: SortConfig) => {
	if (!array || !config) return undefined;

	if (config.key === 'id' || config.sortType === null || !array.length) {
		return [...array]
	}


	if (!array[0].hasOwnProperty(config.key)) {
		return [...array]
	}

	return [...array].sort((a, b) => {
		if (a[config.key] < b[config.key]) {
			return config.sortType === "up" ? -1 : 1
		}

		if (a[config.key] > b[config.key]) {
			return config.sortType === "up" ? 1 : -1
		}
		return 0;

	})
}

