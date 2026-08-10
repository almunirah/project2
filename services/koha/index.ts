export interface KohaService{getBibliographicRecords():Promise<unknown[]>;getItems():Promise<unknown[]>;getPatrons():Promise<unknown[]>;getCirculation():Promise<unknown[]>;getAcquisitions():Promise<unknown[]>}
export const kohaConfig={apiUrl:process.env.KOHA_API_URL,clientId:process.env.KOHA_CLIENT_ID,clientSecret:process.env.KOHA_CLIENT_SECRET};
