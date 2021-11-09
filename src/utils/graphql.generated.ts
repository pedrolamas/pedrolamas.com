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

export type AvifOptions = {
  lossless?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns the first child node of type SitemapYaml or null if there are no children of given type on this node */
  childSitemapYaml?: Maybe<SitemapYaml>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns all children nodes filtered by type SitemapYaml */
  childrenSitemapYaml?: Maybe<Array<Maybe<SitemapYaml>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'childImageSharp___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___id'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___original___width'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childMdx___body'
  | 'childMdx___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___id'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___parent___id'
  | 'childMdx___excerpt'
  | 'childMdx___fields___slug'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___author'
  | 'childMdx___frontmatter___categories'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___dateFormatted'
  | 'childMdx___frontmatter___dsq_needs_sync'
  | 'childMdx___frontmatter___dsq_thread_id'
  | 'childMdx___frontmatter___fb_author_post_id'
  | 'childMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdx___frontmatter___guid'
  | 'childMdx___frontmatter___id'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___image___childrenImageSharp'
  | 'childMdx___frontmatter___image___childrenMdx'
  | 'childMdx___frontmatter___image___childrenSitemapYaml'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___instant_articles_force_submit'
  | 'childMdx___frontmatter___instant_articles_submission_id'
  | 'childMdx___frontmatter___last_modified_at'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___permalink'
  | 'childMdx___frontmatter___sharing_disabled'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___title'
  | 'childMdx___headings'
  | 'childMdx___headings___depth'
  | 'childMdx___headings___value'
  | 'childMdx___html'
  | 'childMdx___id'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childMdx___mdxAST'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___parent___id'
  | 'childMdx___rawBody'
  | 'childMdx___slug'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childSitemapYaml___children'
  | 'childSitemapYaml___children___children'
  | 'childSitemapYaml___children___children___children'
  | 'childSitemapYaml___children___children___id'
  | 'childSitemapYaml___children___id'
  | 'childSitemapYaml___children___internal___content'
  | 'childSitemapYaml___children___internal___contentDigest'
  | 'childSitemapYaml___children___internal___description'
  | 'childSitemapYaml___children___internal___fieldOwners'
  | 'childSitemapYaml___children___internal___ignoreType'
  | 'childSitemapYaml___children___internal___mediaType'
  | 'childSitemapYaml___children___internal___owner'
  | 'childSitemapYaml___children___internal___type'
  | 'childSitemapYaml___children___parent___children'
  | 'childSitemapYaml___children___parent___id'
  | 'childSitemapYaml___id'
  | 'childSitemapYaml___internal___content'
  | 'childSitemapYaml___internal___contentDigest'
  | 'childSitemapYaml___internal___description'
  | 'childSitemapYaml___internal___fieldOwners'
  | 'childSitemapYaml___internal___ignoreType'
  | 'childSitemapYaml___internal___mediaType'
  | 'childSitemapYaml___internal___owner'
  | 'childSitemapYaml___internal___type'
  | 'childSitemapYaml___minimap'
  | 'childSitemapYaml___parent___children'
  | 'childSitemapYaml___parent___children___children'
  | 'childSitemapYaml___parent___children___id'
  | 'childSitemapYaml___parent___id'
  | 'childSitemapYaml___parent___internal___content'
  | 'childSitemapYaml___parent___internal___contentDigest'
  | 'childSitemapYaml___parent___internal___description'
  | 'childSitemapYaml___parent___internal___fieldOwners'
  | 'childSitemapYaml___parent___internal___ignoreType'
  | 'childSitemapYaml___parent___internal___mediaType'
  | 'childSitemapYaml___parent___internal___owner'
  | 'childSitemapYaml___parent___internal___type'
  | 'childSitemapYaml___parent___parent___children'
  | 'childSitemapYaml___parent___parent___id'
  | 'childSitemapYaml___sub'
  | 'childSitemapYaml___sub___sub'
  | 'childSitemapYaml___sub___sub___sub'
  | 'childSitemapYaml___sub___sub___title'
  | 'childSitemapYaml___sub___sub___url'
  | 'childSitemapYaml___sub___title'
  | 'childSitemapYaml___sub___url'
  | 'childSitemapYaml___title'
  | 'childSitemapYaml___url'
  | 'children'
  | 'childrenImageSharp'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenMdx'
  | 'childrenMdx___body'
  | 'childrenMdx___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___author'
  | 'childrenMdx___frontmatter___categories'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___dateFormatted'
  | 'childrenMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdx___frontmatter___dsq_thread_id'
  | 'childrenMdx___frontmatter___fb_author_post_id'
  | 'childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdx___frontmatter___guid'
  | 'childrenMdx___frontmatter___id'
  | 'childrenMdx___frontmatter___image___absolutePath'
  | 'childrenMdx___frontmatter___image___accessTime'
  | 'childrenMdx___frontmatter___image___atime'
  | 'childrenMdx___frontmatter___image___atimeMs'
  | 'childrenMdx___frontmatter___image___base'
  | 'childrenMdx___frontmatter___image___birthTime'
  | 'childrenMdx___frontmatter___image___birthtime'
  | 'childrenMdx___frontmatter___image___birthtimeMs'
  | 'childrenMdx___frontmatter___image___blksize'
  | 'childrenMdx___frontmatter___image___blocks'
  | 'childrenMdx___frontmatter___image___changeTime'
  | 'childrenMdx___frontmatter___image___children'
  | 'childrenMdx___frontmatter___image___childrenImageSharp'
  | 'childrenMdx___frontmatter___image___childrenMdx'
  | 'childrenMdx___frontmatter___image___childrenSitemapYaml'
  | 'childrenMdx___frontmatter___image___ctime'
  | 'childrenMdx___frontmatter___image___ctimeMs'
  | 'childrenMdx___frontmatter___image___dev'
  | 'childrenMdx___frontmatter___image___dir'
  | 'childrenMdx___frontmatter___image___ext'
  | 'childrenMdx___frontmatter___image___extension'
  | 'childrenMdx___frontmatter___image___gid'
  | 'childrenMdx___frontmatter___image___id'
  | 'childrenMdx___frontmatter___image___ino'
  | 'childrenMdx___frontmatter___image___mode'
  | 'childrenMdx___frontmatter___image___modifiedTime'
  | 'childrenMdx___frontmatter___image___mtime'
  | 'childrenMdx___frontmatter___image___mtimeMs'
  | 'childrenMdx___frontmatter___image___name'
  | 'childrenMdx___frontmatter___image___nlink'
  | 'childrenMdx___frontmatter___image___prettySize'
  | 'childrenMdx___frontmatter___image___publicURL'
  | 'childrenMdx___frontmatter___image___rdev'
  | 'childrenMdx___frontmatter___image___relativeDirectory'
  | 'childrenMdx___frontmatter___image___relativePath'
  | 'childrenMdx___frontmatter___image___root'
  | 'childrenMdx___frontmatter___image___size'
  | 'childrenMdx___frontmatter___image___sourceInstanceName'
  | 'childrenMdx___frontmatter___image___uid'
  | 'childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdx___frontmatter___last_modified_at'
  | 'childrenMdx___frontmatter___layout'
  | 'childrenMdx___frontmatter___permalink'
  | 'childrenMdx___frontmatter___sharing_disabled'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___html'
  | 'childrenMdx___id'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___slug'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenSitemapYaml'
  | 'childrenSitemapYaml___children'
  | 'childrenSitemapYaml___children___children'
  | 'childrenSitemapYaml___children___children___children'
  | 'childrenSitemapYaml___children___children___id'
  | 'childrenSitemapYaml___children___id'
  | 'childrenSitemapYaml___children___internal___content'
  | 'childrenSitemapYaml___children___internal___contentDigest'
  | 'childrenSitemapYaml___children___internal___description'
  | 'childrenSitemapYaml___children___internal___fieldOwners'
  | 'childrenSitemapYaml___children___internal___ignoreType'
  | 'childrenSitemapYaml___children___internal___mediaType'
  | 'childrenSitemapYaml___children___internal___owner'
  | 'childrenSitemapYaml___children___internal___type'
  | 'childrenSitemapYaml___children___parent___children'
  | 'childrenSitemapYaml___children___parent___id'
  | 'childrenSitemapYaml___id'
  | 'childrenSitemapYaml___internal___content'
  | 'childrenSitemapYaml___internal___contentDigest'
  | 'childrenSitemapYaml___internal___description'
  | 'childrenSitemapYaml___internal___fieldOwners'
  | 'childrenSitemapYaml___internal___ignoreType'
  | 'childrenSitemapYaml___internal___mediaType'
  | 'childrenSitemapYaml___internal___owner'
  | 'childrenSitemapYaml___internal___type'
  | 'childrenSitemapYaml___minimap'
  | 'childrenSitemapYaml___parent___children'
  | 'childrenSitemapYaml___parent___children___children'
  | 'childrenSitemapYaml___parent___children___id'
  | 'childrenSitemapYaml___parent___id'
  | 'childrenSitemapYaml___parent___internal___content'
  | 'childrenSitemapYaml___parent___internal___contentDigest'
  | 'childrenSitemapYaml___parent___internal___description'
  | 'childrenSitemapYaml___parent___internal___fieldOwners'
  | 'childrenSitemapYaml___parent___internal___ignoreType'
  | 'childrenSitemapYaml___parent___internal___mediaType'
  | 'childrenSitemapYaml___parent___internal___owner'
  | 'childrenSitemapYaml___parent___internal___type'
  | 'childrenSitemapYaml___parent___parent___children'
  | 'childrenSitemapYaml___parent___parent___id'
  | 'childrenSitemapYaml___sub'
  | 'childrenSitemapYaml___sub___sub'
  | 'childrenSitemapYaml___sub___sub___sub'
  | 'childrenSitemapYaml___sub___sub___title'
  | 'childrenSitemapYaml___sub___sub___url'
  | 'childrenSitemapYaml___sub___title'
  | 'childrenSitemapYaml___sub___url'
  | 'childrenSitemapYaml___title'
  | 'childrenSitemapYaml___url'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'publicURL'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childSitemapYaml?: Maybe<SitemapYamlFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childrenSitemapYaml?: Maybe<SitemapYamlFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GatsbyImageFormat =
  | 'AUTO'
  | 'AVIF'
  | 'JPG'
  | 'NO_CHANGE'
  | 'PNG'
  | 'WEBP';

export type GatsbyImageLayout =
  | 'CONSTRAINED'
  | 'FIXED'
  | 'FULL_WIDTH';

export type GatsbyImagePlaceholder =
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'NONE'
  | 'TRACED_SVG';

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type ImageCropFocus =
  | 'ATTENTION'
  | 'CENTER'
  | 'EAST'
  | 'ENTROPY'
  | 'NORTH'
  | 'NORTHEAST'
  | 'NORTHWEST'
  | 'SOUTH'
  | 'SOUTHEAST'
  | 'SOUTHWEST'
  | 'WEST';

export type ImageFit =
  | 'CONTAIN'
  | 'COVER'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'AUTO'
  | 'AVIF'
  | 'JPG'
  | 'NO_CHANGE'
  | 'PNG'
  | 'WEBP';

export type ImageLayout =
  | 'CONSTRAINED'
  | 'FIXED'
  | 'FULL_WIDTH';

export type ImagePlaceholder =
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'NONE'
  | 'TRACED_SVG';

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  avifOptions?: Maybe<AvifOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
  blurredOptions?: Maybe<BlurredOptions>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  height?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<ImagePlaceholder>;
  pngOptions?: Maybe<PngOptions>;
  quality?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  tracedSVGOptions?: Maybe<Potrace>;
  transformOptions?: Maybe<TransformOptions>;
  webpOptions?: Maybe<WebPOptions>;
  width?: Maybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars['String']>;
  base64?: Maybe<Scalars['Boolean']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'fixed___aspectRatio'
  | 'fixed___base64'
  | 'fixed___height'
  | 'fixed___originalName'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcSetWebp'
  | 'fixed___srcWebp'
  | 'fixed___tracedSVG'
  | 'fixed___width'
  | 'fluid___aspectRatio'
  | 'fluid___base64'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationHeight'
  | 'fluid___presentationWidth'
  | 'fluid___sizes'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcSetWebp'
  | 'fluid___srcWebp'
  | 'fluid___tracedSVG'
  | 'gatsbyImageData'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'original___height'
  | 'original___src'
  | 'original___width'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'resize___aspectRatio'
  | 'resize___height'
  | 'resize___originalName'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width';

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
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

export type JpgOptions = {
  progressive?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  ne?: Maybe<Scalars['JSON']>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  body: Scalars['String'];
  children: Array<Node>;
  excerpt: Scalars['String'];
  fields?: Maybe<MdxFields>;
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  mdxAST?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  rawBody: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
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

export type MdxConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFields = {
  slug?: Maybe<Scalars['String']>;
};

export type MdxFieldsEnum =
  | 'body'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'excerpt'
  | 'fields___slug'
  | 'fileAbsolutePath'
  | 'frontmatter___author'
  | 'frontmatter___categories'
  | 'frontmatter___date'
  | 'frontmatter___dateFormatted'
  | 'frontmatter___dsq_needs_sync'
  | 'frontmatter___dsq_thread_id'
  | 'frontmatter___fb_author_post_id'
  | 'frontmatter___fb_fan_page_post_id'
  | 'frontmatter___guid'
  | 'frontmatter___id'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___base'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___childImageSharp___gatsbyImageData'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childMdx___body'
  | 'frontmatter___image___childMdx___children'
  | 'frontmatter___image___childMdx___excerpt'
  | 'frontmatter___image___childMdx___fileAbsolutePath'
  | 'frontmatter___image___childMdx___headings'
  | 'frontmatter___image___childMdx___html'
  | 'frontmatter___image___childMdx___id'
  | 'frontmatter___image___childMdx___mdxAST'
  | 'frontmatter___image___childMdx___rawBody'
  | 'frontmatter___image___childMdx___slug'
  | 'frontmatter___image___childMdx___tableOfContents'
  | 'frontmatter___image___childMdx___timeToRead'
  | 'frontmatter___image___childSitemapYaml___children'
  | 'frontmatter___image___childSitemapYaml___id'
  | 'frontmatter___image___childSitemapYaml___minimap'
  | 'frontmatter___image___childSitemapYaml___sub'
  | 'frontmatter___image___childSitemapYaml___title'
  | 'frontmatter___image___childSitemapYaml___url'
  | 'frontmatter___image___children'
  | 'frontmatter___image___childrenImageSharp'
  | 'frontmatter___image___childrenImageSharp___children'
  | 'frontmatter___image___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___image___childrenImageSharp___id'
  | 'frontmatter___image___childrenMdx'
  | 'frontmatter___image___childrenMdx___body'
  | 'frontmatter___image___childrenMdx___children'
  | 'frontmatter___image___childrenMdx___excerpt'
  | 'frontmatter___image___childrenMdx___fileAbsolutePath'
  | 'frontmatter___image___childrenMdx___headings'
  | 'frontmatter___image___childrenMdx___html'
  | 'frontmatter___image___childrenMdx___id'
  | 'frontmatter___image___childrenMdx___mdxAST'
  | 'frontmatter___image___childrenMdx___rawBody'
  | 'frontmatter___image___childrenMdx___slug'
  | 'frontmatter___image___childrenMdx___tableOfContents'
  | 'frontmatter___image___childrenMdx___timeToRead'
  | 'frontmatter___image___childrenSitemapYaml'
  | 'frontmatter___image___childrenSitemapYaml___children'
  | 'frontmatter___image___childrenSitemapYaml___id'
  | 'frontmatter___image___childrenSitemapYaml___minimap'
  | 'frontmatter___image___childrenSitemapYaml___sub'
  | 'frontmatter___image___childrenSitemapYaml___title'
  | 'frontmatter___image___childrenSitemapYaml___url'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___id'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___name'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___root'
  | 'frontmatter___image___size'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___uid'
  | 'frontmatter___instant_articles_force_submit'
  | 'frontmatter___instant_articles_submission_id'
  | 'frontmatter___last_modified_at'
  | 'frontmatter___layout'
  | 'frontmatter___permalink'
  | 'frontmatter___sharing_disabled'
  | 'frontmatter___tags'
  | 'frontmatter___title'
  | 'headings'
  | 'headings___depth'
  | 'headings___value'
  | 'html'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mdxAST'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'rawBody'
  | 'slug'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words';

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  rawBody?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  author?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['Date']>;
  dateFormatted?: Maybe<Scalars['Date']>;
  dsq_needs_sync?: Maybe<Array<Maybe<Scalars['String']>>>;
  dsq_thread_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  fb_author_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>;
  fb_fan_page_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>;
  guid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<File>;
  instant_articles_force_submit?: Maybe<Array<Maybe<Scalars['String']>>>;
  instant_articles_submission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  last_modified_at?: Maybe<Scalars['Date']>;
  layout?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  sharing_disabled?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};


export type MdxFrontmatterDateFormattedArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateFormatted?: Maybe<DateQueryOperatorInput>;
  dsq_needs_sync?: Maybe<StringQueryOperatorInput>;
  dsq_thread_id?: Maybe<StringQueryOperatorInput>;
  fb_author_post_id?: Maybe<FloatQueryOperatorInput>;
  fb_fan_page_post_id?: Maybe<FloatQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  instant_articles_force_submit?: Maybe<StringQueryOperatorInput>;
  instant_articles_submission_id?: Maybe<StringQueryOperatorInput>;
  last_modified_at?: Maybe<DateQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  permalink?: Maybe<StringQueryOperatorInput>;
  sharing_disabled?: Maybe<IntQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxSource = Node & {
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type MdxSourceConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MdxSourceEdge>;
  group: Array<MdxSourceGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MdxSource>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxSourceConnectionDistinctArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceConnectionGroupArgs = {
  field: MdxSourceFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type MdxSourceConnectionMaxArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceConnectionMinArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceConnectionSumArgs = {
  field: MdxSourceFieldsEnum;
};

export type MdxSourceEdge = {
  next?: Maybe<MdxSource>;
  node: MdxSource;
  previous?: Maybe<MdxSource>;
};

export type MdxSourceFieldsEnum =
  | 'childMdx___body'
  | 'childMdx___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___id'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___parent___id'
  | 'childMdx___excerpt'
  | 'childMdx___fields___slug'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___author'
  | 'childMdx___frontmatter___categories'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___dateFormatted'
  | 'childMdx___frontmatter___dsq_needs_sync'
  | 'childMdx___frontmatter___dsq_thread_id'
  | 'childMdx___frontmatter___fb_author_post_id'
  | 'childMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdx___frontmatter___guid'
  | 'childMdx___frontmatter___id'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___image___childrenImageSharp'
  | 'childMdx___frontmatter___image___childrenMdx'
  | 'childMdx___frontmatter___image___childrenSitemapYaml'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___instant_articles_force_submit'
  | 'childMdx___frontmatter___instant_articles_submission_id'
  | 'childMdx___frontmatter___last_modified_at'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___permalink'
  | 'childMdx___frontmatter___sharing_disabled'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___title'
  | 'childMdx___headings'
  | 'childMdx___headings___depth'
  | 'childMdx___headings___value'
  | 'childMdx___html'
  | 'childMdx___id'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childMdx___mdxAST'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___parent___id'
  | 'childMdx___rawBody'
  | 'childMdx___slug'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'children'
  | 'childrenMdx'
  | 'childrenMdx___body'
  | 'childrenMdx___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___author'
  | 'childrenMdx___frontmatter___categories'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___dateFormatted'
  | 'childrenMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdx___frontmatter___dsq_thread_id'
  | 'childrenMdx___frontmatter___fb_author_post_id'
  | 'childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdx___frontmatter___guid'
  | 'childrenMdx___frontmatter___id'
  | 'childrenMdx___frontmatter___image___absolutePath'
  | 'childrenMdx___frontmatter___image___accessTime'
  | 'childrenMdx___frontmatter___image___atime'
  | 'childrenMdx___frontmatter___image___atimeMs'
  | 'childrenMdx___frontmatter___image___base'
  | 'childrenMdx___frontmatter___image___birthTime'
  | 'childrenMdx___frontmatter___image___birthtime'
  | 'childrenMdx___frontmatter___image___birthtimeMs'
  | 'childrenMdx___frontmatter___image___blksize'
  | 'childrenMdx___frontmatter___image___blocks'
  | 'childrenMdx___frontmatter___image___changeTime'
  | 'childrenMdx___frontmatter___image___children'
  | 'childrenMdx___frontmatter___image___childrenImageSharp'
  | 'childrenMdx___frontmatter___image___childrenMdx'
  | 'childrenMdx___frontmatter___image___childrenSitemapYaml'
  | 'childrenMdx___frontmatter___image___ctime'
  | 'childrenMdx___frontmatter___image___ctimeMs'
  | 'childrenMdx___frontmatter___image___dev'
  | 'childrenMdx___frontmatter___image___dir'
  | 'childrenMdx___frontmatter___image___ext'
  | 'childrenMdx___frontmatter___image___extension'
  | 'childrenMdx___frontmatter___image___gid'
  | 'childrenMdx___frontmatter___image___id'
  | 'childrenMdx___frontmatter___image___ino'
  | 'childrenMdx___frontmatter___image___mode'
  | 'childrenMdx___frontmatter___image___modifiedTime'
  | 'childrenMdx___frontmatter___image___mtime'
  | 'childrenMdx___frontmatter___image___mtimeMs'
  | 'childrenMdx___frontmatter___image___name'
  | 'childrenMdx___frontmatter___image___nlink'
  | 'childrenMdx___frontmatter___image___prettySize'
  | 'childrenMdx___frontmatter___image___publicURL'
  | 'childrenMdx___frontmatter___image___rdev'
  | 'childrenMdx___frontmatter___image___relativeDirectory'
  | 'childrenMdx___frontmatter___image___relativePath'
  | 'childrenMdx___frontmatter___image___root'
  | 'childrenMdx___frontmatter___image___size'
  | 'childrenMdx___frontmatter___image___sourceInstanceName'
  | 'childrenMdx___frontmatter___image___uid'
  | 'childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdx___frontmatter___last_modified_at'
  | 'childrenMdx___frontmatter___layout'
  | 'childrenMdx___frontmatter___permalink'
  | 'childrenMdx___frontmatter___sharing_disabled'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___html'
  | 'childrenMdx___id'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___slug'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type MdxSourceFilterInput = {
  childMdx?: Maybe<MdxFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type MdxSourceFilterListInput = {
  elemMatch?: Maybe<MdxSourceFilterInput>;
};

export type MdxSourceGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MdxSourceEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MdxSourceGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MdxSource>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxSourceGroupConnectionDistinctArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceGroupConnectionGroupArgs = {
  field: MdxSourceFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type MdxSourceGroupConnectionMaxArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceGroupConnectionMinArgs = {
  field: MdxSourceFieldsEnum;
};


export type MdxSourceGroupConnectionSumArgs = {
  field: MdxSourceFieldsEnum;
};

export type MdxSourceSortInput = {
  fields?: Maybe<Array<Maybe<MdxSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: Maybe<Scalars['Float']>;
  background?: Maybe<Scalars['String']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  turdSize?: Maybe<Scalars['Float']>;
  turnPolicy?: Maybe<PotraceTurnPolicy>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_MAJORITY'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_WHITE';

export type Query = {
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMdx: MdxConnection;
  allMdxSource: MdxSourceConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allSitemapYaml: SitemapYamlConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  mdx?: Maybe<Mdx>;
  mdxSource?: Maybe<MdxSource>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  sitemapYaml?: Maybe<SitemapYaml>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ImageSharpSortInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<MdxSortInput>;
};


export type QueryAllMdxSourceArgs = {
  filter?: Maybe<MdxSourceFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<MdxSourceSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePluginSortInput>;
};


export type QueryAllSitemapYamlArgs = {
  filter?: Maybe<SitemapYamlFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitemapYamlSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childSitemapYaml?: Maybe<SitemapYamlFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childrenSitemapYaml?: Maybe<SitemapYamlFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: Maybe<NodeFilterListInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};


export type QueryMdxArgs = {
  body?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  rawBody?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
};


export type QueryMdxSourceArgs = {
  childMdx?: Maybe<MdxFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  childMdxSource?: Maybe<MdxSourceFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenMdxSource?: Maybe<MdxSourceFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  jsxRuntime?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  pageContext?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<JsonQueryOperatorInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};


export type QuerySitemapYamlArgs = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  minimap?: Maybe<BooleanQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  sub?: Maybe<SitemapYamlSubFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  /** Returns the first child node of type MdxSource or null if there are no children of given type on this node */
  childMdxSource?: Maybe<MdxSource>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MdxSource */
  childrenMdxSource?: Maybe<Array<Maybe<MdxSource>>>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata: SiteSiteMetadata;
};


export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'childMdxSource___childMdx___body'
  | 'childMdxSource___childMdx___children'
  | 'childMdxSource___childMdx___children___children'
  | 'childMdxSource___childMdx___children___id'
  | 'childMdxSource___childMdx___excerpt'
  | 'childMdxSource___childMdx___fields___slug'
  | 'childMdxSource___childMdx___fileAbsolutePath'
  | 'childMdxSource___childMdx___frontmatter___author'
  | 'childMdxSource___childMdx___frontmatter___categories'
  | 'childMdxSource___childMdx___frontmatter___date'
  | 'childMdxSource___childMdx___frontmatter___dateFormatted'
  | 'childMdxSource___childMdx___frontmatter___dsq_needs_sync'
  | 'childMdxSource___childMdx___frontmatter___dsq_thread_id'
  | 'childMdxSource___childMdx___frontmatter___fb_author_post_id'
  | 'childMdxSource___childMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdxSource___childMdx___frontmatter___guid'
  | 'childMdxSource___childMdx___frontmatter___id'
  | 'childMdxSource___childMdx___frontmatter___instant_articles_force_submit'
  | 'childMdxSource___childMdx___frontmatter___instant_articles_submission_id'
  | 'childMdxSource___childMdx___frontmatter___last_modified_at'
  | 'childMdxSource___childMdx___frontmatter___layout'
  | 'childMdxSource___childMdx___frontmatter___permalink'
  | 'childMdxSource___childMdx___frontmatter___sharing_disabled'
  | 'childMdxSource___childMdx___frontmatter___tags'
  | 'childMdxSource___childMdx___frontmatter___title'
  | 'childMdxSource___childMdx___headings'
  | 'childMdxSource___childMdx___headings___depth'
  | 'childMdxSource___childMdx___headings___value'
  | 'childMdxSource___childMdx___html'
  | 'childMdxSource___childMdx___id'
  | 'childMdxSource___childMdx___internal___content'
  | 'childMdxSource___childMdx___internal___contentDigest'
  | 'childMdxSource___childMdx___internal___description'
  | 'childMdxSource___childMdx___internal___fieldOwners'
  | 'childMdxSource___childMdx___internal___ignoreType'
  | 'childMdxSource___childMdx___internal___mediaType'
  | 'childMdxSource___childMdx___internal___owner'
  | 'childMdxSource___childMdx___internal___type'
  | 'childMdxSource___childMdx___mdxAST'
  | 'childMdxSource___childMdx___parent___children'
  | 'childMdxSource___childMdx___parent___id'
  | 'childMdxSource___childMdx___rawBody'
  | 'childMdxSource___childMdx___slug'
  | 'childMdxSource___childMdx___tableOfContents'
  | 'childMdxSource___childMdx___timeToRead'
  | 'childMdxSource___childMdx___wordCount___paragraphs'
  | 'childMdxSource___childMdx___wordCount___sentences'
  | 'childMdxSource___childMdx___wordCount___words'
  | 'childMdxSource___children'
  | 'childMdxSource___childrenMdx'
  | 'childMdxSource___childrenMdx___body'
  | 'childMdxSource___childrenMdx___children'
  | 'childMdxSource___childrenMdx___children___children'
  | 'childMdxSource___childrenMdx___children___id'
  | 'childMdxSource___childrenMdx___excerpt'
  | 'childMdxSource___childrenMdx___fields___slug'
  | 'childMdxSource___childrenMdx___fileAbsolutePath'
  | 'childMdxSource___childrenMdx___frontmatter___author'
  | 'childMdxSource___childrenMdx___frontmatter___categories'
  | 'childMdxSource___childrenMdx___frontmatter___date'
  | 'childMdxSource___childrenMdx___frontmatter___dateFormatted'
  | 'childMdxSource___childrenMdx___frontmatter___dsq_needs_sync'
  | 'childMdxSource___childrenMdx___frontmatter___dsq_thread_id'
  | 'childMdxSource___childrenMdx___frontmatter___fb_author_post_id'
  | 'childMdxSource___childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childMdxSource___childrenMdx___frontmatter___guid'
  | 'childMdxSource___childrenMdx___frontmatter___id'
  | 'childMdxSource___childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childMdxSource___childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childMdxSource___childrenMdx___frontmatter___last_modified_at'
  | 'childMdxSource___childrenMdx___frontmatter___layout'
  | 'childMdxSource___childrenMdx___frontmatter___permalink'
  | 'childMdxSource___childrenMdx___frontmatter___sharing_disabled'
  | 'childMdxSource___childrenMdx___frontmatter___tags'
  | 'childMdxSource___childrenMdx___frontmatter___title'
  | 'childMdxSource___childrenMdx___headings'
  | 'childMdxSource___childrenMdx___headings___depth'
  | 'childMdxSource___childrenMdx___headings___value'
  | 'childMdxSource___childrenMdx___html'
  | 'childMdxSource___childrenMdx___id'
  | 'childMdxSource___childrenMdx___internal___content'
  | 'childMdxSource___childrenMdx___internal___contentDigest'
  | 'childMdxSource___childrenMdx___internal___description'
  | 'childMdxSource___childrenMdx___internal___fieldOwners'
  | 'childMdxSource___childrenMdx___internal___ignoreType'
  | 'childMdxSource___childrenMdx___internal___mediaType'
  | 'childMdxSource___childrenMdx___internal___owner'
  | 'childMdxSource___childrenMdx___internal___type'
  | 'childMdxSource___childrenMdx___mdxAST'
  | 'childMdxSource___childrenMdx___parent___children'
  | 'childMdxSource___childrenMdx___parent___id'
  | 'childMdxSource___childrenMdx___rawBody'
  | 'childMdxSource___childrenMdx___slug'
  | 'childMdxSource___childrenMdx___tableOfContents'
  | 'childMdxSource___childrenMdx___timeToRead'
  | 'childMdxSource___childrenMdx___wordCount___paragraphs'
  | 'childMdxSource___childrenMdx___wordCount___sentences'
  | 'childMdxSource___childrenMdx___wordCount___words'
  | 'childMdxSource___children___children'
  | 'childMdxSource___children___children___children'
  | 'childMdxSource___children___children___id'
  | 'childMdxSource___children___id'
  | 'childMdxSource___children___internal___content'
  | 'childMdxSource___children___internal___contentDigest'
  | 'childMdxSource___children___internal___description'
  | 'childMdxSource___children___internal___fieldOwners'
  | 'childMdxSource___children___internal___ignoreType'
  | 'childMdxSource___children___internal___mediaType'
  | 'childMdxSource___children___internal___owner'
  | 'childMdxSource___children___internal___type'
  | 'childMdxSource___children___parent___children'
  | 'childMdxSource___children___parent___id'
  | 'childMdxSource___id'
  | 'childMdxSource___internal___content'
  | 'childMdxSource___internal___contentDigest'
  | 'childMdxSource___internal___description'
  | 'childMdxSource___internal___fieldOwners'
  | 'childMdxSource___internal___ignoreType'
  | 'childMdxSource___internal___mediaType'
  | 'childMdxSource___internal___owner'
  | 'childMdxSource___internal___type'
  | 'childMdxSource___parent___children'
  | 'childMdxSource___parent___children___children'
  | 'childMdxSource___parent___children___id'
  | 'childMdxSource___parent___id'
  | 'childMdxSource___parent___internal___content'
  | 'childMdxSource___parent___internal___contentDigest'
  | 'childMdxSource___parent___internal___description'
  | 'childMdxSource___parent___internal___fieldOwners'
  | 'childMdxSource___parent___internal___ignoreType'
  | 'childMdxSource___parent___internal___mediaType'
  | 'childMdxSource___parent___internal___owner'
  | 'childMdxSource___parent___internal___type'
  | 'childMdxSource___parent___parent___children'
  | 'childMdxSource___parent___parent___id'
  | 'children'
  | 'childrenMdxSource'
  | 'childrenMdxSource___childMdx___body'
  | 'childrenMdxSource___childMdx___children'
  | 'childrenMdxSource___childMdx___children___children'
  | 'childrenMdxSource___childMdx___children___id'
  | 'childrenMdxSource___childMdx___excerpt'
  | 'childrenMdxSource___childMdx___fields___slug'
  | 'childrenMdxSource___childMdx___fileAbsolutePath'
  | 'childrenMdxSource___childMdx___frontmatter___author'
  | 'childrenMdxSource___childMdx___frontmatter___categories'
  | 'childrenMdxSource___childMdx___frontmatter___date'
  | 'childrenMdxSource___childMdx___frontmatter___dateFormatted'
  | 'childrenMdxSource___childMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdxSource___childMdx___frontmatter___dsq_thread_id'
  | 'childrenMdxSource___childMdx___frontmatter___fb_author_post_id'
  | 'childrenMdxSource___childMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdxSource___childMdx___frontmatter___guid'
  | 'childrenMdxSource___childMdx___frontmatter___id'
  | 'childrenMdxSource___childMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdxSource___childMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdxSource___childMdx___frontmatter___last_modified_at'
  | 'childrenMdxSource___childMdx___frontmatter___layout'
  | 'childrenMdxSource___childMdx___frontmatter___permalink'
  | 'childrenMdxSource___childMdx___frontmatter___sharing_disabled'
  | 'childrenMdxSource___childMdx___frontmatter___tags'
  | 'childrenMdxSource___childMdx___frontmatter___title'
  | 'childrenMdxSource___childMdx___headings'
  | 'childrenMdxSource___childMdx___headings___depth'
  | 'childrenMdxSource___childMdx___headings___value'
  | 'childrenMdxSource___childMdx___html'
  | 'childrenMdxSource___childMdx___id'
  | 'childrenMdxSource___childMdx___internal___content'
  | 'childrenMdxSource___childMdx___internal___contentDigest'
  | 'childrenMdxSource___childMdx___internal___description'
  | 'childrenMdxSource___childMdx___internal___fieldOwners'
  | 'childrenMdxSource___childMdx___internal___ignoreType'
  | 'childrenMdxSource___childMdx___internal___mediaType'
  | 'childrenMdxSource___childMdx___internal___owner'
  | 'childrenMdxSource___childMdx___internal___type'
  | 'childrenMdxSource___childMdx___mdxAST'
  | 'childrenMdxSource___childMdx___parent___children'
  | 'childrenMdxSource___childMdx___parent___id'
  | 'childrenMdxSource___childMdx___rawBody'
  | 'childrenMdxSource___childMdx___slug'
  | 'childrenMdxSource___childMdx___tableOfContents'
  | 'childrenMdxSource___childMdx___timeToRead'
  | 'childrenMdxSource___childMdx___wordCount___paragraphs'
  | 'childrenMdxSource___childMdx___wordCount___sentences'
  | 'childrenMdxSource___childMdx___wordCount___words'
  | 'childrenMdxSource___children'
  | 'childrenMdxSource___childrenMdx'
  | 'childrenMdxSource___childrenMdx___body'
  | 'childrenMdxSource___childrenMdx___children'
  | 'childrenMdxSource___childrenMdx___children___children'
  | 'childrenMdxSource___childrenMdx___children___id'
  | 'childrenMdxSource___childrenMdx___excerpt'
  | 'childrenMdxSource___childrenMdx___fields___slug'
  | 'childrenMdxSource___childrenMdx___fileAbsolutePath'
  | 'childrenMdxSource___childrenMdx___frontmatter___author'
  | 'childrenMdxSource___childrenMdx___frontmatter___categories'
  | 'childrenMdxSource___childrenMdx___frontmatter___date'
  | 'childrenMdxSource___childrenMdx___frontmatter___dateFormatted'
  | 'childrenMdxSource___childrenMdx___frontmatter___dsq_needs_sync'
  | 'childrenMdxSource___childrenMdx___frontmatter___dsq_thread_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___fb_author_post_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___fb_fan_page_post_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___guid'
  | 'childrenMdxSource___childrenMdx___frontmatter___id'
  | 'childrenMdxSource___childrenMdx___frontmatter___instant_articles_force_submit'
  | 'childrenMdxSource___childrenMdx___frontmatter___instant_articles_submission_id'
  | 'childrenMdxSource___childrenMdx___frontmatter___last_modified_at'
  | 'childrenMdxSource___childrenMdx___frontmatter___layout'
  | 'childrenMdxSource___childrenMdx___frontmatter___permalink'
  | 'childrenMdxSource___childrenMdx___frontmatter___sharing_disabled'
  | 'childrenMdxSource___childrenMdx___frontmatter___tags'
  | 'childrenMdxSource___childrenMdx___frontmatter___title'
  | 'childrenMdxSource___childrenMdx___headings'
  | 'childrenMdxSource___childrenMdx___headings___depth'
  | 'childrenMdxSource___childrenMdx___headings___value'
  | 'childrenMdxSource___childrenMdx___html'
  | 'childrenMdxSource___childrenMdx___id'
  | 'childrenMdxSource___childrenMdx___internal___content'
  | 'childrenMdxSource___childrenMdx___internal___contentDigest'
  | 'childrenMdxSource___childrenMdx___internal___description'
  | 'childrenMdxSource___childrenMdx___internal___fieldOwners'
  | 'childrenMdxSource___childrenMdx___internal___ignoreType'
  | 'childrenMdxSource___childrenMdx___internal___mediaType'
  | 'childrenMdxSource___childrenMdx___internal___owner'
  | 'childrenMdxSource___childrenMdx___internal___type'
  | 'childrenMdxSource___childrenMdx___mdxAST'
  | 'childrenMdxSource___childrenMdx___parent___children'
  | 'childrenMdxSource___childrenMdx___parent___id'
  | 'childrenMdxSource___childrenMdx___rawBody'
  | 'childrenMdxSource___childrenMdx___slug'
  | 'childrenMdxSource___childrenMdx___tableOfContents'
  | 'childrenMdxSource___childrenMdx___timeToRead'
  | 'childrenMdxSource___childrenMdx___wordCount___paragraphs'
  | 'childrenMdxSource___childrenMdx___wordCount___sentences'
  | 'childrenMdxSource___childrenMdx___wordCount___words'
  | 'childrenMdxSource___children___children'
  | 'childrenMdxSource___children___children___children'
  | 'childrenMdxSource___children___children___id'
  | 'childrenMdxSource___children___id'
  | 'childrenMdxSource___children___internal___content'
  | 'childrenMdxSource___children___internal___contentDigest'
  | 'childrenMdxSource___children___internal___description'
  | 'childrenMdxSource___children___internal___fieldOwners'
  | 'childrenMdxSource___children___internal___ignoreType'
  | 'childrenMdxSource___children___internal___mediaType'
  | 'childrenMdxSource___children___internal___owner'
  | 'childrenMdxSource___children___internal___type'
  | 'childrenMdxSource___children___parent___children'
  | 'childrenMdxSource___children___parent___id'
  | 'childrenMdxSource___id'
  | 'childrenMdxSource___internal___content'
  | 'childrenMdxSource___internal___contentDigest'
  | 'childrenMdxSource___internal___description'
  | 'childrenMdxSource___internal___fieldOwners'
  | 'childrenMdxSource___internal___ignoreType'
  | 'childrenMdxSource___internal___mediaType'
  | 'childrenMdxSource___internal___owner'
  | 'childrenMdxSource___internal___type'
  | 'childrenMdxSource___parent___children'
  | 'childrenMdxSource___parent___children___children'
  | 'childrenMdxSource___parent___children___id'
  | 'childrenMdxSource___parent___id'
  | 'childrenMdxSource___parent___internal___content'
  | 'childrenMdxSource___parent___internal___contentDigest'
  | 'childrenMdxSource___parent___internal___description'
  | 'childrenMdxSource___parent___internal___fieldOwners'
  | 'childrenMdxSource___parent___internal___ignoreType'
  | 'childrenMdxSource___parent___internal___mediaType'
  | 'childrenMdxSource___parent___internal___owner'
  | 'childrenMdxSource___parent___internal___type'
  | 'childrenMdxSource___parent___parent___children'
  | 'childrenMdxSource___parent___parent___id'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'host'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jsxRuntime'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pathPrefix'
  | 'polyfill'
  | 'port'
  | 'siteMetadata___author'
  | 'siteMetadata___authorDetails___biography___body'
  | 'siteMetadata___authorDetails___biography___children'
  | 'siteMetadata___authorDetails___biography___excerpt'
  | 'siteMetadata___authorDetails___biography___fileAbsolutePath'
  | 'siteMetadata___authorDetails___biography___headings'
  | 'siteMetadata___authorDetails___biography___html'
  | 'siteMetadata___authorDetails___biography___id'
  | 'siteMetadata___authorDetails___biography___mdxAST'
  | 'siteMetadata___authorDetails___biography___rawBody'
  | 'siteMetadata___authorDetails___biography___slug'
  | 'siteMetadata___authorDetails___biography___tableOfContents'
  | 'siteMetadata___authorDetails___biography___timeToRead'
  | 'siteMetadata___authorDetails___email'
  | 'siteMetadata___authorDetails___picture___absolutePath'
  | 'siteMetadata___authorDetails___picture___accessTime'
  | 'siteMetadata___authorDetails___picture___atime'
  | 'siteMetadata___authorDetails___picture___atimeMs'
  | 'siteMetadata___authorDetails___picture___base'
  | 'siteMetadata___authorDetails___picture___birthTime'
  | 'siteMetadata___authorDetails___picture___birthtime'
  | 'siteMetadata___authorDetails___picture___birthtimeMs'
  | 'siteMetadata___authorDetails___picture___blksize'
  | 'siteMetadata___authorDetails___picture___blocks'
  | 'siteMetadata___authorDetails___picture___changeTime'
  | 'siteMetadata___authorDetails___picture___children'
  | 'siteMetadata___authorDetails___picture___childrenImageSharp'
  | 'siteMetadata___authorDetails___picture___childrenMdx'
  | 'siteMetadata___authorDetails___picture___childrenSitemapYaml'
  | 'siteMetadata___authorDetails___picture___ctime'
  | 'siteMetadata___authorDetails___picture___ctimeMs'
  | 'siteMetadata___authorDetails___picture___dev'
  | 'siteMetadata___authorDetails___picture___dir'
  | 'siteMetadata___authorDetails___picture___ext'
  | 'siteMetadata___authorDetails___picture___extension'
  | 'siteMetadata___authorDetails___picture___gid'
  | 'siteMetadata___authorDetails___picture___id'
  | 'siteMetadata___authorDetails___picture___ino'
  | 'siteMetadata___authorDetails___picture___mode'
  | 'siteMetadata___authorDetails___picture___modifiedTime'
  | 'siteMetadata___authorDetails___picture___mtime'
  | 'siteMetadata___authorDetails___picture___mtimeMs'
  | 'siteMetadata___authorDetails___picture___name'
  | 'siteMetadata___authorDetails___picture___nlink'
  | 'siteMetadata___authorDetails___picture___prettySize'
  | 'siteMetadata___authorDetails___picture___publicURL'
  | 'siteMetadata___authorDetails___picture___rdev'
  | 'siteMetadata___authorDetails___picture___relativeDirectory'
  | 'siteMetadata___authorDetails___picture___relativePath'
  | 'siteMetadata___authorDetails___picture___root'
  | 'siteMetadata___authorDetails___picture___size'
  | 'siteMetadata___authorDetails___picture___sourceInstanceName'
  | 'siteMetadata___authorDetails___picture___uid'
  | 'siteMetadata___authorDetails___twitter'
  | 'siteMetadata___authorDetails___uri'
  | 'siteMetadata___description'
  | 'siteMetadata___disclaimer___body'
  | 'siteMetadata___disclaimer___children'
  | 'siteMetadata___disclaimer___children___children'
  | 'siteMetadata___disclaimer___children___id'
  | 'siteMetadata___disclaimer___excerpt'
  | 'siteMetadata___disclaimer___fields___slug'
  | 'siteMetadata___disclaimer___fileAbsolutePath'
  | 'siteMetadata___disclaimer___frontmatter___author'
  | 'siteMetadata___disclaimer___frontmatter___categories'
  | 'siteMetadata___disclaimer___frontmatter___date'
  | 'siteMetadata___disclaimer___frontmatter___dateFormatted'
  | 'siteMetadata___disclaimer___frontmatter___dsq_needs_sync'
  | 'siteMetadata___disclaimer___frontmatter___dsq_thread_id'
  | 'siteMetadata___disclaimer___frontmatter___fb_author_post_id'
  | 'siteMetadata___disclaimer___frontmatter___fb_fan_page_post_id'
  | 'siteMetadata___disclaimer___frontmatter___guid'
  | 'siteMetadata___disclaimer___frontmatter___id'
  | 'siteMetadata___disclaimer___frontmatter___instant_articles_force_submit'
  | 'siteMetadata___disclaimer___frontmatter___instant_articles_submission_id'
  | 'siteMetadata___disclaimer___frontmatter___last_modified_at'
  | 'siteMetadata___disclaimer___frontmatter___layout'
  | 'siteMetadata___disclaimer___frontmatter___permalink'
  | 'siteMetadata___disclaimer___frontmatter___sharing_disabled'
  | 'siteMetadata___disclaimer___frontmatter___tags'
  | 'siteMetadata___disclaimer___frontmatter___title'
  | 'siteMetadata___disclaimer___headings'
  | 'siteMetadata___disclaimer___headings___depth'
  | 'siteMetadata___disclaimer___headings___value'
  | 'siteMetadata___disclaimer___html'
  | 'siteMetadata___disclaimer___id'
  | 'siteMetadata___disclaimer___internal___content'
  | 'siteMetadata___disclaimer___internal___contentDigest'
  | 'siteMetadata___disclaimer___internal___description'
  | 'siteMetadata___disclaimer___internal___fieldOwners'
  | 'siteMetadata___disclaimer___internal___ignoreType'
  | 'siteMetadata___disclaimer___internal___mediaType'
  | 'siteMetadata___disclaimer___internal___owner'
  | 'siteMetadata___disclaimer___internal___type'
  | 'siteMetadata___disclaimer___mdxAST'
  | 'siteMetadata___disclaimer___parent___children'
  | 'siteMetadata___disclaimer___parent___id'
  | 'siteMetadata___disclaimer___rawBody'
  | 'siteMetadata___disclaimer___slug'
  | 'siteMetadata___disclaimer___tableOfContents'
  | 'siteMetadata___disclaimer___timeToRead'
  | 'siteMetadata___disclaimer___wordCount___paragraphs'
  | 'siteMetadata___disclaimer___wordCount___sentences'
  | 'siteMetadata___disclaimer___wordCount___words'
  | 'siteMetadata___disqusShortname'
  | 'siteMetadata___facebook___admins'
  | 'siteMetadata___facebook___appId'
  | 'siteMetadata___facebook___publisher'
  | 'siteMetadata___googleGtag'
  | 'siteMetadata___lang'
  | 'siteMetadata___logo___absolutePath'
  | 'siteMetadata___logo___accessTime'
  | 'siteMetadata___logo___atime'
  | 'siteMetadata___logo___atimeMs'
  | 'siteMetadata___logo___base'
  | 'siteMetadata___logo___birthTime'
  | 'siteMetadata___logo___birthtime'
  | 'siteMetadata___logo___birthtimeMs'
  | 'siteMetadata___logo___blksize'
  | 'siteMetadata___logo___blocks'
  | 'siteMetadata___logo___changeTime'
  | 'siteMetadata___logo___childImageSharp___children'
  | 'siteMetadata___logo___childImageSharp___gatsbyImageData'
  | 'siteMetadata___logo___childImageSharp___id'
  | 'siteMetadata___logo___childMdx___body'
  | 'siteMetadata___logo___childMdx___children'
  | 'siteMetadata___logo___childMdx___excerpt'
  | 'siteMetadata___logo___childMdx___fileAbsolutePath'
  | 'siteMetadata___logo___childMdx___headings'
  | 'siteMetadata___logo___childMdx___html'
  | 'siteMetadata___logo___childMdx___id'
  | 'siteMetadata___logo___childMdx___mdxAST'
  | 'siteMetadata___logo___childMdx___rawBody'
  | 'siteMetadata___logo___childMdx___slug'
  | 'siteMetadata___logo___childMdx___tableOfContents'
  | 'siteMetadata___logo___childMdx___timeToRead'
  | 'siteMetadata___logo___childSitemapYaml___children'
  | 'siteMetadata___logo___childSitemapYaml___id'
  | 'siteMetadata___logo___childSitemapYaml___minimap'
  | 'siteMetadata___logo___childSitemapYaml___sub'
  | 'siteMetadata___logo___childSitemapYaml___title'
  | 'siteMetadata___logo___childSitemapYaml___url'
  | 'siteMetadata___logo___children'
  | 'siteMetadata___logo___childrenImageSharp'
  | 'siteMetadata___logo___childrenImageSharp___children'
  | 'siteMetadata___logo___childrenImageSharp___gatsbyImageData'
  | 'siteMetadata___logo___childrenImageSharp___id'
  | 'siteMetadata___logo___childrenMdx'
  | 'siteMetadata___logo___childrenMdx___body'
  | 'siteMetadata___logo___childrenMdx___children'
  | 'siteMetadata___logo___childrenMdx___excerpt'
  | 'siteMetadata___logo___childrenMdx___fileAbsolutePath'
  | 'siteMetadata___logo___childrenMdx___headings'
  | 'siteMetadata___logo___childrenMdx___html'
  | 'siteMetadata___logo___childrenMdx___id'
  | 'siteMetadata___logo___childrenMdx___mdxAST'
  | 'siteMetadata___logo___childrenMdx___rawBody'
  | 'siteMetadata___logo___childrenMdx___slug'
  | 'siteMetadata___logo___childrenMdx___tableOfContents'
  | 'siteMetadata___logo___childrenMdx___timeToRead'
  | 'siteMetadata___logo___childrenSitemapYaml'
  | 'siteMetadata___logo___childrenSitemapYaml___children'
  | 'siteMetadata___logo___childrenSitemapYaml___id'
  | 'siteMetadata___logo___childrenSitemapYaml___minimap'
  | 'siteMetadata___logo___childrenSitemapYaml___sub'
  | 'siteMetadata___logo___childrenSitemapYaml___title'
  | 'siteMetadata___logo___childrenSitemapYaml___url'
  | 'siteMetadata___logo___children___children'
  | 'siteMetadata___logo___children___id'
  | 'siteMetadata___logo___ctime'
  | 'siteMetadata___logo___ctimeMs'
  | 'siteMetadata___logo___dev'
  | 'siteMetadata___logo___dir'
  | 'siteMetadata___logo___ext'
  | 'siteMetadata___logo___extension'
  | 'siteMetadata___logo___gid'
  | 'siteMetadata___logo___id'
  | 'siteMetadata___logo___ino'
  | 'siteMetadata___logo___internal___content'
  | 'siteMetadata___logo___internal___contentDigest'
  | 'siteMetadata___logo___internal___description'
  | 'siteMetadata___logo___internal___fieldOwners'
  | 'siteMetadata___logo___internal___ignoreType'
  | 'siteMetadata___logo___internal___mediaType'
  | 'siteMetadata___logo___internal___owner'
  | 'siteMetadata___logo___internal___type'
  | 'siteMetadata___logo___mode'
  | 'siteMetadata___logo___modifiedTime'
  | 'siteMetadata___logo___mtime'
  | 'siteMetadata___logo___mtimeMs'
  | 'siteMetadata___logo___name'
  | 'siteMetadata___logo___nlink'
  | 'siteMetadata___logo___parent___children'
  | 'siteMetadata___logo___parent___id'
  | 'siteMetadata___logo___prettySize'
  | 'siteMetadata___logo___publicURL'
  | 'siteMetadata___logo___rdev'
  | 'siteMetadata___logo___relativeDirectory'
  | 'siteMetadata___logo___relativePath'
  | 'siteMetadata___logo___root'
  | 'siteMetadata___logo___size'
  | 'siteMetadata___logo___sourceInstanceName'
  | 'siteMetadata___logo___uid'
  | 'siteMetadata___sidebar___logos'
  | 'siteMetadata___sidebar___logos___title'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___social___links'
  | 'siteMetadata___timezone'
  | 'siteMetadata___title'
  | 'siteMetadata___twitter___username';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  childMdxSource?: Maybe<MdxSourceFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenMdxSource?: Maybe<MdxSourceFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  jsxRuntime?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'functionRoute'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'pageContext'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'path'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___id'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___name'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___resolve'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___version';

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  pageContext?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<JsonQueryOperatorInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  author: Scalars['String'];
  authorDetails?: Maybe<SiteSiteMetadataAuthorDetails>;
  description?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Mdx>;
  disqusShortname?: Maybe<Scalars['String']>;
  facebook?: Maybe<SiteSiteMetadataFacebook>;
  googleGtag?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  logo?: Maybe<File>;
  sidebar?: Maybe<SiteSiteMetadataSidebar>;
  siteUrl: Scalars['String'];
  social?: Maybe<SiteSiteMetadataSocial>;
  timezone?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  twitter?: Maybe<SiteSiteMetadataTwitter>;
};

export type SiteSiteMetadataAuthorDetails = {
  biography?: Maybe<Mdx>;
  email?: Maybe<Scalars['String']>;
  picture?: Maybe<File>;
  twitter?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorDetailsFilterInput = {
  biography?: Maybe<MdxFilterInput>;
  email?: Maybe<StringQueryOperatorInput>;
  picture?: Maybe<FileFilterInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFacebook = {
  admins?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFacebookFilterInput = {
  admins?: Maybe<StringQueryOperatorInput>;
  appId?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  authorDetails?: Maybe<SiteSiteMetadataAuthorDetailsFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  disclaimer?: Maybe<MdxFilterInput>;
  disqusShortname?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<SiteSiteMetadataFacebookFilterInput>;
  googleGtag?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  sidebar?: Maybe<SiteSiteMetadataSidebarFilterInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<SiteSiteMetadataTwitterFilterInput>;
};

export type SiteSiteMetadataSidebar = {
  logos?: Maybe<Array<Maybe<SiteSiteMetadataSidebarLogos>>>;
};

export type SiteSiteMetadataSidebarFilterInput = {
  logos?: Maybe<SiteSiteMetadataSidebarLogosFilterListInput>;
};

export type SiteSiteMetadataSidebarLogos = {
  image: File;
  title: Scalars['String'];
};

export type SiteSiteMetadataSidebarLogosFilterInput = {
  image?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSidebarLogosFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSidebarLogosFilterInput>;
};

export type SiteSiteMetadataSocial = {
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataSocialFilterInput = {
  links?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataTwitter = {
  username: Scalars['String'];
};

export type SiteSiteMetadataTwitterFilterInput = {
  username?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitemapYaml = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  minimap?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Node>;
  sub?: Maybe<Array<Maybe<SitemapYamlSub>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SitemapYamlConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitemapYamlEdge>;
  group: Array<SitemapYamlGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitemapYaml>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitemapYamlConnectionDistinctArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlConnectionGroupArgs = {
  field: SitemapYamlFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitemapYamlConnectionMaxArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlConnectionMinArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlConnectionSumArgs = {
  field: SitemapYamlFieldsEnum;
};

export type SitemapYamlEdge = {
  next?: Maybe<SitemapYaml>;
  node: SitemapYaml;
  previous?: Maybe<SitemapYaml>;
};

export type SitemapYamlFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'minimap'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
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
  | 'url';

export type SitemapYamlFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  minimap?: Maybe<BooleanQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  sub?: Maybe<SitemapYamlSubFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SitemapYamlFilterListInput = {
  elemMatch?: Maybe<SitemapYamlFilterInput>;
};

export type SitemapYamlGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitemapYamlEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitemapYamlGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitemapYaml>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitemapYamlGroupConnectionDistinctArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlGroupConnectionGroupArgs = {
  field: SitemapYamlFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitemapYamlGroupConnectionMaxArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlGroupConnectionMinArgs = {
  field: SitemapYamlFieldsEnum;
};


export type SitemapYamlGroupConnectionSumArgs = {
  field: SitemapYamlFieldsEnum;
};

export type SitemapYamlSortInput = {
  fields?: Maybe<Array<Maybe<SitemapYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitemapYamlSub = {
  sub?: Maybe<Array<Maybe<SitemapYamlSub>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SitemapYamlSubFilterInput = {
  sub?: Maybe<SitemapYamlSubFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SitemapYamlSubFilterListInput = {
  elemMatch?: Maybe<SitemapYamlSubFilterInput>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type CategoryArchiveLayoutQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type CategoryArchiveLayoutQuery = { allMdx: { edges: Array<{ node: { id: string, body: string, excerpt: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { categories?: Array<string | null | undefined> | null | undefined, date?: string | null | undefined, dateFormatted?: string | null | undefined, last_modified_at?: string | null | undefined, layout?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, title?: string | null | undefined, image?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, file?: { base: string } | {} | null | undefined } }> } };

export type IndexLayoutQueryVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type IndexLayoutQuery = { allMdx: { edges: Array<{ node: { id: string, body: string, excerpt: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { categories?: Array<string | null | undefined> | null | undefined, date?: string | null | undefined, dateFormatted?: string | null | undefined, last_modified_at?: string | null | undefined, layout?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, title?: string | null | undefined, image?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, file?: { base: string } | {} | null | undefined } }> } };

export type PostMdxFragment = { id: string, body: string, excerpt: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { categories?: Array<string | null | undefined> | null | undefined, date?: string | null | undefined, dateFormatted?: string | null | undefined, last_modified_at?: string | null | undefined, layout?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, title?: string | null | undefined, image?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, file?: { base: string } | {} | null | undefined };

export type SiblingPostMdxFragment = { id: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { dateFormatted?: string | null | undefined, title?: string | null | undefined } | null | undefined };

export type PostLayoutQueryVariables = Exact<{
  id: Scalars['String'];
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
}>;


export type PostLayoutQuery = { mdx?: { id: string, body: string, excerpt: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { categories?: Array<string | null | undefined> | null | undefined, date?: string | null | undefined, dateFormatted?: string | null | undefined, last_modified_at?: string | null | undefined, layout?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, title?: string | null | undefined, image?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, file?: { base: string } | {} | null | undefined } | null | undefined, previousMdx?: { id: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { dateFormatted?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined, nextMdx?: { id: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { dateFormatted?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined };

export type RootLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type RootLayoutQuery = { site?: { siteMetadata: { title: string, description?: string | null | undefined, author: string, siteUrl: string, lang?: string | null | undefined, googleGtag?: string | null | undefined, disqusShortname?: string | null | undefined, logo?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined, disclaimer?: { body: string } | null | undefined, authorDetails?: { email?: string | null | undefined, uri?: string | null | undefined, twitter?: string | null | undefined, picture?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined, biography?: { body: string } | null | undefined } | null | undefined, twitter?: { username: string } | null | undefined, facebook?: { appId?: string | null | undefined, publisher?: string | null | undefined, admins?: string | null | undefined } | null | undefined, social?: { links?: Array<string | null | undefined> | null | undefined } | null | undefined, sidebar?: { logos?: Array<{ title: string, image: { childImageSharp?: { gatsbyImageData: any } | null | undefined } } | null | undefined> | null | undefined } | null | undefined } } | null | undefined };

export type SidebarSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarSitemapQuery = { allSitemapYaml: { edges: Array<{ node: { title?: string | null | undefined, url?: string | null | undefined } }> } };

export type TagArchiveLayoutQueryVariables = Exact<{
  tag: Scalars['String'];
}>;


export type TagArchiveLayoutQuery = { allMdx: { edges: Array<{ node: { id: string, body: string, excerpt: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { categories?: Array<string | null | undefined> | null | undefined, date?: string | null | undefined, dateFormatted?: string | null | undefined, last_modified_at?: string | null | undefined, layout?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, title?: string | null | undefined, image?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, file?: { base: string } | {} | null | undefined } }> } };

export type ArchivePageQueryVariables = Exact<{ [key: string]: never; }>;


export type ArchivePageQuery = { allMdx: { edges: Array<{ node: { id: string, body: string, excerpt: string, fields?: { slug?: string | null | undefined } | null | undefined, frontmatter?: { categories?: Array<string | null | undefined> | null | undefined, date?: string | null | undefined, dateFormatted?: string | null | undefined, last_modified_at?: string | null | undefined, layout?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, title?: string | null | undefined, image?: { publicURL?: string | null | undefined, childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, file?: { base: string } | {} | null | undefined } }> } };

export type SitemapPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SitemapPageQuery = { allSitemapYaml: { edges: Array<{ node: { title?: string | null | undefined, url?: string | null | undefined, sub?: Array<{ title?: string | null | undefined, url?: string | null | undefined, sub?: Array<{ title?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } }> } };
