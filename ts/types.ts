export interface ArtElemIdentificationDetails {
    parentElement?: Element,
    reqNoOfArt?: number,
    image:string,
    title: string,
    pubDate: string,
    author?: string
}

export interface URLDetails {
    endpoint:string,
    queryParams: Map<string,  string | number> ,
}