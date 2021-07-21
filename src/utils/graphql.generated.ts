export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns all children nodes filtered by type SitemapYaml */
  childrenSitemapYaml?: Maybe<Array<Maybe<SitemapYaml>>>;
  /** Returns the first child node of type SitemapYaml or null if there are no children of given type on this node */
  childSitemapYaml?: Maybe<SitemapYaml>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata: SiteSiteMetadata;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MdxSource */
  childrenMdxSource?: Maybe<Array<Maybe<MdxSource>>>;
  /** Returns the first child node of type MdxSource or null if there are no children of given type on this node */
  childMdxSource?: Maybe<MdxSource>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  siteUrl: Scalars['String'];
  lang?: Maybe<Scalars['String']>;
  logo?: Maybe<File>;
  disclaimer?: Maybe<Mdx>;
  authorDetails?: Maybe<SiteSiteMetadataAuthorDetails>;
  sidebar?: Maybe<SiteSiteMetadataSidebar>;
  twitter?: Maybe<SiteSiteMetadataTwitter>;
  timezone?: Maybe<Scalars['String']>;
  facebook?: Maybe<SiteSiteMetadataFacebook>;
  social?: Maybe<SiteSiteMetadataSocial>;
  googleGtag?: Maybe<Scalars['String']>;
  disqusShortname?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFacebook = {
  appId?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  admins?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocial = {
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  tag?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
  lastModified?: Maybe<Scalars['Date']>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousPageIndex?: Maybe<Scalars['Int']>;
  nextPageIndex?: Maybe<Scalars['Int']>;
  frontmatter?: Maybe<SitePageContextFrontmatter>;
};

export type SitePageContextFrontmatter = {
  layout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  author?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  dsq_thread_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  fb_author_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sharing_disabled?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MdxFrontmatter = {
  title?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['Date']>;
  dateFormatted?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
  last_modified_at?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  layout?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  sharing_disabled?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fb_author_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dsq_thread_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  permalink?: Maybe<Scalars['String']>;
  fb_fan_page_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>;
  instant_articles_submission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  instant_articles_force_submit?: Maybe<Array<Maybe<Scalars['String']>>>;
  dsq_needs_sync?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MdxFrontmatterDateFormattedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  fields?: Maybe<MdxFields>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxFields = {
  slug?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorDetails = {
  picture?: Maybe<File>;
  biography?: Maybe<Mdx>;
  email?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSidebar = {
  logos?: Maybe<Array<Maybe<SiteSiteMetadataSidebarLogos>>>;
};

export type SiteSiteMetadataTwitter = {
  username: Scalars['String'];
};

export type SiteSiteMetadataSidebarLogos = {
  image: File;
  title: Scalars['String'];
};

export type SitemapYaml = Node & {
  sub?: Maybe<Array<Maybe<SitemapYamlSub>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  minimap?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitemapYamlSub = {
  sub?: Maybe<Array<Maybe<SitemapYamlSub>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MdxSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  allowList?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  generator?: Maybe<Scalars['String']>;
  rss?: Maybe<Scalars['Boolean']>;
  json?: Maybe<Scalars['Boolean']>;
  siteQuery?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  query?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  stages?: Maybe<Array<Maybe<Scalars['String']>>>;
  options?: Maybe<SitePluginPluginOptionsOptions>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeeds = {
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsOptions = {
  emitWarning?: Maybe<Scalars['Boolean']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
  _manifest_webmanifest?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  sitemapYaml?: Maybe<SitemapYaml>;
  allSitemapYaml: SitemapYamlConnection;
  mdxSource?: Maybe<MdxSource>;
  allMdxSource: MdxSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenSitemapYaml?: Maybe<SitemapYamlFilterListInput>;
  childSitemapYaml?: Maybe<SitemapYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  childrenMdxSource?: Maybe<MdxSourceFilterListInput>;
  childMdxSource?: Maybe<MdxSourceFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitemapYamlArgs = {
  sub?: Maybe<SitemapYamlSubFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  minimap?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitemapYamlArgs = {
  filter?: Maybe<SitemapYamlFilterInput>;
  sort?: Maybe<SitemapYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllMdxSourceArgs = {
  filter?: Maybe<MdxSourceFilterInput>;
  sort?: Maybe<MdxSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateFormatted?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  last_modified_at?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  sharing_disabled?: Maybe<IntQueryOperatorInput>;
  fb_author_post_id?: Maybe<FloatQueryOperatorInput>;
  dsq_thread_id?: Maybe<StringQueryOperatorInput>;
  permalink?: Maybe<StringQueryOperatorInput>;
  fb_fan_page_post_id?: Maybe<FloatQueryOperatorInput>;
  instant_articles_submission_id?: Maybe<StringQueryOperatorInput>;
  instant_articles_force_submit?: Maybe<StringQueryOperatorInput>;
  dsq_needs_sync?: Maybe<StringQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenSitemapYaml?: Maybe<SitemapYamlFilterListInput>;
  childSitemapYaml?: Maybe<SitemapYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitemapYamlFilterListInput = {
  elemMatch?: Maybe<SitemapYamlFilterInput>;
};

export type SitemapYamlFilterInput = {
  sub?: Maybe<SitemapYamlSubFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  minimap?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitemapYamlSubFilterListInput = {
  elemMatch?: Maybe<SitemapYamlSubFilterInput>;
};

export type SitemapYamlSubFilterInput = {
  sub?: Maybe<SitemapYamlSubFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___categories'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___dateFormatted'
  | 'childrenMdx___frontmatter___image___sourceInstanceName'
  | 'childrenMdx___frontmatter___image___absolutePath'
  | 'childrenMdx___frontmatter___image___relativePath'
  | 'childrenMdx___frontmatter___image___extension'
  | 'childrenMdx___frontmatter___image___size'
  | 'childrenMdx___frontmatter___image___prettySize'
  | 'childrenMdx___frontmatter___image___modifiedTime'
  | 'childrenMdx___frontmatter___image___accessTime'
  | 'childrenMdx___frontmatter___image___changeTime'
  | 'childrenMdx___frontmatter___image___birthTime'
  | 'childrenMdx___frontmatter___image___root'
  | 'childrenMdx___frontmatter___image___dir'
  | 'childrenMdx___frontmatter___image___base'
  | 'childrenMdx___frontmatter___image___ext'
  | 'childrenMdx___frontmatter___image___name'
  | 'childrenMdx___frontmatter___image___relativeDirectory'
  | 'childrenMdx___frontmatter___image___dev'
  | 'childrenMdx___frontmatter___image___mode'
  | 'childrenMdx___frontmatter___image___nlink'
  | 'childrenMdx___frontmatter___image___uid'
  | 'childrenMdx___frontmatter___image___gid'
  | 'childrenMdx___frontmatter___image___rdev'
  | 'childrenMdx___frontmatter___image___ino'
  | 'childrenMdx___frontmatter___image___atimeMs'
  | 'childrenMdx___frontmatter___image___mtimeMs'
  | 'childrenMdx___frontmatter___image___ctimeMs'
  | 'childrenMdx___frontmatter___image___atime'
  | 'childrenMdx___frontmatter___image___mtime'
  | 'childrenMdx___frontmatter___image___ctime'
  | 'childrenMdx___frontmatter___image___birthtime'
  | 'childrenMdx___frontmatter___image___birthtimeMs'
  | 'childrenMdx___frontmatter___image___blksize'
  | 'childrenMdx___frontmatter___image___blocks'
  | 'childrenMdx___frontmatter___image___publicURL'
  | 'childrenMdx___frontmatter___image___childrenImageSharp'
  | 'childrenMdx___frontmatter___image___childrenMdx'
  | 'childrenMdx___frontmatter___image___childrenSitemapYaml'
  | 'childrenMdx___frontmatter___image___id'
  | 'childrenMdx___frontmatter___image___children'
  | 'childrenMdx___frontmatter___last_modified_at'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___layout'
  | 'childrenMdx___frontmatter___id'
  | 'childrenMdx___frontmatter___author'
  | 'childrenMdx___frontmatter___guid'
  | 'childrenMdx___frontmatter___sharing_disabled'
  | 'childrenMdx___frontmatter___fb_author_post_id'
  | 'childrenMdx___frontmatter___dsq_thread_id'
  | 'childrenMdx___frontmatter___permalink'
  | 'childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___categories'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___dateFormatted'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___childrenImageSharp'
  | 'childMdx___frontmatter___image___childrenMdx'
  | 'childMdx___frontmatter___image___childrenSitemapYaml'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___last_modified_at'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___id'
  | 'childMdx___frontmatter___author'
  | 'childMdx___frontmatter___guid'
  | 'childMdx___frontmatter___sharing_disabled'
  | 'childMdx___frontmatter___fb_author_post_id'
  | 'childMdx___frontmatter___dsq_thread_id'
  | 'childMdx___frontmatter___permalink'
  | 'childMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdx___frontmatter___instant_articles_submission_id'
  | 'childMdx___frontmatter___instant_articles_force_submit'
  | 'childMdx___frontmatter___dsq_needs_sync'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___fields___slug'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childrenSitemapYaml'
  | 'childrenSitemapYaml___sub'
  | 'childrenSitemapYaml___sub___sub'
  | 'childrenSitemapYaml___sub___sub___sub'
  | 'childrenSitemapYaml___sub___sub___title'
  | 'childrenSitemapYaml___sub___sub___url'
  | 'childrenSitemapYaml___sub___title'
  | 'childrenSitemapYaml___sub___url'
  | 'childrenSitemapYaml___title'
  | 'childrenSitemapYaml___url'
  | 'childrenSitemapYaml___minimap'
  | 'childrenSitemapYaml___id'
  | 'childrenSitemapYaml___parent___id'
  | 'childrenSitemapYaml___parent___parent___id'
  | 'childrenSitemapYaml___parent___parent___children'
  | 'childrenSitemapYaml___parent___children'
  | 'childrenSitemapYaml___parent___children___id'
  | 'childrenSitemapYaml___parent___children___children'
  | 'childrenSitemapYaml___parent___internal___content'
  | 'childrenSitemapYaml___parent___internal___contentDigest'
  | 'childrenSitemapYaml___parent___internal___description'
  | 'childrenSitemapYaml___parent___internal___fieldOwners'
  | 'childrenSitemapYaml___parent___internal___ignoreType'
  | 'childrenSitemapYaml___parent___internal___mediaType'
  | 'childrenSitemapYaml___parent___internal___owner'
  | 'childrenSitemapYaml___parent___internal___type'
  | 'childrenSitemapYaml___children'
  | 'childrenSitemapYaml___children___id'
  | 'childrenSitemapYaml___children___parent___id'
  | 'childrenSitemapYaml___children___parent___children'
  | 'childrenSitemapYaml___children___children'
  | 'childrenSitemapYaml___children___children___id'
  | 'childrenSitemapYaml___children___children___children'
  | 'childrenSitemapYaml___children___internal___content'
  | 'childrenSitemapYaml___children___internal___contentDigest'
  | 'childrenSitemapYaml___children___internal___description'
  | 'childrenSitemapYaml___children___internal___fieldOwners'
  | 'childrenSitemapYaml___children___internal___ignoreType'
  | 'childrenSitemapYaml___children___internal___mediaType'
  | 'childrenSitemapYaml___children___internal___owner'
  | 'childrenSitemapYaml___children___internal___type'
  | 'childrenSitemapYaml___internal___content'
  | 'childrenSitemapYaml___internal___contentDigest'
  | 'childrenSitemapYaml___internal___description'
  | 'childrenSitemapYaml___internal___fieldOwners'
  | 'childrenSitemapYaml___internal___ignoreType'
  | 'childrenSitemapYaml___internal___mediaType'
  | 'childrenSitemapYaml___internal___owner'
  | 'childrenSitemapYaml___internal___type'
  | 'childSitemapYaml___sub'
  | 'childSitemapYaml___sub___sub'
  | 'childSitemapYaml___sub___sub___sub'
  | 'childSitemapYaml___sub___sub___title'
  | 'childSitemapYaml___sub___sub___url'
  | 'childSitemapYaml___sub___title'
  | 'childSitemapYaml___sub___url'
  | 'childSitemapYaml___title'
  | 'childSitemapYaml___url'
  | 'childSitemapYaml___minimap'
  | 'childSitemapYaml___id'
  | 'childSitemapYaml___parent___id'
  | 'childSitemapYaml___parent___parent___id'
  | 'childSitemapYaml___parent___parent___children'
  | 'childSitemapYaml___parent___children'
  | 'childSitemapYaml___parent___children___id'
  | 'childSitemapYaml___parent___children___children'
  | 'childSitemapYaml___parent___internal___content'
  | 'childSitemapYaml___parent___internal___contentDigest'
  | 'childSitemapYaml___parent___internal___description'
  | 'childSitemapYaml___parent___internal___fieldOwners'
  | 'childSitemapYaml___parent___internal___ignoreType'
  | 'childSitemapYaml___parent___internal___mediaType'
  | 'childSitemapYaml___parent___internal___owner'
  | 'childSitemapYaml___parent___internal___type'
  | 'childSitemapYaml___children'
  | 'childSitemapYaml___children___id'
  | 'childSitemapYaml___children___parent___id'
  | 'childSitemapYaml___children___parent___children'
  | 'childSitemapYaml___children___children'
  | 'childSitemapYaml___children___children___id'
  | 'childSitemapYaml___children___children___children'
  | 'childSitemapYaml___children___internal___content'
  | 'childSitemapYaml___children___internal___contentDigest'
  | 'childSitemapYaml___children___internal___description'
  | 'childSitemapYaml___children___internal___fieldOwners'
  | 'childSitemapYaml___children___internal___ignoreType'
  | 'childSitemapYaml___children___internal___mediaType'
  | 'childSitemapYaml___children___internal___owner'
  | 'childSitemapYaml___children___internal___type'
  | 'childSitemapYaml___internal___content'
  | 'childSitemapYaml___internal___contentDigest'
  | 'childSitemapYaml___internal___description'
  | 'childSitemapYaml___internal___fieldOwners'
  | 'childSitemapYaml___internal___ignoreType'
  | 'childSitemapYaml___internal___mediaType'
  | 'childSitemapYaml___internal___owner'
  | 'childSitemapYaml___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  disclaimer?: Maybe<MdxFilterInput>;
  authorDetails?: Maybe<SiteSiteMetadataAuthorDetailsFilterInput>;
  sidebar?: Maybe<SiteSiteMetadataSidebarFilterInput>;
  twitter?: Maybe<SiteSiteMetadataTwitterFilterInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<SiteSiteMetadataFacebookFilterInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
  googleGtag?: Maybe<StringQueryOperatorInput>;
  disqusShortname?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataAuthorDetailsFilterInput = {
  picture?: Maybe<FileFilterInput>;
  biography?: Maybe<MdxFilterInput>;
  email?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSidebarFilterInput = {
  logos?: Maybe<SiteSiteMetadataSidebarLogosFilterListInput>;
};

export type SiteSiteMetadataSidebarLogosFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSidebarLogosFilterInput>;
};

export type SiteSiteMetadataSidebarLogosFilterInput = {
  image?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataTwitterFilterInput = {
  username?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFacebookFilterInput = {
  appId?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<StringQueryOperatorInput>;
  admins?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSocialFilterInput = {
  links?: Maybe<StringQueryOperatorInput>;
};

export type MdxSourceFilterListInput = {
  elemMatch?: Maybe<MdxSourceFilterInput>;
};

export type MdxSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___lang'
  | 'siteMetadata___logo___sourceInstanceName'
  | 'siteMetadata___logo___absolutePath'
  | 'siteMetadata___logo___relativePath'
  | 'siteMetadata___logo___extension'
  | 'siteMetadata___logo___size'
  | 'siteMetadata___logo___prettySize'
  | 'siteMetadata___logo___modifiedTime'
  | 'siteMetadata___logo___accessTime'
  | 'siteMetadata___logo___changeTime'
  | 'siteMetadata___logo___birthTime'
  | 'siteMetadata___logo___root'
  | 'siteMetadata___logo___dir'
  | 'siteMetadata___logo___base'
  | 'siteMetadata___logo___ext'
  | 'siteMetadata___logo___name'
  | 'siteMetadata___logo___relativeDirectory'
  | 'siteMetadata___logo___dev'
  | 'siteMetadata___logo___mode'
  | 'siteMetadata___logo___nlink'
  | 'siteMetadata___logo___uid'
  | 'siteMetadata___logo___gid'
  | 'siteMetadata___logo___rdev'
  | 'siteMetadata___logo___ino'
  | 'siteMetadata___logo___atimeMs'
  | 'siteMetadata___logo___mtimeMs'
  | 'siteMetadata___logo___ctimeMs'
  | 'siteMetadata___logo___atime'
  | 'siteMetadata___logo___mtime'
  | 'siteMetadata___logo___ctime'
  | 'siteMetadata___logo___birthtime'
  | 'siteMetadata___logo___birthtimeMs'
  | 'siteMetadata___logo___blksize'
  | 'siteMetadata___logo___blocks'
  | 'siteMetadata___logo___publicURL'
  | 'siteMetadata___logo___childrenImageSharp'
  | 'siteMetadata___logo___childrenImageSharp___gatsbyImageData'
  | 'siteMetadata___logo___childrenImageSharp___id'
  | 'siteMetadata___logo___childrenImageSharp___children'
  | 'siteMetadata___logo___childImageSharp___gatsbyImageData'
  | 'siteMetadata___logo___childImageSharp___id'
  | 'siteMetadata___logo___childImageSharp___children'
  | 'siteMetadata___logo___childrenMdx'
  | 'siteMetadata___logo___childrenMdx___rawBody'
  | 'siteMetadata___logo___childrenMdx___fileAbsolutePath'
  | 'siteMetadata___logo___childrenMdx___slug'
  | 'siteMetadata___logo___childrenMdx___body'
  | 'siteMetadata___logo___childrenMdx___excerpt'
  | 'siteMetadata___logo___childrenMdx___headings'
  | 'siteMetadata___logo___childrenMdx___html'
  | 'siteMetadata___logo___childrenMdx___mdxAST'
  | 'siteMetadata___logo___childrenMdx___tableOfContents'
  | 'siteMetadata___logo___childrenMdx___timeToRead'
  | 'siteMetadata___logo___childrenMdx___id'
  | 'siteMetadata___logo___childrenMdx___children'
  | 'siteMetadata___logo___childMdx___rawBody'
  | 'siteMetadata___logo___childMdx___fileAbsolutePath'
  | 'siteMetadata___logo___childMdx___slug'
  | 'siteMetadata___logo___childMdx___body'
  | 'siteMetadata___logo___childMdx___excerpt'
  | 'siteMetadata___logo___childMdx___headings'
  | 'siteMetadata___logo___childMdx___html'
  | 'siteMetadata___logo___childMdx___mdxAST'
  | 'siteMetadata___logo___childMdx___tableOfContents'
  | 'siteMetadata___logo___childMdx___timeToRead'
  | 'siteMetadata___logo___childMdx___id'
  | 'siteMetadata___logo___childMdx___children'
  | 'siteMetadata___logo___childrenSitemapYaml'
  | 'siteMetadata___logo___childrenSitemapYaml___sub'
  | 'siteMetadata___logo___childrenSitemapYaml___title'
  | 'siteMetadata___logo___childrenSitemapYaml___url'
  | 'siteMetadata___logo___childrenSitemapYaml___minimap'
  | 'siteMetadata___logo___childrenSitemapYaml___id'
  | 'siteMetadata___logo___childrenSitemapYaml___children'
  | 'siteMetadata___logo___childSitemapYaml___sub'
  | 'siteMetadata___logo___childSitemapYaml___title'
  | 'siteMetadata___logo___childSitemapYaml___url'
  | 'siteMetadata___logo___childSitemapYaml___minimap'
  | 'siteMetadata___logo___childSitemapYaml___id'
  | 'siteMetadata___logo___childSitemapYaml___children'
  | 'siteMetadata___logo___id'
  | 'siteMetadata___logo___parent___id'
  | 'siteMetadata___logo___parent___children'
  | 'siteMetadata___logo___children'
  | 'siteMetadata___logo___children___id'
  | 'siteMetadata___logo___children___children'
  | 'siteMetadata___logo___internal___content'
  | 'siteMetadata___logo___internal___contentDigest'
  | 'siteMetadata___logo___internal___description'
  | 'siteMetadata___logo___internal___fieldOwners'
  | 'siteMetadata___logo___internal___ignoreType'
  | 'siteMetadata___logo___internal___mediaType'
  | 'siteMetadata___logo___internal___owner'
  | 'siteMetadata___logo___internal___type'
  | 'siteMetadata___disclaimer___rawBody'
  | 'siteMetadata___disclaimer___fileAbsolutePath'
  | 'siteMetadata___disclaimer___frontmatter___title'
  | 'siteMetadata___disclaimer___frontmatter___categories'
  | 'siteMetadata___disclaimer___frontmatter___date'
  | 'siteMetadata___disclaimer___frontmatter___dateFormatted'
  | 'siteMetadata___disclaimer___frontmatter___last_modified_at'
  | 'siteMetadata___disclaimer___frontmatter___tags'
  | 'siteMetadata___disclaimer___frontmatter___layout'
  | 'siteMetadata___disclaimer___frontmatter___id'
  | 'siteMetadata___disclaimer___frontmatter___author'
  | 'siteMetadata___disclaimer___frontmatter___guid'
  | 'siteMetadata___disclaimer___frontmatter___sharing_disabled'
  | 'siteMetadata___disclaimer___frontmatter___fb_author_post_id'
  | 'siteMetadata___disclaimer___frontmatter___dsq_thread_id'
  | 'siteMetadata___disclaimer___frontmatter___permalink'
  | 'siteMetadata___disclaimer___frontmatter___fb_fan_page_post_id'
  | 'siteMetadata___disclaimer___frontmatter___instant_articles_submission_id'
  | 'siteMetadata___disclaimer___frontmatter___instant_articles_force_submit'
  | 'siteMetadata___disclaimer___frontmatter___dsq_needs_sync'
  | 'siteMetadata___disclaimer___slug'
  | 'siteMetadata___disclaimer___body'
  | 'siteMetadata___disclaimer___excerpt'
  | 'siteMetadata___disclaimer___headings'
  | 'siteMetadata___disclaimer___headings___value'
  | 'siteMetadata___disclaimer___headings___depth'
  | 'siteMetadata___disclaimer___html'
  | 'siteMetadata___disclaimer___mdxAST'
  | 'siteMetadata___disclaimer___tableOfContents'
  | 'siteMetadata___disclaimer___timeToRead'
  | 'siteMetadata___disclaimer___wordCount___paragraphs'
  | 'siteMetadata___disclaimer___wordCount___sentences'
  | 'siteMetadata___disclaimer___wordCount___words'
  | 'siteMetadata___disclaimer___fields___slug'
  | 'siteMetadata___disclaimer___id'
  | 'siteMetadata___disclaimer___parent___id'
  | 'siteMetadata___disclaimer___parent___children'
  | 'siteMetadata___disclaimer___children'
  | 'siteMetadata___disclaimer___children___id'
  | 'siteMetadata___disclaimer___children___children'
  | 'siteMetadata___disclaimer___internal___content'
  | 'siteMetadata___disclaimer___internal___contentDigest'
  | 'siteMetadata___disclaimer___internal___description'
  | 'siteMetadata___disclaimer___internal___fieldOwners'
  | 'siteMetadata___disclaimer___internal___ignoreType'
  | 'siteMetadata___disclaimer___internal___mediaType'
  | 'siteMetadata___disclaimer___internal___owner'
  | 'siteMetadata___disclaimer___internal___type'
  | 'siteMetadata___authorDetails___picture___sourceInstanceName'
  | 'siteMetadata___authorDetails___picture___absolutePath'
  | 'siteMetadata___authorDetails___picture___relativePath'
  | 'siteMetadata___authorDetails___picture___extension'
  | 'siteMetadata___authorDetails___picture___size'
  | 'siteMetadata___authorDetails___picture___prettySize'
  | 'siteMetadata___authorDetails___picture___modifiedTime'
  | 'siteMetadata___authorDetails___picture___accessTime'
  | 'siteMetadata___authorDetails___picture___changeTime'
  | 'siteMetadata___authorDetails___picture___birthTime'
  | 'siteMetadata___authorDetails___picture___root'
  | 'siteMetadata___authorDetails___picture___dir'
  | 'siteMetadata___authorDetails___picture___base'
  | 'siteMetadata___authorDetails___picture___ext'
  | 'siteMetadata___authorDetails___picture___name'
  | 'siteMetadata___authorDetails___picture___relativeDirectory'
  | 'siteMetadata___authorDetails___picture___dev'
  | 'siteMetadata___authorDetails___picture___mode'
  | 'siteMetadata___authorDetails___picture___nlink'
  | 'siteMetadata___authorDetails___picture___uid'
  | 'siteMetadata___authorDetails___picture___gid'
  | 'siteMetadata___authorDetails___picture___rdev'
  | 'siteMetadata___authorDetails___picture___ino'
  | 'siteMetadata___authorDetails___picture___atimeMs'
  | 'siteMetadata___authorDetails___picture___mtimeMs'
  | 'siteMetadata___authorDetails___picture___ctimeMs'
  | 'siteMetadata___authorDetails___picture___atime'
  | 'siteMetadata___authorDetails___picture___mtime'
  | 'siteMetadata___authorDetails___picture___ctime'
  | 'siteMetadata___authorDetails___picture___birthtime'
  | 'siteMetadata___authorDetails___picture___birthtimeMs'
  | 'siteMetadata___authorDetails___picture___blksize'
  | 'siteMetadata___authorDetails___picture___blocks'
  | 'siteMetadata___authorDetails___picture___publicURL'
  | 'siteMetadata___authorDetails___picture___childrenImageSharp'
  | 'siteMetadata___authorDetails___picture___childrenMdx'
  | 'siteMetadata___authorDetails___picture___childrenSitemapYaml'
  | 'siteMetadata___authorDetails___picture___id'
  | 'siteMetadata___authorDetails___picture___children'
  | 'siteMetadata___authorDetails___biography___rawBody'
  | 'siteMetadata___authorDetails___biography___fileAbsolutePath'
  | 'siteMetadata___authorDetails___biography___slug'
  | 'siteMetadata___authorDetails___biography___body'
  | 'siteMetadata___authorDetails___biography___excerpt'
  | 'siteMetadata___authorDetails___biography___headings'
  | 'siteMetadata___authorDetails___biography___html'
  | 'siteMetadata___authorDetails___biography___mdxAST'
  | 'siteMetadata___authorDetails___biography___tableOfContents'
  | 'siteMetadata___authorDetails___biography___timeToRead'
  | 'siteMetadata___authorDetails___biography___id'
  | 'siteMetadata___authorDetails___biography___children'
  | 'siteMetadata___authorDetails___email'
  | 'siteMetadata___authorDetails___uri'
  | 'siteMetadata___authorDetails___twitter'
  | 'siteMetadata___sidebar___logos'
  | 'siteMetadata___sidebar___logos___title'
  | 'siteMetadata___twitter___username'
  | 'siteMetadata___timezone'
  | 'siteMetadata___facebook___appId'
  | 'siteMetadata___facebook___publisher'
  | 'siteMetadata___facebook___admins'
  | 'siteMetadata___social___links'
  | 'siteMetadata___googleGtag'
  | 'siteMetadata___disqusShortname'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'childrenMdxSource'
  | 'childrenMdxSource___id'
  | 'childrenMdxSource___parent___id'
  | 'childrenMdxSource___parent___parent___id'
  | 'childrenMdxSource___parent___parent___children'
  | 'childrenMdxSource___parent___children'
  | 'childrenMdxSource___parent___children___id'
  | 'childrenMdxSource___parent___children___children'
  | 'childrenMdxSource___parent___internal___content'
  | 'childrenMdxSource___parent___internal___contentDigest'
  | 'childrenMdxSource___parent___internal___description'
  | 'childrenMdxSource___parent___internal___fieldOwners'
  | 'childrenMdxSource___parent___internal___ignoreType'
  | 'childrenMdxSource___parent___internal___mediaType'
  | 'childrenMdxSource___parent___internal___owner'
  | 'childrenMdxSource___parent___internal___type'
  | 'childrenMdxSource___children'
  | 'childrenMdxSource___children___id'
  | 'childrenMdxSource___children___parent___id'
  | 'childrenMdxSource___children___parent___children'
  | 'childrenMdxSource___children___children'
  | 'childrenMdxSource___children___children___id'
  | 'childrenMdxSource___children___children___children'
  | 'childrenMdxSource___children___internal___content'
  | 'childrenMdxSource___children___internal___contentDigest'
  | 'childrenMdxSource___children___internal___description'
  | 'childrenMdxSource___children___internal___fieldOwners'
  | 'childrenMdxSource___children___internal___ignoreType'
  | 'childrenMdxSource___children___internal___mediaType'
  | 'childrenMdxSource___children___internal___owner'
  | 'childrenMdxSource___children___internal___type'
  | 'childrenMdxSource___internal___content'
  | 'childrenMdxSource___internal___contentDigest'
  | 'childrenMdxSource___internal___description'
  | 'childrenMdxSource___internal___fieldOwners'
  | 'childrenMdxSource___internal___ignoreType'
  | 'childrenMdxSource___internal___mediaType'
  | 'childrenMdxSource___internal___owner'
  | 'childrenMdxSource___internal___type'
  | 'childrenMdxSource___childrenMdx'
  | 'childrenMdxSource___childrenMdx___rawBody'
  | 'childrenMdxSource___childrenMdx___fileAbsolutePath'
  | 'childrenMdxSource___childrenMdx___frontmatter___title'
  | 'childrenMdxSource___childrenMdx___frontmatter___categories'
  | 'childrenMdxSource___childrenMdx___frontmatter___date'
  | 'childrenMdxSource___childrenMdx___frontmatter___dateFormatted'
  | 'childrenMdxSource___childrenMdx___frontmatter___last_modified_at'
  | 'childrenMdxSource___childrenMdx___frontmatter___tags'
  | 'childrenMdxSource___childrenMdx___frontmatter___layout'
  | 'childrenMdxSource___childrenMdx___frontmatter___id'
  | 'childrenMdxSource___childrenMdx___frontmatter___author'
  | 'childrenMdxSource___childrenMdx___frontmatter___guid'
  | 'childrenMdxSource___childrenMdx___frontmatter___sharing_disabled'
  | 'childrenMdxSource___childrenMdx___frontmatter___fb_author_post_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___dsq_thread_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___permalink'
  | 'childrenMdxSource___childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdxSource___childrenMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdxSource___childrenMdx___slug'
  | 'childrenMdxSource___childrenMdx___body'
  | 'childrenMdxSource___childrenMdx___excerpt'
  | 'childrenMdxSource___childrenMdx___headings'
  | 'childrenMdxSource___childrenMdx___headings___value'
  | 'childrenMdxSource___childrenMdx___headings___depth'
  | 'childrenMdxSource___childrenMdx___html'
  | 'childrenMdxSource___childrenMdx___mdxAST'
  | 'childrenMdxSource___childrenMdx___tableOfContents'
  | 'childrenMdxSource___childrenMdx___timeToRead'
  | 'childrenMdxSource___childrenMdx___wordCount___paragraphs'
  | 'childrenMdxSource___childrenMdx___wordCount___sentences'
  | 'childrenMdxSource___childrenMdx___wordCount___words'
  | 'childrenMdxSource___childrenMdx___fields___slug'
  | 'childrenMdxSource___childrenMdx___id'
  | 'childrenMdxSource___childrenMdx___parent___id'
  | 'childrenMdxSource___childrenMdx___parent___children'
  | 'childrenMdxSource___childrenMdx___children'
  | 'childrenMdxSource___childrenMdx___children___id'
  | 'childrenMdxSource___childrenMdx___children___children'
  | 'childrenMdxSource___childrenMdx___internal___content'
  | 'childrenMdxSource___childrenMdx___internal___contentDigest'
  | 'childrenMdxSource___childrenMdx___internal___description'
  | 'childrenMdxSource___childrenMdx___internal___fieldOwners'
  | 'childrenMdxSource___childrenMdx___internal___ignoreType'
  | 'childrenMdxSource___childrenMdx___internal___mediaType'
  | 'childrenMdxSource___childrenMdx___internal___owner'
  | 'childrenMdxSource___childrenMdx___internal___type'
  | 'childrenMdxSource___childMdx___rawBody'
  | 'childrenMdxSource___childMdx___fileAbsolutePath'
  | 'childrenMdxSource___childMdx___frontmatter___title'
  | 'childrenMdxSource___childMdx___frontmatter___categories'
  | 'childrenMdxSource___childMdx___frontmatter___date'
  | 'childrenMdxSource___childMdx___frontmatter___dateFormatted'
  | 'childrenMdxSource___childMdx___frontmatter___last_modified_at'
  | 'childrenMdxSource___childMdx___frontmatter___tags'
  | 'childrenMdxSource___childMdx___frontmatter___layout'
  | 'childrenMdxSource___childMdx___frontmatter___id'
  | 'childrenMdxSource___childMdx___frontmatter___author'
  | 'childrenMdxSource___childMdx___frontmatter___guid'
  | 'childrenMdxSource___childMdx___frontmatter___sharing_disabled'
  | 'childrenMdxSource___childMdx___frontmatter___fb_author_post_id'
  | 'childrenMdxSource___childMdx___frontmatter___dsq_thread_id'
  | 'childrenMdxSource___childMdx___frontmatter___permalink'
  | 'childrenMdxSource___childMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdxSource___childMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdxSource___childMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdxSource___childMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdxSource___childMdx___slug'
  | 'childrenMdxSource___childMdx___body'
  | 'childrenMdxSource___childMdx___excerpt'
  | 'childrenMdxSource___childMdx___headings'
  | 'childrenMdxSource___childMdx___headings___value'
  | 'childrenMdxSource___childMdx___headings___depth'
  | 'childrenMdxSource___childMdx___html'
  | 'childrenMdxSource___childMdx___mdxAST'
  | 'childrenMdxSource___childMdx___tableOfContents'
  | 'childrenMdxSource___childMdx___timeToRead'
  | 'childrenMdxSource___childMdx___wordCount___paragraphs'
  | 'childrenMdxSource___childMdx___wordCount___sentences'
  | 'childrenMdxSource___childMdx___wordCount___words'
  | 'childrenMdxSource___childMdx___fields___slug'
  | 'childrenMdxSource___childMdx___id'
  | 'childrenMdxSource___childMdx___parent___id'
  | 'childrenMdxSource___childMdx___parent___children'
  | 'childrenMdxSource___childMdx___children'
  | 'childrenMdxSource___childMdx___children___id'
  | 'childrenMdxSource___childMdx___children___children'
  | 'childrenMdxSource___childMdx___internal___content'
  | 'childrenMdxSource___childMdx___internal___contentDigest'
  | 'childrenMdxSource___childMdx___internal___description'
  | 'childrenMdxSource___childMdx___internal___fieldOwners'
  | 'childrenMdxSource___childMdx___internal___ignoreType'
  | 'childrenMdxSource___childMdx___internal___mediaType'
  | 'childrenMdxSource___childMdx___internal___owner'
  | 'childrenMdxSource___childMdx___internal___type'
  | 'childMdxSource___id'
  | 'childMdxSource___parent___id'
  | 'childMdxSource___parent___parent___id'
  | 'childMdxSource___parent___parent___children'
  | 'childMdxSource___parent___children'
  | 'childMdxSource___parent___children___id'
  | 'childMdxSource___parent___children___children'
  | 'childMdxSource___parent___internal___content'
  | 'childMdxSource___parent___internal___contentDigest'
  | 'childMdxSource___parent___internal___description'
  | 'childMdxSource___parent___internal___fieldOwners'
  | 'childMdxSource___parent___internal___ignoreType'
  | 'childMdxSource___parent___internal___mediaType'
  | 'childMdxSource___parent___internal___owner'
  | 'childMdxSource___parent___internal___type'
  | 'childMdxSource___children'
  | 'childMdxSource___children___id'
  | 'childMdxSource___children___parent___id'
  | 'childMdxSource___children___parent___children'
  | 'childMdxSource___children___children'
  | 'childMdxSource___children___children___id'
  | 'childMdxSource___children___children___children'
  | 'childMdxSource___children___internal___content'
  | 'childMdxSource___children___internal___contentDigest'
  | 'childMdxSource___children___internal___description'
  | 'childMdxSource___children___internal___fieldOwners'
  | 'childMdxSource___children___internal___ignoreType'
  | 'childMdxSource___children___internal___mediaType'
  | 'childMdxSource___children___internal___owner'
  | 'childMdxSource___children___internal___type'
  | 'childMdxSource___internal___content'
  | 'childMdxSource___internal___contentDigest'
  | 'childMdxSource___internal___description'
  | 'childMdxSource___internal___fieldOwners'
  | 'childMdxSource___internal___ignoreType'
  | 'childMdxSource___internal___mediaType'
  | 'childMdxSource___internal___owner'
  | 'childMdxSource___internal___type'
  | 'childMdxSource___childrenMdx'
  | 'childMdxSource___childrenMdx___rawBody'
  | 'childMdxSource___childrenMdx___fileAbsolutePath'
  | 'childMdxSource___childrenMdx___frontmatter___title'
  | 'childMdxSource___childrenMdx___frontmatter___categories'
  | 'childMdxSource___childrenMdx___frontmatter___date'
  | 'childMdxSource___childrenMdx___frontmatter___dateFormatted'
  | 'childMdxSource___childrenMdx___frontmatter___last_modified_at'
  | 'childMdxSource___childrenMdx___frontmatter___tags'
  | 'childMdxSource___childrenMdx___frontmatter___layout'
  | 'childMdxSource___childrenMdx___frontmatter___id'
  | 'childMdxSource___childrenMdx___frontmatter___author'
  | 'childMdxSource___childrenMdx___frontmatter___guid'
  | 'childMdxSource___childrenMdx___frontmatter___sharing_disabled'
  | 'childMdxSource___childrenMdx___frontmatter___fb_author_post_id'
  | 'childMdxSource___childrenMdx___frontmatter___dsq_thread_id'
  | 'childMdxSource___childrenMdx___frontmatter___permalink'
  | 'childMdxSource___childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdxSource___childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childMdxSource___childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childMdxSource___childrenMdx___frontmatter___dsq_needs_sync'
  | 'childMdxSource___childrenMdx___slug'
  | 'childMdxSource___childrenMdx___body'
  | 'childMdxSource___childrenMdx___excerpt'
  | 'childMdxSource___childrenMdx___headings'
  | 'childMdxSource___childrenMdx___headings___value'
  | 'childMdxSource___childrenMdx___headings___depth'
  | 'childMdxSource___childrenMdx___html'
  | 'childMdxSource___childrenMdx___mdxAST'
  | 'childMdxSource___childrenMdx___tableOfContents'
  | 'childMdxSource___childrenMdx___timeToRead'
  | 'childMdxSource___childrenMdx___wordCount___paragraphs'
  | 'childMdxSource___childrenMdx___wordCount___sentences'
  | 'childMdxSource___childrenMdx___wordCount___words'
  | 'childMdxSource___childrenMdx___fields___slug'
  | 'childMdxSource___childrenMdx___id'
  | 'childMdxSource___childrenMdx___parent___id'
  | 'childMdxSource___childrenMdx___parent___children'
  | 'childMdxSource___childrenMdx___children'
  | 'childMdxSource___childrenMdx___children___id'
  | 'childMdxSource___childrenMdx___children___children'
  | 'childMdxSource___childrenMdx___internal___content'
  | 'childMdxSource___childrenMdx___internal___contentDigest'
  | 'childMdxSource___childrenMdx___internal___description'
  | 'childMdxSource___childrenMdx___internal___fieldOwners'
  | 'childMdxSource___childrenMdx___internal___ignoreType'
  | 'childMdxSource___childrenMdx___internal___mediaType'
  | 'childMdxSource___childrenMdx___internal___owner'
  | 'childMdxSource___childrenMdx___internal___type'
  | 'childMdxSource___childMdx___rawBody'
  | 'childMdxSource___childMdx___fileAbsolutePath'
  | 'childMdxSource___childMdx___frontmatter___title'
  | 'childMdxSource___childMdx___frontmatter___categories'
  | 'childMdxSource___childMdx___frontmatter___date'
  | 'childMdxSource___childMdx___frontmatter___dateFormatted'
  | 'childMdxSource___childMdx___frontmatter___last_modified_at'
  | 'childMdxSource___childMdx___frontmatter___tags'
  | 'childMdxSource___childMdx___frontmatter___layout'
  | 'childMdxSource___childMdx___frontmatter___id'
  | 'childMdxSource___childMdx___frontmatter___author'
  | 'childMdxSource___childMdx___frontmatter___guid'
  | 'childMdxSource___childMdx___frontmatter___sharing_disabled'
  | 'childMdxSource___childMdx___frontmatter___fb_author_post_id'
  | 'childMdxSource___childMdx___frontmatter___dsq_thread_id'
  | 'childMdxSource___childMdx___frontmatter___permalink'
  | 'childMdxSource___childMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdxSource___childMdx___frontmatter___instant_articles_submission_id'
  | 'childMdxSource___childMdx___frontmatter___instant_articles_force_submit'
  | 'childMdxSource___childMdx___frontmatter___dsq_needs_sync'
  | 'childMdxSource___childMdx___slug'
  | 'childMdxSource___childMdx___body'
  | 'childMdxSource___childMdx___excerpt'
  | 'childMdxSource___childMdx___headings'
  | 'childMdxSource___childMdx___headings___value'
  | 'childMdxSource___childMdx___headings___depth'
  | 'childMdxSource___childMdx___html'
  | 'childMdxSource___childMdx___mdxAST'
  | 'childMdxSource___childMdx___tableOfContents'
  | 'childMdxSource___childMdx___timeToRead'
  | 'childMdxSource___childMdx___wordCount___paragraphs'
  | 'childMdxSource___childMdx___wordCount___sentences'
  | 'childMdxSource___childMdx___wordCount___words'
  | 'childMdxSource___childMdx___fields___slug'
  | 'childMdxSource___childMdx___id'
  | 'childMdxSource___childMdx___parent___id'
  | 'childMdxSource___childMdx___parent___children'
  | 'childMdxSource___childMdx___children'
  | 'childMdxSource___childMdx___children___id'
  | 'childMdxSource___childMdx___children___children'
  | 'childMdxSource___childMdx___internal___content'
  | 'childMdxSource___childMdx___internal___contentDigest'
  | 'childMdxSource___childMdx___internal___description'
  | 'childMdxSource___childMdx___internal___fieldOwners'
  | 'childMdxSource___childMdx___internal___ignoreType'
  | 'childMdxSource___childMdx___internal___mediaType'
  | 'childMdxSource___childMdx___internal___owner'
  | 'childMdxSource___childMdx___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  childrenMdxSource?: Maybe<MdxSourceFilterListInput>;
  childMdxSource?: Maybe<MdxSourceFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___categories'
  | 'frontmatter___date'
  | 'frontmatter___dateFormatted'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___size'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___root'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___base'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___name'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___uid'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___childrenImageSharp'
  | 'frontmatter___image___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___image___childrenImageSharp___id'
  | 'frontmatter___image___childrenImageSharp___children'
  | 'frontmatter___image___childImageSharp___gatsbyImageData'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___childrenMdx'
  | 'frontmatter___image___childrenMdx___rawBody'
  | 'frontmatter___image___childrenMdx___fileAbsolutePath'
  | 'frontmatter___image___childrenMdx___slug'
  | 'frontmatter___image___childrenMdx___body'
  | 'frontmatter___image___childrenMdx___excerpt'
  | 'frontmatter___image___childrenMdx___headings'
  | 'frontmatter___image___childrenMdx___html'
  | 'frontmatter___image___childrenMdx___mdxAST'
  | 'frontmatter___image___childrenMdx___tableOfContents'
  | 'frontmatter___image___childrenMdx___timeToRead'
  | 'frontmatter___image___childrenMdx___id'
  | 'frontmatter___image___childrenMdx___children'
  | 'frontmatter___image___childMdx___rawBody'
  | 'frontmatter___image___childMdx___fileAbsolutePath'
  | 'frontmatter___image___childMdx___slug'
  | 'frontmatter___image___childMdx___body'
  | 'frontmatter___image___childMdx___excerpt'
  | 'frontmatter___image___childMdx___headings'
  | 'frontmatter___image___childMdx___html'
  | 'frontmatter___image___childMdx___mdxAST'
  | 'frontmatter___image___childMdx___tableOfContents'
  | 'frontmatter___image___childMdx___timeToRead'
  | 'frontmatter___image___childMdx___id'
  | 'frontmatter___image___childMdx___children'
  | 'frontmatter___image___childrenSitemapYaml'
  | 'frontmatter___image___childrenSitemapYaml___sub'
  | 'frontmatter___image___childrenSitemapYaml___title'
  | 'frontmatter___image___childrenSitemapYaml___url'
  | 'frontmatter___image___childrenSitemapYaml___minimap'
  | 'frontmatter___image___childrenSitemapYaml___id'
  | 'frontmatter___image___childrenSitemapYaml___children'
  | 'frontmatter___image___childSitemapYaml___sub'
  | 'frontmatter___image___childSitemapYaml___title'
  | 'frontmatter___image___childSitemapYaml___url'
  | 'frontmatter___image___childSitemapYaml___minimap'
  | 'frontmatter___image___childSitemapYaml___id'
  | 'frontmatter___image___childSitemapYaml___children'
  | 'frontmatter___image___id'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'frontmatter___last_modified_at'
  | 'frontmatter___tags'
  | 'frontmatter___layout'
  | 'frontmatter___id'
  | 'frontmatter___author'
  | 'frontmatter___guid'
  | 'frontmatter___sharing_disabled'
  | 'frontmatter___fb_author_post_id'
  | 'frontmatter___dsq_thread_id'
  | 'frontmatter___permalink'
  | 'frontmatter___fb_fan_page_post_id'
  | 'frontmatter___instant_articles_submission_id'
  | 'frontmatter___instant_articles_force_submit'
  | 'frontmatter___dsq_needs_sync'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'fields___slug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitemapYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitemapYamlEdge>;
  nodes: Array<SitemapYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitemapYamlGroupConnection>;
};


export type SitemapYamlConnectionDistinctArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitemapYamlFieldsEnum;
};

export type SitemapYamlEdge = {
  next?: Maybe<SitemapYaml>;
  node: SitemapYaml;
  previous?: Maybe<SitemapYaml>;
};

export type SitemapYamlFieldsEnum =
  | 'sub'
  | 'sub___sub'
  | 'sub___sub___sub'
  | 'sub___sub___sub___sub'
  | 'sub___sub___sub___title'
  | 'sub___sub___sub___url'
  | 'sub___sub___title'
  | 'sub___sub___url'
  | 'sub___title'
  | 'sub___url'
  | 'title'
  | 'url'
  | 'minimap'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitemapYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitemapYamlEdge>;
  nodes: Array<SitemapYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitemapYamlSortInput = {
  fields?: Maybe<Array<Maybe<SitemapYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxSourceEdge>;
  nodes: Array<MdxSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxSourceGroupConnection>;
};


export type MdxSourceConnectionDistinctArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxSourceFieldsEnum;
};

export type MdxSourceEdge = {
  next?: Maybe<MdxSource>;
  node: MdxSource;
  previous?: Maybe<MdxSource>;
};

export type MdxSourceFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___categories'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___dateFormatted'
  | 'childrenMdx___frontmatter___image___sourceInstanceName'
  | 'childrenMdx___frontmatter___image___absolutePath'
  | 'childrenMdx___frontmatter___image___relativePath'
  | 'childrenMdx___frontmatter___image___extension'
  | 'childrenMdx___frontmatter___image___size'
  | 'childrenMdx___frontmatter___image___prettySize'
  | 'childrenMdx___frontmatter___image___modifiedTime'
  | 'childrenMdx___frontmatter___image___accessTime'
  | 'childrenMdx___frontmatter___image___changeTime'
  | 'childrenMdx___frontmatter___image___birthTime'
  | 'childrenMdx___frontmatter___image___root'
  | 'childrenMdx___frontmatter___image___dir'
  | 'childrenMdx___frontmatter___image___base'
  | 'childrenMdx___frontmatter___image___ext'
  | 'childrenMdx___frontmatter___image___name'
  | 'childrenMdx___frontmatter___image___relativeDirectory'
  | 'childrenMdx___frontmatter___image___dev'
  | 'childrenMdx___frontmatter___image___mode'
  | 'childrenMdx___frontmatter___image___nlink'
  | 'childrenMdx___frontmatter___image___uid'
  | 'childrenMdx___frontmatter___image___gid'
  | 'childrenMdx___frontmatter___image___rdev'
  | 'childrenMdx___frontmatter___image___ino'
  | 'childrenMdx___frontmatter___image___atimeMs'
  | 'childrenMdx___frontmatter___image___mtimeMs'
  | 'childrenMdx___frontmatter___image___ctimeMs'
  | 'childrenMdx___frontmatter___image___atime'
  | 'childrenMdx___frontmatter___image___mtime'
  | 'childrenMdx___frontmatter___image___ctime'
  | 'childrenMdx___frontmatter___image___birthtime'
  | 'childrenMdx___frontmatter___image___birthtimeMs'
  | 'childrenMdx___frontmatter___image___blksize'
  | 'childrenMdx___frontmatter___image___blocks'
  | 'childrenMdx___frontmatter___image___publicURL'
  | 'childrenMdx___frontmatter___image___childrenImageSharp'
  | 'childrenMdx___frontmatter___image___childrenMdx'
  | 'childrenMdx___frontmatter___image___childrenSitemapYaml'
  | 'childrenMdx___frontmatter___image___id'
  | 'childrenMdx___frontmatter___image___children'
  | 'childrenMdx___frontmatter___last_modified_at'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___layout'
  | 'childrenMdx___frontmatter___id'
  | 'childrenMdx___frontmatter___author'
  | 'childrenMdx___frontmatter___guid'
  | 'childrenMdx___frontmatter___sharing_disabled'
  | 'childrenMdx___frontmatter___fb_author_post_id'
  | 'childrenMdx___frontmatter___dsq_thread_id'
  | 'childrenMdx___frontmatter___permalink'
  | 'childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___categories'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___dateFormatted'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___childrenImageSharp'
  | 'childMdx___frontmatter___image___childrenMdx'
  | 'childMdx___frontmatter___image___childrenSitemapYaml'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___last_modified_at'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___id'
  | 'childMdx___frontmatter___author'
  | 'childMdx___frontmatter___guid'
  | 'childMdx___frontmatter___sharing_disabled'
  | 'childMdx___frontmatter___fb_author_post_id'
  | 'childMdx___frontmatter___dsq_thread_id'
  | 'childMdx___frontmatter___permalink'
  | 'childMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdx___frontmatter___instant_articles_submission_id'
  | 'childMdx___frontmatter___instant_articles_force_submit'
  | 'childMdx___frontmatter___dsq_needs_sync'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___fields___slug'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type MdxSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxSourceEdge>;
  nodes: Array<MdxSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxSourceSortInput = {
  fields?: Maybe<Array<Maybe<MdxSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  allowList?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  generator?: Maybe<StringQueryOperatorInput>;
  rss?: Maybe<BooleanQueryOperatorInput>;
  json?: Maybe<BooleanQueryOperatorInput>;
  siteQuery?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  query?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  stages?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning?: Maybe<BooleanQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
  _manifest_webmanifest?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___plugins___pluginOptions___showCaptions'
  | 'pluginOptions___plugins___pluginOptions___markdownCaptions'
  | 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___plugins___pluginOptions___backgroundColor'
  | 'pluginOptions___plugins___pluginOptions___quality'
  | 'pluginOptions___plugins___pluginOptions___withWebp'
  | 'pluginOptions___plugins___pluginOptions___tracedSVG'
  | 'pluginOptions___plugins___pluginOptions___loading'
  | 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___plugins___pluginOptions___disableBgImage'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___allowList'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___extensions'
  | 'pluginOptions___defaultLayouts___default'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___quality'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___generator'
  | 'pluginOptions___rss'
  | 'pluginOptions___json'
  | 'pluginOptions___siteQuery'
  | 'pluginOptions___feeds'
  | 'pluginOptions___feeds___name'
  | 'pluginOptions___feeds___query'
  | 'pluginOptions___query'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___respectDNT'
  | 'pluginOptions___anonymize'
  | 'pluginOptions___pageTransitionDelay'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___stages'
  | 'pluginOptions___options___emitWarning'
  | 'pluginOptions___options___failOnError'
  | 'pluginOptions___options___extensions'
  | 'pluginOptions___options___exclude'
  | 'pluginOptions___headers____x'
  | 'pluginOptions___headers____manifest_webmanifest'
  | 'pluginOptions___mergeSecurityHeaders'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type CategoryArchiveLayoutQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type CategoryArchiveLayoutQuery = { allMdx: { edges: Array<{ node: PostMdxFragment }> } };

export type IndexLayoutQueryVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type IndexLayoutQuery = { allMdx: { edges: Array<{ node: PostMdxFragment }> } };

export type PostMdxFragment = (
  Pick<Mdx, 'id' | 'body' | 'excerpt'>
  & { fields?: Maybe<Pick<MdxFields, 'slug'>>, frontmatter?: Maybe<(
    Pick<MdxFrontmatter, 'categories' | 'date' | 'dateFormatted' | 'last_modified_at' | 'layout' | 'tags' | 'title'>
    & { image?: Maybe<(
      Pick<File, 'publicURL'>
      & { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }
    )> }
  )>, file?: Maybe<Pick<File, 'base'>> }
);

export type SiblingPostMdxFragment = (
  Pick<Mdx, 'id'>
  & { fields?: Maybe<Pick<MdxFields, 'slug'>>, frontmatter?: Maybe<Pick<MdxFrontmatter, 'dateFormatted' | 'title'>> }
);

export type PostLayoutQueryVariables = Exact<{
  id: Scalars['String'];
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
}>;


export type PostLayoutQuery = { mdx?: Maybe<PostMdxFragment>, previousMdx?: Maybe<SiblingPostMdxFragment>, nextMdx?: Maybe<SiblingPostMdxFragment> };

export type RootLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type RootLayoutQuery = { site?: Maybe<{ siteMetadata: (
      Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl' | 'lang' | 'googleGtag' | 'disqusShortname'>
      & { logo?: Maybe<(
        Pick<File, 'publicURL'>
        & { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }
      )>, disclaimer?: Maybe<Pick<Mdx, 'body'>>, authorDetails?: Maybe<(
        Pick<SiteSiteMetadataAuthorDetails, 'email' | 'uri' | 'twitter'>
        & { picture?: Maybe<(
          Pick<File, 'publicURL'>
          & { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }
        )>, biography?: Maybe<Pick<Mdx, 'body'>> }
      )>, twitter?: Maybe<Pick<SiteSiteMetadataTwitter, 'username'>>, facebook?: Maybe<Pick<SiteSiteMetadataFacebook, 'appId' | 'publisher' | 'admins'>>, social?: Maybe<Pick<SiteSiteMetadataSocial, 'links'>>, sidebar?: Maybe<{ logos?: Maybe<Array<Maybe<(
          Pick<SiteSiteMetadataSidebarLogos, 'title'>
          & { image: { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> } }
        )>>> }> }
    ) }> };

export type SidebarSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarSitemapQuery = { allSitemapYaml: { edges: Array<{ node: Pick<SitemapYaml, 'title' | 'url'> }> } };

export type TagArchiveLayoutQueryVariables = Exact<{
  tag: Scalars['String'];
}>;


export type TagArchiveLayoutQuery = { allMdx: { edges: Array<{ node: PostMdxFragment }> } };

export type ArchivePageQueryVariables = Exact<{ [key: string]: never; }>;


export type ArchivePageQuery = { allMdx: { edges: Array<{ node: PostMdxFragment }> } };

export type SitemapPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SitemapPageQuery = { allSitemapYaml: { edges: Array<{ node: (
        Pick<SitemapYaml, 'title' | 'url'>
        & { sub?: Maybe<Array<Maybe<(
          Pick<SitemapYamlSub, 'title' | 'url'>
          & { sub?: Maybe<Array<Maybe<Pick<SitemapYamlSub, 'title' | 'url'>>>> }
        )>>> }
      ) }> } };
