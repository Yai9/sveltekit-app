import { writable } from 'svelte/store';

export const food = writable([]);

const fetchFoodFunc = async () => {
	const data = await fetch('http://localhost:3000/data.json');
	const loadedFood = await data.json();
	console.log(loadedFood, 'loaded');
	food.set(loadedFood);
};

fetchFoodFunc();
