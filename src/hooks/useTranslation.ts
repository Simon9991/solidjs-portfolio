import { createResource } from 'solid-js';
import * as i18n from '@solid-primitives/i18n';
import { useLanguageSelect } from '../components/Stores/LanguageSelectSignal';
import type { Dictionary } from '../App';

async function fetchDictionary(locale: string): Promise<Dictionary> {
    const dict = (await import(`../i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict) as Dictionary;
}

export function useTranslation() {
    const { language } = useLanguageSelect();
    const [dict] = createResource(language, fetchDictionary);

    const t = i18n.translator(dict);

    return { t, language };
}
