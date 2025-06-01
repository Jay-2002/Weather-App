// We will be using async paginate package that we installed in here

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoDbUrl, geoDbOptions} from "../../cityapi"

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const loadCityOptions = async (searchCity) => {
        try {
            // const response = await fetch(geoDbUrl,geoDbOptions);
            const response = await fetch(`${geoDbUrl}?minPopulation=1000000&namePrefix=${searchCity}`, geoDbOptions);
            const result = await response.json();

            return {
                options: result.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                  }))
            };
        } catch (error) {
            console.error(error);
        }
    } 

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate placeholder="Search for city" debounceTimeout={1000} value={search} onChange={handleOnChange} loadOptions={loadCityOptions}>

        </AsyncPaginate>
    )
}

export default Search;