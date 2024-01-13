import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/inspiration/types
const iTypes = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Historical Event',
      description:
        'Do not enter fictional events. Only actual historical events are allowed. Take a broad approach when selecting an event. For example, Flags of Our Fathers should reference <a href="https://en.wikipedia.org/wiki/World_War_II">World War II</a> instead of <a href="https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima">Raising the Flag On Iwo Jima</a>.',
      reference_name: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/',
    },
    {
      id: 2,
      name: 'Book Series',
      description: 'Enter both the book series and individual book if available.',
      reference_name: 'Goodreads',
      url: 'https://www.goodreads.com/series/',
    },
    {
      id: 3,
      name: 'Book',
      description: 'Enter both the book series and individual book if available.',
      reference_name: 'Goodreads',
      url: 'https://www.goodreads.com/book/show/',
    },
    {
      id: 4,
      name: 'Historical Person or Group',
      description: 'Do not enter fictional people or groups. Groups can include things like bands or sports teams.',
      reference_name: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/',
    },
    {
      id: 5,
      name: 'Comic Book Series',
      description: 'Enter the comic series this is based on, not the individual issue.',
      reference_name: 'Grand Comics Database',
      url: 'https://www.comics.org/series/',
    },
  ],
};

export function inspirationPaths(): HttpResponse {
  return HttpResponse.json(iTypes);
}
