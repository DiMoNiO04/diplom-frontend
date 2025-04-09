import { API_URL } from '@/utils/consts';

const REVALIDATE_HOUR_TIME: number = 3600;

const API_PRIVACY_POLICY: string = `${API_URL}/privacy-policy?populate[seo][populate]=*`;

export { API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME };
