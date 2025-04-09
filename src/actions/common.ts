const API_URL: string = `${process.env.NEXT_PUBLIC_API_URL}/api`;
const API_PRIVACY_POLICY: string = `${API_URL}/privacy-policy?populate=*`;

const REVALIDATE_HOUR_TIME: number = 3600;

export { API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME };
