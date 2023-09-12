import { getjason } from "./api.js";
document.addEventListener("DOMContentLoaded", () => {
    const countryName = document.getElementById("country");
    const stateName = document.getElementById("state");
    const cityName = document.getElementById("city");

    const populatedata = (Dropdown, data) => {
        data.forEach(data => {
            const optiondata = new Option(data, data)
            Dropdown.add(optiondata);
        });
    };
    countryName.addEventListener("change", () => {
        const countryselect = countryName.value;
        const state = Object.keys(getjason[0][countryselect]);
        populatedata(stateName, state);
        populatedata(cityName, []);
        Object.keys
    });
    stateName.addEventListener("change", () => {
        const countryselect = countryName.value;
        const stateselect = stateName.value;
        const cities = getjason[0][countryselect][stateselect];
        populatedata(cityName, cities);
    });

    populatedata(countryName, Object.keys(getjason[0]));
});