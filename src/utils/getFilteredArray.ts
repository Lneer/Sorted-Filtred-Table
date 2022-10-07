import { FilterConfig, Tabledata, TabledataProp } from "../types/types";

export const getFilteredArray = (data?: Tabledata[], filterConfig?: FilterConfig) => {
	if (!data || !data.length) return [];
	if (!filterConfig) return [...data];
	if (filterConfig.field === 'default' || filterConfig.method === 'default' || filterConfig.input === '') {
		return [...data];
	}
	switch (filterConfig.method) {
		case 'equal':
			return data.filter(
				(elem) => {
					if (typeof (elem[filterConfig.field as TabledataProp]) === 'number') {
						return elem[filterConfig.field as TabledataProp] === Number(filterConfig.input)
					}
					else return elem[filterConfig.field as TabledataProp].toString().toLowerCase() === filterConfig.input.toLowerCase()

				}
			);

		case 'bigger':
			return data.filter(
				(elem) => {
					if (typeof (elem[filterConfig.field as TabledataProp]) === 'number') {
						return elem[filterConfig.field as TabledataProp] > Number(filterConfig.input)
					}
					else return elem[filterConfig.field.toLowerCase() as TabledataProp] > filterConfig.input.toLowerCase()
				}
			);

		case 'lesser':
			return data.filter(
				(elem) => {
					if (typeof (elem[filterConfig.field as TabledataProp]) === 'number') {
						return elem[filterConfig.field as TabledataProp] < Number(filterConfig.input)
					}
					else return elem[filterConfig.field.toLowerCase() as TabledataProp] < filterConfig.input.toLowerCase()
				}
			);

		case 'include':
			return data.filter((elem) =>
				elem[filterConfig.field as TabledataProp].toString().toLowerCase().includes(filterConfig.input.toLowerCase())
			);
	}
};