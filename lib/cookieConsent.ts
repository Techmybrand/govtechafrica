export type ConsentCategories = {
  analytics: boolean;
  performance: boolean;
  advertising: boolean;
};

const CONSENT_KEY = 'cookieConsent';

export const getConsent = (): ConsentCategories => {
    if (typeof window === 'undefined') return { analytics: false, performance: false, advertising: false };
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) return { analytics: false, performance: false, advertising: false };
    try {
        return JSON.parse(saved);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.log('e', e);
        return { analytics: false, performance: false, advertising: false };
    }
};

export const saveConsent = (consent: ConsentCategories) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
        ...consent,
        necessary: true,
        timestamp: new Date().toISOString()
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    if (gtag) {
        gtag('consent', 'update', {
            analytics_storage: consent.analytics ? 'granted' : 'denied',
            functionality_storage: consent.performance ? 'granted' : 'denied',
            ad_storage: consent.advertising ? 'granted' : 'denied',
            ad_user_data: consent.advertising ? 'granted' : 'denied',
            ad_personalization: consent.advertising ? 'granted' : 'denied',
        });
    }
};

export const hasConsent = () => !!localStorage.getItem(CONSENT_KEY);