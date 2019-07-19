export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type DataYaml = Node & {
  author?: Maybe<DataYamlAuthor>,
  disclaimer?: Maybe<Mdx>,
  logo?: Maybe<File>,
  sidebar?: Maybe<DataYamlSidebar>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  twitter?: Maybe<DataYamlTwitter>,
  facebook?: Maybe<DataYamlFacebook>,
  social?: Maybe<DataYamlSocial>,
  google_analytics?: Maybe<Scalars['String']>,
  disqus?: Maybe<DataYamlDisqus>,
  addthis_profile?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childrenMdxSource?: Maybe<Array<Maybe<MdxSource>>>,
};

export type DataYamlAuthor = {
  biography?: Maybe<Mdx>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  picture?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
};

export type DataYamlAuthorFilterInput = {
  biography?: Maybe<MdxFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  uri?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
};

export type DataYamlConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DataYamlEdge>,
  nodes: Array<DataYaml>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DataYamlGroupConnection>,
};


export type DataYamlConnectionDistinctArgs = {
  field: DataYamlFieldsEnum
};


export type DataYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DataYamlFieldsEnum
};

export type DataYamlDisqus = {
  shortname?: Maybe<Scalars['String']>,
  website_url?: Maybe<Scalars['String']>,
};

export type DataYamlDisqusFilterInput = {
  shortname?: Maybe<StringQueryOperatorInput>,
  website_url?: Maybe<StringQueryOperatorInput>,
};

export type DataYamlEdge = {
  next?: Maybe<DataYaml>,
  node: DataYaml,
  previous?: Maybe<DataYaml>,
};

export type DataYamlFacebook = {
  app_id?: Maybe<Scalars['Float']>,
  publisher?: Maybe<Scalars['Float']>,
  admins?: Maybe<Scalars['Int']>,
};

export type DataYamlFacebookFilterInput = {
  app_id?: Maybe<FloatQueryOperatorInput>,
  publisher?: Maybe<FloatQueryOperatorInput>,
  admins?: Maybe<IntQueryOperatorInput>,
};

export enum DataYamlFieldsEnum {
  AuthorBiographyFrontmatterCategories = 'author___biography___frontmatter___categories',
  AuthorBiographyFrontmatterDate = 'author___biography___frontmatter___date',
  AuthorBiographyFrontmatterDateFormatted = 'author___biography___frontmatter___dateFormatted',
  AuthorBiographyFrontmatterLastModifiedAt = 'author___biography___frontmatter___last_modified_at',
  AuthorBiographyFrontmatterLayout = 'author___biography___frontmatter___layout',
  AuthorBiographyFrontmatterTags = 'author___biography___frontmatter___tags',
  AuthorBiographyFrontmatterTitle = 'author___biography___frontmatter___title',
  AuthorBiographyFrontmatterParent = 'author___biography___frontmatter____PARENT',
  AuthorBiographyFrontmatterId = 'author___biography___frontmatter___id',
  AuthorBiographyFrontmatterAuthor = 'author___biography___frontmatter___author',
  AuthorBiographyFrontmatterGuid = 'author___biography___frontmatter___guid',
  AuthorBiographyFrontmatterSharingDisabled = 'author___biography___frontmatter___sharing_disabled',
  AuthorBiographyFrontmatterDsqThreadId = 'author___biography___frontmatter___dsq_thread_id',
  AuthorBiographyFrontmatterFbAuthorPostId = 'author___biography___frontmatter___fb_author_post_id',
  AuthorBiographyFrontmatterPermalink = 'author___biography___frontmatter___permalink',
  AuthorBiographyFrontmatterFbFanPagePostId = 'author___biography___frontmatter___fb_fan_page_post_id',
  AuthorBiographyFrontmatterInstantArticlesSubmissionId = 'author___biography___frontmatter___instant_articles_submission_id',
  AuthorBiographyFrontmatterDsqNeedsSync = 'author___biography___frontmatter___dsq_needs_sync',
  AuthorBiographyFrontmatterInstantArticlesForceSubmit = 'author___biography___frontmatter___instant_articles_force_submit',
  AuthorBiographyRawBody = 'author___biography___rawBody',
  AuthorBiographyFileAbsolutePath = 'author___biography___fileAbsolutePath',
  AuthorBiographyFieldsSlug = 'author___biography___fields___slug',
  AuthorBiographyCodeBody = 'author___biography___code___body',
  AuthorBiographyCodeScope = 'author___biography___code___scope',
  AuthorBiographyExcerpt = 'author___biography___excerpt',
  AuthorBiographyHeadings = 'author___biography___headings',
  AuthorBiographyHeadingsValue = 'author___biography___headings___value',
  AuthorBiographyHeadingsDepth = 'author___biography___headings___depth',
  AuthorBiographyHtml = 'author___biography___html',
  AuthorBiographyTableOfContents = 'author___biography___tableOfContents',
  AuthorBiographyTimeToRead = 'author___biography___timeToRead',
  AuthorBiographyWordCountParagraphs = 'author___biography___wordCount___paragraphs',
  AuthorBiographyWordCountSentences = 'author___biography___wordCount___sentences',
  AuthorBiographyWordCountWords = 'author___biography___wordCount___words',
  AuthorBiographyId = 'author___biography___id',
  AuthorBiographyParentId = 'author___biography___parent___id',
  AuthorBiographyParentChildren = 'author___biography___parent___children',
  AuthorBiographyChildren = 'author___biography___children',
  AuthorBiographyChildrenId = 'author___biography___children___id',
  AuthorBiographyChildrenChildren = 'author___biography___children___children',
  AuthorBiographyInternalContent = 'author___biography___internal___content',
  AuthorBiographyInternalContentDigest = 'author___biography___internal___contentDigest',
  AuthorBiographyInternalDescription = 'author___biography___internal___description',
  AuthorBiographyInternalFieldOwners = 'author___biography___internal___fieldOwners',
  AuthorBiographyInternalIgnoreType = 'author___biography___internal___ignoreType',
  AuthorBiographyInternalMediaType = 'author___biography___internal___mediaType',
  AuthorBiographyInternalOwner = 'author___biography___internal___owner',
  AuthorBiographyInternalType = 'author___biography___internal___type',
  AuthorName = 'author___name',
  AuthorEmail = 'author___email',
  AuthorUri = 'author___uri',
  AuthorPicture = 'author___picture',
  AuthorTwitter = 'author___twitter',
  DisclaimerFrontmatterCategories = 'disclaimer___frontmatter___categories',
  DisclaimerFrontmatterDate = 'disclaimer___frontmatter___date',
  DisclaimerFrontmatterDateFormatted = 'disclaimer___frontmatter___dateFormatted',
  DisclaimerFrontmatterImageBirthtime = 'disclaimer___frontmatter___image___birthtime',
  DisclaimerFrontmatterImageBirthtimeMs = 'disclaimer___frontmatter___image___birthtimeMs',
  DisclaimerFrontmatterImageSourceInstanceName = 'disclaimer___frontmatter___image___sourceInstanceName',
  DisclaimerFrontmatterImageAbsolutePath = 'disclaimer___frontmatter___image___absolutePath',
  DisclaimerFrontmatterImageRelativePath = 'disclaimer___frontmatter___image___relativePath',
  DisclaimerFrontmatterImageExtension = 'disclaimer___frontmatter___image___extension',
  DisclaimerFrontmatterImageSize = 'disclaimer___frontmatter___image___size',
  DisclaimerFrontmatterImagePrettySize = 'disclaimer___frontmatter___image___prettySize',
  DisclaimerFrontmatterImageModifiedTime = 'disclaimer___frontmatter___image___modifiedTime',
  DisclaimerFrontmatterImageAccessTime = 'disclaimer___frontmatter___image___accessTime',
  DisclaimerFrontmatterImageChangeTime = 'disclaimer___frontmatter___image___changeTime',
  DisclaimerFrontmatterImageBirthTime = 'disclaimer___frontmatter___image___birthTime',
  DisclaimerFrontmatterImageRoot = 'disclaimer___frontmatter___image___root',
  DisclaimerFrontmatterImageDir = 'disclaimer___frontmatter___image___dir',
  DisclaimerFrontmatterImageBase = 'disclaimer___frontmatter___image___base',
  DisclaimerFrontmatterImageExt = 'disclaimer___frontmatter___image___ext',
  DisclaimerFrontmatterImageName = 'disclaimer___frontmatter___image___name',
  DisclaimerFrontmatterImageRelativeDirectory = 'disclaimer___frontmatter___image___relativeDirectory',
  DisclaimerFrontmatterImageDev = 'disclaimer___frontmatter___image___dev',
  DisclaimerFrontmatterImageMode = 'disclaimer___frontmatter___image___mode',
  DisclaimerFrontmatterImageNlink = 'disclaimer___frontmatter___image___nlink',
  DisclaimerFrontmatterImageUid = 'disclaimer___frontmatter___image___uid',
  DisclaimerFrontmatterImageGid = 'disclaimer___frontmatter___image___gid',
  DisclaimerFrontmatterImageRdev = 'disclaimer___frontmatter___image___rdev',
  DisclaimerFrontmatterImageIno = 'disclaimer___frontmatter___image___ino',
  DisclaimerFrontmatterImageAtimeMs = 'disclaimer___frontmatter___image___atimeMs',
  DisclaimerFrontmatterImageMtimeMs = 'disclaimer___frontmatter___image___mtimeMs',
  DisclaimerFrontmatterImageCtimeMs = 'disclaimer___frontmatter___image___ctimeMs',
  DisclaimerFrontmatterImageAtime = 'disclaimer___frontmatter___image___atime',
  DisclaimerFrontmatterImageMtime = 'disclaimer___frontmatter___image___mtime',
  DisclaimerFrontmatterImageCtime = 'disclaimer___frontmatter___image___ctime',
  DisclaimerFrontmatterImagePublicUrl = 'disclaimer___frontmatter___image___publicURL',
  DisclaimerFrontmatterImageId = 'disclaimer___frontmatter___image___id',
  DisclaimerFrontmatterImageChildren = 'disclaimer___frontmatter___image___children',
  DisclaimerFrontmatterImageChildrenSitemapYaml = 'disclaimer___frontmatter___image___childrenSitemapYaml',
  DisclaimerFrontmatterLastModifiedAt = 'disclaimer___frontmatter___last_modified_at',
  DisclaimerFrontmatterLayout = 'disclaimer___frontmatter___layout',
  DisclaimerFrontmatterTags = 'disclaimer___frontmatter___tags',
  DisclaimerFrontmatterTitle = 'disclaimer___frontmatter___title',
  DisclaimerFrontmatterParent = 'disclaimer___frontmatter____PARENT',
  DisclaimerFrontmatterId = 'disclaimer___frontmatter___id',
  DisclaimerFrontmatterAuthor = 'disclaimer___frontmatter___author',
  DisclaimerFrontmatterGuid = 'disclaimer___frontmatter___guid',
  DisclaimerFrontmatterSharingDisabled = 'disclaimer___frontmatter___sharing_disabled',
  DisclaimerFrontmatterDsqThreadId = 'disclaimer___frontmatter___dsq_thread_id',
  DisclaimerFrontmatterFbAuthorPostId = 'disclaimer___frontmatter___fb_author_post_id',
  DisclaimerFrontmatterPermalink = 'disclaimer___frontmatter___permalink',
  DisclaimerFrontmatterFbFanPagePostId = 'disclaimer___frontmatter___fb_fan_page_post_id',
  DisclaimerFrontmatterInstantArticlesSubmissionId = 'disclaimer___frontmatter___instant_articles_submission_id',
  DisclaimerFrontmatterDsqNeedsSync = 'disclaimer___frontmatter___dsq_needs_sync',
  DisclaimerFrontmatterInstantArticlesForceSubmit = 'disclaimer___frontmatter___instant_articles_force_submit',
  DisclaimerRawBody = 'disclaimer___rawBody',
  DisclaimerFileAbsolutePath = 'disclaimer___fileAbsolutePath',
  DisclaimerFieldsSlug = 'disclaimer___fields___slug',
  DisclaimerCodeBody = 'disclaimer___code___body',
  DisclaimerCodeScope = 'disclaimer___code___scope',
  DisclaimerExcerpt = 'disclaimer___excerpt',
  DisclaimerHeadings = 'disclaimer___headings',
  DisclaimerHeadingsValue = 'disclaimer___headings___value',
  DisclaimerHeadingsDepth = 'disclaimer___headings___depth',
  DisclaimerHtml = 'disclaimer___html',
  DisclaimerTableOfContents = 'disclaimer___tableOfContents',
  DisclaimerTimeToRead = 'disclaimer___timeToRead',
  DisclaimerWordCountParagraphs = 'disclaimer___wordCount___paragraphs',
  DisclaimerWordCountSentences = 'disclaimer___wordCount___sentences',
  DisclaimerWordCountWords = 'disclaimer___wordCount___words',
  DisclaimerId = 'disclaimer___id',
  DisclaimerParentId = 'disclaimer___parent___id',
  DisclaimerParentParentId = 'disclaimer___parent___parent___id',
  DisclaimerParentParentChildren = 'disclaimer___parent___parent___children',
  DisclaimerParentChildren = 'disclaimer___parent___children',
  DisclaimerParentChildrenId = 'disclaimer___parent___children___id',
  DisclaimerParentChildrenChildren = 'disclaimer___parent___children___children',
  DisclaimerParentInternalContent = 'disclaimer___parent___internal___content',
  DisclaimerParentInternalContentDigest = 'disclaimer___parent___internal___contentDigest',
  DisclaimerParentInternalDescription = 'disclaimer___parent___internal___description',
  DisclaimerParentInternalFieldOwners = 'disclaimer___parent___internal___fieldOwners',
  DisclaimerParentInternalIgnoreType = 'disclaimer___parent___internal___ignoreType',
  DisclaimerParentInternalMediaType = 'disclaimer___parent___internal___mediaType',
  DisclaimerParentInternalOwner = 'disclaimer___parent___internal___owner',
  DisclaimerParentInternalType = 'disclaimer___parent___internal___type',
  DisclaimerChildren = 'disclaimer___children',
  DisclaimerChildrenId = 'disclaimer___children___id',
  DisclaimerChildrenParentId = 'disclaimer___children___parent___id',
  DisclaimerChildrenParentChildren = 'disclaimer___children___parent___children',
  DisclaimerChildrenChildren = 'disclaimer___children___children',
  DisclaimerChildrenChildrenId = 'disclaimer___children___children___id',
  DisclaimerChildrenChildrenChildren = 'disclaimer___children___children___children',
  DisclaimerChildrenInternalContent = 'disclaimer___children___internal___content',
  DisclaimerChildrenInternalContentDigest = 'disclaimer___children___internal___contentDigest',
  DisclaimerChildrenInternalDescription = 'disclaimer___children___internal___description',
  DisclaimerChildrenInternalFieldOwners = 'disclaimer___children___internal___fieldOwners',
  DisclaimerChildrenInternalIgnoreType = 'disclaimer___children___internal___ignoreType',
  DisclaimerChildrenInternalMediaType = 'disclaimer___children___internal___mediaType',
  DisclaimerChildrenInternalOwner = 'disclaimer___children___internal___owner',
  DisclaimerChildrenInternalType = 'disclaimer___children___internal___type',
  DisclaimerInternalContent = 'disclaimer___internal___content',
  DisclaimerInternalContentDigest = 'disclaimer___internal___contentDigest',
  DisclaimerInternalDescription = 'disclaimer___internal___description',
  DisclaimerInternalFieldOwners = 'disclaimer___internal___fieldOwners',
  DisclaimerInternalIgnoreType = 'disclaimer___internal___ignoreType',
  DisclaimerInternalMediaType = 'disclaimer___internal___mediaType',
  DisclaimerInternalOwner = 'disclaimer___internal___owner',
  DisclaimerInternalType = 'disclaimer___internal___type',
  LogoBirthtime = 'logo___birthtime',
  LogoBirthtimeMs = 'logo___birthtimeMs',
  LogoSourceInstanceName = 'logo___sourceInstanceName',
  LogoAbsolutePath = 'logo___absolutePath',
  LogoRelativePath = 'logo___relativePath',
  LogoExtension = 'logo___extension',
  LogoSize = 'logo___size',
  LogoPrettySize = 'logo___prettySize',
  LogoModifiedTime = 'logo___modifiedTime',
  LogoAccessTime = 'logo___accessTime',
  LogoChangeTime = 'logo___changeTime',
  LogoBirthTime = 'logo___birthTime',
  LogoRoot = 'logo___root',
  LogoDir = 'logo___dir',
  LogoBase = 'logo___base',
  LogoExt = 'logo___ext',
  LogoName = 'logo___name',
  LogoRelativeDirectory = 'logo___relativeDirectory',
  LogoDev = 'logo___dev',
  LogoMode = 'logo___mode',
  LogoNlink = 'logo___nlink',
  LogoUid = 'logo___uid',
  LogoGid = 'logo___gid',
  LogoRdev = 'logo___rdev',
  LogoIno = 'logo___ino',
  LogoAtimeMs = 'logo___atimeMs',
  LogoMtimeMs = 'logo___mtimeMs',
  LogoCtimeMs = 'logo___ctimeMs',
  LogoAtime = 'logo___atime',
  LogoMtime = 'logo___mtime',
  LogoCtime = 'logo___ctime',
  LogoPublicUrl = 'logo___publicURL',
  LogoId = 'logo___id',
  LogoParentId = 'logo___parent___id',
  LogoParentParentId = 'logo___parent___parent___id',
  LogoParentParentChildren = 'logo___parent___parent___children',
  LogoParentChildren = 'logo___parent___children',
  LogoParentChildrenId = 'logo___parent___children___id',
  LogoParentChildrenChildren = 'logo___parent___children___children',
  LogoParentInternalContent = 'logo___parent___internal___content',
  LogoParentInternalContentDigest = 'logo___parent___internal___contentDigest',
  LogoParentInternalDescription = 'logo___parent___internal___description',
  LogoParentInternalFieldOwners = 'logo___parent___internal___fieldOwners',
  LogoParentInternalIgnoreType = 'logo___parent___internal___ignoreType',
  LogoParentInternalMediaType = 'logo___parent___internal___mediaType',
  LogoParentInternalOwner = 'logo___parent___internal___owner',
  LogoParentInternalType = 'logo___parent___internal___type',
  LogoChildren = 'logo___children',
  LogoChildrenId = 'logo___children___id',
  LogoChildrenParentId = 'logo___children___parent___id',
  LogoChildrenParentChildren = 'logo___children___parent___children',
  LogoChildrenChildren = 'logo___children___children',
  LogoChildrenChildrenId = 'logo___children___children___id',
  LogoChildrenChildrenChildren = 'logo___children___children___children',
  LogoChildrenInternalContent = 'logo___children___internal___content',
  LogoChildrenInternalContentDigest = 'logo___children___internal___contentDigest',
  LogoChildrenInternalDescription = 'logo___children___internal___description',
  LogoChildrenInternalFieldOwners = 'logo___children___internal___fieldOwners',
  LogoChildrenInternalIgnoreType = 'logo___children___internal___ignoreType',
  LogoChildrenInternalMediaType = 'logo___children___internal___mediaType',
  LogoChildrenInternalOwner = 'logo___children___internal___owner',
  LogoChildrenInternalType = 'logo___children___internal___type',
  LogoInternalContent = 'logo___internal___content',
  LogoInternalContentDigest = 'logo___internal___contentDigest',
  LogoInternalDescription = 'logo___internal___description',
  LogoInternalFieldOwners = 'logo___internal___fieldOwners',
  LogoInternalIgnoreType = 'logo___internal___ignoreType',
  LogoInternalMediaType = 'logo___internal___mediaType',
  LogoInternalOwner = 'logo___internal___owner',
  LogoInternalType = 'logo___internal___type',
  LogoChildImageSharpId = 'logo___childImageSharp___id',
  LogoChildImageSharpFixedBase64 = 'logo___childImageSharp___fixed___base64',
  LogoChildImageSharpFixedTracedSvg = 'logo___childImageSharp___fixed___tracedSVG',
  LogoChildImageSharpFixedAspectRatio = 'logo___childImageSharp___fixed___aspectRatio',
  LogoChildImageSharpFixedWidth = 'logo___childImageSharp___fixed___width',
  LogoChildImageSharpFixedHeight = 'logo___childImageSharp___fixed___height',
  LogoChildImageSharpFixedSrc = 'logo___childImageSharp___fixed___src',
  LogoChildImageSharpFixedSrcSet = 'logo___childImageSharp___fixed___srcSet',
  LogoChildImageSharpFixedSrcWebp = 'logo___childImageSharp___fixed___srcWebp',
  LogoChildImageSharpFixedSrcSetWebp = 'logo___childImageSharp___fixed___srcSetWebp',
  LogoChildImageSharpFixedOriginalName = 'logo___childImageSharp___fixed___originalName',
  LogoChildImageSharpResolutionsBase64 = 'logo___childImageSharp___resolutions___base64',
  LogoChildImageSharpResolutionsTracedSvg = 'logo___childImageSharp___resolutions___tracedSVG',
  LogoChildImageSharpResolutionsAspectRatio = 'logo___childImageSharp___resolutions___aspectRatio',
  LogoChildImageSharpResolutionsWidth = 'logo___childImageSharp___resolutions___width',
  LogoChildImageSharpResolutionsHeight = 'logo___childImageSharp___resolutions___height',
  LogoChildImageSharpResolutionsSrc = 'logo___childImageSharp___resolutions___src',
  LogoChildImageSharpResolutionsSrcSet = 'logo___childImageSharp___resolutions___srcSet',
  LogoChildImageSharpResolutionsSrcWebp = 'logo___childImageSharp___resolutions___srcWebp',
  LogoChildImageSharpResolutionsSrcSetWebp = 'logo___childImageSharp___resolutions___srcSetWebp',
  LogoChildImageSharpResolutionsOriginalName = 'logo___childImageSharp___resolutions___originalName',
  LogoChildImageSharpFluidBase64 = 'logo___childImageSharp___fluid___base64',
  LogoChildImageSharpFluidTracedSvg = 'logo___childImageSharp___fluid___tracedSVG',
  LogoChildImageSharpFluidAspectRatio = 'logo___childImageSharp___fluid___aspectRatio',
  LogoChildImageSharpFluidSrc = 'logo___childImageSharp___fluid___src',
  LogoChildImageSharpFluidSrcSet = 'logo___childImageSharp___fluid___srcSet',
  LogoChildImageSharpFluidSrcWebp = 'logo___childImageSharp___fluid___srcWebp',
  LogoChildImageSharpFluidSrcSetWebp = 'logo___childImageSharp___fluid___srcSetWebp',
  LogoChildImageSharpFluidSizes = 'logo___childImageSharp___fluid___sizes',
  LogoChildImageSharpFluidOriginalImg = 'logo___childImageSharp___fluid___originalImg',
  LogoChildImageSharpFluidOriginalName = 'logo___childImageSharp___fluid___originalName',
  LogoChildImageSharpFluidPresentationWidth = 'logo___childImageSharp___fluid___presentationWidth',
  LogoChildImageSharpFluidPresentationHeight = 'logo___childImageSharp___fluid___presentationHeight',
  LogoChildImageSharpSizesBase64 = 'logo___childImageSharp___sizes___base64',
  LogoChildImageSharpSizesTracedSvg = 'logo___childImageSharp___sizes___tracedSVG',
  LogoChildImageSharpSizesAspectRatio = 'logo___childImageSharp___sizes___aspectRatio',
  LogoChildImageSharpSizesSrc = 'logo___childImageSharp___sizes___src',
  LogoChildImageSharpSizesSrcSet = 'logo___childImageSharp___sizes___srcSet',
  LogoChildImageSharpSizesSrcWebp = 'logo___childImageSharp___sizes___srcWebp',
  LogoChildImageSharpSizesSrcSetWebp = 'logo___childImageSharp___sizes___srcSetWebp',
  LogoChildImageSharpSizesSizes = 'logo___childImageSharp___sizes___sizes',
  LogoChildImageSharpSizesOriginalImg = 'logo___childImageSharp___sizes___originalImg',
  LogoChildImageSharpSizesOriginalName = 'logo___childImageSharp___sizes___originalName',
  LogoChildImageSharpSizesPresentationWidth = 'logo___childImageSharp___sizes___presentationWidth',
  LogoChildImageSharpSizesPresentationHeight = 'logo___childImageSharp___sizes___presentationHeight',
  LogoChildImageSharpOriginalWidth = 'logo___childImageSharp___original___width',
  LogoChildImageSharpOriginalHeight = 'logo___childImageSharp___original___height',
  LogoChildImageSharpOriginalSrc = 'logo___childImageSharp___original___src',
  LogoChildImageSharpResizeSrc = 'logo___childImageSharp___resize___src',
  LogoChildImageSharpResizeTracedSvg = 'logo___childImageSharp___resize___tracedSVG',
  LogoChildImageSharpResizeWidth = 'logo___childImageSharp___resize___width',
  LogoChildImageSharpResizeHeight = 'logo___childImageSharp___resize___height',
  LogoChildImageSharpResizeAspectRatio = 'logo___childImageSharp___resize___aspectRatio',
  LogoChildImageSharpResizeOriginalName = 'logo___childImageSharp___resize___originalName',
  LogoChildImageSharpParentId = 'logo___childImageSharp___parent___id',
  LogoChildImageSharpParentChildren = 'logo___childImageSharp___parent___children',
  LogoChildImageSharpChildren = 'logo___childImageSharp___children',
  LogoChildImageSharpChildrenId = 'logo___childImageSharp___children___id',
  LogoChildImageSharpChildrenChildren = 'logo___childImageSharp___children___children',
  LogoChildImageSharpInternalContent = 'logo___childImageSharp___internal___content',
  LogoChildImageSharpInternalContentDigest = 'logo___childImageSharp___internal___contentDigest',
  LogoChildImageSharpInternalDescription = 'logo___childImageSharp___internal___description',
  LogoChildImageSharpInternalFieldOwners = 'logo___childImageSharp___internal___fieldOwners',
  LogoChildImageSharpInternalIgnoreType = 'logo___childImageSharp___internal___ignoreType',
  LogoChildImageSharpInternalMediaType = 'logo___childImageSharp___internal___mediaType',
  LogoChildImageSharpInternalOwner = 'logo___childImageSharp___internal___owner',
  LogoChildImageSharpInternalType = 'logo___childImageSharp___internal___type',
  LogoChildDataYamlAuthorName = 'logo___childDataYaml___author___name',
  LogoChildDataYamlAuthorEmail = 'logo___childDataYaml___author___email',
  LogoChildDataYamlAuthorUri = 'logo___childDataYaml___author___uri',
  LogoChildDataYamlAuthorPicture = 'logo___childDataYaml___author___picture',
  LogoChildDataYamlAuthorTwitter = 'logo___childDataYaml___author___twitter',
  LogoChildDataYamlDisclaimerRawBody = 'logo___childDataYaml___disclaimer___rawBody',
  LogoChildDataYamlDisclaimerFileAbsolutePath = 'logo___childDataYaml___disclaimer___fileAbsolutePath',
  LogoChildDataYamlDisclaimerExcerpt = 'logo___childDataYaml___disclaimer___excerpt',
  LogoChildDataYamlDisclaimerHeadings = 'logo___childDataYaml___disclaimer___headings',
  LogoChildDataYamlDisclaimerHtml = 'logo___childDataYaml___disclaimer___html',
  LogoChildDataYamlDisclaimerTableOfContents = 'logo___childDataYaml___disclaimer___tableOfContents',
  LogoChildDataYamlDisclaimerTimeToRead = 'logo___childDataYaml___disclaimer___timeToRead',
  LogoChildDataYamlDisclaimerId = 'logo___childDataYaml___disclaimer___id',
  LogoChildDataYamlDisclaimerChildren = 'logo___childDataYaml___disclaimer___children',
  LogoChildDataYamlLogoBirthtime = 'logo___childDataYaml___logo___birthtime',
  LogoChildDataYamlLogoBirthtimeMs = 'logo___childDataYaml___logo___birthtimeMs',
  LogoChildDataYamlLogoSourceInstanceName = 'logo___childDataYaml___logo___sourceInstanceName',
  LogoChildDataYamlLogoAbsolutePath = 'logo___childDataYaml___logo___absolutePath',
  LogoChildDataYamlLogoRelativePath = 'logo___childDataYaml___logo___relativePath',
  LogoChildDataYamlLogoExtension = 'logo___childDataYaml___logo___extension',
  LogoChildDataYamlLogoSize = 'logo___childDataYaml___logo___size',
  LogoChildDataYamlLogoPrettySize = 'logo___childDataYaml___logo___prettySize',
  LogoChildDataYamlLogoModifiedTime = 'logo___childDataYaml___logo___modifiedTime',
  LogoChildDataYamlLogoAccessTime = 'logo___childDataYaml___logo___accessTime',
  LogoChildDataYamlLogoChangeTime = 'logo___childDataYaml___logo___changeTime',
  LogoChildDataYamlLogoBirthTime = 'logo___childDataYaml___logo___birthTime',
  LogoChildDataYamlLogoRoot = 'logo___childDataYaml___logo___root',
  LogoChildDataYamlLogoDir = 'logo___childDataYaml___logo___dir',
  LogoChildDataYamlLogoBase = 'logo___childDataYaml___logo___base',
  LogoChildDataYamlLogoExt = 'logo___childDataYaml___logo___ext',
  LogoChildDataYamlLogoName = 'logo___childDataYaml___logo___name',
  LogoChildDataYamlLogoRelativeDirectory = 'logo___childDataYaml___logo___relativeDirectory',
  LogoChildDataYamlLogoDev = 'logo___childDataYaml___logo___dev',
  LogoChildDataYamlLogoMode = 'logo___childDataYaml___logo___mode',
  LogoChildDataYamlLogoNlink = 'logo___childDataYaml___logo___nlink',
  LogoChildDataYamlLogoUid = 'logo___childDataYaml___logo___uid',
  LogoChildDataYamlLogoGid = 'logo___childDataYaml___logo___gid',
  LogoChildDataYamlLogoRdev = 'logo___childDataYaml___logo___rdev',
  LogoChildDataYamlLogoIno = 'logo___childDataYaml___logo___ino',
  LogoChildDataYamlLogoAtimeMs = 'logo___childDataYaml___logo___atimeMs',
  LogoChildDataYamlLogoMtimeMs = 'logo___childDataYaml___logo___mtimeMs',
  LogoChildDataYamlLogoCtimeMs = 'logo___childDataYaml___logo___ctimeMs',
  LogoChildDataYamlLogoAtime = 'logo___childDataYaml___logo___atime',
  LogoChildDataYamlLogoMtime = 'logo___childDataYaml___logo___mtime',
  LogoChildDataYamlLogoCtime = 'logo___childDataYaml___logo___ctime',
  LogoChildDataYamlLogoPublicUrl = 'logo___childDataYaml___logo___publicURL',
  LogoChildDataYamlLogoId = 'logo___childDataYaml___logo___id',
  LogoChildDataYamlLogoChildren = 'logo___childDataYaml___logo___children',
  LogoChildDataYamlLogoChildrenSitemapYaml = 'logo___childDataYaml___logo___childrenSitemapYaml',
  LogoChildDataYamlSidebarLogos = 'logo___childDataYaml___sidebar___logos',
  LogoChildDataYamlTitle = 'logo___childDataYaml___title',
  LogoChildDataYamlDescription = 'logo___childDataYaml___description',
  LogoChildDataYamlLang = 'logo___childDataYaml___lang',
  LogoChildDataYamlTimezone = 'logo___childDataYaml___timezone',
  LogoChildDataYamlTwitterUsername = 'logo___childDataYaml___twitter___username',
  LogoChildDataYamlFacebookAppId = 'logo___childDataYaml___facebook___app_id',
  LogoChildDataYamlFacebookPublisher = 'logo___childDataYaml___facebook___publisher',
  LogoChildDataYamlFacebookAdmins = 'logo___childDataYaml___facebook___admins',
  LogoChildDataYamlSocialName = 'logo___childDataYaml___social___name',
  LogoChildDataYamlSocialLinks = 'logo___childDataYaml___social___links',
  LogoChildDataYamlGoogleAnalytics = 'logo___childDataYaml___google_analytics',
  LogoChildDataYamlDisqusShortname = 'logo___childDataYaml___disqus___shortname',
  LogoChildDataYamlDisqusWebsiteUrl = 'logo___childDataYaml___disqus___website_url',
  LogoChildDataYamlAddthisProfile = 'logo___childDataYaml___addthis_profile',
  LogoChildDataYamlId = 'logo___childDataYaml___id',
  LogoChildDataYamlParentId = 'logo___childDataYaml___parent___id',
  LogoChildDataYamlParentChildren = 'logo___childDataYaml___parent___children',
  LogoChildDataYamlChildren = 'logo___childDataYaml___children',
  LogoChildDataYamlChildrenId = 'logo___childDataYaml___children___id',
  LogoChildDataYamlChildrenChildren = 'logo___childDataYaml___children___children',
  LogoChildDataYamlInternalContent = 'logo___childDataYaml___internal___content',
  LogoChildDataYamlInternalContentDigest = 'logo___childDataYaml___internal___contentDigest',
  LogoChildDataYamlInternalDescription = 'logo___childDataYaml___internal___description',
  LogoChildDataYamlInternalFieldOwners = 'logo___childDataYaml___internal___fieldOwners',
  LogoChildDataYamlInternalIgnoreType = 'logo___childDataYaml___internal___ignoreType',
  LogoChildDataYamlInternalMediaType = 'logo___childDataYaml___internal___mediaType',
  LogoChildDataYamlInternalOwner = 'logo___childDataYaml___internal___owner',
  LogoChildDataYamlInternalType = 'logo___childDataYaml___internal___type',
  LogoChildDataYamlChildrenMdxSource = 'logo___childDataYaml___childrenMdxSource',
  LogoChildDataYamlChildrenMdxSourceId = 'logo___childDataYaml___childrenMdxSource___id',
  LogoChildDataYamlChildrenMdxSourceChildren = 'logo___childDataYaml___childrenMdxSource___children',
  LogoChildrenSitemapYaml = 'logo___childrenSitemapYaml',
  LogoChildrenSitemapYamlSub = 'logo___childrenSitemapYaml___sub',
  LogoChildrenSitemapYamlSubSub = 'logo___childrenSitemapYaml___sub___sub',
  LogoChildrenSitemapYamlSubTitle = 'logo___childrenSitemapYaml___sub___title',
  LogoChildrenSitemapYamlSubUrl = 'logo___childrenSitemapYaml___sub___url',
  LogoChildrenSitemapYamlTitle = 'logo___childrenSitemapYaml___title',
  LogoChildrenSitemapYamlUrl = 'logo___childrenSitemapYaml___url',
  LogoChildrenSitemapYamlMinimap = 'logo___childrenSitemapYaml___minimap',
  LogoChildrenSitemapYamlId = 'logo___childrenSitemapYaml___id',
  LogoChildrenSitemapYamlParentId = 'logo___childrenSitemapYaml___parent___id',
  LogoChildrenSitemapYamlParentChildren = 'logo___childrenSitemapYaml___parent___children',
  LogoChildrenSitemapYamlChildren = 'logo___childrenSitemapYaml___children',
  LogoChildrenSitemapYamlChildrenId = 'logo___childrenSitemapYaml___children___id',
  LogoChildrenSitemapYamlChildrenChildren = 'logo___childrenSitemapYaml___children___children',
  LogoChildrenSitemapYamlInternalContent = 'logo___childrenSitemapYaml___internal___content',
  LogoChildrenSitemapYamlInternalContentDigest = 'logo___childrenSitemapYaml___internal___contentDigest',
  LogoChildrenSitemapYamlInternalDescription = 'logo___childrenSitemapYaml___internal___description',
  LogoChildrenSitemapYamlInternalFieldOwners = 'logo___childrenSitemapYaml___internal___fieldOwners',
  LogoChildrenSitemapYamlInternalIgnoreType = 'logo___childrenSitemapYaml___internal___ignoreType',
  LogoChildrenSitemapYamlInternalMediaType = 'logo___childrenSitemapYaml___internal___mediaType',
  LogoChildrenSitemapYamlInternalOwner = 'logo___childrenSitemapYaml___internal___owner',
  LogoChildrenSitemapYamlInternalType = 'logo___childrenSitemapYaml___internal___type',
  LogoChildMdxFrontmatterCategories = 'logo___childMdx___frontmatter___categories',
  LogoChildMdxFrontmatterDate = 'logo___childMdx___frontmatter___date',
  LogoChildMdxFrontmatterDateFormatted = 'logo___childMdx___frontmatter___dateFormatted',
  LogoChildMdxFrontmatterLastModifiedAt = 'logo___childMdx___frontmatter___last_modified_at',
  LogoChildMdxFrontmatterLayout = 'logo___childMdx___frontmatter___layout',
  LogoChildMdxFrontmatterTags = 'logo___childMdx___frontmatter___tags',
  LogoChildMdxFrontmatterTitle = 'logo___childMdx___frontmatter___title',
  LogoChildMdxFrontmatterParent = 'logo___childMdx___frontmatter____PARENT',
  LogoChildMdxFrontmatterId = 'logo___childMdx___frontmatter___id',
  LogoChildMdxFrontmatterAuthor = 'logo___childMdx___frontmatter___author',
  LogoChildMdxFrontmatterGuid = 'logo___childMdx___frontmatter___guid',
  LogoChildMdxFrontmatterSharingDisabled = 'logo___childMdx___frontmatter___sharing_disabled',
  LogoChildMdxFrontmatterDsqThreadId = 'logo___childMdx___frontmatter___dsq_thread_id',
  LogoChildMdxFrontmatterFbAuthorPostId = 'logo___childMdx___frontmatter___fb_author_post_id',
  LogoChildMdxFrontmatterPermalink = 'logo___childMdx___frontmatter___permalink',
  LogoChildMdxFrontmatterFbFanPagePostId = 'logo___childMdx___frontmatter___fb_fan_page_post_id',
  LogoChildMdxFrontmatterInstantArticlesSubmissionId = 'logo___childMdx___frontmatter___instant_articles_submission_id',
  LogoChildMdxFrontmatterDsqNeedsSync = 'logo___childMdx___frontmatter___dsq_needs_sync',
  LogoChildMdxFrontmatterInstantArticlesForceSubmit = 'logo___childMdx___frontmatter___instant_articles_force_submit',
  LogoChildMdxRawBody = 'logo___childMdx___rawBody',
  LogoChildMdxFileAbsolutePath = 'logo___childMdx___fileAbsolutePath',
  LogoChildMdxFieldsSlug = 'logo___childMdx___fields___slug',
  LogoChildMdxCodeBody = 'logo___childMdx___code___body',
  LogoChildMdxCodeScope = 'logo___childMdx___code___scope',
  LogoChildMdxExcerpt = 'logo___childMdx___excerpt',
  LogoChildMdxHeadings = 'logo___childMdx___headings',
  LogoChildMdxHeadingsValue = 'logo___childMdx___headings___value',
  LogoChildMdxHeadingsDepth = 'logo___childMdx___headings___depth',
  LogoChildMdxHtml = 'logo___childMdx___html',
  LogoChildMdxTableOfContents = 'logo___childMdx___tableOfContents',
  LogoChildMdxTimeToRead = 'logo___childMdx___timeToRead',
  LogoChildMdxWordCountParagraphs = 'logo___childMdx___wordCount___paragraphs',
  LogoChildMdxWordCountSentences = 'logo___childMdx___wordCount___sentences',
  LogoChildMdxWordCountWords = 'logo___childMdx___wordCount___words',
  LogoChildMdxId = 'logo___childMdx___id',
  LogoChildMdxParentId = 'logo___childMdx___parent___id',
  LogoChildMdxParentChildren = 'logo___childMdx___parent___children',
  LogoChildMdxChildren = 'logo___childMdx___children',
  LogoChildMdxChildrenId = 'logo___childMdx___children___id',
  LogoChildMdxChildrenChildren = 'logo___childMdx___children___children',
  LogoChildMdxInternalContent = 'logo___childMdx___internal___content',
  LogoChildMdxInternalContentDigest = 'logo___childMdx___internal___contentDigest',
  LogoChildMdxInternalDescription = 'logo___childMdx___internal___description',
  LogoChildMdxInternalFieldOwners = 'logo___childMdx___internal___fieldOwners',
  LogoChildMdxInternalIgnoreType = 'logo___childMdx___internal___ignoreType',
  LogoChildMdxInternalMediaType = 'logo___childMdx___internal___mediaType',
  LogoChildMdxInternalOwner = 'logo___childMdx___internal___owner',
  LogoChildMdxInternalType = 'logo___childMdx___internal___type',
  SidebarLogos = 'sidebar___logos',
  SidebarLogosImageBirthtime = 'sidebar___logos___image___birthtime',
  SidebarLogosImageBirthtimeMs = 'sidebar___logos___image___birthtimeMs',
  SidebarLogosImageSourceInstanceName = 'sidebar___logos___image___sourceInstanceName',
  SidebarLogosImageAbsolutePath = 'sidebar___logos___image___absolutePath',
  SidebarLogosImageRelativePath = 'sidebar___logos___image___relativePath',
  SidebarLogosImageExtension = 'sidebar___logos___image___extension',
  SidebarLogosImageSize = 'sidebar___logos___image___size',
  SidebarLogosImagePrettySize = 'sidebar___logos___image___prettySize',
  SidebarLogosImageModifiedTime = 'sidebar___logos___image___modifiedTime',
  SidebarLogosImageAccessTime = 'sidebar___logos___image___accessTime',
  SidebarLogosImageChangeTime = 'sidebar___logos___image___changeTime',
  SidebarLogosImageBirthTime = 'sidebar___logos___image___birthTime',
  SidebarLogosImageRoot = 'sidebar___logos___image___root',
  SidebarLogosImageDir = 'sidebar___logos___image___dir',
  SidebarLogosImageBase = 'sidebar___logos___image___base',
  SidebarLogosImageExt = 'sidebar___logos___image___ext',
  SidebarLogosImageName = 'sidebar___logos___image___name',
  SidebarLogosImageRelativeDirectory = 'sidebar___logos___image___relativeDirectory',
  SidebarLogosImageDev = 'sidebar___logos___image___dev',
  SidebarLogosImageMode = 'sidebar___logos___image___mode',
  SidebarLogosImageNlink = 'sidebar___logos___image___nlink',
  SidebarLogosImageUid = 'sidebar___logos___image___uid',
  SidebarLogosImageGid = 'sidebar___logos___image___gid',
  SidebarLogosImageRdev = 'sidebar___logos___image___rdev',
  SidebarLogosImageIno = 'sidebar___logos___image___ino',
  SidebarLogosImageAtimeMs = 'sidebar___logos___image___atimeMs',
  SidebarLogosImageMtimeMs = 'sidebar___logos___image___mtimeMs',
  SidebarLogosImageCtimeMs = 'sidebar___logos___image___ctimeMs',
  SidebarLogosImageAtime = 'sidebar___logos___image___atime',
  SidebarLogosImageMtime = 'sidebar___logos___image___mtime',
  SidebarLogosImageCtime = 'sidebar___logos___image___ctime',
  SidebarLogosImagePublicUrl = 'sidebar___logos___image___publicURL',
  SidebarLogosImageId = 'sidebar___logos___image___id',
  SidebarLogosImageChildren = 'sidebar___logos___image___children',
  SidebarLogosImageChildrenSitemapYaml = 'sidebar___logos___image___childrenSitemapYaml',
  SidebarLogosTitle = 'sidebar___logos___title',
  Title = 'title',
  Description = 'description',
  Lang = 'lang',
  Timezone = 'timezone',
  TwitterUsername = 'twitter___username',
  FacebookAppId = 'facebook___app_id',
  FacebookPublisher = 'facebook___publisher',
  FacebookAdmins = 'facebook___admins',
  SocialName = 'social___name',
  SocialLinks = 'social___links',
  GoogleAnalytics = 'google_analytics',
  DisqusShortname = 'disqus___shortname',
  DisqusWebsiteUrl = 'disqus___website_url',
  AddthisProfile = 'addthis_profile',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildrenMdxSource = 'childrenMdxSource',
  ChildrenMdxSourceId = 'childrenMdxSource___id',
  ChildrenMdxSourceParentId = 'childrenMdxSource___parent___id',
  ChildrenMdxSourceParentParentId = 'childrenMdxSource___parent___parent___id',
  ChildrenMdxSourceParentParentChildren = 'childrenMdxSource___parent___parent___children',
  ChildrenMdxSourceParentChildren = 'childrenMdxSource___parent___children',
  ChildrenMdxSourceParentChildrenId = 'childrenMdxSource___parent___children___id',
  ChildrenMdxSourceParentChildrenChildren = 'childrenMdxSource___parent___children___children',
  ChildrenMdxSourceParentInternalContent = 'childrenMdxSource___parent___internal___content',
  ChildrenMdxSourceParentInternalContentDigest = 'childrenMdxSource___parent___internal___contentDigest',
  ChildrenMdxSourceParentInternalDescription = 'childrenMdxSource___parent___internal___description',
  ChildrenMdxSourceParentInternalFieldOwners = 'childrenMdxSource___parent___internal___fieldOwners',
  ChildrenMdxSourceParentInternalIgnoreType = 'childrenMdxSource___parent___internal___ignoreType',
  ChildrenMdxSourceParentInternalMediaType = 'childrenMdxSource___parent___internal___mediaType',
  ChildrenMdxSourceParentInternalOwner = 'childrenMdxSource___parent___internal___owner',
  ChildrenMdxSourceParentInternalType = 'childrenMdxSource___parent___internal___type',
  ChildrenMdxSourceChildren = 'childrenMdxSource___children',
  ChildrenMdxSourceChildrenId = 'childrenMdxSource___children___id',
  ChildrenMdxSourceChildrenParentId = 'childrenMdxSource___children___parent___id',
  ChildrenMdxSourceChildrenParentChildren = 'childrenMdxSource___children___parent___children',
  ChildrenMdxSourceChildrenChildren = 'childrenMdxSource___children___children',
  ChildrenMdxSourceChildrenChildrenId = 'childrenMdxSource___children___children___id',
  ChildrenMdxSourceChildrenChildrenChildren = 'childrenMdxSource___children___children___children',
  ChildrenMdxSourceChildrenInternalContent = 'childrenMdxSource___children___internal___content',
  ChildrenMdxSourceChildrenInternalContentDigest = 'childrenMdxSource___children___internal___contentDigest',
  ChildrenMdxSourceChildrenInternalDescription = 'childrenMdxSource___children___internal___description',
  ChildrenMdxSourceChildrenInternalFieldOwners = 'childrenMdxSource___children___internal___fieldOwners',
  ChildrenMdxSourceChildrenInternalIgnoreType = 'childrenMdxSource___children___internal___ignoreType',
  ChildrenMdxSourceChildrenInternalMediaType = 'childrenMdxSource___children___internal___mediaType',
  ChildrenMdxSourceChildrenInternalOwner = 'childrenMdxSource___children___internal___owner',
  ChildrenMdxSourceChildrenInternalType = 'childrenMdxSource___children___internal___type',
  ChildrenMdxSourceInternalContent = 'childrenMdxSource___internal___content',
  ChildrenMdxSourceInternalContentDigest = 'childrenMdxSource___internal___contentDigest',
  ChildrenMdxSourceInternalDescription = 'childrenMdxSource___internal___description',
  ChildrenMdxSourceInternalFieldOwners = 'childrenMdxSource___internal___fieldOwners',
  ChildrenMdxSourceInternalIgnoreType = 'childrenMdxSource___internal___ignoreType',
  ChildrenMdxSourceInternalMediaType = 'childrenMdxSource___internal___mediaType',
  ChildrenMdxSourceInternalOwner = 'childrenMdxSource___internal___owner',
  ChildrenMdxSourceInternalType = 'childrenMdxSource___internal___type',
  ChildrenMdxSourceChildMdxFrontmatterCategories = 'childrenMdxSource___childMdx___frontmatter___categories',
  ChildrenMdxSourceChildMdxFrontmatterDate = 'childrenMdxSource___childMdx___frontmatter___date',
  ChildrenMdxSourceChildMdxFrontmatterDateFormatted = 'childrenMdxSource___childMdx___frontmatter___dateFormatted',
  ChildrenMdxSourceChildMdxFrontmatterLastModifiedAt = 'childrenMdxSource___childMdx___frontmatter___last_modified_at',
  ChildrenMdxSourceChildMdxFrontmatterLayout = 'childrenMdxSource___childMdx___frontmatter___layout',
  ChildrenMdxSourceChildMdxFrontmatterTags = 'childrenMdxSource___childMdx___frontmatter___tags',
  ChildrenMdxSourceChildMdxFrontmatterTitle = 'childrenMdxSource___childMdx___frontmatter___title',
  ChildrenMdxSourceChildMdxFrontmatterParent = 'childrenMdxSource___childMdx___frontmatter____PARENT',
  ChildrenMdxSourceChildMdxFrontmatterId = 'childrenMdxSource___childMdx___frontmatter___id',
  ChildrenMdxSourceChildMdxFrontmatterAuthor = 'childrenMdxSource___childMdx___frontmatter___author',
  ChildrenMdxSourceChildMdxFrontmatterGuid = 'childrenMdxSource___childMdx___frontmatter___guid',
  ChildrenMdxSourceChildMdxFrontmatterSharingDisabled = 'childrenMdxSource___childMdx___frontmatter___sharing_disabled',
  ChildrenMdxSourceChildMdxFrontmatterDsqThreadId = 'childrenMdxSource___childMdx___frontmatter___dsq_thread_id',
  ChildrenMdxSourceChildMdxFrontmatterFbAuthorPostId = 'childrenMdxSource___childMdx___frontmatter___fb_author_post_id',
  ChildrenMdxSourceChildMdxFrontmatterPermalink = 'childrenMdxSource___childMdx___frontmatter___permalink',
  ChildrenMdxSourceChildMdxFrontmatterFbFanPagePostId = 'childrenMdxSource___childMdx___frontmatter___fb_fan_page_post_id',
  ChildrenMdxSourceChildMdxFrontmatterInstantArticlesSubmissionId = 'childrenMdxSource___childMdx___frontmatter___instant_articles_submission_id',
  ChildrenMdxSourceChildMdxFrontmatterDsqNeedsSync = 'childrenMdxSource___childMdx___frontmatter___dsq_needs_sync',
  ChildrenMdxSourceChildMdxFrontmatterInstantArticlesForceSubmit = 'childrenMdxSource___childMdx___frontmatter___instant_articles_force_submit',
  ChildrenMdxSourceChildMdxRawBody = 'childrenMdxSource___childMdx___rawBody',
  ChildrenMdxSourceChildMdxFileAbsolutePath = 'childrenMdxSource___childMdx___fileAbsolutePath',
  ChildrenMdxSourceChildMdxFieldsSlug = 'childrenMdxSource___childMdx___fields___slug',
  ChildrenMdxSourceChildMdxCodeBody = 'childrenMdxSource___childMdx___code___body',
  ChildrenMdxSourceChildMdxCodeScope = 'childrenMdxSource___childMdx___code___scope',
  ChildrenMdxSourceChildMdxExcerpt = 'childrenMdxSource___childMdx___excerpt',
  ChildrenMdxSourceChildMdxHeadings = 'childrenMdxSource___childMdx___headings',
  ChildrenMdxSourceChildMdxHeadingsValue = 'childrenMdxSource___childMdx___headings___value',
  ChildrenMdxSourceChildMdxHeadingsDepth = 'childrenMdxSource___childMdx___headings___depth',
  ChildrenMdxSourceChildMdxHtml = 'childrenMdxSource___childMdx___html',
  ChildrenMdxSourceChildMdxTableOfContents = 'childrenMdxSource___childMdx___tableOfContents',
  ChildrenMdxSourceChildMdxTimeToRead = 'childrenMdxSource___childMdx___timeToRead',
  ChildrenMdxSourceChildMdxWordCountParagraphs = 'childrenMdxSource___childMdx___wordCount___paragraphs',
  ChildrenMdxSourceChildMdxWordCountSentences = 'childrenMdxSource___childMdx___wordCount___sentences',
  ChildrenMdxSourceChildMdxWordCountWords = 'childrenMdxSource___childMdx___wordCount___words',
  ChildrenMdxSourceChildMdxId = 'childrenMdxSource___childMdx___id',
  ChildrenMdxSourceChildMdxParentId = 'childrenMdxSource___childMdx___parent___id',
  ChildrenMdxSourceChildMdxParentChildren = 'childrenMdxSource___childMdx___parent___children',
  ChildrenMdxSourceChildMdxChildren = 'childrenMdxSource___childMdx___children',
  ChildrenMdxSourceChildMdxChildrenId = 'childrenMdxSource___childMdx___children___id',
  ChildrenMdxSourceChildMdxChildrenChildren = 'childrenMdxSource___childMdx___children___children',
  ChildrenMdxSourceChildMdxInternalContent = 'childrenMdxSource___childMdx___internal___content',
  ChildrenMdxSourceChildMdxInternalContentDigest = 'childrenMdxSource___childMdx___internal___contentDigest',
  ChildrenMdxSourceChildMdxInternalDescription = 'childrenMdxSource___childMdx___internal___description',
  ChildrenMdxSourceChildMdxInternalFieldOwners = 'childrenMdxSource___childMdx___internal___fieldOwners',
  ChildrenMdxSourceChildMdxInternalIgnoreType = 'childrenMdxSource___childMdx___internal___ignoreType',
  ChildrenMdxSourceChildMdxInternalMediaType = 'childrenMdxSource___childMdx___internal___mediaType',
  ChildrenMdxSourceChildMdxInternalOwner = 'childrenMdxSource___childMdx___internal___owner',
  ChildrenMdxSourceChildMdxInternalType = 'childrenMdxSource___childMdx___internal___type'
}

export type DataYamlFilterInput = {
  author?: Maybe<DataYamlAuthorFilterInput>,
  disclaimer?: Maybe<MdxFilterInput>,
  logo?: Maybe<FileFilterInput>,
  sidebar?: Maybe<DataYamlSidebarFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  timezone?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<DataYamlTwitterFilterInput>,
  facebook?: Maybe<DataYamlFacebookFilterInput>,
  social?: Maybe<DataYamlSocialFilterInput>,
  google_analytics?: Maybe<StringQueryOperatorInput>,
  disqus?: Maybe<DataYamlDisqusFilterInput>,
  addthis_profile?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenMdxSource?: Maybe<MdxSourceFilterListInput>,
};

export type DataYamlGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DataYamlEdge>,
  nodes: Array<DataYaml>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DataYamlSidebar = {
  logos?: Maybe<Array<Maybe<DataYamlSidebarLogos>>>,
};

export type DataYamlSidebarFilterInput = {
  logos?: Maybe<DataYamlSidebarLogosFilterListInput>,
};

export type DataYamlSidebarLogos = {
  image?: Maybe<File>,
  title?: Maybe<Scalars['String']>,
};

export type DataYamlSidebarLogosFilterInput = {
  image?: Maybe<FileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type DataYamlSidebarLogosFilterListInput = {
  elemMatch?: Maybe<DataYamlSidebarLogosFilterInput>,
};

export type DataYamlSocial = {
  name?: Maybe<Scalars['String']>,
  links?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataYamlSocialFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  links?: Maybe<StringQueryOperatorInput>,
};

export type DataYamlSortInput = {
  fields?: Maybe<Array<Maybe<DataYamlFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DataYamlTwitter = {
  username?: Maybe<Scalars['String']>,
};

export type DataYamlTwitterFilterInput = {
  username?: Maybe<StringQueryOperatorInput>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp?: Maybe<ImageSharp>,
  childDataYaml?: Maybe<DataYaml>,
  childrenSitemapYaml?: Maybe<Array<Maybe<SitemapYaml>>>,
  childMdx?: Maybe<Mdx>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildDataYamlAuthorBiographyRawBody = 'childDataYaml___author___biography___rawBody',
  ChildDataYamlAuthorBiographyFileAbsolutePath = 'childDataYaml___author___biography___fileAbsolutePath',
  ChildDataYamlAuthorBiographyExcerpt = 'childDataYaml___author___biography___excerpt',
  ChildDataYamlAuthorBiographyHeadings = 'childDataYaml___author___biography___headings',
  ChildDataYamlAuthorBiographyHtml = 'childDataYaml___author___biography___html',
  ChildDataYamlAuthorBiographyTableOfContents = 'childDataYaml___author___biography___tableOfContents',
  ChildDataYamlAuthorBiographyTimeToRead = 'childDataYaml___author___biography___timeToRead',
  ChildDataYamlAuthorBiographyId = 'childDataYaml___author___biography___id',
  ChildDataYamlAuthorBiographyChildren = 'childDataYaml___author___biography___children',
  ChildDataYamlAuthorName = 'childDataYaml___author___name',
  ChildDataYamlAuthorEmail = 'childDataYaml___author___email',
  ChildDataYamlAuthorUri = 'childDataYaml___author___uri',
  ChildDataYamlAuthorPicture = 'childDataYaml___author___picture',
  ChildDataYamlAuthorTwitter = 'childDataYaml___author___twitter',
  ChildDataYamlDisclaimerFrontmatterCategories = 'childDataYaml___disclaimer___frontmatter___categories',
  ChildDataYamlDisclaimerFrontmatterDate = 'childDataYaml___disclaimer___frontmatter___date',
  ChildDataYamlDisclaimerFrontmatterDateFormatted = 'childDataYaml___disclaimer___frontmatter___dateFormatted',
  ChildDataYamlDisclaimerFrontmatterLastModifiedAt = 'childDataYaml___disclaimer___frontmatter___last_modified_at',
  ChildDataYamlDisclaimerFrontmatterLayout = 'childDataYaml___disclaimer___frontmatter___layout',
  ChildDataYamlDisclaimerFrontmatterTags = 'childDataYaml___disclaimer___frontmatter___tags',
  ChildDataYamlDisclaimerFrontmatterTitle = 'childDataYaml___disclaimer___frontmatter___title',
  ChildDataYamlDisclaimerFrontmatterParent = 'childDataYaml___disclaimer___frontmatter____PARENT',
  ChildDataYamlDisclaimerFrontmatterId = 'childDataYaml___disclaimer___frontmatter___id',
  ChildDataYamlDisclaimerFrontmatterAuthor = 'childDataYaml___disclaimer___frontmatter___author',
  ChildDataYamlDisclaimerFrontmatterGuid = 'childDataYaml___disclaimer___frontmatter___guid',
  ChildDataYamlDisclaimerFrontmatterSharingDisabled = 'childDataYaml___disclaimer___frontmatter___sharing_disabled',
  ChildDataYamlDisclaimerFrontmatterDsqThreadId = 'childDataYaml___disclaimer___frontmatter___dsq_thread_id',
  ChildDataYamlDisclaimerFrontmatterFbAuthorPostId = 'childDataYaml___disclaimer___frontmatter___fb_author_post_id',
  ChildDataYamlDisclaimerFrontmatterPermalink = 'childDataYaml___disclaimer___frontmatter___permalink',
  ChildDataYamlDisclaimerFrontmatterFbFanPagePostId = 'childDataYaml___disclaimer___frontmatter___fb_fan_page_post_id',
  ChildDataYamlDisclaimerFrontmatterInstantArticlesSubmissionId = 'childDataYaml___disclaimer___frontmatter___instant_articles_submission_id',
  ChildDataYamlDisclaimerFrontmatterDsqNeedsSync = 'childDataYaml___disclaimer___frontmatter___dsq_needs_sync',
  ChildDataYamlDisclaimerFrontmatterInstantArticlesForceSubmit = 'childDataYaml___disclaimer___frontmatter___instant_articles_force_submit',
  ChildDataYamlDisclaimerRawBody = 'childDataYaml___disclaimer___rawBody',
  ChildDataYamlDisclaimerFileAbsolutePath = 'childDataYaml___disclaimer___fileAbsolutePath',
  ChildDataYamlDisclaimerFieldsSlug = 'childDataYaml___disclaimer___fields___slug',
  ChildDataYamlDisclaimerCodeBody = 'childDataYaml___disclaimer___code___body',
  ChildDataYamlDisclaimerCodeScope = 'childDataYaml___disclaimer___code___scope',
  ChildDataYamlDisclaimerExcerpt = 'childDataYaml___disclaimer___excerpt',
  ChildDataYamlDisclaimerHeadings = 'childDataYaml___disclaimer___headings',
  ChildDataYamlDisclaimerHeadingsValue = 'childDataYaml___disclaimer___headings___value',
  ChildDataYamlDisclaimerHeadingsDepth = 'childDataYaml___disclaimer___headings___depth',
  ChildDataYamlDisclaimerHtml = 'childDataYaml___disclaimer___html',
  ChildDataYamlDisclaimerTableOfContents = 'childDataYaml___disclaimer___tableOfContents',
  ChildDataYamlDisclaimerTimeToRead = 'childDataYaml___disclaimer___timeToRead',
  ChildDataYamlDisclaimerWordCountParagraphs = 'childDataYaml___disclaimer___wordCount___paragraphs',
  ChildDataYamlDisclaimerWordCountSentences = 'childDataYaml___disclaimer___wordCount___sentences',
  ChildDataYamlDisclaimerWordCountWords = 'childDataYaml___disclaimer___wordCount___words',
  ChildDataYamlDisclaimerId = 'childDataYaml___disclaimer___id',
  ChildDataYamlDisclaimerParentId = 'childDataYaml___disclaimer___parent___id',
  ChildDataYamlDisclaimerParentChildren = 'childDataYaml___disclaimer___parent___children',
  ChildDataYamlDisclaimerChildren = 'childDataYaml___disclaimer___children',
  ChildDataYamlDisclaimerChildrenId = 'childDataYaml___disclaimer___children___id',
  ChildDataYamlDisclaimerChildrenChildren = 'childDataYaml___disclaimer___children___children',
  ChildDataYamlDisclaimerInternalContent = 'childDataYaml___disclaimer___internal___content',
  ChildDataYamlDisclaimerInternalContentDigest = 'childDataYaml___disclaimer___internal___contentDigest',
  ChildDataYamlDisclaimerInternalDescription = 'childDataYaml___disclaimer___internal___description',
  ChildDataYamlDisclaimerInternalFieldOwners = 'childDataYaml___disclaimer___internal___fieldOwners',
  ChildDataYamlDisclaimerInternalIgnoreType = 'childDataYaml___disclaimer___internal___ignoreType',
  ChildDataYamlDisclaimerInternalMediaType = 'childDataYaml___disclaimer___internal___mediaType',
  ChildDataYamlDisclaimerInternalOwner = 'childDataYaml___disclaimer___internal___owner',
  ChildDataYamlDisclaimerInternalType = 'childDataYaml___disclaimer___internal___type',
  ChildDataYamlLogoBirthtime = 'childDataYaml___logo___birthtime',
  ChildDataYamlLogoBirthtimeMs = 'childDataYaml___logo___birthtimeMs',
  ChildDataYamlLogoSourceInstanceName = 'childDataYaml___logo___sourceInstanceName',
  ChildDataYamlLogoAbsolutePath = 'childDataYaml___logo___absolutePath',
  ChildDataYamlLogoRelativePath = 'childDataYaml___logo___relativePath',
  ChildDataYamlLogoExtension = 'childDataYaml___logo___extension',
  ChildDataYamlLogoSize = 'childDataYaml___logo___size',
  ChildDataYamlLogoPrettySize = 'childDataYaml___logo___prettySize',
  ChildDataYamlLogoModifiedTime = 'childDataYaml___logo___modifiedTime',
  ChildDataYamlLogoAccessTime = 'childDataYaml___logo___accessTime',
  ChildDataYamlLogoChangeTime = 'childDataYaml___logo___changeTime',
  ChildDataYamlLogoBirthTime = 'childDataYaml___logo___birthTime',
  ChildDataYamlLogoRoot = 'childDataYaml___logo___root',
  ChildDataYamlLogoDir = 'childDataYaml___logo___dir',
  ChildDataYamlLogoBase = 'childDataYaml___logo___base',
  ChildDataYamlLogoExt = 'childDataYaml___logo___ext',
  ChildDataYamlLogoName = 'childDataYaml___logo___name',
  ChildDataYamlLogoRelativeDirectory = 'childDataYaml___logo___relativeDirectory',
  ChildDataYamlLogoDev = 'childDataYaml___logo___dev',
  ChildDataYamlLogoMode = 'childDataYaml___logo___mode',
  ChildDataYamlLogoNlink = 'childDataYaml___logo___nlink',
  ChildDataYamlLogoUid = 'childDataYaml___logo___uid',
  ChildDataYamlLogoGid = 'childDataYaml___logo___gid',
  ChildDataYamlLogoRdev = 'childDataYaml___logo___rdev',
  ChildDataYamlLogoIno = 'childDataYaml___logo___ino',
  ChildDataYamlLogoAtimeMs = 'childDataYaml___logo___atimeMs',
  ChildDataYamlLogoMtimeMs = 'childDataYaml___logo___mtimeMs',
  ChildDataYamlLogoCtimeMs = 'childDataYaml___logo___ctimeMs',
  ChildDataYamlLogoAtime = 'childDataYaml___logo___atime',
  ChildDataYamlLogoMtime = 'childDataYaml___logo___mtime',
  ChildDataYamlLogoCtime = 'childDataYaml___logo___ctime',
  ChildDataYamlLogoPublicUrl = 'childDataYaml___logo___publicURL',
  ChildDataYamlLogoId = 'childDataYaml___logo___id',
  ChildDataYamlLogoParentId = 'childDataYaml___logo___parent___id',
  ChildDataYamlLogoParentChildren = 'childDataYaml___logo___parent___children',
  ChildDataYamlLogoChildren = 'childDataYaml___logo___children',
  ChildDataYamlLogoChildrenId = 'childDataYaml___logo___children___id',
  ChildDataYamlLogoChildrenChildren = 'childDataYaml___logo___children___children',
  ChildDataYamlLogoInternalContent = 'childDataYaml___logo___internal___content',
  ChildDataYamlLogoInternalContentDigest = 'childDataYaml___logo___internal___contentDigest',
  ChildDataYamlLogoInternalDescription = 'childDataYaml___logo___internal___description',
  ChildDataYamlLogoInternalFieldOwners = 'childDataYaml___logo___internal___fieldOwners',
  ChildDataYamlLogoInternalIgnoreType = 'childDataYaml___logo___internal___ignoreType',
  ChildDataYamlLogoInternalMediaType = 'childDataYaml___logo___internal___mediaType',
  ChildDataYamlLogoInternalOwner = 'childDataYaml___logo___internal___owner',
  ChildDataYamlLogoInternalType = 'childDataYaml___logo___internal___type',
  ChildDataYamlLogoChildImageSharpId = 'childDataYaml___logo___childImageSharp___id',
  ChildDataYamlLogoChildImageSharpChildren = 'childDataYaml___logo___childImageSharp___children',
  ChildDataYamlLogoChildDataYamlTitle = 'childDataYaml___logo___childDataYaml___title',
  ChildDataYamlLogoChildDataYamlDescription = 'childDataYaml___logo___childDataYaml___description',
  ChildDataYamlLogoChildDataYamlLang = 'childDataYaml___logo___childDataYaml___lang',
  ChildDataYamlLogoChildDataYamlTimezone = 'childDataYaml___logo___childDataYaml___timezone',
  ChildDataYamlLogoChildDataYamlGoogleAnalytics = 'childDataYaml___logo___childDataYaml___google_analytics',
  ChildDataYamlLogoChildDataYamlAddthisProfile = 'childDataYaml___logo___childDataYaml___addthis_profile',
  ChildDataYamlLogoChildDataYamlId = 'childDataYaml___logo___childDataYaml___id',
  ChildDataYamlLogoChildDataYamlChildren = 'childDataYaml___logo___childDataYaml___children',
  ChildDataYamlLogoChildDataYamlChildrenMdxSource = 'childDataYaml___logo___childDataYaml___childrenMdxSource',
  ChildDataYamlLogoChildrenSitemapYaml = 'childDataYaml___logo___childrenSitemapYaml',
  ChildDataYamlLogoChildrenSitemapYamlSub = 'childDataYaml___logo___childrenSitemapYaml___sub',
  ChildDataYamlLogoChildrenSitemapYamlTitle = 'childDataYaml___logo___childrenSitemapYaml___title',
  ChildDataYamlLogoChildrenSitemapYamlUrl = 'childDataYaml___logo___childrenSitemapYaml___url',
  ChildDataYamlLogoChildrenSitemapYamlMinimap = 'childDataYaml___logo___childrenSitemapYaml___minimap',
  ChildDataYamlLogoChildrenSitemapYamlId = 'childDataYaml___logo___childrenSitemapYaml___id',
  ChildDataYamlLogoChildrenSitemapYamlChildren = 'childDataYaml___logo___childrenSitemapYaml___children',
  ChildDataYamlLogoChildMdxRawBody = 'childDataYaml___logo___childMdx___rawBody',
  ChildDataYamlLogoChildMdxFileAbsolutePath = 'childDataYaml___logo___childMdx___fileAbsolutePath',
  ChildDataYamlLogoChildMdxExcerpt = 'childDataYaml___logo___childMdx___excerpt',
  ChildDataYamlLogoChildMdxHeadings = 'childDataYaml___logo___childMdx___headings',
  ChildDataYamlLogoChildMdxHtml = 'childDataYaml___logo___childMdx___html',
  ChildDataYamlLogoChildMdxTableOfContents = 'childDataYaml___logo___childMdx___tableOfContents',
  ChildDataYamlLogoChildMdxTimeToRead = 'childDataYaml___logo___childMdx___timeToRead',
  ChildDataYamlLogoChildMdxId = 'childDataYaml___logo___childMdx___id',
  ChildDataYamlLogoChildMdxChildren = 'childDataYaml___logo___childMdx___children',
  ChildDataYamlSidebarLogos = 'childDataYaml___sidebar___logos',
  ChildDataYamlSidebarLogosTitle = 'childDataYaml___sidebar___logos___title',
  ChildDataYamlTitle = 'childDataYaml___title',
  ChildDataYamlDescription = 'childDataYaml___description',
  ChildDataYamlLang = 'childDataYaml___lang',
  ChildDataYamlTimezone = 'childDataYaml___timezone',
  ChildDataYamlTwitterUsername = 'childDataYaml___twitter___username',
  ChildDataYamlFacebookAppId = 'childDataYaml___facebook___app_id',
  ChildDataYamlFacebookPublisher = 'childDataYaml___facebook___publisher',
  ChildDataYamlFacebookAdmins = 'childDataYaml___facebook___admins',
  ChildDataYamlSocialName = 'childDataYaml___social___name',
  ChildDataYamlSocialLinks = 'childDataYaml___social___links',
  ChildDataYamlGoogleAnalytics = 'childDataYaml___google_analytics',
  ChildDataYamlDisqusShortname = 'childDataYaml___disqus___shortname',
  ChildDataYamlDisqusWebsiteUrl = 'childDataYaml___disqus___website_url',
  ChildDataYamlAddthisProfile = 'childDataYaml___addthis_profile',
  ChildDataYamlId = 'childDataYaml___id',
  ChildDataYamlParentId = 'childDataYaml___parent___id',
  ChildDataYamlParentParentId = 'childDataYaml___parent___parent___id',
  ChildDataYamlParentParentChildren = 'childDataYaml___parent___parent___children',
  ChildDataYamlParentChildren = 'childDataYaml___parent___children',
  ChildDataYamlParentChildrenId = 'childDataYaml___parent___children___id',
  ChildDataYamlParentChildrenChildren = 'childDataYaml___parent___children___children',
  ChildDataYamlParentInternalContent = 'childDataYaml___parent___internal___content',
  ChildDataYamlParentInternalContentDigest = 'childDataYaml___parent___internal___contentDigest',
  ChildDataYamlParentInternalDescription = 'childDataYaml___parent___internal___description',
  ChildDataYamlParentInternalFieldOwners = 'childDataYaml___parent___internal___fieldOwners',
  ChildDataYamlParentInternalIgnoreType = 'childDataYaml___parent___internal___ignoreType',
  ChildDataYamlParentInternalMediaType = 'childDataYaml___parent___internal___mediaType',
  ChildDataYamlParentInternalOwner = 'childDataYaml___parent___internal___owner',
  ChildDataYamlParentInternalType = 'childDataYaml___parent___internal___type',
  ChildDataYamlChildren = 'childDataYaml___children',
  ChildDataYamlChildrenId = 'childDataYaml___children___id',
  ChildDataYamlChildrenParentId = 'childDataYaml___children___parent___id',
  ChildDataYamlChildrenParentChildren = 'childDataYaml___children___parent___children',
  ChildDataYamlChildrenChildren = 'childDataYaml___children___children',
  ChildDataYamlChildrenChildrenId = 'childDataYaml___children___children___id',
  ChildDataYamlChildrenChildrenChildren = 'childDataYaml___children___children___children',
  ChildDataYamlChildrenInternalContent = 'childDataYaml___children___internal___content',
  ChildDataYamlChildrenInternalContentDigest = 'childDataYaml___children___internal___contentDigest',
  ChildDataYamlChildrenInternalDescription = 'childDataYaml___children___internal___description',
  ChildDataYamlChildrenInternalFieldOwners = 'childDataYaml___children___internal___fieldOwners',
  ChildDataYamlChildrenInternalIgnoreType = 'childDataYaml___children___internal___ignoreType',
  ChildDataYamlChildrenInternalMediaType = 'childDataYaml___children___internal___mediaType',
  ChildDataYamlChildrenInternalOwner = 'childDataYaml___children___internal___owner',
  ChildDataYamlChildrenInternalType = 'childDataYaml___children___internal___type',
  ChildDataYamlInternalContent = 'childDataYaml___internal___content',
  ChildDataYamlInternalContentDigest = 'childDataYaml___internal___contentDigest',
  ChildDataYamlInternalDescription = 'childDataYaml___internal___description',
  ChildDataYamlInternalFieldOwners = 'childDataYaml___internal___fieldOwners',
  ChildDataYamlInternalIgnoreType = 'childDataYaml___internal___ignoreType',
  ChildDataYamlInternalMediaType = 'childDataYaml___internal___mediaType',
  ChildDataYamlInternalOwner = 'childDataYaml___internal___owner',
  ChildDataYamlInternalType = 'childDataYaml___internal___type',
  ChildDataYamlChildrenMdxSource = 'childDataYaml___childrenMdxSource',
  ChildDataYamlChildrenMdxSourceId = 'childDataYaml___childrenMdxSource___id',
  ChildDataYamlChildrenMdxSourceParentId = 'childDataYaml___childrenMdxSource___parent___id',
  ChildDataYamlChildrenMdxSourceParentChildren = 'childDataYaml___childrenMdxSource___parent___children',
  ChildDataYamlChildrenMdxSourceChildren = 'childDataYaml___childrenMdxSource___children',
  ChildDataYamlChildrenMdxSourceChildrenId = 'childDataYaml___childrenMdxSource___children___id',
  ChildDataYamlChildrenMdxSourceChildrenChildren = 'childDataYaml___childrenMdxSource___children___children',
  ChildDataYamlChildrenMdxSourceInternalContent = 'childDataYaml___childrenMdxSource___internal___content',
  ChildDataYamlChildrenMdxSourceInternalContentDigest = 'childDataYaml___childrenMdxSource___internal___contentDigest',
  ChildDataYamlChildrenMdxSourceInternalDescription = 'childDataYaml___childrenMdxSource___internal___description',
  ChildDataYamlChildrenMdxSourceInternalFieldOwners = 'childDataYaml___childrenMdxSource___internal___fieldOwners',
  ChildDataYamlChildrenMdxSourceInternalIgnoreType = 'childDataYaml___childrenMdxSource___internal___ignoreType',
  ChildDataYamlChildrenMdxSourceInternalMediaType = 'childDataYaml___childrenMdxSource___internal___mediaType',
  ChildDataYamlChildrenMdxSourceInternalOwner = 'childDataYaml___childrenMdxSource___internal___owner',
  ChildDataYamlChildrenMdxSourceInternalType = 'childDataYaml___childrenMdxSource___internal___type',
  ChildDataYamlChildrenMdxSourceChildMdxRawBody = 'childDataYaml___childrenMdxSource___childMdx___rawBody',
  ChildDataYamlChildrenMdxSourceChildMdxFileAbsolutePath = 'childDataYaml___childrenMdxSource___childMdx___fileAbsolutePath',
  ChildDataYamlChildrenMdxSourceChildMdxExcerpt = 'childDataYaml___childrenMdxSource___childMdx___excerpt',
  ChildDataYamlChildrenMdxSourceChildMdxHeadings = 'childDataYaml___childrenMdxSource___childMdx___headings',
  ChildDataYamlChildrenMdxSourceChildMdxHtml = 'childDataYaml___childrenMdxSource___childMdx___html',
  ChildDataYamlChildrenMdxSourceChildMdxTableOfContents = 'childDataYaml___childrenMdxSource___childMdx___tableOfContents',
  ChildDataYamlChildrenMdxSourceChildMdxTimeToRead = 'childDataYaml___childrenMdxSource___childMdx___timeToRead',
  ChildDataYamlChildrenMdxSourceChildMdxId = 'childDataYaml___childrenMdxSource___childMdx___id',
  ChildDataYamlChildrenMdxSourceChildMdxChildren = 'childDataYaml___childrenMdxSource___childMdx___children',
  ChildrenSitemapYaml = 'childrenSitemapYaml',
  ChildrenSitemapYamlSub = 'childrenSitemapYaml___sub',
  ChildrenSitemapYamlSubSub = 'childrenSitemapYaml___sub___sub',
  ChildrenSitemapYamlSubSubSub = 'childrenSitemapYaml___sub___sub___sub',
  ChildrenSitemapYamlSubSubTitle = 'childrenSitemapYaml___sub___sub___title',
  ChildrenSitemapYamlSubSubUrl = 'childrenSitemapYaml___sub___sub___url',
  ChildrenSitemapYamlSubTitle = 'childrenSitemapYaml___sub___title',
  ChildrenSitemapYamlSubUrl = 'childrenSitemapYaml___sub___url',
  ChildrenSitemapYamlTitle = 'childrenSitemapYaml___title',
  ChildrenSitemapYamlUrl = 'childrenSitemapYaml___url',
  ChildrenSitemapYamlMinimap = 'childrenSitemapYaml___minimap',
  ChildrenSitemapYamlId = 'childrenSitemapYaml___id',
  ChildrenSitemapYamlParentId = 'childrenSitemapYaml___parent___id',
  ChildrenSitemapYamlParentParentId = 'childrenSitemapYaml___parent___parent___id',
  ChildrenSitemapYamlParentParentChildren = 'childrenSitemapYaml___parent___parent___children',
  ChildrenSitemapYamlParentChildren = 'childrenSitemapYaml___parent___children',
  ChildrenSitemapYamlParentChildrenId = 'childrenSitemapYaml___parent___children___id',
  ChildrenSitemapYamlParentChildrenChildren = 'childrenSitemapYaml___parent___children___children',
  ChildrenSitemapYamlParentInternalContent = 'childrenSitemapYaml___parent___internal___content',
  ChildrenSitemapYamlParentInternalContentDigest = 'childrenSitemapYaml___parent___internal___contentDigest',
  ChildrenSitemapYamlParentInternalDescription = 'childrenSitemapYaml___parent___internal___description',
  ChildrenSitemapYamlParentInternalFieldOwners = 'childrenSitemapYaml___parent___internal___fieldOwners',
  ChildrenSitemapYamlParentInternalIgnoreType = 'childrenSitemapYaml___parent___internal___ignoreType',
  ChildrenSitemapYamlParentInternalMediaType = 'childrenSitemapYaml___parent___internal___mediaType',
  ChildrenSitemapYamlParentInternalOwner = 'childrenSitemapYaml___parent___internal___owner',
  ChildrenSitemapYamlParentInternalType = 'childrenSitemapYaml___parent___internal___type',
  ChildrenSitemapYamlChildren = 'childrenSitemapYaml___children',
  ChildrenSitemapYamlChildrenId = 'childrenSitemapYaml___children___id',
  ChildrenSitemapYamlChildrenParentId = 'childrenSitemapYaml___children___parent___id',
  ChildrenSitemapYamlChildrenParentChildren = 'childrenSitemapYaml___children___parent___children',
  ChildrenSitemapYamlChildrenChildren = 'childrenSitemapYaml___children___children',
  ChildrenSitemapYamlChildrenChildrenId = 'childrenSitemapYaml___children___children___id',
  ChildrenSitemapYamlChildrenChildrenChildren = 'childrenSitemapYaml___children___children___children',
  ChildrenSitemapYamlChildrenInternalContent = 'childrenSitemapYaml___children___internal___content',
  ChildrenSitemapYamlChildrenInternalContentDigest = 'childrenSitemapYaml___children___internal___contentDigest',
  ChildrenSitemapYamlChildrenInternalDescription = 'childrenSitemapYaml___children___internal___description',
  ChildrenSitemapYamlChildrenInternalFieldOwners = 'childrenSitemapYaml___children___internal___fieldOwners',
  ChildrenSitemapYamlChildrenInternalIgnoreType = 'childrenSitemapYaml___children___internal___ignoreType',
  ChildrenSitemapYamlChildrenInternalMediaType = 'childrenSitemapYaml___children___internal___mediaType',
  ChildrenSitemapYamlChildrenInternalOwner = 'childrenSitemapYaml___children___internal___owner',
  ChildrenSitemapYamlChildrenInternalType = 'childrenSitemapYaml___children___internal___type',
  ChildrenSitemapYamlInternalContent = 'childrenSitemapYaml___internal___content',
  ChildrenSitemapYamlInternalContentDigest = 'childrenSitemapYaml___internal___contentDigest',
  ChildrenSitemapYamlInternalDescription = 'childrenSitemapYaml___internal___description',
  ChildrenSitemapYamlInternalFieldOwners = 'childrenSitemapYaml___internal___fieldOwners',
  ChildrenSitemapYamlInternalIgnoreType = 'childrenSitemapYaml___internal___ignoreType',
  ChildrenSitemapYamlInternalMediaType = 'childrenSitemapYaml___internal___mediaType',
  ChildrenSitemapYamlInternalOwner = 'childrenSitemapYaml___internal___owner',
  ChildrenSitemapYamlInternalType = 'childrenSitemapYaml___internal___type',
  ChildMdxFrontmatterCategories = 'childMdx___frontmatter___categories',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterDateFormatted = 'childMdx___frontmatter___dateFormatted',
  ChildMdxFrontmatterImageBirthtime = 'childMdx___frontmatter___image___birthtime',
  ChildMdxFrontmatterImageBirthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  ChildMdxFrontmatterImageSourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  ChildMdxFrontmatterImageAbsolutePath = 'childMdx___frontmatter___image___absolutePath',
  ChildMdxFrontmatterImageRelativePath = 'childMdx___frontmatter___image___relativePath',
  ChildMdxFrontmatterImageExtension = 'childMdx___frontmatter___image___extension',
  ChildMdxFrontmatterImageSize = 'childMdx___frontmatter___image___size',
  ChildMdxFrontmatterImagePrettySize = 'childMdx___frontmatter___image___prettySize',
  ChildMdxFrontmatterImageModifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  ChildMdxFrontmatterImageAccessTime = 'childMdx___frontmatter___image___accessTime',
  ChildMdxFrontmatterImageChangeTime = 'childMdx___frontmatter___image___changeTime',
  ChildMdxFrontmatterImageBirthTime = 'childMdx___frontmatter___image___birthTime',
  ChildMdxFrontmatterImageRoot = 'childMdx___frontmatter___image___root',
  ChildMdxFrontmatterImageDir = 'childMdx___frontmatter___image___dir',
  ChildMdxFrontmatterImageBase = 'childMdx___frontmatter___image___base',
  ChildMdxFrontmatterImageExt = 'childMdx___frontmatter___image___ext',
  ChildMdxFrontmatterImageName = 'childMdx___frontmatter___image___name',
  ChildMdxFrontmatterImageRelativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  ChildMdxFrontmatterImageDev = 'childMdx___frontmatter___image___dev',
  ChildMdxFrontmatterImageMode = 'childMdx___frontmatter___image___mode',
  ChildMdxFrontmatterImageNlink = 'childMdx___frontmatter___image___nlink',
  ChildMdxFrontmatterImageUid = 'childMdx___frontmatter___image___uid',
  ChildMdxFrontmatterImageGid = 'childMdx___frontmatter___image___gid',
  ChildMdxFrontmatterImageRdev = 'childMdx___frontmatter___image___rdev',
  ChildMdxFrontmatterImageIno = 'childMdx___frontmatter___image___ino',
  ChildMdxFrontmatterImageAtimeMs = 'childMdx___frontmatter___image___atimeMs',
  ChildMdxFrontmatterImageMtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  ChildMdxFrontmatterImageCtimeMs = 'childMdx___frontmatter___image___ctimeMs',
  ChildMdxFrontmatterImageAtime = 'childMdx___frontmatter___image___atime',
  ChildMdxFrontmatterImageMtime = 'childMdx___frontmatter___image___mtime',
  ChildMdxFrontmatterImageCtime = 'childMdx___frontmatter___image___ctime',
  ChildMdxFrontmatterImagePublicUrl = 'childMdx___frontmatter___image___publicURL',
  ChildMdxFrontmatterImageId = 'childMdx___frontmatter___image___id',
  ChildMdxFrontmatterImageChildren = 'childMdx___frontmatter___image___children',
  ChildMdxFrontmatterImageChildrenSitemapYaml = 'childMdx___frontmatter___image___childrenSitemapYaml',
  ChildMdxFrontmatterLastModifiedAt = 'childMdx___frontmatter___last_modified_at',
  ChildMdxFrontmatterLayout = 'childMdx___frontmatter___layout',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterParent = 'childMdx___frontmatter____PARENT',
  ChildMdxFrontmatterId = 'childMdx___frontmatter___id',
  ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
  ChildMdxFrontmatterGuid = 'childMdx___frontmatter___guid',
  ChildMdxFrontmatterSharingDisabled = 'childMdx___frontmatter___sharing_disabled',
  ChildMdxFrontmatterDsqThreadId = 'childMdx___frontmatter___dsq_thread_id',
  ChildMdxFrontmatterFbAuthorPostId = 'childMdx___frontmatter___fb_author_post_id',
  ChildMdxFrontmatterPermalink = 'childMdx___frontmatter___permalink',
  ChildMdxFrontmatterFbFanPagePostId = 'childMdx___frontmatter___fb_fan_page_post_id',
  ChildMdxFrontmatterInstantArticlesSubmissionId = 'childMdx___frontmatter___instant_articles_submission_id',
  ChildMdxFrontmatterDsqNeedsSync = 'childMdx___frontmatter___dsq_needs_sync',
  ChildMdxFrontmatterInstantArticlesForceSubmit = 'childMdx___frontmatter___instant_articles_force_submit',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxCodeBody = 'childMdx___code___body',
  ChildMdxCodeScope = 'childMdx___code___scope',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childDataYaml?: Maybe<DataYamlFilterInput>,
  childrenSitemapYaml?: Maybe<SitemapYamlFilterListInput>,
  childMdx?: Maybe<MdxFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  id: Scalars['ID'],
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  Id = 'id',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type Mdx = Node & {
  frontmatter?: Maybe<MdxFrontmatter>,
  rawBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  fields?: Maybe<MdxFields>,
  code?: Maybe<MdxCodeMdx>,
  excerpt?: Maybe<Scalars['String']>,
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>,
  html?: Maybe<Scalars['String']>,
  tableOfContents?: Maybe<Scalars['JSON']>,
  timeToRead?: Maybe<Scalars['Int']>,
  wordCount?: Maybe<WordCountsMdx>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
};

export type MdxCodeMdx = {
  body?: Maybe<Scalars['String']>,
  scope?: Maybe<Scalars['String']>,
};

export type MdxCodeMdxFilterInput = {
  body?: Maybe<StringQueryOperatorInput>,
  scope?: Maybe<StringQueryOperatorInput>,
};

export type MdxConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxGroupConnection>,
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxFieldsEnum
};

export type MdxEdge = {
  next?: Maybe<Mdx>,
  node: Mdx,
  previous?: Maybe<Mdx>,
};

export type MdxFields = {
  slug?: Maybe<Scalars['String']>,
};

export enum MdxFieldsEnum {
  FrontmatterCategories = 'frontmatter___categories',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDateFormatted = 'frontmatter___dateFormatted',
  FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
  FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
  FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
  FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
  FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
  FrontmatterImageExtension = 'frontmatter___image___extension',
  FrontmatterImageSize = 'frontmatter___image___size',
  FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
  FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
  FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
  FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
  FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
  FrontmatterImageRoot = 'frontmatter___image___root',
  FrontmatterImageDir = 'frontmatter___image___dir',
  FrontmatterImageBase = 'frontmatter___image___base',
  FrontmatterImageExt = 'frontmatter___image___ext',
  FrontmatterImageName = 'frontmatter___image___name',
  FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
  FrontmatterImageDev = 'frontmatter___image___dev',
  FrontmatterImageMode = 'frontmatter___image___mode',
  FrontmatterImageNlink = 'frontmatter___image___nlink',
  FrontmatterImageUid = 'frontmatter___image___uid',
  FrontmatterImageGid = 'frontmatter___image___gid',
  FrontmatterImageRdev = 'frontmatter___image___rdev',
  FrontmatterImageIno = 'frontmatter___image___ino',
  FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
  FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
  FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
  FrontmatterImageAtime = 'frontmatter___image___atime',
  FrontmatterImageMtime = 'frontmatter___image___mtime',
  FrontmatterImageCtime = 'frontmatter___image___ctime',
  FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
  FrontmatterImageId = 'frontmatter___image___id',
  FrontmatterImageParentId = 'frontmatter___image___parent___id',
  FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
  FrontmatterImageChildren = 'frontmatter___image___children',
  FrontmatterImageChildrenId = 'frontmatter___image___children___id',
  FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
  FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
  FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
  FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
  FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
  FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
  FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
  FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
  FrontmatterImageInternalType = 'frontmatter___image___internal___type',
  FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
  FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
  FrontmatterImageChildDataYamlTitle = 'frontmatter___image___childDataYaml___title',
  FrontmatterImageChildDataYamlDescription = 'frontmatter___image___childDataYaml___description',
  FrontmatterImageChildDataYamlLang = 'frontmatter___image___childDataYaml___lang',
  FrontmatterImageChildDataYamlTimezone = 'frontmatter___image___childDataYaml___timezone',
  FrontmatterImageChildDataYamlGoogleAnalytics = 'frontmatter___image___childDataYaml___google_analytics',
  FrontmatterImageChildDataYamlAddthisProfile = 'frontmatter___image___childDataYaml___addthis_profile',
  FrontmatterImageChildDataYamlId = 'frontmatter___image___childDataYaml___id',
  FrontmatterImageChildDataYamlChildren = 'frontmatter___image___childDataYaml___children',
  FrontmatterImageChildDataYamlChildrenMdxSource = 'frontmatter___image___childDataYaml___childrenMdxSource',
  FrontmatterImageChildrenSitemapYaml = 'frontmatter___image___childrenSitemapYaml',
  FrontmatterImageChildrenSitemapYamlSub = 'frontmatter___image___childrenSitemapYaml___sub',
  FrontmatterImageChildrenSitemapYamlTitle = 'frontmatter___image___childrenSitemapYaml___title',
  FrontmatterImageChildrenSitemapYamlUrl = 'frontmatter___image___childrenSitemapYaml___url',
  FrontmatterImageChildrenSitemapYamlMinimap = 'frontmatter___image___childrenSitemapYaml___minimap',
  FrontmatterImageChildrenSitemapYamlId = 'frontmatter___image___childrenSitemapYaml___id',
  FrontmatterImageChildrenSitemapYamlChildren = 'frontmatter___image___childrenSitemapYaml___children',
  FrontmatterImageChildMdxRawBody = 'frontmatter___image___childMdx___rawBody',
  FrontmatterImageChildMdxFileAbsolutePath = 'frontmatter___image___childMdx___fileAbsolutePath',
  FrontmatterImageChildMdxExcerpt = 'frontmatter___image___childMdx___excerpt',
  FrontmatterImageChildMdxHeadings = 'frontmatter___image___childMdx___headings',
  FrontmatterImageChildMdxHtml = 'frontmatter___image___childMdx___html',
  FrontmatterImageChildMdxTableOfContents = 'frontmatter___image___childMdx___tableOfContents',
  FrontmatterImageChildMdxTimeToRead = 'frontmatter___image___childMdx___timeToRead',
  FrontmatterImageChildMdxId = 'frontmatter___image___childMdx___id',
  FrontmatterImageChildMdxChildren = 'frontmatter___image___childMdx___children',
  FrontmatterLastModifiedAt = 'frontmatter___last_modified_at',
  FrontmatterLayout = 'frontmatter___layout',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterParent = 'frontmatter____PARENT',
  FrontmatterId = 'frontmatter___id',
  FrontmatterAuthor = 'frontmatter___author',
  FrontmatterGuid = 'frontmatter___guid',
  FrontmatterSharingDisabled = 'frontmatter___sharing_disabled',
  FrontmatterDsqThreadId = 'frontmatter___dsq_thread_id',
  FrontmatterFbAuthorPostId = 'frontmatter___fb_author_post_id',
  FrontmatterPermalink = 'frontmatter___permalink',
  FrontmatterFbFanPagePostId = 'frontmatter___fb_fan_page_post_id',
  FrontmatterInstantArticlesSubmissionId = 'frontmatter___instant_articles_submission_id',
  FrontmatterDsqNeedsSync = 'frontmatter___dsq_needs_sync',
  FrontmatterInstantArticlesForceSubmit = 'frontmatter___instant_articles_force_submit',
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  CodeBody = 'code___body',
  CodeScope = 'code___scope',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type MdxFilterInput = {
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MdxFieldsFilterInput>,
  code?: Maybe<MdxCodeMdxFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<WordCountsMdxFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MdxFrontmatter = {
  categories?: Maybe<Array<Maybe<Scalars['String']>>>,
  date?: Maybe<Scalars['Date']>,
  dateFormatted?: Maybe<Scalars['Date']>,
  image?: Maybe<File>,
  last_modified_at?: Maybe<Scalars['Date']>,
  layout?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
  _PARENT?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  author?: Maybe<Scalars['String']>,
  guid?: Maybe<Scalars['String']>,
  sharing_disabled?: Maybe<Array<Maybe<Scalars['Int']>>>,
  dsq_thread_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  fb_author_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>,
  permalink?: Maybe<Scalars['String']>,
  fb_fan_page_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>,
  instant_articles_submission_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  dsq_needs_sync?: Maybe<Array<Maybe<Scalars['String']>>>,
  instant_articles_force_submit?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type MdxFrontmatterDateFormattedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MdxFrontmatterFilterInput = {
  categories?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  dateFormatted?: Maybe<DateQueryOperatorInput>,
  image?: Maybe<FileFilterInput>,
  last_modified_at?: Maybe<DateQueryOperatorInput>,
  layout?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  _PARENT?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<IntQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  sharing_disabled?: Maybe<IntQueryOperatorInput>,
  dsq_thread_id?: Maybe<StringQueryOperatorInput>,
  fb_author_post_id?: Maybe<FloatQueryOperatorInput>,
  permalink?: Maybe<StringQueryOperatorInput>,
  fb_fan_page_post_id?: Maybe<FloatQueryOperatorInput>,
  instant_articles_submission_id?: Maybe<StringQueryOperatorInput>,
  dsq_needs_sync?: Maybe<StringQueryOperatorInput>,
  instant_articles_force_submit?: Maybe<StringQueryOperatorInput>,
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>,
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxSource = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMdx?: Maybe<Mdx>,
};

export type MdxSourceConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MdxSourceEdge>,
  nodes: Array<MdxSource>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxSourceGroupConnection>,
};


export type MdxSourceConnectionDistinctArgs = {
  field: MdxSourceFieldsEnum
};


export type MdxSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxSourceFieldsEnum
};

export type MdxSourceEdge = {
  next?: Maybe<MdxSource>,
  node: MdxSource,
  previous?: Maybe<MdxSource>,
};

export enum MdxSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxFrontmatterCategories = 'childMdx___frontmatter___categories',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterDateFormatted = 'childMdx___frontmatter___dateFormatted',
  ChildMdxFrontmatterImageBirthtime = 'childMdx___frontmatter___image___birthtime',
  ChildMdxFrontmatterImageBirthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  ChildMdxFrontmatterImageSourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  ChildMdxFrontmatterImageAbsolutePath = 'childMdx___frontmatter___image___absolutePath',
  ChildMdxFrontmatterImageRelativePath = 'childMdx___frontmatter___image___relativePath',
  ChildMdxFrontmatterImageExtension = 'childMdx___frontmatter___image___extension',
  ChildMdxFrontmatterImageSize = 'childMdx___frontmatter___image___size',
  ChildMdxFrontmatterImagePrettySize = 'childMdx___frontmatter___image___prettySize',
  ChildMdxFrontmatterImageModifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  ChildMdxFrontmatterImageAccessTime = 'childMdx___frontmatter___image___accessTime',
  ChildMdxFrontmatterImageChangeTime = 'childMdx___frontmatter___image___changeTime',
  ChildMdxFrontmatterImageBirthTime = 'childMdx___frontmatter___image___birthTime',
  ChildMdxFrontmatterImageRoot = 'childMdx___frontmatter___image___root',
  ChildMdxFrontmatterImageDir = 'childMdx___frontmatter___image___dir',
  ChildMdxFrontmatterImageBase = 'childMdx___frontmatter___image___base',
  ChildMdxFrontmatterImageExt = 'childMdx___frontmatter___image___ext',
  ChildMdxFrontmatterImageName = 'childMdx___frontmatter___image___name',
  ChildMdxFrontmatterImageRelativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  ChildMdxFrontmatterImageDev = 'childMdx___frontmatter___image___dev',
  ChildMdxFrontmatterImageMode = 'childMdx___frontmatter___image___mode',
  ChildMdxFrontmatterImageNlink = 'childMdx___frontmatter___image___nlink',
  ChildMdxFrontmatterImageUid = 'childMdx___frontmatter___image___uid',
  ChildMdxFrontmatterImageGid = 'childMdx___frontmatter___image___gid',
  ChildMdxFrontmatterImageRdev = 'childMdx___frontmatter___image___rdev',
  ChildMdxFrontmatterImageIno = 'childMdx___frontmatter___image___ino',
  ChildMdxFrontmatterImageAtimeMs = 'childMdx___frontmatter___image___atimeMs',
  ChildMdxFrontmatterImageMtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  ChildMdxFrontmatterImageCtimeMs = 'childMdx___frontmatter___image___ctimeMs',
  ChildMdxFrontmatterImageAtime = 'childMdx___frontmatter___image___atime',
  ChildMdxFrontmatterImageMtime = 'childMdx___frontmatter___image___mtime',
  ChildMdxFrontmatterImageCtime = 'childMdx___frontmatter___image___ctime',
  ChildMdxFrontmatterImagePublicUrl = 'childMdx___frontmatter___image___publicURL',
  ChildMdxFrontmatterImageId = 'childMdx___frontmatter___image___id',
  ChildMdxFrontmatterImageChildren = 'childMdx___frontmatter___image___children',
  ChildMdxFrontmatterImageChildrenSitemapYaml = 'childMdx___frontmatter___image___childrenSitemapYaml',
  ChildMdxFrontmatterLastModifiedAt = 'childMdx___frontmatter___last_modified_at',
  ChildMdxFrontmatterLayout = 'childMdx___frontmatter___layout',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterParent = 'childMdx___frontmatter____PARENT',
  ChildMdxFrontmatterId = 'childMdx___frontmatter___id',
  ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
  ChildMdxFrontmatterGuid = 'childMdx___frontmatter___guid',
  ChildMdxFrontmatterSharingDisabled = 'childMdx___frontmatter___sharing_disabled',
  ChildMdxFrontmatterDsqThreadId = 'childMdx___frontmatter___dsq_thread_id',
  ChildMdxFrontmatterFbAuthorPostId = 'childMdx___frontmatter___fb_author_post_id',
  ChildMdxFrontmatterPermalink = 'childMdx___frontmatter___permalink',
  ChildMdxFrontmatterFbFanPagePostId = 'childMdx___frontmatter___fb_fan_page_post_id',
  ChildMdxFrontmatterInstantArticlesSubmissionId = 'childMdx___frontmatter___instant_articles_submission_id',
  ChildMdxFrontmatterDsqNeedsSync = 'childMdx___frontmatter___dsq_needs_sync',
  ChildMdxFrontmatterInstantArticlesForceSubmit = 'childMdx___frontmatter___instant_articles_force_submit',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxCodeBody = 'childMdx___code___body',
  ChildMdxCodeScope = 'childMdx___code___scope',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type MdxSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
};

export type MdxSourceFilterListInput = {
  elemMatch?: Maybe<MdxSourceFilterInput>,
};

export type MdxSourceGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MdxSourceEdge>,
  nodes: Array<MdxSource>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxSourceSortInput = {
  fields?: Maybe<Array<Maybe<MdxSourceFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp?: Maybe<ImageSharpConnection>,
  file?: Maybe<File>,
  allFile?: Maybe<FileConnection>,
  dataYaml?: Maybe<DataYaml>,
  allDataYaml?: Maybe<DataYamlConnection>,
  sitemapYaml?: Maybe<SitemapYaml>,
  allSitemapYaml?: Maybe<SitemapYamlConnection>,
  mdx?: Maybe<Mdx>,
  allMdx?: Maybe<MdxConnection>,
  sitePage?: Maybe<SitePage>,
  allSitePage?: Maybe<SitePageConnection>,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin?: Maybe<SitePluginConnection>,
  site?: Maybe<Site>,
  allSite?: Maybe<SiteConnection>,
  directory?: Maybe<Directory>,
  allDirectory?: Maybe<DirectoryConnection>,
  mdxSource?: Maybe<MdxSource>,
  allMdxSource?: Maybe<MdxSourceConnection>,
};


export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childDataYaml?: Maybe<DataYamlFilterInput>,
  childrenSitemapYaml?: Maybe<SitemapYamlFilterListInput>,
  childMdx?: Maybe<MdxFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDataYamlArgs = {
  author?: Maybe<DataYamlAuthorFilterInput>,
  disclaimer?: Maybe<MdxFilterInput>,
  logo?: Maybe<FileFilterInput>,
  sidebar?: Maybe<DataYamlSidebarFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  timezone?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<DataYamlTwitterFilterInput>,
  facebook?: Maybe<DataYamlFacebookFilterInput>,
  social?: Maybe<DataYamlSocialFilterInput>,
  google_analytics?: Maybe<StringQueryOperatorInput>,
  disqus?: Maybe<DataYamlDisqusFilterInput>,
  addthis_profile?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenMdxSource?: Maybe<MdxSourceFilterListInput>
};


export type QueryAllDataYamlArgs = {
  filter?: Maybe<DataYamlFilterInput>,
  sort?: Maybe<DataYamlSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitemapYamlArgs = {
  sub?: Maybe<SitemapYamlSubFilterListInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  minimap?: Maybe<BooleanQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSitemapYamlArgs = {
  filter?: Maybe<SitemapYamlFilterInput>,
  sort?: Maybe<SitemapYamlSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMdxArgs = {
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MdxFieldsFilterInput>,
  code?: Maybe<MdxCodeMdxFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<WordCountsMdxFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>,
  sort?: Maybe<MdxSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMdxSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdx?: Maybe<MdxFilterInput>
};


export type QueryAllMdxSourceArgs = {
  filter?: Maybe<MdxSourceFilterInput>,
  sort?: Maybe<MdxSourceSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  pathPrefix?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitemapYaml = Node & {
  sub?: Maybe<Array<Maybe<SitemapYamlSub>>>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  minimap?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type SitemapYamlConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitemapYamlEdge>,
  nodes: Array<SitemapYaml>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitemapYamlGroupConnection>,
};


export type SitemapYamlConnectionDistinctArgs = {
  field: SitemapYamlFieldsEnum
};


export type SitemapYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitemapYamlFieldsEnum
};

export type SitemapYamlEdge = {
  next?: Maybe<SitemapYaml>,
  node: SitemapYaml,
  previous?: Maybe<SitemapYaml>,
};

export enum SitemapYamlFieldsEnum {
  Sub = 'sub',
  SubSub = 'sub___sub',
  SubSubSub = 'sub___sub___sub',
  SubSubSubSub = 'sub___sub___sub___sub',
  SubSubSubTitle = 'sub___sub___sub___title',
  SubSubSubUrl = 'sub___sub___sub___url',
  SubSubTitle = 'sub___sub___title',
  SubSubUrl = 'sub___sub___url',
  SubTitle = 'sub___title',
  SubUrl = 'sub___url',
  Title = 'title',
  Url = 'url',
  Minimap = 'minimap',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitemapYamlFilterInput = {
  sub?: Maybe<SitemapYamlSubFilterListInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  minimap?: Maybe<BooleanQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SitemapYamlFilterListInput = {
  elemMatch?: Maybe<SitemapYamlFilterInput>,
};

export type SitemapYamlGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitemapYamlEdge>,
  nodes: Array<SitemapYaml>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitemapYamlSortInput = {
  fields?: Maybe<Array<Maybe<SitemapYamlFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitemapYamlSub = {
  sub?: Maybe<Array<Maybe<SitemapYamlSub>>>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SitemapYamlSubFilterInput = {
  sub?: Maybe<SitemapYamlSubFilterListInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitemapYamlSubFilterListInput = {
  elemMatch?: Maybe<SitemapYamlSubFilterInput>,
};

export type SitePage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  tag?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  previousId?: Maybe<Scalars['String']>,
  nextId?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  previousPageIndex?: Maybe<Scalars['Int']>,
  nextPageIndex?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextFrontmatter>,
};

export type SitePageContextFilterInput = {
  tag?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  previousId?: Maybe<StringQueryOperatorInput>,
  nextId?: Maybe<StringQueryOperatorInput>,
  ids?: Maybe<StringQueryOperatorInput>,
  previousPageIndex?: Maybe<IntQueryOperatorInput>,
  nextPageIndex?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>,
};

export type SitePageContextFrontmatter = {
  layout?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  author?: Maybe<Scalars['String']>,
  guid?: Maybe<Scalars['String']>,
  dsq_thread_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  sharing_disabled?: Maybe<Array<Maybe<Scalars['Int']>>>,
  fb_author_post_id?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type SitePageContextFrontmatterFilterInput = {
  layout?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  dsq_thread_id?: Maybe<StringQueryOperatorInput>,
  sharing_disabled?: Maybe<IntQueryOperatorInput>,
  fb_author_post_id?: Maybe<FloatQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextTag = 'context___tag',
  ContextCategory = 'context___category',
  ContextId = 'context___id',
  ContextPreviousId = 'context___previousId',
  ContextNextId = 'context___nextId',
  ContextIds = 'context___ids',
  ContextPreviousPageIndex = 'context___previousPageIndex',
  ContextNextPageIndex = 'context___nextPageIndex',
  ContextFrontmatterLayout = 'context___frontmatter___layout',
  ContextFrontmatterTitle = 'context___frontmatter___title',
  ContextFrontmatterId = 'context___frontmatter___id',
  ContextFrontmatterDate = 'context___frontmatter___date',
  ContextFrontmatterAuthor = 'context___frontmatter___author',
  ContextFrontmatterGuid = 'context___frontmatter___guid',
  ContextFrontmatterDsqThreadId = 'context___frontmatter___dsq_thread_id',
  ContextFrontmatterSharingDisabled = 'context___frontmatter___sharing_disabled',
  ContextFrontmatterFbAuthorPostId = 'context___frontmatter___fb_author_post_id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsDefaultLayoutsDefault = 'pluginCreator___pluginOptions___defaultLayouts___default',
  PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
  PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
  PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsDefaultLayoutsDefault = 'pluginOptions___defaultLayouts___default',
  PluginOptionsStages = 'pluginOptions___stages',
  PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
  PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>,
  stages?: Maybe<Array<Maybe<Scalars['String']>>>,
  options?: Maybe<SitePluginPluginOptionsOptions>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsDefaultLayouts = {
  default?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  extensions?: Maybe<StringQueryOperatorInput>,
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>,
  stages?: Maybe<StringQueryOperatorInput>,
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsOptions = {
  emitWarning?: Maybe<Scalars['Boolean']>,
  failOnError?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning?: Maybe<BooleanQueryOperatorInput>,
  failOnError?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type WordCountsMdx = {
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type WordCountsMdxFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};
export type CategoryArchiveLayoutQueryVariables = {
  category: Scalars['String']
};


export type CategoryArchiveLayoutQuery = { allMdx: Maybe<{ edges: Array<{ node: PostMdxFragment }> }> };

export type IndexLayoutQueryVariables = {
  ids: Array<Scalars['String']>
};


export type IndexLayoutQuery = { allMdx: Maybe<{ edges: Array<{ node: PostMdxFragment }> }> };

export type PostMdxFragment = (Pick<Mdx, 'id'> & { code: Maybe<Pick<MdxCodeMdx, 'body'>>, fields: Maybe<Pick<MdxFields, 'slug'>>, frontmatter: Maybe<(Pick<MdxFrontmatter, 'categories' | 'date' | 'dateFormatted' | 'last_modified_at' | 'layout' | 'tags' | 'title'> & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<(Pick<ImageSharpFluid, 'presentationWidth'> & GatsbyImageSharpFluidFragment)> }> }> })>, file: Maybe<Pick<File, 'base'>> });

export type SiblingPostMdxFragment = (Pick<Mdx, 'id'> & { fields: Maybe<Pick<MdxFields, 'slug'>>, frontmatter: Maybe<Pick<MdxFrontmatter, 'dateFormatted' | 'title'>> });

export type PostLayoutQueryVariables = {
  id: Scalars['String'],
  previousId?: Maybe<Scalars['String']>,
  nextId?: Maybe<Scalars['String']>
};


export type PostLayoutQuery = { mdx: Maybe<PostMdxFragment>, previousMdx: Maybe<SiblingPostMdxFragment>, nextMdx: Maybe<SiblingPostMdxFragment> };

export type RootLayoutQueryVariables = {};


export type RootLayoutQuery = { dataYaml: Maybe<(Pick<DataYaml, 'title' | 'description' | 'google_analytics' | 'lang' | 'addthis_profile'> & { disclaimer: Maybe<{ code: Maybe<Pick<MdxCodeMdx, 'body'>> }>, disqus: Maybe<Pick<DataYamlDisqus, 'shortname' | 'website_url'>>, logo: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }>, author: Maybe<(Pick<DataYamlAuthor, 'email' | 'name' | 'picture' | 'twitter' | 'uri'> & { biography: Maybe<{ code: Maybe<Pick<MdxCodeMdx, 'body'>> }> })>, facebook: Maybe<Pick<DataYamlFacebook, 'admins' | 'app_id' | 'publisher'>>, sidebar: Maybe<{ logos: Maybe<Array<Maybe<(Pick<DataYamlSidebarLogos, 'title'> & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> })>>> }>, social: Maybe<Pick<DataYamlSocial, 'links' | 'name'>>, twitter: Maybe<Pick<DataYamlTwitter, 'username'>> })> };

export type SidebarSitemapQueryVariables = {};


export type SidebarSitemapQuery = { allSitemapYaml: Maybe<{ edges: Array<{ node: Pick<SitemapYaml, 'title' | 'url'> }> }> };

export type TagArchiveLayoutQueryVariables = {
  tag: Scalars['String']
};


export type TagArchiveLayoutQuery = { allMdx: Maybe<{ edges: Array<{ node: PostMdxFragment }> }> };

export type ArchivePageQueryVariables = {};


export type ArchivePageQuery = { allMdx: Maybe<{ edges: Array<{ node: PostMdxFragment }> }> };

export type SitemapPageQueryVariables = {};


export type SitemapPageQuery = { allSitemapYaml: Maybe<{ edges: Array<{ node: (Pick<SitemapYaml, 'title' | 'url'> & { sub: Maybe<Array<Maybe<(Pick<SitemapYamlSub, 'title' | 'url'> & { sub: Maybe<Array<Maybe<Pick<SitemapYamlSub, 'title' | 'url'>>>> })>>> }) }> }> };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
