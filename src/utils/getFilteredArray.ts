import { FilterConfig, Tabledata, TabledataProp } from "../types/types";

export const getFilteredArray = (data?: Tabledata[], filterConfig?: FilterConfig) => {
	if (!data) return;
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
					else return elem[filterConfig.field as TabledataProp] === filterConfig.input

				}
			);

		case 'bigger':
			return data.filter(
				(elem) => {
					if (typeof (elem[filterConfig.field as TabledataProp]) === 'number') {
						return elem[filterConfig.field as TabledataProp] > Number(filterConfig.input)
					}
					else return elem[filterConfig.field as TabledataProp] > filterConfig.input
				}
			);

		case 'lesser':
			return data.filter(
				(elem) => {
					if (typeof (elem[filterConfig.field as TabledataProp]) === 'number') {
						return elem[filterConfig.field as TabledataProp] < Number(filterConfig.input)
					}
					else return elem[filterConfig.field as TabledataProp] < filterConfig.input
				}
			);

		case 'include':
			return data.filter((elem) =>
				elem[filterConfig.field as TabledataProp].toString().includes(filterConfig.input)
			);
	}
};