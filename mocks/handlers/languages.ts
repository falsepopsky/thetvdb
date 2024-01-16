import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/languages
const languages = {
  status: 'success',
  data: [
    {
      id: 'aar',
      name: 'Afar',
      nativeName: 'Afaraf',
      shortCode: null,
    },
    {
      id: 'abk',
      name: 'Abkhaz',
      nativeName: 'аҧсуа бызшәа',
      shortCode: null,
    },
  ],
};

export function languagesPaths(): HttpResponse {
  return HttpResponse.json(languages);
}
