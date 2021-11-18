// Travel lane JSON is a list of:
// {
//     "id": 5,
//     "country_iso": "AD",
//     "country_name": "Andorra",
//     "lane_name": "STL-Cat4",
//     "filters": {
//         "lane": "STL-Cat4",
//         "fully_vaccinated": false,
//         "age_above_12": false,
//         "required_residential_status": false,
//         "no_pcr": false,
//         "no_art": false,
//         "no_shn": false,
//         "no_sdf": false,
//         "link": "https://safetravel.ica.gov.sg/travel-checklist/category-4",
//         "more_details": false
//     }
// },

export interface TravelConditions {
    lane: string;
    fully_vaccinated: boolean;
    age_above_12: boolean;
    required_residential_status: string;
    no_pcr: boolean;
    no_art: boolean;
    no_shn: boolean;
    no_sdf: boolean;
    link: string;
    more_details: string;
}

export interface TravelLane {
    id: number;
    country_iso: string;
    country_name: string;
    lane_name: string;
    filters: TravelConditions;
}