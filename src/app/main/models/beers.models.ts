export interface Beer {
    name: string;
    abv: number;
    attenuation_level: 93;
    boil_volume: Amount;
    brewers_tips: string;
    contributed_by: string;
    description: string;
    ebc: number;
    first_brewed: string;
    food_pairing: Array<string>;
    ibu: number;
    id: number;
    image_url: string;
    ingredients: Ingredients;
    method: Method;
    // name: string;
    ph: number;
    srm: number;
    tagline: string;
    target_fg: number;
    target_og: number;
    volume: Amount;
}

// export interface Boil {
//     value: number;
//     unit: string;
// }

export interface Ingredients {
    hops: Array<Hops>;
    malt: Array<Malt>;
    yeast: string;
}

export interface Hops {
    add: string;
    amount: Amount;
    attribute: string;
    name: string;
}

export interface Amount {
    unit: string;
    value: number;
}

export interface Malt {
    amount: Amount;
    name: string
}

// export interface AmountMalt {
//     value: number;
//     unit: string;
// }

export interface Method {
  fermentation: Amount;
  mash_temp: Array<MashTemp>;
  twsit?: any;
}

export interface MashTemp {
    duration: number;
    temp: Amount;
}

export interface Volume {

}