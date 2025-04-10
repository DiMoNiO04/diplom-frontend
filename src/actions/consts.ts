import { API_URL } from '@/utils/consts';

const REVALIDATE_HOUR_TIME: number = 3600;

const API_PRIVACY_POLICY: string = `${API_URL}/privacy-policy-page`;
const API_ABOUT_PAGE: string = `${API_URL}/about-page`;

export { API_ABOUT_PAGE, API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME };
