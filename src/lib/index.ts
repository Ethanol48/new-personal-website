// place files you want to import through the `$lib` alias in this folder.

export type Project = {
	name: string;
	date: string;
	desc: string;
	photo: any;
	badges: string[];
};

export type Education = {
	name: string;
	dateFrom: string;
	dateTo: string;
	desc: string;
	bulletPoints: string[];
};
