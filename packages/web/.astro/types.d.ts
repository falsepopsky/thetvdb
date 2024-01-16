declare module 'astro:content' {
  interface Render {
    '.mdx': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module 'astro:content' {
  export { z } from 'astro/zod';

  type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

  export type CollectionKey = keyof AnyEntryMap;
  export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

  export type ContentCollectionKey = keyof ContentEntryMap;
  export type DataCollectionKey = keyof DataEntryMap;

  // This needs to be in sync with ImageMetadata
  export type ImageFunction = () => import('astro/zod').ZodObject<{
    src: import('astro/zod').ZodString;
    width: import('astro/zod').ZodNumber;
    height: import('astro/zod').ZodNumber;
    format: import('astro/zod').ZodUnion<
      [
        import('astro/zod').ZodLiteral<'png'>,
        import('astro/zod').ZodLiteral<'jpg'>,
        import('astro/zod').ZodLiteral<'jpeg'>,
        import('astro/zod').ZodLiteral<'tiff'>,
        import('astro/zod').ZodLiteral<'webp'>,
        import('astro/zod').ZodLiteral<'gif'>,
        import('astro/zod').ZodLiteral<'svg'>,
        import('astro/zod').ZodLiteral<'avif'>,
      ]
    >;
  }>;

  type BaseSchemaWithoutEffects =
    | import('astro/zod').AnyZodObject
    | import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
    | import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
    | import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

  type BaseSchema = BaseSchemaWithoutEffects | import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

  export type SchemaContext = { image: ImageFunction };

  type DataCollectionConfig<S extends BaseSchema> = {
    type: 'data';
    schema?: S | ((context: SchemaContext) => S);
  };

  type ContentCollectionConfig<S extends BaseSchema> = {
    type?: 'content';
    schema?: S | ((context: SchemaContext) => S);
  };

  type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

  export function defineCollection<S extends BaseSchema>(input: CollectionConfig<S>): CollectionConfig<S>;

  type AllValuesOf<T> = T extends any ? T[keyof T] : never;
  type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<ContentEntryMap[C]>['slug'];

  export function getEntryBySlug<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(
    collection: C,
    // Note that this has to accept a regular string too, for SSR
    entrySlug: E
  ): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;

  export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
    collection: C,
    entryId: E
  ): Promise<CollectionEntry<C>>;

  export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => entry is E
  ): Promise<E[]>;
  export function getCollection<C extends keyof AnyEntryMap>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => unknown
  ): Promise<CollectionEntry<C>[]>;

  export function getEntry<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(entry: {
    collection: C;
    slug: E;
  }): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C] | (string & {})>(entry: {
    collection: C;
    id: E;
  }): E extends keyof DataEntryMap[C] ? Promise<DataEntryMap[C][E]> : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(
    collection: C,
    slug: E
  ): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C] | (string & {})>(
    collection: C,
    id: E
  ): E extends keyof DataEntryMap[C] ? Promise<DataEntryMap[C][E]> : Promise<CollectionEntry<C> | undefined>;

  /** Resolve an array of entry references from the same collection */
  export function getEntries<C extends keyof ContentEntryMap>(
    entries: {
      collection: C;
      slug: ValidContentEntrySlug<C>;
    }[]
  ): Promise<CollectionEntry<C>[]>;
  export function getEntries<C extends keyof DataEntryMap>(
    entries: {
      collection: C;
      id: keyof DataEntryMap[C];
    }[]
  ): Promise<CollectionEntry<C>[]>;

  export function reference<C extends keyof AnyEntryMap>(
    collection: C
  ): import('astro/zod').ZodEffects<
    import('astro/zod').ZodString,
    C extends keyof ContentEntryMap
      ? {
          collection: C;
          slug: ValidContentEntrySlug<C>;
        }
      : {
          collection: C;
          id: keyof DataEntryMap[C];
        }
  >;
  // Allow generic `string` to avoid excessive type errors in the config
  // if `dev` is not running to update as you edit.
  // Invalid collection names will be caught at build time.
  export function reference<C extends string>(
    collection: C
  ): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

  type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
  type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
    ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
  >;

  type ContentEntryMap = {
    docs: {
      'api/artwork/byid.mdx': {
        id: 'api/artwork/byid.mdx';
        slug: 'api/artwork/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/artwork/byidextended.mdx': {
        id: 'api/artwork/byidextended.mdx';
        slug: 'api/artwork/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/artwork/statuses.mdx': {
        id: 'api/artwork/statuses.mdx';
        slug: 'api/artwork/statuses';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/artwork/types.mdx': {
        id: 'api/artwork/types.mdx';
        slug: 'api/artwork/types';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/awards/awards.mdx': {
        id: 'api/awards/awards.mdx';
        slug: 'api/awards/awards';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/awards/byid.mdx': {
        id: 'api/awards/byid.mdx';
        slug: 'api/awards/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/awards/byidextended.mdx': {
        id: 'api/awards/byidextended.mdx';
        slug: 'api/awards/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/awards/categorybyid.mdx': {
        id: 'api/awards/categorybyid.mdx';
        slug: 'api/awards/categorybyid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/awards/categorybyidextended.mdx': {
        id: 'api/awards/categorybyidextended.mdx';
        slug: 'api/awards/categorybyidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/characterbyid.mdx': {
        id: 'api/characterbyid.mdx';
        slug: 'api/characterbyid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/companies/byid.mdx': {
        id: 'api/companies/byid.mdx';
        slug: 'api/companies/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/companies/companies.mdx': {
        id: 'api/companies/companies.mdx';
        slug: 'api/companies/companies';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/companies/types.mdx': {
        id: 'api/companies/types.mdx';
        slug: 'api/companies/types';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/contentratings.mdx': {
        id: 'api/contentratings.mdx';
        slug: 'api/contentratings';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/countries.mdx': {
        id: 'api/countries.mdx';
        slug: 'api/countries';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/entities.mdx': {
        id: 'api/entities.mdx';
        slug: 'api/entities';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/episodes/byid.mdx': {
        id: 'api/episodes/byid.mdx';
        slug: 'api/episodes/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/episodes/byidextended.mdx': {
        id: 'api/episodes/byidextended.mdx';
        slug: 'api/episodes/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/episodes/episodes.mdx': {
        id: 'api/episodes/episodes.mdx';
        slug: 'api/episodes/episodes';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/episodes/translations.mdx': {
        id: 'api/episodes/translations.mdx';
        slug: 'api/episodes/translations';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/genders.mdx': {
        id: 'api/genders.mdx';
        slug: 'api/genders';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/genres/byid.mdx': {
        id: 'api/genres/byid.mdx';
        slug: 'api/genres/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/genres/genres.mdx': {
        id: 'api/genres/genres.mdx';
        slug: 'api/genres/genres';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/index.mdx': {
        id: 'api/index.mdx';
        slug: 'api';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/inspirationtypes.mdx': {
        id: 'api/inspirationtypes.mdx';
        slug: 'api/inspirationtypes';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/languages.mdx': {
        id: 'api/languages.mdx';
        slug: 'api/languages';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/lists/byid.mdx': {
        id: 'api/lists/byid.mdx';
        slug: 'api/lists/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/lists/byidextended.mdx': {
        id: 'api/lists/byidextended.mdx';
        slug: 'api/lists/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/lists/lists.mdx': {
        id: 'api/lists/lists.mdx';
        slug: 'api/lists/lists';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/lists/slug.mdx': {
        id: 'api/lists/slug.mdx';
        slug: 'api/lists/slug';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/lists/translations.mdx': {
        id: 'api/lists/translations.mdx';
        slug: 'api/lists/translations';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/byid.mdx': {
        id: 'api/movies/byid.mdx';
        slug: 'api/movies/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/byidextended.mdx': {
        id: 'api/movies/byidextended.mdx';
        slug: 'api/movies/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/filter.mdx': {
        id: 'api/movies/filter.mdx';
        slug: 'api/movies/filter';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/movies.mdx': {
        id: 'api/movies/movies.mdx';
        slug: 'api/movies/movies';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/slug.mdx': {
        id: 'api/movies/slug.mdx';
        slug: 'api/movies/slug';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/statuses.mdx': {
        id: 'api/movies/statuses.mdx';
        slug: 'api/movies/statuses';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/movies/translations.mdx': {
        id: 'api/movies/translations.mdx';
        slug: 'api/movies/translations';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/people/byid.mdx': {
        id: 'api/people/byid.mdx';
        slug: 'api/people/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/people/byidextended.mdx': {
        id: 'api/people/byidextended.mdx';
        slug: 'api/people/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/people/people.mdx': {
        id: 'api/people/people.mdx';
        slug: 'api/people/people';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/people/translations.mdx': {
        id: 'api/people/translations.mdx';
        slug: 'api/people/translations';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/people/types.mdx': {
        id: 'api/people/types.mdx';
        slug: 'api/people/types';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/search/remote.mdx': {
        id: 'api/search/remote.mdx';
        slug: 'api/search/remote';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/search/search.mdx': {
        id: 'api/search/search.mdx';
        slug: 'api/search/search';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/seasons/byid.mdx': {
        id: 'api/seasons/byid.mdx';
        slug: 'api/seasons/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/seasons/byidextended.mdx': {
        id: 'api/seasons/byidextended.mdx';
        slug: 'api/seasons/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/seasons/seasons.mdx': {
        id: 'api/seasons/seasons.mdx';
        slug: 'api/seasons/seasons';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/seasons/translations.mdx': {
        id: 'api/seasons/translations.mdx';
        slug: 'api/seasons/translations';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/seasons/types.mdx': {
        id: 'api/seasons/types.mdx';
        slug: 'api/seasons/types';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/byid.mdx': {
        id: 'api/series/byid.mdx';
        slug: 'api/series/byid';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/byidartworks.mdx': {
        id: 'api/series/byidartworks.mdx';
        slug: 'api/series/byidartworks';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/byidextended.mdx': {
        id: 'api/series/byidextended.mdx';
        slug: 'api/series/byidextended';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/byidnextaired.mdx': {
        id: 'api/series/byidnextaired.mdx';
        slug: 'api/series/byidnextaired';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/episodes.mdx': {
        id: 'api/series/episodes.mdx';
        slug: 'api/series/episodes';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/episodeslanguage.mdx': {
        id: 'api/series/episodeslanguage.mdx';
        slug: 'api/series/episodeslanguage';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/filter.mdx': {
        id: 'api/series/filter.mdx';
        slug: 'api/series/filter';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/series.mdx': {
        id: 'api/series/series.mdx';
        slug: 'api/series/series';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/slug.mdx': {
        id: 'api/series/slug.mdx';
        slug: 'api/series/slug';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/statuses.mdx': {
        id: 'api/series/statuses.mdx';
        slug: 'api/series/statuses';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/series/translations.mdx': {
        id: 'api/series/translations.mdx';
        slug: 'api/series/translations';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/sourcestypes.mdx': {
        id: 'api/sourcestypes.mdx';
        slug: 'api/sourcestypes';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'api/updates.mdx': {
        id: 'api/updates.mdx';
        slug: 'api/updates';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'guides/examples.mdx': {
        id: 'guides/examples.mdx';
        slug: 'guides/examples';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'guides/faq.mdx': {
        id: 'guides/faq.mdx';
        slug: 'guides/faq';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'guides/getting-started.mdx': {
        id: 'guides/getting-started.mdx';
        slug: 'guides/getting-started';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'guides/prerequisites.mdx': {
        id: 'guides/prerequisites.mdx';
        slug: 'guides/prerequisites';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'guides/supported-endpoints.mdx': {
        id: 'guides/supported-endpoints.mdx';
        slug: 'guides/supported-endpoints';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'index.mdx': {
        id: 'index.mdx';
        slug: 'index';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
    };
  };

  type DataEntryMap = {};

  type AnyEntryMap = ContentEntryMap & DataEntryMap;

  type ContentConfig = typeof import('../src/content/config');
}
