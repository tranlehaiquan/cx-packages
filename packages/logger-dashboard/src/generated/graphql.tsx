import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AttendeeStatus: any;
  AvailabilityStatus: any;
  Base64: any;
  BigDecimal: any;
  CustomerConfirmationStatus: any;
  Duration: any;
  EQLOrderByClauseAccountResourceScores: any;
  EQLOrderByClauseAccountTags: any;
  EQLOrderByClauseAccounts: any;
  EQLOrderByClauseActivities: any;
  EQLOrderByClauseActivityResources: any;
  EQLOrderByClauseArcadeGames: any;
  EQLOrderByClauseAttendee: any;
  EQLOrderByClauseAttendee1: any;
  EQLOrderByClauseAttendees: any;
  EQLOrderByClauseAvailabilities: any;
  EQLOrderByClauseAvailabilityPatternResources: any;
  EQLOrderByClauseAvailabilityPatterns: any;
  EQLOrderByClauseAvailabilityTemplateEntries: any;
  EQLOrderByClauseAvailabilityTemplateResources: any;
  EQLOrderByClauseAvailabilityTemplates: any;
  EQLOrderByClauseClass: any;
  EQLOrderByClauseClientAvailabilities: any;
  EQLOrderByClauseContactTags: any;
  EQLOrderByClauseContacts: any;
  EQLOrderByClauseDefaultAutoOffer: any;
  EQLOrderByClauseGroupEvent: any;
  EQLOrderByClauseGroupEvent1: any;
  EQLOrderByClauseHolidayRegions: any;
  EQLOrderByClauseHolidays: any;
  EQLOrderByClauseJobAllocations: any;
  EQLOrderByClauseJobDependencies: any;
  EQLOrderByClauseJobOffers: any;
  EQLOrderByClauseJobProducts: any;
  EQLOrderByClauseJobTags: any;
  EQLOrderByClauseJobTasks: any;
  EQLOrderByClauseJobTimeConstraints: any;
  EQLOrderByClauseJobs: any;
  EQLOrderByClauseLocationResourceScores: any;
  EQLOrderByClauseLocations: any;
  EQLOrderByClauseLogger: any;
  EQLOrderByClauseMonitorLogs: any;
  EQLOrderByClauseMonitors: any;
  EQLOrderByClausePatients: any;
  EQLOrderByClauseProducts: any;
  EQLOrderByClauseProjects: any;
  EQLOrderByClausePublicPageSetting: any;
  EQLOrderByClausePublicPageTemplate: any;
  EQLOrderByClausePublicSchedule: any;
  EQLOrderByClauseRecurringSchedules: any;
  EQLOrderByClauseRegions: any;
  EQLOrderByClauseResourceJobOffers: any;
  EQLOrderByClauseResourceOverrideRegions: any;
  EQLOrderByClauseResourceOverrides: any;
  EQLOrderByClauseResourceRegions: any;
  EQLOrderByClauseResourceRequirementTags: any;
  EQLOrderByClauseResourceRequirements: any;
  EQLOrderByClauseResourceShiftBreaks: any;
  EQLOrderByClauseResourceShiftOffers: any;
  EQLOrderByClauseResourceShifts: any;
  EQLOrderByClauseResourceTags: any;
  EQLOrderByClauseResources: any;
  EQLOrderByClauseScheduleTemplates: any;
  EQLOrderByClauseShiftOfferShifts: any;
  EQLOrderByClauseShiftOffers: any;
  EQLOrderByClauseShiftTags: any;
  EQLOrderByClauseShifts: any;
  EQLOrderByClauseTagManagerSettings: any;
  EQLOrderByClauseTagRequest: any;
  EQLOrderByClauseTags: any;
  EQLOrderByClauseTemplatedActivities: any;
  EQLOrderByClauseTemplatedActivityResources: any;
  EQLOrderByClauseTemplatedAttendees: any;
  EQLOrderByClauseTemplatedJobAllocations: any;
  EQLOrderByClauseTemplatedJobDependencies: any;
  EQLOrderByClauseTemplatedJobProducts: any;
  EQLOrderByClauseTemplatedJobTags: any;
  EQLOrderByClauseTemplatedJobTasks: any;
  EQLOrderByClauseTemplatedJobTimeConstraints: any;
  EQLOrderByClauseTemplatedJobs: any;
  EQLOrderByClauseTemplatedResourceRequirementTags: any;
  EQLOrderByClauseTemplatedResourceRequirements: any;
  EQLOrderByClauseTemplatedResourceShifts: any;
  EQLOrderByClauseTemplatedShiftTags: any;
  EQLOrderByClauseTemplatedShifts: any;
  EQLOrderByClauseTestPerObj: any;
  EQLOrderByClauseTestPerObject2: any;
  EQLOrderByClauseTimesheet: any;
  EQLOrderByClauseTimesheetEntry: any;
  EQLOrderByClauseTraining: any;
  EQLOrderByClauseTuanTest: any;
  EQLOrderByClauseUserRegions: any;
  EQLOrderByClauseUsers: any;
  EQLOrderByClauseVendorTag: any;
  EQLOrderByClauseVendors: any;
  EQLQueryFilterAccountResourceScores: any;
  EQLQueryFilterAccountTags: any;
  EQLQueryFilterAccounts: any;
  EQLQueryFilterActivities: any;
  EQLQueryFilterActivityResources: any;
  EQLQueryFilterArcadeGames: any;
  EQLQueryFilterAttendee: any;
  EQLQueryFilterAttendee1: any;
  EQLQueryFilterAttendees: any;
  EQLQueryFilterAvailabilities: any;
  EQLQueryFilterAvailabilityPatternResources: any;
  EQLQueryFilterAvailabilityPatterns: any;
  EQLQueryFilterAvailabilityTemplateEntries: any;
  EQLQueryFilterAvailabilityTemplateResources: any;
  EQLQueryFilterAvailabilityTemplates: any;
  EQLQueryFilterClass: any;
  EQLQueryFilterClientAvailabilities: any;
  EQLQueryFilterContactTags: any;
  EQLQueryFilterContacts: any;
  EQLQueryFilterDefaultAutoOffer: any;
  EQLQueryFilterGroupEvent: any;
  EQLQueryFilterGroupEvent1: any;
  EQLQueryFilterHolidayRegions: any;
  EQLQueryFilterHolidays: any;
  EQLQueryFilterJobAllocations: any;
  EQLQueryFilterJobDependencies: any;
  EQLQueryFilterJobOffers: any;
  EQLQueryFilterJobProducts: any;
  EQLQueryFilterJobTags: any;
  EQLQueryFilterJobTasks: any;
  EQLQueryFilterJobTimeConstraints: any;
  EQLQueryFilterJobs: any;
  EQLQueryFilterLocationResourceScores: any;
  EQLQueryFilterLocations: any;
  EQLQueryFilterLogger: any;
  EQLQueryFilterMonitorLogs: any;
  EQLQueryFilterMonitors: any;
  EQLQueryFilterPatients: any;
  EQLQueryFilterProducts: any;
  EQLQueryFilterProjects: any;
  EQLQueryFilterPublicPageSetting: any;
  EQLQueryFilterPublicPageTemplate: any;
  EQLQueryFilterPublicSchedule: any;
  EQLQueryFilterRecurringSchedules: any;
  EQLQueryFilterRegions: any;
  EQLQueryFilterResourceJobOffers: any;
  EQLQueryFilterResourceOverrideRegions: any;
  EQLQueryFilterResourceOverrides: any;
  EQLQueryFilterResourceRegions: any;
  EQLQueryFilterResourceRequirementTags: any;
  EQLQueryFilterResourceRequirements: any;
  EQLQueryFilterResourceShiftBreaks: any;
  EQLQueryFilterResourceShiftOffers: any;
  EQLQueryFilterResourceShifts: any;
  EQLQueryFilterResourceTags: any;
  EQLQueryFilterResources: any;
  EQLQueryFilterScheduleTemplates: any;
  EQLQueryFilterShiftOfferShifts: any;
  EQLQueryFilterShiftOffers: any;
  EQLQueryFilterShiftTags: any;
  EQLQueryFilterShifts: any;
  EQLQueryFilterTagManagerSettings: any;
  EQLQueryFilterTagRequest: any;
  EQLQueryFilterTags: any;
  EQLQueryFilterTemplatedActivities: any;
  EQLQueryFilterTemplatedActivityResources: any;
  EQLQueryFilterTemplatedAttendees: any;
  EQLQueryFilterTemplatedJobAllocations: any;
  EQLQueryFilterTemplatedJobDependencies: any;
  EQLQueryFilterTemplatedJobProducts: any;
  EQLQueryFilterTemplatedJobTags: any;
  EQLQueryFilterTemplatedJobTasks: any;
  EQLQueryFilterTemplatedJobTimeConstraints: any;
  EQLQueryFilterTemplatedJobs: any;
  EQLQueryFilterTemplatedResourceRequirementTags: any;
  EQLQueryFilterTemplatedResourceRequirements: any;
  EQLQueryFilterTemplatedResourceShifts: any;
  EQLQueryFilterTemplatedShiftTags: any;
  EQLQueryFilterTemplatedShifts: any;
  EQLQueryFilterTestPerObj: any;
  EQLQueryFilterTestPerObject2: any;
  EQLQueryFilterTimesheet: any;
  EQLQueryFilterTimesheetEntry: any;
  EQLQueryFilterTraining: any;
  EQLQueryFilterTuanTest: any;
  EQLQueryFilterUserRegions: any;
  EQLQueryFilterUsers: any;
  EQLQueryFilterVendorTag: any;
  EQLQueryFilterVendors: any;
  EQLRecordChangeFilterAccounts: any;
  EQLRecordChangeFilterActivities: any;
  EQLRecordChangeFilterAvailabilities: any;
  EQLRecordChangeFilterContacts: any;
  EQLRecordChangeFilterJobAllocations: any;
  EQLRecordChangeFilterJobs: any;
  EQLRecordChangeFilterMonitorLogs: any;
  EQLRecordChangeFilterShifts: any;
  EQLRecordChangeFilterTagManagerSettings: any;
  EQLRecordChangeFilterTimesheet: any;
  EQLRecordChangeFilterTimesheetEntry: any;
  EQLRecordFilterAccounts: any;
  EQLRecordFilterActivities: any;
  EQLRecordFilterAvailabilities: any;
  EQLRecordFilterContacts: any;
  EQLRecordFilterJobAllocations: any;
  EQLRecordFilterJobs: any;
  EQLRecordFilterMonitorLogs: any;
  EQLRecordFilterShifts: any;
  EQLRecordFilterTagManagerSettings: any;
  EQLRecordFilterTimesheet: any;
  EQLRecordFilterTimesheetEntry: any;
  Instant: any;
  JobAllocationStatus: any;
  JobDependencyAnchor: any;
  JobStatus: any;
  JobTimeConstraintType: any;
  LocalDate: any;
  LocalTime: any;
  NonNegativeInt: any;
  OfferResponse: any;
  OfferStatus: any;
  PositiveIntMax200: any;
  ResourceOfferStatus: any;
  TagClassification: any;
  Weekday: any;
  WorkingHourType: any;
};

export type AccountResourceScores = {
  __typename?: 'AccountResourceScores';
  Account: Accounts;
  AccountId: Scalars['ID'];
  Blacklisted: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type AccountResourceScoresConnection = {
  __typename?: 'AccountResourceScoresConnection';
  edges: Array<AccountResourceScoresEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountResourceScoresEdge = {
  __typename?: 'AccountResourceScoresEdge';
  cursor: Scalars['Base64'];
  node: AccountResourceScores;
  offset: Scalars['Int'];
};

export type AccountTags = {
  __typename?: 'AccountTags';
  Account: Accounts;
  AccountId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type AccountTagsConnection = {
  __typename?: 'AccountTagsConnection';
  edges: Array<AccountTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTagsEdge = {
  __typename?: 'AccountTagsEdge';
  cursor: Scalars['Base64'];
  node: AccountTags;
  offset: Scalars['Int'];
};

export type Accounts = {
  __typename?: 'Accounts';
  Availabilities: Array<ClientAvailabilities>;
  BillingCity?: Maybe<Scalars['String']>;
  BillingPostalCode?: Maybe<Scalars['String']>;
  BillingState?: Maybe<Scalars['String']>;
  BillingStreet?: Maybe<Scalars['String']>;
  Contacts: Array<Contacts>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Fax?: Maybe<Scalars['String']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Level?: Maybe<Scalars['String']>;
  Locations: Array<Locations>;
  Name: Scalars['String'];
  Phone?: Maybe<Scalars['String']>;
  Rank?: Maybe<Scalars['Int']>;
  RequiresWhitelist: Scalars['Boolean'];
  ResourceScores: Array<AccountResourceScores>;
  ShippingCity?: Maybe<Scalars['String']>;
  ShippingPostalCode?: Maybe<Scalars['String']>;
  ShippingState?: Maybe<Scalars['String']>;
  ShippingStreet?: Maybe<Scalars['String']>;
  Tags: Array<AccountTags>;
  UID: Scalars['ID'];
};


export type AccountsAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type AccountsContactsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterContacts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContacts']>;
};


export type AccountsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type AccountsLocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocations']>;
};


export type AccountsResourceScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']>;
};


export type AccountsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountTags']>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  cursor: Scalars['Base64'];
  node: Accounts;
  offset: Scalars['Int'];
};

export type Activities = {
  __typename?: 'Activities';
  ActivityResources: Array<ActivityResources>;
  Address?: Maybe<Scalars['String']>;
  CopiedFrom?: Maybe<Activities>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivity?: Maybe<TemplatedActivities>;
  TemplatedActivityId?: Maybe<Scalars['ID']>;
  Timezone?: Maybe<Scalars['String']>;
  TuanTest?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type ActivitiesActivityResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']>;
};

export type ActivitiesConnection = {
  __typename?: 'ActivitiesConnection';
  edges: Array<ActivitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivitiesEdge = {
  __typename?: 'ActivitiesEdge';
  cursor: Scalars['Base64'];
  node: Activities;
  offset: Scalars['Int'];
};

export type ActivityResources = {
  __typename?: 'ActivityResources';
  Activity: Activities;
  ActivityId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ActivityResourcesConnection = {
  __typename?: 'ActivityResourcesConnection';
  edges: Array<ActivityResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivityResourcesEdge = {
  __typename?: 'ActivityResourcesEdge';
  cursor: Scalars['Base64'];
  node: ActivityResources;
  offset: Scalars['Int'];
};

export type ArcadeGames = {
  __typename?: 'ArcadeGames';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  active: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  verbiage?: Maybe<Scalars['String']>;
};

export type ArcadeGamesConnection = {
  __typename?: 'ArcadeGamesConnection';
  edges: Array<ArcadeGamesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ArcadeGamesEdge = {
  __typename?: 'ArcadeGamesEdge';
  cursor: Scalars['Base64'];
  node: ArcadeGames;
  offset: Scalars['Int'];
};

export type Attendee = {
  __typename?: 'Attendee';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GroupEvent?: Maybe<GroupEvent1>;
  GroupEventId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TestAttendee?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type Attendee1 = {
  __typename?: 'Attendee1';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GroupEvent?: Maybe<GroupEvent>;
  GroupEventId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type Attendee1Connection = {
  __typename?: 'Attendee1Connection';
  edges: Array<Attendee1Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Attendee1Edge = {
  __typename?: 'Attendee1Edge';
  cursor: Scalars['Base64'];
  node: Attendee1;
  offset: Scalars['Int'];
};

export type AttendeeConnection = {
  __typename?: 'AttendeeConnection';
  edges: Array<AttendeeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AttendeeEdge = {
  __typename?: 'AttendeeEdge';
  cursor: Scalars['Base64'];
  node: Attendee;
  offset: Scalars['Int'];
};

export type Attendees = {
  __typename?: 'Attendees';
  CancelReason?: Maybe<Scalars['String']>;
  Contact: Contacts;
  ContactId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['AttendeeStatus'];
  TimeCancelled?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type AttendeesConnection = {
  __typename?: 'AttendeesConnection';
  edges: Array<AttendeesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AttendeesEdge = {
  __typename?: 'AttendeesEdge';
  cursor: Scalars['Base64'];
  node: Attendees;
  offset: Scalars['Int'];
};

export type Availabilities = {
  __typename?: 'Availabilities';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Notes?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type AvailabilitiesConnection = {
  __typename?: 'AvailabilitiesConnection';
  edges: Array<AvailabilitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilitiesEdge = {
  __typename?: 'AvailabilitiesEdge';
  cursor: Scalars['Base64'];
  node: Availabilities;
  offset: Scalars['Int'];
};

export type AvailabilityPatternResources = {
  __typename?: 'AvailabilityPatternResources';
  AvailabilityPattern: AvailabilityPatterns;
  AvailabilityPatternId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  UID: Scalars['ID'];
};

export type AvailabilityPatternResourcesConnection = {
  __typename?: 'AvailabilityPatternResourcesConnection';
  edges: Array<AvailabilityPatternResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityPatternResourcesEdge = {
  __typename?: 'AvailabilityPatternResourcesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityPatternResources;
  offset: Scalars['Int'];
};

export type AvailabilityPatterns = {
  __typename?: 'AvailabilityPatterns';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Hash: Scalars['String'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  Resources: Array<AvailabilityPatternResources>;
  UID: Scalars['ID'];
};


export type AvailabilityPatternsResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']>;
};

export type AvailabilityPatternsConnection = {
  __typename?: 'AvailabilityPatternsConnection';
  edges: Array<AvailabilityPatternsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityPatternsEdge = {
  __typename?: 'AvailabilityPatternsEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityPatterns;
  offset: Scalars['Int'];
};

export type AvailabilityTemplateEntries = {
  __typename?: 'AvailabilityTemplateEntries';
  AvailabilityTemplate: AvailabilityTemplates;
  AvailabilityTemplateId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FinishTime: Scalars['Int'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  StartTime: Scalars['Int'];
  UID: Scalars['ID'];
  Weekday: Scalars['Weekday'];
};

export type AvailabilityTemplateEntriesConnection = {
  __typename?: 'AvailabilityTemplateEntriesConnection';
  edges: Array<AvailabilityTemplateEntriesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityTemplateEntriesEdge = {
  __typename?: 'AvailabilityTemplateEntriesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityTemplateEntries;
  offset: Scalars['Int'];
};

export type AvailabilityTemplateResources = {
  __typename?: 'AvailabilityTemplateResources';
  AvailabilityTemplate: AvailabilityTemplates;
  AvailabilityTemplateId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Migrated: Scalars['Boolean'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type AvailabilityTemplateResourcesConnection = {
  __typename?: 'AvailabilityTemplateResourcesConnection';
  edges: Array<AvailabilityTemplateResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityTemplateResourcesEdge = {
  __typename?: 'AvailabilityTemplateResourcesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityTemplateResources;
  offset: Scalars['Int'];
};

export type AvailabilityTemplates = {
  __typename?: 'AvailabilityTemplates';
  AvailabilityPattern?: Maybe<AvailabilityPatterns>;
  AvailabilityPatternId?: Maybe<Scalars['ID']>;
  AvailabilityTemplateEntries: Array<AvailabilityTemplateEntries>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish?: Maybe<Scalars['LocalDate']>;
  Global: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Resources: Array<AvailabilityTemplateResources>;
  Start?: Maybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};


export type AvailabilityTemplatesAvailabilityTemplateEntriesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateEntries']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateEntries']>;
};


export type AvailabilityTemplatesResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']>;
};

export type AvailabilityTemplatesConnection = {
  __typename?: 'AvailabilityTemplatesConnection';
  edges: Array<AvailabilityTemplatesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityTemplatesEdge = {
  __typename?: 'AvailabilityTemplatesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityTemplates;
  offset: Scalars['Int'];
};

export type Class = {
  __typename?: 'Class';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type ClassConnection = {
  __typename?: 'ClassConnection';
  edges: Array<ClassEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClassEdge = {
  __typename?: 'ClassEdge';
  cursor: Scalars['Base64'];
  node: Class;
  offset: Scalars['Int'];
};

export type ClientAvailabilities = {
  __typename?: 'ClientAvailabilities';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PreferredEnd?: Maybe<Scalars['Instant']>;
  PreferredStart?: Maybe<Scalars['Instant']>;
  RecurringSchedule?: Maybe<RecurringSchedules>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type ClientAvailabilitiesConnection = {
  __typename?: 'ClientAvailabilitiesConnection';
  edges: Array<ClientAvailabilitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientAvailabilitiesEdge = {
  __typename?: 'ClientAvailabilitiesEdge';
  cursor: Scalars['Base64'];
  node: ClientAvailabilities;
  offset: Scalars['Int'];
};

export type ContactTags = {
  __typename?: 'ContactTags';
  Contact: Contacts;
  ContactId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type ContactTagsConnection = {
  __typename?: 'ContactTagsConnection';
  edges: Array<ContactTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContactTagsEdge = {
  __typename?: 'ContactTagsEdge';
  cursor: Scalars['Base64'];
  node: ContactTags;
  offset: Scalars['Int'];
};

export type Contacts = {
  __typename?: 'Contacts';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Availabilities: Array<ClientAvailabilities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  FullName: Scalars['String'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MailingCity?: Maybe<Scalars['String']>;
  MailingPostalCode?: Maybe<Scalars['String']>;
  MailingState?: Maybe<Scalars['String']>;
  MailingStreet?: Maybe<Scalars['String']>;
  MobilePhone?: Maybe<Scalars['String']>;
  OtherCity?: Maybe<Scalars['String']>;
  OtherPostalCode?: Maybe<Scalars['String']>;
  OtherState?: Maybe<Scalars['String']>;
  OtherStreet?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  Tags: Array<ContactTags>;
  Title?: Maybe<Scalars['String']>;
  TuanTest?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};


export type ContactsAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type ContactsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterContactTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContactTags']>;
};

export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  edges: Array<ContactsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContactsEdge = {
  __typename?: 'ContactsEdge';
  cursor: Scalars['Base64'];
  node: Contacts;
  offset: Scalars['Int'];
};

export type DefaultAutoOffer = {
  __typename?: 'DefaultAutoOffer';
  AutoOffer?: Maybe<Scalars['String']>;
  AutoOfferOffset?: Maybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion: Scalars['Boolean'];
  AutoOfferRespectJobTags: Scalars['Boolean'];
  AutoOfferRespectPreviousOfferStatus: Scalars['Boolean'];
  AutoOfferRespectResourceAvailability: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type DefaultAutoOfferConnection = {
  __typename?: 'DefaultAutoOfferConnection';
  edges: Array<DefaultAutoOfferEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DefaultAutoOfferEdge = {
  __typename?: 'DefaultAutoOfferEdge';
  cursor: Scalars['Base64'];
  node: DefaultAutoOffer;
  offset: Scalars['Int'];
};

export type GroupEvent = {
  __typename?: 'GroupEvent';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GroupEvent: Array<Attendee1>;
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type GroupEventGroupEventArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendee1']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendee1']>;
};

export type GroupEvent1 = {
  __typename?: 'GroupEvent1';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GroupEvent: Array<Attendee>;
  Job?: Maybe<GroupEvent1>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type GroupEvent1GroupEventArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendee']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendee']>;
};

export type GroupEvent1Connection = {
  __typename?: 'GroupEvent1Connection';
  edges: Array<GroupEvent1Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GroupEvent1Edge = {
  __typename?: 'GroupEvent1Edge';
  cursor: Scalars['Base64'];
  node: GroupEvent1;
  offset: Scalars['Int'];
};

export type GroupEventConnection = {
  __typename?: 'GroupEventConnection';
  edges: Array<GroupEventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GroupEventEdge = {
  __typename?: 'GroupEventEdge';
  cursor: Scalars['Base64'];
  node: GroupEvent;
  offset: Scalars['Int'];
};

export type HolidayRegions = {
  __typename?: 'HolidayRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Holiday: Holidays;
  HolidayId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type HolidayRegionsConnection = {
  __typename?: 'HolidayRegionsConnection';
  edges: Array<HolidayRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HolidayRegionsEdge = {
  __typename?: 'HolidayRegionsEdge';
  cursor: Scalars['Base64'];
  node: HolidayRegions;
  offset: Scalars['Int'];
};

export type Holidays = {
  __typename?: 'Holidays';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate: Scalars['LocalDate'];
  Global: Scalars['Boolean'];
  HolidayRegions: Array<HolidayRegions>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID: Scalars['ID'];
};


export type HolidaysHolidayRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidayRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidayRegions']>;
};

export type HolidaysConnection = {
  __typename?: 'HolidaysConnection';
  edges: Array<HolidaysEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HolidaysEdge = {
  __typename?: 'HolidaysEdge';
  cursor: Scalars['Base64'];
  node: Holidays;
  offset: Scalars['Int'];
};

export type JobAllocations = {
  __typename?: 'JobAllocations';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeclineDescription?: Maybe<Scalars['String']>;
  DeclineReason?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  End?: Maybe<Scalars['Instant']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']>;
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotificationType?: Maybe<Scalars['String']>;
  PhoneResponse?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  ResourceRequirement?: Maybe<ResourceRequirements>;
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TimeCheckedIn?: Maybe<Scalars['Instant']>;
  TimeCompleted?: Maybe<Scalars['Instant']>;
  TimeInProgress?: Maybe<Scalars['Instant']>;
  TimePublished?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  TimeStartTravel?: Maybe<Scalars['Instant']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']>;
  TravelTime?: Maybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type JobAllocationsConnection = {
  __typename?: 'JobAllocationsConnection';
  edges: Array<JobAllocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobAllocationsEdge = {
  __typename?: 'JobAllocationsEdge';
  cursor: Scalars['Base64'];
  node: JobAllocations;
  offset: Scalars['Int'];
};

export type JobDependencies = {
  __typename?: 'JobDependencies';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromJob: Jobs;
  FromJobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToJob: Jobs;
  ToJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type JobDependenciesConnection = {
  __typename?: 'JobDependenciesConnection';
  edges: Array<JobDependenciesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobDependenciesEdge = {
  __typename?: 'JobDependenciesEdge';
  cursor: Scalars['Base64'];
  node: JobDependencies;
  offset: Scalars['Int'];
};

export type JobOffers = {
  __typename?: 'JobOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedByResource: Scalars['Boolean'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceJobOffers: Array<ResourceJobOffers>;
  ResourceRequirement?: Maybe<ResourceRequirements>;
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};


export type JobOffersResourceJobOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceJobOffers']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceJobOffers']>;
};

export type JobOffersConnection = {
  __typename?: 'JobOffersConnection';
  edges: Array<JobOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobOffersEdge = {
  __typename?: 'JobOffersEdge';
  cursor: Scalars['Base64'];
  node: JobOffers;
  offset: Scalars['Int'];
};

export type JobProducts = {
  __typename?: 'JobProducts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Product?: Maybe<Products>;
  ProductId?: Maybe<Scalars['ID']>;
  ProductName?: Maybe<Scalars['String']>;
  Qty: Scalars['BigDecimal'];
  UID: Scalars['ID'];
};

export type JobProductsConnection = {
  __typename?: 'JobProductsConnection';
  edges: Array<JobProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobProductsEdge = {
  __typename?: 'JobProductsEdge';
  cursor: Scalars['Base64'];
  node: JobProducts;
  offset: Scalars['Int'];
};

export type JobTags = {
  __typename?: 'JobTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type JobTagsConnection = {
  __typename?: 'JobTagsConnection';
  edges: Array<JobTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobTagsEdge = {
  __typename?: 'JobTagsEdge';
  cursor: Scalars['Base64'];
  node: JobTags;
  offset: Scalars['Int'];
};

export type JobTasks = {
  __typename?: 'JobTasks';
  Completed: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID: Scalars['ID'];
};

export type JobTasksConnection = {
  __typename?: 'JobTasksConnection';
  edges: Array<JobTasksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobTasksEdge = {
  __typename?: 'JobTasksEdge';
  cursor: Scalars['Base64'];
  node: JobTasks;
  offset: Scalars['Int'];
};

export type JobTimeConstraints = {
  __typename?: 'JobTimeConstraints';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBefore?: Maybe<Scalars['Instant']>;
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfter?: Maybe<Scalars['Instant']>;
  StartBefore?: Maybe<Scalars['Instant']>;
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type JobTimeConstraintsConnection = {
  __typename?: 'JobTimeConstraintsConnection';
  edges: Array<JobTimeConstraintsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobTimeConstraintsEdge = {
  __typename?: 'JobTimeConstraintsEdge';
  cursor: Scalars['Base64'];
  node: JobTimeConstraints;
  offset: Scalars['Int'];
};

export type Jobs = {
  __typename?: 'Jobs';
  AbortReason?: Maybe<Scalars['String']>;
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Address?: Maybe<Scalars['String']>;
  Attendees: Array<Attendees>;
  AutoOffer?: Maybe<Scalars['String']>;
  AutoOfferDate?: Maybe<Scalars['String']>;
  AutoOfferOffset?: Maybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion: Scalars['Boolean'];
  AutoOfferRespectJobTags: Scalars['Boolean'];
  AutoOfferRespectPreviousOfferStatus: Scalars['Boolean'];
  AutoOfferRespectResourceAvailability: Scalars['Boolean'];
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  CompletionNotes?: Maybe<Scalars['String']>;
  Confirmed: Scalars['Boolean'];
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']>;
  CopiedFrom?: Maybe<Jobs>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: Maybe<Scalars['Instant']>;
  EstimatedEnd?: Maybe<Scalars['Instant']>;
  EstimatedStart?: Maybe<Scalars['Instant']>;
  FollowupReason?: Maybe<Scalars['String']>;
  Followups: Array<Jobs>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  Job: Array<GroupEvent>;
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobAllocations: Array<JobAllocations>;
  JobDependenciesFrom: Array<JobDependencies>;
  JobDependenciesTo: Array<JobDependencies>;
  JobOffers: Array<JobOffers>;
  JobProducts: Array<JobProducts>;
  JobStartDefer?: Maybe<Scalars['BigDecimal']>;
  JobStatus: Scalars['JobStatus'];
  JobTags: Array<JobTags>;
  JobTasks: Array<JobTasks>;
  JobTimeConstraints: Array<JobTimeConstraints>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  NotesComments?: Maybe<Scalars['String']>;
  NotifyBy?: Maybe<Scalars['Instant']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Parent?: Maybe<Jobs>;
  ParentId?: Maybe<Scalars['ID']>;
  Quantity?: Maybe<Scalars['Int']>;
  RecurringSchedule?: Maybe<RecurringSchedules>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Region: Regions;
  RegionId: Scalars['ID'];
  RequiredKit?: Maybe<Scalars['BigDecimal']>;
  ResourceRequirements: Array<ResourceRequirements>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  TemplatedJob?: Maybe<TemplatedJobs>;
  TemplatedJobId?: Maybe<Scalars['ID']>;
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
  jobhistory: Array<Logger>;
};


export type JobsAttendeesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendees']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendees']>;
};


export type JobsFollowupsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type JobsJobArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterGroupEvent']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseGroupEvent']>;
};


export type JobsJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type JobsJobDependenciesFromArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']>;
};


export type JobsJobDependenciesToArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']>;
};


export type JobsJobOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobOffers']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobOffers']>;
};


export type JobsJobProductsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobProducts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobProducts']>;
};


export type JobsJobTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTags']>;
};


export type JobsJobTasksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTasks']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTasks']>;
};


export type JobsJobTimeConstraintsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTimeConstraints']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTimeConstraints']>;
};


export type JobsResourceRequirementsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirements']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirements']>;
};


export type JobsJobhistoryArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLogger']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLogger']>;
};

export type JobsConnection = {
  __typename?: 'JobsConnection';
  edges: Array<JobsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobsEdge = {
  __typename?: 'JobsEdge';
  cursor: Scalars['Base64'];
  node: Jobs;
  offset: Scalars['Int'];
};

export type LocationResourceScores = {
  __typename?: 'LocationResourceScores';
  Blacklisted: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location: Locations;
  LocationId: Scalars['ID'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type LocationResourceScoresConnection = {
  __typename?: 'LocationResourceScoresConnection';
  edges: Array<LocationResourceScoresEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationResourceScoresEdge = {
  __typename?: 'LocationResourceScoresEdge';
  cursor: Scalars['Base64'];
  node: LocationResourceScores;
  offset: Scalars['Int'];
};

export type Locations = {
  __typename?: 'Locations';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Activities: Array<Activities>;
  Address?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  ResourceScores: Array<LocationResourceScores>;
  Shifts: Array<Shifts>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type LocationsActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type LocationsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type LocationsResourceScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']>;
};


export type LocationsShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationsEdge = {
  __typename?: 'LocationsEdge';
  cursor: Scalars['Base64'];
  node: Locations;
  offset: Scalars['Int'];
};

export type Logger = {
  __typename?: 'Logger';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  jobhistory?: Maybe<Jobs>;
  jobhistoryId?: Maybe<Scalars['ID']>;
};

export type LoggerConnection = {
  __typename?: 'LoggerConnection';
  edges: Array<LoggerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoggerEdge = {
  __typename?: 'LoggerEdge';
  cursor: Scalars['Base64'];
  node: Logger;
  offset: Scalars['Int'];
};

export type MonitorLogs = {
  __typename?: 'MonitorLogs';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Monitors: Monitors;
  MonitorsId: Scalars['ID'];
  Name: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type MonitorLogsConnection = {
  __typename?: 'MonitorLogsConnection';
  edges: Array<MonitorLogsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MonitorLogsEdge = {
  __typename?: 'MonitorLogsEdge';
  cursor: Scalars['Base64'];
  node: MonitorLogs;
  offset: Scalars['Int'];
};

export type Monitors = {
  __typename?: 'Monitors';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  UID: Scalars['ID'];
  Vendors: Vendors;
  VendorsId: Scalars['ID'];
};

export type MonitorsConnection = {
  __typename?: 'MonitorsConnection';
  edges: Array<MonitorsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MonitorsEdge = {
  __typename?: 'MonitorsEdge';
  cursor: Scalars['Base64'];
  node: Monitors;
  offset: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  schema: SchemaMutation;
};

export type NewAccountResourceScores = {
  AccountId: Scalars['ID'];
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type NewAccountTags = {
  AccountId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewAccounts = {
  BillingCity?: InputMaybe<Scalars['String']>;
  BillingPostalCode?: InputMaybe<Scalars['String']>;
  BillingState?: InputMaybe<Scalars['String']>;
  BillingStreet?: InputMaybe<Scalars['String']>;
  Fax?: InputMaybe<Scalars['String']>;
  Level?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Phone?: InputMaybe<Scalars['String']>;
  Rank?: InputMaybe<Scalars['Int']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  ShippingCity?: InputMaybe<Scalars['String']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']>;
  ShippingState?: InputMaybe<Scalars['String']>;
  ShippingStreet?: InputMaybe<Scalars['String']>;
};

export type NewActivities = {
  Address?: InputMaybe<Scalars['String']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  Timezone?: InputMaybe<Scalars['String']>;
  TuanTest?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewActivityResources = {
  ActivityId: Scalars['ID'];
  ResourceId: Scalars['ID'];
};

export type NewArcadeGames = {
  active?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  verbiage?: InputMaybe<Scalars['String']>;
};

export type NewAttendee = {
  GroupEventId?: InputMaybe<Scalars['ID']>;
  TestAttendee?: InputMaybe<Scalars['String']>;
};

export type NewAttendee1 = {
  GroupEventId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
};

export type NewAttendees = {
  CancelReason?: InputMaybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  JobId: Scalars['ID'];
  Status?: InputMaybe<Scalars['AttendeeStatus']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']>;
};

export type NewAvailabilities = {
  Finish: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  Notes?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewAvailabilityPatternResources = {
  AvailabilityPatternId: Scalars['ID'];
  End?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
};

export type NewAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']>;
  Hash: Scalars['String'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
};

export type NewAvailabilityTemplateEntries = {
  AvailabilityTemplateId: Scalars['ID'];
  FinishTime: Scalars['Int'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  StartTime: Scalars['Int'];
  Weekday: Scalars['Weekday'];
};

export type NewAvailabilityTemplateResources = {
  AvailabilityTemplateId: Scalars['ID'];
  Migrated?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
};

export type NewAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  Finish?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['LocalDate']>;
};

export type NewClass = {
  Name?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type NewClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']>;
  PreferredStart?: InputMaybe<Scalars['Instant']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
};

export type NewContactTags = {
  ContactId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewContacts = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName: Scalars['String'];
  MailingCity?: InputMaybe<Scalars['String']>;
  MailingPostalCode?: InputMaybe<Scalars['String']>;
  MailingState?: InputMaybe<Scalars['String']>;
  MailingStreet?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  OtherCity?: InputMaybe<Scalars['String']>;
  OtherPostalCode?: InputMaybe<Scalars['String']>;
  OtherState?: InputMaybe<Scalars['String']>;
  OtherStreet?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
  TuanTest?: InputMaybe<Scalars['BigDecimal']>;
};

export type NewDefaultAutoOffer = {
  AutoOffer?: InputMaybe<Scalars['String']>;
  AutoOfferOffset?: InputMaybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectJobTags?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectPreviousOfferStatus?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectResourceAvailability?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
};

export type NewGroupEvent = {
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
};

export type NewGroupEvent1 = {
  JobId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NewHolidayRegions = {
  HolidayId: Scalars['ID'];
  RegionId: Scalars['ID'];
};

export type NewHolidays = {
  EndDate: Scalars['LocalDate'];
  Global?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
};

export type NewJobAllocations = {
  DeclineDescription?: InputMaybe<Scalars['String']>;
  DeclineReason?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  NotificationType?: InputMaybe<Scalars['String']>;
  PhoneResponse?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']>;
  TimePublished?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  TravelTime?: InputMaybe<Scalars['Duration']>;
};

export type NewJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
};

export type NewJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['OfferStatus']>;
};

export type NewJobProducts = {
  JobId: Scalars['ID'];
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
};

export type NewJobTags = {
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  JobId: Scalars['ID'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
};

export type NewJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfter?: InputMaybe<Scalars['Instant']>;
  StartBefore?: InputMaybe<Scalars['Instant']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
};

export type NewJobs = {
  AbortReason?: InputMaybe<Scalars['String']>;
  AccountId?: InputMaybe<Scalars['ID']>;
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoOffer?: InputMaybe<Scalars['String']>;
  AutoOfferDate?: InputMaybe<Scalars['String']>;
  AutoOfferOffset?: InputMaybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectJobTags?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectPreviousOfferStatus?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectResourceAvailability?: InputMaybe<Scalars['Boolean']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  CompletionNotes?: InputMaybe<Scalars['String']>;
  Confirmed?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']>;
  FollowupReason?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobStartDefer?: InputMaybe<Scalars['BigDecimal']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyBy?: InputMaybe<Scalars['Instant']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  ParentId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  RequiredKit?: InputMaybe<Scalars['BigDecimal']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  Type?: InputMaybe<Scalars['String']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type NewLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type NewLocations = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewLogger = {
  Description?: InputMaybe<Scalars['String']>;
  jobhistoryId?: InputMaybe<Scalars['ID']>;
};

export type NewMonitorLogs = {
  Description?: InputMaybe<Scalars['String']>;
  MonitorsId: Scalars['ID'];
  Name: Scalars['String'];
  Type?: InputMaybe<Scalars['String']>;
};

export type NewMonitors = {
  Name: Scalars['String'];
  VendorsId: Scalars['ID'];
};

export type NewPatients = {
  Name?: InputMaybe<Scalars['String']>;
};

export type NewProducts = {
  Description?: InputMaybe<Scalars['String']>;
  Family?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  ProductCode?: InputMaybe<Scalars['String']>;
};

export type NewProjects = {
  Name?: InputMaybe<Scalars['String']>;
};

export type NewPublicPageSetting = {
  Link?: InputMaybe<Scalars['String']>;
};

export type NewPublicPageTemplate = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
};

export type NewPublicSchedule = {
  IsInactivated?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  Note?: InputMaybe<Scalars['String']>;
  PublicPageTemplateId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['String']>;
};

export type NewRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  Summary?: InputMaybe<Scalars['String']>;
};

export type NewRegions = {
  CountryCode?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  Radius?: InputMaybe<Scalars['Int']>;
  Timezone: Scalars['String'];
};

export type NewResourceJobOffers = {
  JobOfferId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
};

export type NewResourceOverrideRegions = {
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
};

export type NewResourceOverrides = {
  Description?: InputMaybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
};

export type NewResourceRegions = {
  End?: InputMaybe<Scalars['Instant']>;
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: InputMaybe<Scalars['Instant']>;
};

export type NewResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobStatus']>;
};

export type NewResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']>;
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
};

export type NewResourceShiftOffers = {
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  ShiftOfferId: Scalars['ID'];
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
};

export type NewResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
};

export type NewResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
};

export type NewResources = {
  Alias?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  Birthday?: InputMaybe<Scalars['LocalDate']>;
  Category?: InputMaybe<Scalars['String']>;
  CountryCode?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  EmploymentType?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Language?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: InputMaybe<Scalars['String']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PrimaryPhone?: InputMaybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: InputMaybe<Scalars['Int']>;
  ResourceType?: InputMaybe<Scalars['String']>;
  UserId?: InputMaybe<Scalars['ID']>;
  VehicleID?: InputMaybe<Scalars['String']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']>;
};

export type NewScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']>;
  DeletedDate?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  PeriodDays?: InputMaybe<Scalars['Int']>;
};

export type NewShiftOfferShifts = {
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
};

export type NewShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']>;
};

export type NewShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
};

export type NewTagManagerSettings = {
  ExpiredReminder?: InputMaybe<Scalars['Boolean']>;
  ExpiredReminderTemplate?: InputMaybe<Scalars['String']>;
  ExpiringSoonReminderDays?: InputMaybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled?: InputMaybe<Scalars['Boolean']>;
  ExpiringSoonReminderTemplate?: InputMaybe<Scalars['String']>;
  LongLiveToken?: InputMaybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: InputMaybe<Scalars['BigDecimal']>;
  ReminderSendTime?: InputMaybe<Scalars['BigDecimal']>;
  ReminderTimezone?: InputMaybe<Scalars['String']>;
  RemindersEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type NewTagRequest = {
  IsRenewal?: InputMaybe<Scalars['Boolean']>;
  NewExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  OldExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: InputMaybe<Scalars['String']>;
  TagAssignmentId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TagName?: InputMaybe<Scalars['String']>;
};

export type NewTags = {
  Classification?: InputMaybe<Scalars['TagClassification']>;
  Groups?: InputMaybe<Array<Scalars['String']>>;
  IsRequestable?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  NotVisibleToResources?: InputMaybe<Scalars['Boolean']>;
  RequestEvidence?: InputMaybe<Scalars['Boolean']>;
  RequiresExpiryDate?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: InputMaybe<Scalars['String']>;
};

export type NewTemplatedActivityResources = {
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
};

export type NewTemplatedAttendees = {
  ContactId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
};

export type NewTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromTemplatedJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
};

export type NewTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: InputMaybe<Scalars['String']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type NewTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedResourceShifts = {
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
};

export type NewTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
};

export type NewTestPerObj = {
  Field1?: InputMaybe<Scalars['String']>;
  Field2?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
};

export type NewTestPerObject2 = {
  FieldA?: InputMaybe<Scalars['BigDecimal']>;
  FieldB?: InputMaybe<Scalars['BigDecimal']>;
  JobId?: InputMaybe<Scalars['ID']>;
  JobTestPer2Id?: InputMaybe<Scalars['ID']>;
};

export type NewTimesheet = {
  ApprovedById?: InputMaybe<Scalars['ID']>;
  ApprovedDate?: InputMaybe<Scalars['LocalDate']>;
  ApproverComments?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  Status?: InputMaybe<Scalars['String']>;
  SubmitterComments?: InputMaybe<Scalars['String']>;
};

export type NewTimesheetEntry = {
  ActivityId?: InputMaybe<Scalars['ID']>;
  Description?: InputMaybe<Scalars['String']>;
  Distance?: InputMaybe<Scalars['BigDecimal']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  EntryType?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  TimesheetId?: InputMaybe<Scalars['ID']>;
  UnavailabilityId?: InputMaybe<Scalars['ID']>;
};

export type NewTraining = {
  PL?: InputMaybe<Scalars['String']>;
  TextA?: InputMaybe<Scalars['String']>;
};

export type NewTuanTest = {
  Age?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
};

export type NewUserRegions = {
  RegionId: Scalars['ID'];
  UserId: Scalars['ID'];
};

export type NewVendorTag = {
  TagsId: Scalars['ID'];
  VendorsId: Scalars['ID'];
};

export type NewVendors = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  TenantId?: InputMaybe<Scalars['String']>;
};

/**
 * Notification that links to the actual object the notification refers to. See the `notifications` query for
 * an example on how to use this type in a query.
 */
export type Notifications = {
  __typename?: 'Notifications';
  /** Name of the action that triggered the notification */
  Action: Scalars['String'];
  /** Object the notification refers to as a union type */
  Object: NotificationsObject;
  /** Creation time as a UTC timestamp */
  Timestamp: Scalars['Instant'];
};

/** Possible object types a `Notifications` object can refer to */
export type NotificationsObject = Jobs | ResourceJobOffers | ResourceShiftOffers | Shifts;

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Base64']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Base64']>;
};

export type Patients = {
  __typename?: 'Patients';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type PatientsConnection = {
  __typename?: 'PatientsConnection';
  edges: Array<PatientsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PatientsEdge = {
  __typename?: 'PatientsEdge';
  cursor: Scalars['Base64'];
  node: Patients;
  offset: Scalars['Int'];
};

export type Products = {
  __typename?: 'Products';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Family?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductCode?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  cursor: Scalars['Base64'];
  node: Products;
  offset: Scalars['Int'];
};

export type Projects = {
  __typename?: 'Projects';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  cursor: Scalars['Base64'];
  node: Projects;
  offset: Scalars['Int'];
};

export type PublicPageSetting = {
  __typename?: 'PublicPageSetting';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Link?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type PublicPageSettingConnection = {
  __typename?: 'PublicPageSettingConnection';
  edges: Array<PublicPageSettingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PublicPageSettingEdge = {
  __typename?: 'PublicPageSettingEdge';
  cursor: Scalars['Base64'];
  node: PublicPageSetting;
  offset: Scalars['Int'];
};

export type PublicPageTemplate = {
  __typename?: 'PublicPageTemplate';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type PublicPageTemplateConnection = {
  __typename?: 'PublicPageTemplateConnection';
  edges: Array<PublicPageTemplateEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PublicPageTemplateEdge = {
  __typename?: 'PublicPageTemplateEdge';
  cursor: Scalars['Base64'];
  node: PublicPageTemplate;
  offset: Scalars['Int'];
};

export type PublicSchedule = {
  __typename?: 'PublicSchedule';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsInactivated?: Maybe<Scalars['Boolean']>;
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  PublicPageTemplate?: Maybe<PublicPageTemplate>;
  PublicPageTemplateId?: Maybe<Scalars['ID']>;
  Status?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type PublicScheduleConnection = {
  __typename?: 'PublicScheduleConnection';
  edges: Array<PublicScheduleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PublicScheduleEdge = {
  __typename?: 'PublicScheduleEdge';
  cursor: Scalars['Base64'];
  node: PublicSchedule;
  offset: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  accountResourceScores: AccountResourceScoresConnection;
  accountResourceScoresById?: Maybe<AccountResourceScores>;
  accountTags: AccountTagsConnection;
  accountTagsById?: Maybe<AccountTags>;
  accounts: AccountsConnection;
  accountsById?: Maybe<Accounts>;
  activities: ActivitiesConnection;
  activitiesById?: Maybe<Activities>;
  activityResources: ActivityResourcesConnection;
  activityResourcesById?: Maybe<ActivityResources>;
  arcadeGames: ArcadeGamesConnection;
  arcadeGamesById?: Maybe<ArcadeGames>;
  attendee: AttendeeConnection;
  attendee1: Attendee1Connection;
  attendee1ById?: Maybe<Attendee1>;
  attendeeById?: Maybe<Attendee>;
  attendees: AttendeesConnection;
  attendeesById?: Maybe<Attendees>;
  availabilities: AvailabilitiesConnection;
  availabilitiesById?: Maybe<Availabilities>;
  availabilityPatternResources: AvailabilityPatternResourcesConnection;
  availabilityPatternResourcesById?: Maybe<AvailabilityPatternResources>;
  availabilityPatterns: AvailabilityPatternsConnection;
  availabilityPatternsById?: Maybe<AvailabilityPatterns>;
  availabilityTemplateEntries: AvailabilityTemplateEntriesConnection;
  availabilityTemplateEntriesById?: Maybe<AvailabilityTemplateEntries>;
  availabilityTemplateResources: AvailabilityTemplateResourcesConnection;
  availabilityTemplateResourcesById?: Maybe<AvailabilityTemplateResources>;
  availabilityTemplates: AvailabilityTemplatesConnection;
  availabilityTemplatesById?: Maybe<AvailabilityTemplates>;
  class: ClassConnection;
  classById?: Maybe<Class>;
  clientAvailabilities: ClientAvailabilitiesConnection;
  clientAvailabilitiesById?: Maybe<ClientAvailabilities>;
  contactTags: ContactTagsConnection;
  contactTagsById?: Maybe<ContactTags>;
  contacts: ContactsConnection;
  contactsById?: Maybe<Contacts>;
  defaultAutoOffer: DefaultAutoOfferConnection;
  defaultAutoOfferById?: Maybe<DefaultAutoOffer>;
  groupEvent: GroupEventConnection;
  groupEvent1: GroupEvent1Connection;
  groupEvent1ById?: Maybe<GroupEvent1>;
  groupEventById?: Maybe<GroupEvent>;
  holidayRegions: HolidayRegionsConnection;
  holidayRegionsById?: Maybe<HolidayRegions>;
  holidays: HolidaysConnection;
  holidaysById?: Maybe<Holidays>;
  jobAllocations: JobAllocationsConnection;
  jobAllocationsById?: Maybe<JobAllocations>;
  jobDependencies: JobDependenciesConnection;
  jobDependenciesById?: Maybe<JobDependencies>;
  jobOffers: JobOffersConnection;
  jobOffersById?: Maybe<JobOffers>;
  jobProducts: JobProductsConnection;
  jobProductsById?: Maybe<JobProducts>;
  jobTags: JobTagsConnection;
  jobTagsById?: Maybe<JobTags>;
  jobTasks: JobTasksConnection;
  jobTasksById?: Maybe<JobTasks>;
  jobTimeConstraints: JobTimeConstraintsConnection;
  jobTimeConstraintsById?: Maybe<JobTimeConstraints>;
  jobs: JobsConnection;
  jobsById?: Maybe<Jobs>;
  locationResourceScores: LocationResourceScoresConnection;
  locationResourceScoresById?: Maybe<LocationResourceScores>;
  locations: LocationsConnection;
  locationsById?: Maybe<Locations>;
  logger: LoggerConnection;
  loggerById?: Maybe<Logger>;
  monitorLogs: MonitorLogsConnection;
  monitorLogsById?: Maybe<MonitorLogs>;
  monitors: MonitorsConnection;
  monitorsById?: Maybe<Monitors>;
  /**
   * Retrieve all `Notifications` starting from a given timestamp.
   *
   * The entries are sorted by the `Timestamp` field in descending order. The result set is limited to the
   * first 10,000 entries.
   *
   * Because notifications can refer to different object types (currently `Jobs`, `Shifts`, `ResourceJobOffers`
   * and `ResourceShiftOffers`), the `Object` field is a union type that can be queried using type-dependent
   * query fragments. The type of `Object` can be queried by introspection with the `__typename` meta-field.
   *
   * Example:
   *
   * ```
   * {
   *   notifications(start: "2019-08-11T00:42:13.666Z") {
   *     Timestamp
   *     Action
   *
   *     Object {
   *       __typename
   *       ... on Jobs {
   *         UID
   *         Name
   *         Description
   *         JobStart: Start
   *         JobEnd: End
   *         JobStatus
   *       }
   *       ... on Shifts {
   *         UID
   *         DisplayName
   *         Start
   *         End
   *       }
   *       ... on ResourceJobOffers {
   *         UID
   *         JobOffer {
   *           UID
   *           Status
   *           Job {
   *             UID
   *             Name
   *             Description
   *             ActualStart
   *             ActualEnd
   *             JobStatus
   *           }
   *         }
   *       }
   *       ... on ResourceShiftOffers {
   *         UID
   *         ShiftOffer {
   *           UID
   *           Status
   *           Shifts {
   *             Shift {
   *               UID
   *               DisplayName
   *               Start
   *               End
   *             }
   *           }
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   */
  notifications: Array<Maybe<Notifications>>;
  patients: PatientsConnection;
  patientsById?: Maybe<Patients>;
  products: ProductsConnection;
  productsById?: Maybe<Products>;
  projects: ProjectsConnection;
  projectsById?: Maybe<Projects>;
  publicPageSetting: PublicPageSettingConnection;
  publicPageSettingById?: Maybe<PublicPageSetting>;
  publicPageTemplate: PublicPageTemplateConnection;
  publicPageTemplateById?: Maybe<PublicPageTemplate>;
  publicSchedule: PublicScheduleConnection;
  publicScheduleById?: Maybe<PublicSchedule>;
  recurringSchedules: RecurringSchedulesConnection;
  recurringSchedulesById?: Maybe<RecurringSchedules>;
  regions: RegionsConnection;
  regionsById?: Maybe<Regions>;
  resourceJobOffers: ResourceJobOffersConnection;
  resourceJobOffersById?: Maybe<ResourceJobOffers>;
  resourceOverrideRegions: ResourceOverrideRegionsConnection;
  resourceOverrideRegionsById?: Maybe<ResourceOverrideRegions>;
  resourceOverrides: ResourceOverridesConnection;
  resourceOverridesById?: Maybe<ResourceOverrides>;
  resourceRegions: ResourceRegionsConnection;
  resourceRegionsById?: Maybe<ResourceRegions>;
  resourceRequirementTags: ResourceRequirementTagsConnection;
  resourceRequirementTagsById?: Maybe<ResourceRequirementTags>;
  resourceRequirements: ResourceRequirementsConnection;
  resourceRequirementsById?: Maybe<ResourceRequirements>;
  resourceShiftBreaks: ResourceShiftBreaksConnection;
  resourceShiftBreaksById?: Maybe<ResourceShiftBreaks>;
  resourceShiftOffers: ResourceShiftOffersConnection;
  resourceShiftOffersById?: Maybe<ResourceShiftOffers>;
  resourceShifts: ResourceShiftsConnection;
  resourceShiftsById?: Maybe<ResourceShifts>;
  resourceTags: ResourceTagsConnection;
  resourceTagsById?: Maybe<ResourceTags>;
  resources: ResourcesConnection;
  resourcesById?: Maybe<Resources>;
  resourcesInRegions: ResourcesConnection;
  scheduleTemplates: ScheduleTemplatesConnection;
  scheduleTemplatesById?: Maybe<ScheduleTemplates>;
  shiftOfferShifts: ShiftOfferShiftsConnection;
  shiftOfferShiftsById?: Maybe<ShiftOfferShifts>;
  shiftOffers: ShiftOffersConnection;
  shiftOffersById?: Maybe<ShiftOffers>;
  shiftTags: ShiftTagsConnection;
  shiftTagsById?: Maybe<ShiftTags>;
  shifts: ShiftsConnection;
  shiftsById?: Maybe<Shifts>;
  tagManagerSettings: TagManagerSettingsConnection;
  tagManagerSettingsById?: Maybe<TagManagerSettings>;
  tagRequest: TagRequestConnection;
  tagRequestById?: Maybe<TagRequest>;
  tags: TagsConnection;
  tagsById?: Maybe<Tags>;
  templatedActivities: TemplatedActivitiesConnection;
  templatedActivitiesById?: Maybe<TemplatedActivities>;
  templatedActivityResources: TemplatedActivityResourcesConnection;
  templatedActivityResourcesById?: Maybe<TemplatedActivityResources>;
  templatedAttendees: TemplatedAttendeesConnection;
  templatedAttendeesById?: Maybe<TemplatedAttendees>;
  templatedJobAllocations: TemplatedJobAllocationsConnection;
  templatedJobAllocationsById?: Maybe<TemplatedJobAllocations>;
  templatedJobDependencies: TemplatedJobDependenciesConnection;
  templatedJobDependenciesById?: Maybe<TemplatedJobDependencies>;
  templatedJobProducts: TemplatedJobProductsConnection;
  templatedJobProductsById?: Maybe<TemplatedJobProducts>;
  templatedJobTags: TemplatedJobTagsConnection;
  templatedJobTagsById?: Maybe<TemplatedJobTags>;
  templatedJobTasks: TemplatedJobTasksConnection;
  templatedJobTasksById?: Maybe<TemplatedJobTasks>;
  templatedJobTimeConstraints: TemplatedJobTimeConstraintsConnection;
  templatedJobTimeConstraintsById?: Maybe<TemplatedJobTimeConstraints>;
  templatedJobs: TemplatedJobsConnection;
  templatedJobsById?: Maybe<TemplatedJobs>;
  templatedResourceRequirementTags: TemplatedResourceRequirementTagsConnection;
  templatedResourceRequirementTagsById?: Maybe<TemplatedResourceRequirementTags>;
  templatedResourceRequirements: TemplatedResourceRequirementsConnection;
  templatedResourceRequirementsById?: Maybe<TemplatedResourceRequirements>;
  templatedResourceShifts: TemplatedResourceShiftsConnection;
  templatedResourceShiftsById?: Maybe<TemplatedResourceShifts>;
  templatedShiftTags: TemplatedShiftTagsConnection;
  templatedShiftTagsById?: Maybe<TemplatedShiftTags>;
  templatedShifts: TemplatedShiftsConnection;
  templatedShiftsById?: Maybe<TemplatedShifts>;
  testPerObj: TestPerObjConnection;
  testPerObjById?: Maybe<TestPerObj>;
  testPerObject2: TestPerObject2Connection;
  testPerObject2ById?: Maybe<TestPerObject2>;
  timesheet: TimesheetConnection;
  timesheetById?: Maybe<Timesheet>;
  timesheetEntry: TimesheetEntryConnection;
  timesheetEntryById?: Maybe<TimesheetEntry>;
  training: TrainingConnection;
  trainingById?: Maybe<Training>;
  tuanTest: TuanTestConnection;
  tuanTestById?: Maybe<TuanTest>;
  userRegions: UserRegionsConnection;
  userRegionsById?: Maybe<UserRegions>;
  users: UsersConnection;
  usersById?: Maybe<Users>;
  vendorTag: VendorTagConnection;
  vendorTagById?: Maybe<VendorTag>;
  vendors: VendorsConnection;
  vendorsById?: Maybe<Vendors>;
};


export type QueryAccountResourceScoresArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']>;
};


export type QueryAccountResourceScoresByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAccountTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountTags']>;
};


export type QueryAccountTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccounts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccounts']>;
};


export type QueryAccountsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type QueryActivitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryActivityResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']>;
};


export type QueryActivityResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryArcadeGamesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterArcadeGames']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseArcadeGames']>;
};


export type QueryArcadeGamesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAttendeeArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendee']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendee']>;
};


export type QueryAttendee1Args = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendee1']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendee1']>;
};


export type QueryAttendee1ByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAttendeeByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAttendeesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendees']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendees']>;
};


export type QueryAttendeesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilities']>;
};


export type QueryAvailabilitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityPatternResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']>;
};


export type QueryAvailabilityPatternResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityPatternsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatterns']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatterns']>;
};


export type QueryAvailabilityPatternsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityTemplateEntriesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateEntries']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateEntries']>;
};


export type QueryAvailabilityTemplateEntriesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityTemplateResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']>;
};


export type QueryAvailabilityTemplateResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityTemplatesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplates']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplates']>;
};


export type QueryAvailabilityTemplatesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClassArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClass']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClass']>;
};


export type QueryClassByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClientAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type QueryClientAvailabilitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryContactTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterContactTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContactTags']>;
};


export type QueryContactTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterContacts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContacts']>;
};


export type QueryContactsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryDefaultAutoOfferArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterDefaultAutoOffer']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseDefaultAutoOffer']>;
};


export type QueryDefaultAutoOfferByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryGroupEventArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterGroupEvent']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseGroupEvent']>;
};


export type QueryGroupEvent1Args = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterGroupEvent1']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseGroupEvent1']>;
};


export type QueryGroupEvent1ByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryGroupEventByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryHolidayRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidayRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidayRegions']>;
};


export type QueryHolidayRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryHolidaysArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidays']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidays']>;
};


export type QueryHolidaysByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobAllocationsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type QueryJobAllocationsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobDependenciesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']>;
};


export type QueryJobDependenciesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobOffers']>;
};


export type QueryJobOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobProductsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobProducts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobProducts']>;
};


export type QueryJobProductsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTags']>;
};


export type QueryJobTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobTasksArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTasks']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTasks']>;
};


export type QueryJobTasksByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobTimeConstraintsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTimeConstraints']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTimeConstraints']>;
};


export type QueryJobTimeConstraintsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type QueryJobsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryLocationResourceScoresArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']>;
};


export type QueryLocationResourceScoresByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLocations']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocations']>;
};


export type QueryLocationsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryLoggerArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLogger']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLogger']>;
};


export type QueryLoggerByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryMonitorLogsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterMonitorLogs']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseMonitorLogs']>;
};


export type QueryMonitorLogsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryMonitorsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterMonitors']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseMonitors']>;
};


export type QueryMonitorsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryNotificationsArgs = {
  start: Scalars['Instant'];
};


export type QueryPatientsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterPatients']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClausePatients']>;
};


export type QueryPatientsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterProducts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseProducts']>;
};


export type QueryProductsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterProjects']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseProjects']>;
};


export type QueryProjectsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryPublicPageSettingArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterPublicPageSetting']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClausePublicPageSetting']>;
};


export type QueryPublicPageSettingByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryPublicPageTemplateArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterPublicPageTemplate']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClausePublicPageTemplate']>;
};


export type QueryPublicPageTemplateByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryPublicScheduleArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterPublicSchedule']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClausePublicSchedule']>;
};


export type QueryPublicScheduleByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryRecurringSchedulesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterRecurringSchedules']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseRecurringSchedules']>;
};


export type QueryRecurringSchedulesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseRegions']>;
};


export type QueryRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceJobOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceJobOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceJobOffers']>;
};


export type QueryResourceJobOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceOverrideRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrideRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrideRegions']>;
};


export type QueryResourceOverrideRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceOverridesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrides']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrides']>;
};


export type QueryResourceOverridesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRegions']>;
};


export type QueryResourceRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceRequirementTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirementTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirementTags']>;
};


export type QueryResourceRequirementTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceRequirementsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirements']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirements']>;
};


export type QueryResourceRequirementsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceShiftBreaksArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftBreaks']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftBreaks']>;
};


export type QueryResourceShiftBreaksByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceShiftOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftOffers']>;
};


export type QueryResourceShiftOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']>;
};


export type QueryResourceShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']>;
};


export type QueryResourceTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']>;
};


export type QueryResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourcesInRegionsArgs = {
  end: Scalars['Instant'];
  regionIds: Array<Scalars['ID']>;
  start: Scalars['Instant'];
};


export type QueryScheduleTemplatesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterScheduleTemplates']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseScheduleTemplates']>;
};


export type QueryScheduleTemplatesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftOfferShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']>;
};


export type QueryShiftOfferShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOffers']>;
};


export type QueryShiftOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftTags']>;
};


export type QueryShiftTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};


export type QueryShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTagManagerSettingsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTagManagerSettings']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTagManagerSettings']>;
};


export type QueryTagManagerSettingsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTagRequestArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTagRequest']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTagRequest']>;
};


export type QueryTagRequestByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTags']>;
};


export type QueryTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedActivitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']>;
};


export type QueryTemplatedActivitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedActivityResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']>;
};


export type QueryTemplatedActivityResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedAttendeesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedAttendees']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedAttendees']>;
};


export type QueryTemplatedAttendeesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobAllocationsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type QueryTemplatedJobAllocationsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobDependenciesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']>;
};


export type QueryTemplatedJobDependenciesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobProductsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobProducts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobProducts']>;
};


export type QueryTemplatedJobProductsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTags']>;
};


export type QueryTemplatedJobTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobTasksArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTasks']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTasks']>;
};


export type QueryTemplatedJobTasksByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobTimeConstraintsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTimeConstraints']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTimeConstraints']>;
};


export type QueryTemplatedJobTimeConstraintsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobs']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobs']>;
};


export type QueryTemplatedJobsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedResourceRequirementTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirementTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirementTags']>;
};


export type QueryTemplatedResourceRequirementTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedResourceRequirementsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirements']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirements']>;
};


export type QueryTemplatedResourceRequirementsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedResourceShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']>;
};


export type QueryTemplatedResourceShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedShiftTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShiftTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShiftTags']>;
};


export type QueryTemplatedShiftTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShifts']>;
};


export type QueryTemplatedShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTestPerObjArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTestPerObj']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTestPerObj']>;
};


export type QueryTestPerObjByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTestPerObject2Args = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTestPerObject2']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTestPerObject2']>;
};


export type QueryTestPerObject2ByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTimesheetArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheet']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheet']>;
};


export type QueryTimesheetByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTimesheetEntryArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheetEntry']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheetEntry']>;
};


export type QueryTimesheetEntryByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTrainingArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTraining']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTraining']>;
};


export type QueryTrainingByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTuanTestArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTuanTest']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTuanTest']>;
};


export type QueryTuanTestByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryUserRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterUserRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUserRegions']>;
};


export type QueryUserRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterUsers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUsers']>;
};


export type QueryUsersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryVendorTagArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterVendorTag']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseVendorTag']>;
};


export type QueryVendorTagByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryVendorsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterVendors']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseVendors']>;
};


export type QueryVendorsByIdArgs = {
  UID: Scalars['ID'];
};

export type RecurringSchedules = {
  __typename?: 'RecurringSchedules';
  AckAllJobs: Scalars['Boolean'];
  ClientAvailabilities: Array<ClientAvailabilities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern?: Maybe<Scalars['String']>;
  Summary?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type RecurringSchedulesClientAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type RecurringSchedulesJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};

export type RecurringSchedulesConnection = {
  __typename?: 'RecurringSchedulesConnection';
  edges: Array<RecurringSchedulesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RecurringSchedulesEdge = {
  __typename?: 'RecurringSchedulesEdge';
  cursor: Scalars['Base64'];
  node: RecurringSchedules;
  offset: Scalars['Int'];
};

export type Regions = {
  __typename?: 'Regions';
  CountryCode?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Radius?: Maybe<Scalars['Int']>;
  Resources: Array<Resources>;
  Timezone: Scalars['String'];
  UID: Scalars['ID'];
  UserRegions: Array<UserRegions>;
};


export type RegionsResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']>;
};


export type RegionsUserRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterUserRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUserRegions']>;
};

export type RegionsConnection = {
  __typename?: 'RegionsConnection';
  edges: Array<RegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegionsEdge = {
  __typename?: 'RegionsEdge';
  cursor: Scalars['Base64'];
  node: Regions;
  offset: Scalars['Int'];
};

export type ResourceJobOffers = {
  __typename?: 'ResourceJobOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobOffer: JobOffers;
  JobOfferId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type ResourceJobOffersConnection = {
  __typename?: 'ResourceJobOffersConnection';
  edges: Array<ResourceJobOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceJobOffersEdge = {
  __typename?: 'ResourceJobOffersEdge';
  cursor: Scalars['Base64'];
  node: ResourceJobOffers;
  offset: Scalars['Int'];
};

export type ResourceOverrideRegions = {
  __typename?: 'ResourceOverrideRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  ResourceOverride: ResourceOverrides;
  ResourceOverrideId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ResourceOverrideRegionsConnection = {
  __typename?: 'ResourceOverrideRegionsConnection';
  edges: Array<ResourceOverrideRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceOverrideRegionsEdge = {
  __typename?: 'ResourceOverrideRegionsEdge';
  cursor: Scalars['Base64'];
  node: ResourceOverrideRegions;
  offset: Scalars['Int'];
};

export type ResourceOverrides = {
  __typename?: 'ResourceOverrides';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  ResourceOverrideRegions: Array<ResourceOverrideRegions>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};


export type ResourceOverridesResourceOverrideRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrideRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrideRegions']>;
};

export type ResourceOverridesConnection = {
  __typename?: 'ResourceOverridesConnection';
  edges: Array<ResourceOverridesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceOverridesEdge = {
  __typename?: 'ResourceOverridesEdge';
  cursor: Scalars['Base64'];
  node: ResourceOverrides;
  offset: Scalars['Int'];
};

export type ResourceRegions = {
  __typename?: 'ResourceRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Start?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type ResourceRegionsConnection = {
  __typename?: 'ResourceRegionsConnection';
  edges: Array<ResourceRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceRegionsEdge = {
  __typename?: 'ResourceRegionsEdge';
  cursor: Scalars['Base64'];
  node: ResourceRegions;
  offset: Scalars['Int'];
};

export type ResourceRequirementTags = {
  __typename?: 'ResourceRequirementTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ResourceRequirement: ResourceRequirements;
  ResourceRequirementId: Scalars['ID'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type ResourceRequirementTagsConnection = {
  __typename?: 'ResourceRequirementTagsConnection';
  edges: Array<ResourceRequirementTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceRequirementTagsEdge = {
  __typename?: 'ResourceRequirementTagsEdge';
  cursor: Scalars['Base64'];
  node: ResourceRequirementTags;
  offset: Scalars['Int'];
};

export type ResourceRequirements = {
  __typename?: 'ResourceRequirements';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  Job: Jobs;
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobAllocations: Array<JobAllocations>;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  ScheduledEnd?: Maybe<Scalars['Instant']>;
  ScheduledStart?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobStatus'];
  Tags: Array<ResourceRequirementTags>;
  UID: Scalars['ID'];
};


export type ResourceRequirementsJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type ResourceRequirementsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirementTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirementTags']>;
};

export type ResourceRequirementsConnection = {
  __typename?: 'ResourceRequirementsConnection';
  edges: Array<ResourceRequirementsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceRequirementsEdge = {
  __typename?: 'ResourceRequirementsEdge';
  cursor: Scalars['Base64'];
  node: ResourceRequirements;
  offset: Scalars['Int'];
};

export type ResourceShiftBreaks = {
  __typename?: 'ResourceShiftBreaks';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShift: ResourceShifts;
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type ResourceShiftBreaksConnection = {
  __typename?: 'ResourceShiftBreaksConnection';
  edges: Array<ResourceShiftBreaksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceShiftBreaksEdge = {
  __typename?: 'ResourceShiftBreaksEdge';
  cursor: Scalars['Base64'];
  node: ResourceShiftBreaks;
  offset: Scalars['Int'];
};

export type ResourceShiftOffers = {
  __typename?: 'ResourceShiftOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  ShiftOffer: ShiftOffers;
  ShiftOfferId: Scalars['ID'];
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type ResourceShiftOffersConnection = {
  __typename?: 'ResourceShiftOffersConnection';
  edges: Array<ResourceShiftOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceShiftOffersEdge = {
  __typename?: 'ResourceShiftOffersEdge';
  cursor: Scalars['Base64'];
  node: ResourceShiftOffers;
  offset: Scalars['Int'];
};

export type ResourceShifts = {
  __typename?: 'ResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Breaks: Array<ResourceShiftBreaks>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Shift: Shifts;
  ShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};


export type ResourceShiftsBreaksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftBreaks']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftBreaks']>;
};

export type ResourceShiftsConnection = {
  __typename?: 'ResourceShiftsConnection';
  edges: Array<ResourceShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceShiftsEdge = {
  __typename?: 'ResourceShiftsEdge';
  cursor: Scalars['Base64'];
  node: ResourceShifts;
  offset: Scalars['Int'];
};

export type ResourceTags = {
  __typename?: 'ResourceTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiryDate?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ResourceTagsConnection = {
  __typename?: 'ResourceTagsConnection';
  edges: Array<ResourceTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTagsEdge = {
  __typename?: 'ResourceTagsEdge';
  cursor: Scalars['Base64'];
  node: ResourceTags;
  offset: Scalars['Int'];
};

export type Resources = {
  __typename?: 'Resources';
  AccountScores: Array<AccountResourceScores>;
  Activities: Array<Activities>;
  Alias?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  Availabilities: Array<Availabilities>;
  AvailabilityPatterns: Array<AvailabilityPatternResources>;
  AvailabilityTemplates: Array<AvailabilityTemplateResources>;
  Birthday?: Maybe<Scalars['LocalDate']>;
  Category?: Maybe<Scalars['String']>;
  CountryCode?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  EmploymentType?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  JobAllocations: Array<JobAllocations>;
  Language?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationScores: Array<LocationResourceScores>;
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  NotificationType?: Maybe<Scalars['String']>;
  PrimaryPhone?: Maybe<Scalars['String']>;
  PrimaryRegion: Regions;
  PrimaryRegionId: Scalars['ID'];
  Rating?: Maybe<Scalars['Int']>;
  ResourceActivities: Array<ActivityResources>;
  ResourceOverrides: Array<ResourceOverrides>;
  ResourceRegions: Array<ResourceRegions>;
  ResourceShifts: Array<ResourceShifts>;
  ResourceTags: Array<ResourceTags>;
  ResourceType?: Maybe<Scalars['String']>;
  TemplatedActivities: Array<TemplatedActivities>;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedResourceActivities: Array<TemplatedActivityResources>;
  TemplatedResourceShifts: Array<TemplatedResourceShifts>;
  UID: Scalars['ID'];
  User?: Maybe<Users>;
  UserId?: Maybe<Scalars['ID']>;
  VehicleID?: Maybe<Scalars['String']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']>;
  WorkingHourType?: Maybe<Scalars['WorkingHourType']>;
};


export type ResourcesAccountScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']>;
};


export type ResourcesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type ResourcesAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilities']>;
};


export type ResourcesAvailabilityPatternsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']>;
};


export type ResourcesAvailabilityTemplatesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']>;
};


export type ResourcesJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type ResourcesLocationScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']>;
};


export type ResourcesResourceActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']>;
};


export type ResourcesResourceOverridesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrides']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrides']>;
};


export type ResourcesResourceRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRegions']>;
};


export type ResourcesResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']>;
};


export type ResourcesResourceTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']>;
};


export type ResourcesTemplatedActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']>;
};


export type ResourcesTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type ResourcesTemplatedResourceActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']>;
};


export type ResourcesTemplatedResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']>;
};

export type ResourcesConnection = {
  __typename?: 'ResourcesConnection';
  edges: Array<ResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourcesEdge = {
  __typename?: 'ResourcesEdge';
  cursor: Scalars['Base64'];
  node: Resources;
  offset: Scalars['Int'];
};

export type ScheduleTemplates = {
  __typename?: 'ScheduleTemplates';
  Activities: Array<Activities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeletedBy?: Maybe<Users>;
  DeletedById?: Maybe<Scalars['ID']>;
  DeletedDate?: Maybe<Scalars['Instant']>;
  Description?: Maybe<Scalars['String']>;
  IsDeleted: Scalars['Boolean'];
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  PeriodDays?: Maybe<Scalars['Int']>;
  Shifts: Array<Shifts>;
  TemplatedActivities: Array<TemplatedActivities>;
  TemplatedJobs: Array<TemplatedJobs>;
  TemplatedShifts: Array<TemplatedShifts>;
  UID: Scalars['ID'];
};


export type ScheduleTemplatesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type ScheduleTemplatesJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type ScheduleTemplatesShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};


export type ScheduleTemplatesTemplatedActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']>;
};


export type ScheduleTemplatesTemplatedJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobs']>;
};


export type ScheduleTemplatesTemplatedShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShifts']>;
};

export type ScheduleTemplatesConnection = {
  __typename?: 'ScheduleTemplatesConnection';
  edges: Array<ScheduleTemplatesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ScheduleTemplatesEdge = {
  __typename?: 'ScheduleTemplatesEdge';
  cursor: Scalars['Base64'];
  node: ScheduleTemplates;
  offset: Scalars['Int'];
};

export type SchemaMutation = {
  __typename?: 'SchemaMutation';
  deleteAccountResourceScores?: Maybe<Scalars['ID']>;
  deleteAccountTags?: Maybe<Scalars['ID']>;
  deleteAccounts?: Maybe<Scalars['ID']>;
  deleteActivities?: Maybe<Scalars['ID']>;
  deleteActivityResources?: Maybe<Scalars['ID']>;
  deleteArcadeGames?: Maybe<Scalars['ID']>;
  deleteAttendee?: Maybe<Scalars['ID']>;
  deleteAttendee1?: Maybe<Scalars['ID']>;
  deleteAttendees?: Maybe<Scalars['ID']>;
  deleteAvailabilities?: Maybe<Scalars['ID']>;
  deleteAvailabilityPatternResources?: Maybe<Scalars['ID']>;
  deleteAvailabilityPatterns?: Maybe<Scalars['ID']>;
  deleteAvailabilityTemplateEntries?: Maybe<Scalars['ID']>;
  deleteAvailabilityTemplateResources?: Maybe<Scalars['ID']>;
  deleteAvailabilityTemplates?: Maybe<Scalars['ID']>;
  deleteClass?: Maybe<Scalars['ID']>;
  deleteClientAvailabilities?: Maybe<Scalars['ID']>;
  deleteContactTags?: Maybe<Scalars['ID']>;
  deleteContacts?: Maybe<Scalars['ID']>;
  deleteDefaultAutoOffer?: Maybe<Scalars['ID']>;
  deleteGroupEvent?: Maybe<Scalars['ID']>;
  deleteGroupEvent1?: Maybe<Scalars['ID']>;
  deleteHolidayRegions?: Maybe<Scalars['ID']>;
  deleteHolidays?: Maybe<Scalars['ID']>;
  deleteJobAllocations?: Maybe<Scalars['ID']>;
  deleteJobDependencies?: Maybe<Scalars['ID']>;
  deleteJobOffers?: Maybe<Scalars['ID']>;
  deleteJobProducts?: Maybe<Scalars['ID']>;
  deleteJobTags?: Maybe<Scalars['ID']>;
  deleteJobTasks?: Maybe<Scalars['ID']>;
  deleteJobTimeConstraints?: Maybe<Scalars['ID']>;
  deleteJobs?: Maybe<Scalars['ID']>;
  deleteLocationResourceScores?: Maybe<Scalars['ID']>;
  deleteLocations?: Maybe<Scalars['ID']>;
  deleteLogger?: Maybe<Scalars['ID']>;
  deleteMonitorLogs?: Maybe<Scalars['ID']>;
  deleteMonitors?: Maybe<Scalars['ID']>;
  deletePatients?: Maybe<Scalars['ID']>;
  deleteProducts?: Maybe<Scalars['ID']>;
  deleteProjects?: Maybe<Scalars['ID']>;
  deletePublicPageSetting?: Maybe<Scalars['ID']>;
  deletePublicPageTemplate?: Maybe<Scalars['ID']>;
  deletePublicSchedule?: Maybe<Scalars['ID']>;
  deleteRecurringSchedules?: Maybe<Scalars['ID']>;
  deleteRegions?: Maybe<Scalars['ID']>;
  deleteResourceJobOffers?: Maybe<Scalars['ID']>;
  deleteResourceOverrideRegions?: Maybe<Scalars['ID']>;
  deleteResourceOverrides?: Maybe<Scalars['ID']>;
  deleteResourceRegions?: Maybe<Scalars['ID']>;
  deleteResourceRequirementTags?: Maybe<Scalars['ID']>;
  deleteResourceRequirements?: Maybe<Scalars['ID']>;
  deleteResourceShiftBreaks?: Maybe<Scalars['ID']>;
  deleteResourceShiftOffers?: Maybe<Scalars['ID']>;
  deleteResourceShifts?: Maybe<Scalars['ID']>;
  deleteResourceTags?: Maybe<Scalars['ID']>;
  deleteResources?: Maybe<Scalars['ID']>;
  deleteScheduleTemplates?: Maybe<Scalars['ID']>;
  deleteShiftOfferShifts?: Maybe<Scalars['ID']>;
  deleteShiftOffers?: Maybe<Scalars['ID']>;
  deleteShiftTags?: Maybe<Scalars['ID']>;
  deleteShifts?: Maybe<Scalars['ID']>;
  deleteTagManagerSettings?: Maybe<Scalars['ID']>;
  deleteTagRequest?: Maybe<Scalars['ID']>;
  deleteTags?: Maybe<Scalars['ID']>;
  deleteTemplatedActivities?: Maybe<Scalars['ID']>;
  deleteTemplatedActivityResources?: Maybe<Scalars['ID']>;
  deleteTemplatedAttendees?: Maybe<Scalars['ID']>;
  deleteTemplatedJobAllocations?: Maybe<Scalars['ID']>;
  deleteTemplatedJobDependencies?: Maybe<Scalars['ID']>;
  deleteTemplatedJobProducts?: Maybe<Scalars['ID']>;
  deleteTemplatedJobTags?: Maybe<Scalars['ID']>;
  deleteTemplatedJobTasks?: Maybe<Scalars['ID']>;
  deleteTemplatedJobTimeConstraints?: Maybe<Scalars['ID']>;
  deleteTemplatedJobs?: Maybe<Scalars['ID']>;
  deleteTemplatedResourceRequirementTags?: Maybe<Scalars['ID']>;
  deleteTemplatedResourceRequirements?: Maybe<Scalars['ID']>;
  deleteTemplatedResourceShifts?: Maybe<Scalars['ID']>;
  deleteTemplatedShiftTags?: Maybe<Scalars['ID']>;
  deleteTemplatedShifts?: Maybe<Scalars['ID']>;
  deleteTestPerObj?: Maybe<Scalars['ID']>;
  deleteTestPerObject2?: Maybe<Scalars['ID']>;
  deleteTimesheet?: Maybe<Scalars['ID']>;
  deleteTimesheetEntry?: Maybe<Scalars['ID']>;
  deleteTraining?: Maybe<Scalars['ID']>;
  deleteTuanTest?: Maybe<Scalars['ID']>;
  deleteUserRegions?: Maybe<Scalars['ID']>;
  deleteVendorTag?: Maybe<Scalars['ID']>;
  deleteVendors?: Maybe<Scalars['ID']>;
  getAccountResourceScores: SimpleAccountResourceScores;
  getAccountTags: SimpleAccountTags;
  getAccounts: SimpleAccounts;
  getActivities: SimpleActivities;
  getActivityResources: SimpleActivityResources;
  getArcadeGames: SimpleArcadeGames;
  getAttendee: SimpleAttendee;
  getAttendee1: SimpleAttendee1;
  getAttendees: SimpleAttendees;
  getAvailabilities: SimpleAvailabilities;
  getAvailabilityPatternResources: SimpleAvailabilityPatternResources;
  getAvailabilityPatterns: SimpleAvailabilityPatterns;
  getAvailabilityTemplateEntries: SimpleAvailabilityTemplateEntries;
  getAvailabilityTemplateResources: SimpleAvailabilityTemplateResources;
  getAvailabilityTemplates: SimpleAvailabilityTemplates;
  getClass: SimpleClass;
  getClientAvailabilities: SimpleClientAvailabilities;
  getContactTags: SimpleContactTags;
  getContacts: SimpleContacts;
  getDefaultAutoOffer: SimpleDefaultAutoOffer;
  getGroupEvent: SimpleGroupEvent;
  getGroupEvent1: SimpleGroupEvent1;
  getHolidayRegions: SimpleHolidayRegions;
  getHolidays: SimpleHolidays;
  getJobAllocations: SimpleJobAllocations;
  getJobDependencies: SimpleJobDependencies;
  getJobOffers: SimpleJobOffers;
  getJobProducts: SimpleJobProducts;
  getJobTags: SimpleJobTags;
  getJobTasks: SimpleJobTasks;
  getJobTimeConstraints: SimpleJobTimeConstraints;
  getJobs: SimpleJobs;
  getLocationResourceScores: SimpleLocationResourceScores;
  getLocations: SimpleLocations;
  getLogger: SimpleLogger;
  getMonitorLogs: SimpleMonitorLogs;
  getMonitors: SimpleMonitors;
  getPatients: SimplePatients;
  getProducts: SimpleProducts;
  getProjects: SimpleProjects;
  getPublicPageSetting: SimplePublicPageSetting;
  getPublicPageTemplate: SimplePublicPageTemplate;
  getPublicSchedule: SimplePublicSchedule;
  getRecurringSchedules: SimpleRecurringSchedules;
  getRegions: SimpleRegions;
  getResourceJobOffers: SimpleResourceJobOffers;
  getResourceOverrideRegions: SimpleResourceOverrideRegions;
  getResourceOverrides: SimpleResourceOverrides;
  getResourceRegions: SimpleResourceRegions;
  getResourceRequirementTags: SimpleResourceRequirementTags;
  getResourceRequirements: SimpleResourceRequirements;
  getResourceShiftBreaks: SimpleResourceShiftBreaks;
  getResourceShiftOffers: SimpleResourceShiftOffers;
  getResourceShifts: SimpleResourceShifts;
  getResourceTags: SimpleResourceTags;
  getResources: SimpleResources;
  getScheduleTemplates: SimpleScheduleTemplates;
  getShiftOfferShifts: SimpleShiftOfferShifts;
  getShiftOffers: SimpleShiftOffers;
  getShiftTags: SimpleShiftTags;
  getShifts: SimpleShifts;
  getTagManagerSettings: SimpleTagManagerSettings;
  getTagRequest: SimpleTagRequest;
  getTags: SimpleTags;
  getTemplatedActivities: SimpleTemplatedActivities;
  getTemplatedActivityResources: SimpleTemplatedActivityResources;
  getTemplatedAttendees: SimpleTemplatedAttendees;
  getTemplatedJobAllocations: SimpleTemplatedJobAllocations;
  getTemplatedJobDependencies: SimpleTemplatedJobDependencies;
  getTemplatedJobProducts: SimpleTemplatedJobProducts;
  getTemplatedJobTags: SimpleTemplatedJobTags;
  getTemplatedJobTasks: SimpleTemplatedJobTasks;
  getTemplatedJobTimeConstraints: SimpleTemplatedJobTimeConstraints;
  getTemplatedJobs: SimpleTemplatedJobs;
  getTemplatedResourceRequirementTags: SimpleTemplatedResourceRequirementTags;
  getTemplatedResourceRequirements: SimpleTemplatedResourceRequirements;
  getTemplatedResourceShifts: SimpleTemplatedResourceShifts;
  getTemplatedShiftTags: SimpleTemplatedShiftTags;
  getTemplatedShifts: SimpleTemplatedShifts;
  getTestPerObj: SimpleTestPerObj;
  getTestPerObject2: SimpleTestPerObject2;
  getTimesheet: SimpleTimesheet;
  getTimesheetEntry: SimpleTimesheetEntry;
  getTraining: SimpleTraining;
  getTuanTest: SimpleTuanTest;
  getUserRegions: SimpleUserRegions;
  getVendorTag: SimpleVendorTag;
  getVendors: SimpleVendors;
  insertAccountResourceScores: Scalars['ID'];
  insertAccountTags: Scalars['ID'];
  insertAccounts: Scalars['ID'];
  insertActivities: Scalars['ID'];
  insertActivityResources: Scalars['ID'];
  insertArcadeGames: Scalars['ID'];
  insertAttendee: Scalars['ID'];
  insertAttendee1: Scalars['ID'];
  insertAttendees: Scalars['ID'];
  insertAvailabilities: Scalars['ID'];
  insertAvailabilityPatternResources: Scalars['ID'];
  insertAvailabilityPatterns: Scalars['ID'];
  insertAvailabilityTemplateEntries: Scalars['ID'];
  insertAvailabilityTemplateResources: Scalars['ID'];
  insertAvailabilityTemplates: Scalars['ID'];
  insertClass: Scalars['ID'];
  insertClientAvailabilities: Scalars['ID'];
  insertContactTags: Scalars['ID'];
  insertContacts: Scalars['ID'];
  insertDefaultAutoOffer: Scalars['ID'];
  insertGroupEvent: Scalars['ID'];
  insertGroupEvent1: Scalars['ID'];
  insertHolidayRegions: Scalars['ID'];
  insertHolidays: Scalars['ID'];
  insertJobAllocations: Scalars['ID'];
  insertJobDependencies: Scalars['ID'];
  insertJobOffers: Scalars['ID'];
  insertJobProducts: Scalars['ID'];
  insertJobTags: Scalars['ID'];
  insertJobTasks: Scalars['ID'];
  insertJobTimeConstraints: Scalars['ID'];
  insertJobs: Scalars['ID'];
  insertLocationResourceScores: Scalars['ID'];
  insertLocations: Scalars['ID'];
  insertLogger: Scalars['ID'];
  insertMonitorLogs: Scalars['ID'];
  insertMonitors: Scalars['ID'];
  insertPatients: Scalars['ID'];
  insertProducts: Scalars['ID'];
  insertProjects: Scalars['ID'];
  insertPublicPageSetting: Scalars['ID'];
  insertPublicPageTemplate: Scalars['ID'];
  insertPublicSchedule: Scalars['ID'];
  insertRecurringSchedules: Scalars['ID'];
  insertRegions: Scalars['ID'];
  insertResourceJobOffers: Scalars['ID'];
  insertResourceOverrideRegions: Scalars['ID'];
  insertResourceOverrides: Scalars['ID'];
  insertResourceRegions: Scalars['ID'];
  insertResourceRequirementTags: Scalars['ID'];
  insertResourceRequirements: Scalars['ID'];
  insertResourceShiftBreaks: Scalars['ID'];
  insertResourceShiftOffers: Scalars['ID'];
  insertResourceShifts: Scalars['ID'];
  insertResourceTags: Scalars['ID'];
  insertResources: Scalars['ID'];
  insertScheduleTemplates: Scalars['ID'];
  insertShiftOfferShifts: Scalars['ID'];
  insertShiftOffers: Scalars['ID'];
  insertShiftTags: Scalars['ID'];
  insertShifts: Scalars['ID'];
  insertTagManagerSettings: Scalars['ID'];
  insertTagRequest: Scalars['ID'];
  insertTags: Scalars['ID'];
  insertTemplatedActivities: Scalars['ID'];
  insertTemplatedActivityResources: Scalars['ID'];
  insertTemplatedAttendees: Scalars['ID'];
  insertTemplatedJobAllocations: Scalars['ID'];
  insertTemplatedJobDependencies: Scalars['ID'];
  insertTemplatedJobProducts: Scalars['ID'];
  insertTemplatedJobTags: Scalars['ID'];
  insertTemplatedJobTasks: Scalars['ID'];
  insertTemplatedJobTimeConstraints: Scalars['ID'];
  insertTemplatedJobs: Scalars['ID'];
  insertTemplatedResourceRequirementTags: Scalars['ID'];
  insertTemplatedResourceRequirements: Scalars['ID'];
  insertTemplatedResourceShifts: Scalars['ID'];
  insertTemplatedShiftTags: Scalars['ID'];
  insertTemplatedShifts: Scalars['ID'];
  insertTestPerObj: Scalars['ID'];
  insertTestPerObject2: Scalars['ID'];
  insertTimesheet: Scalars['ID'];
  insertTimesheetEntry: Scalars['ID'];
  insertTraining: Scalars['ID'];
  insertTuanTest: Scalars['ID'];
  insertUserRegions: Scalars['ID'];
  insertVendorTag: Scalars['ID'];
  insertVendors: Scalars['ID'];
  updateAccountResourceScores: Scalars['ID'];
  updateAccountTags: Scalars['ID'];
  updateAccounts: Scalars['ID'];
  updateActivities: Scalars['ID'];
  updateActivityResources: Scalars['ID'];
  updateArcadeGames: Scalars['ID'];
  updateAttendee: Scalars['ID'];
  updateAttendee1: Scalars['ID'];
  updateAttendees: Scalars['ID'];
  updateAvailabilities: Scalars['ID'];
  updateAvailabilityPatternResources: Scalars['ID'];
  updateAvailabilityPatterns: Scalars['ID'];
  updateAvailabilityTemplateEntries: Scalars['ID'];
  updateAvailabilityTemplateResources: Scalars['ID'];
  updateAvailabilityTemplates: Scalars['ID'];
  updateClass: Scalars['ID'];
  updateClientAvailabilities: Scalars['ID'];
  updateContactTags: Scalars['ID'];
  updateContacts: Scalars['ID'];
  updateDefaultAutoOffer: Scalars['ID'];
  updateGroupEvent: Scalars['ID'];
  updateGroupEvent1: Scalars['ID'];
  updateHolidayRegions: Scalars['ID'];
  updateHolidays: Scalars['ID'];
  updateJobAllocations: Scalars['ID'];
  updateJobDependencies: Scalars['ID'];
  updateJobOffers: Scalars['ID'];
  updateJobProducts: Scalars['ID'];
  updateJobTags: Scalars['ID'];
  updateJobTasks: Scalars['ID'];
  updateJobTimeConstraints: Scalars['ID'];
  updateJobs: Scalars['ID'];
  updateLocationResourceScores: Scalars['ID'];
  updateLocations: Scalars['ID'];
  updateLogger: Scalars['ID'];
  updateMonitorLogs: Scalars['ID'];
  updateMonitors: Scalars['ID'];
  updatePatients: Scalars['ID'];
  updateProducts: Scalars['ID'];
  updateProjects: Scalars['ID'];
  updatePublicPageSetting: Scalars['ID'];
  updatePublicPageTemplate: Scalars['ID'];
  updatePublicSchedule: Scalars['ID'];
  updateRecurringSchedules: Scalars['ID'];
  updateRegions: Scalars['ID'];
  updateResourceJobOffers: Scalars['ID'];
  updateResourceOverrideRegions: Scalars['ID'];
  updateResourceOverrides: Scalars['ID'];
  updateResourceRegions: Scalars['ID'];
  updateResourceRequirementTags: Scalars['ID'];
  updateResourceRequirements: Scalars['ID'];
  updateResourceShiftBreaks: Scalars['ID'];
  updateResourceShiftOffers: Scalars['ID'];
  updateResourceShifts: Scalars['ID'];
  updateResourceTags: Scalars['ID'];
  updateResources: Scalars['ID'];
  updateScheduleTemplates: Scalars['ID'];
  updateShiftOfferShifts: Scalars['ID'];
  updateShiftOffers: Scalars['ID'];
  updateShiftTags: Scalars['ID'];
  updateShifts: Scalars['ID'];
  updateTagManagerSettings: Scalars['ID'];
  updateTagRequest: Scalars['ID'];
  updateTags: Scalars['ID'];
  updateTemplatedActivities: Scalars['ID'];
  updateTemplatedActivityResources: Scalars['ID'];
  updateTemplatedAttendees: Scalars['ID'];
  updateTemplatedJobAllocations: Scalars['ID'];
  updateTemplatedJobDependencies: Scalars['ID'];
  updateTemplatedJobProducts: Scalars['ID'];
  updateTemplatedJobTags: Scalars['ID'];
  updateTemplatedJobTasks: Scalars['ID'];
  updateTemplatedJobTimeConstraints: Scalars['ID'];
  updateTemplatedJobs: Scalars['ID'];
  updateTemplatedResourceRequirementTags: Scalars['ID'];
  updateTemplatedResourceRequirements: Scalars['ID'];
  updateTemplatedResourceShifts: Scalars['ID'];
  updateTemplatedShiftTags: Scalars['ID'];
  updateTemplatedShifts: Scalars['ID'];
  updateTestPerObj: Scalars['ID'];
  updateTestPerObject2: Scalars['ID'];
  updateTimesheet: Scalars['ID'];
  updateTimesheetEntry: Scalars['ID'];
  updateTraining: Scalars['ID'];
  updateTuanTest: Scalars['ID'];
  updateUserRegions: Scalars['ID'];
  updateVendorTag: Scalars['ID'];
  updateVendors: Scalars['ID'];
  upsertAccountResourceScores: Scalars['ID'];
  upsertAccountTags: Scalars['ID'];
  upsertAccounts: Scalars['ID'];
  upsertActivities: Scalars['ID'];
  upsertActivityResources: Scalars['ID'];
  upsertArcadeGames: Scalars['ID'];
  upsertAttendee: Scalars['ID'];
  upsertAttendee1: Scalars['ID'];
  upsertAttendees: Scalars['ID'];
  upsertAvailabilities: Scalars['ID'];
  upsertAvailabilityPatternResources: Scalars['ID'];
  upsertAvailabilityPatterns: Scalars['ID'];
  upsertAvailabilityTemplateEntries: Scalars['ID'];
  upsertAvailabilityTemplateResources: Scalars['ID'];
  upsertAvailabilityTemplates: Scalars['ID'];
  upsertClass: Scalars['ID'];
  upsertClientAvailabilities: Scalars['ID'];
  upsertContactTags: Scalars['ID'];
  upsertContacts: Scalars['ID'];
  upsertDefaultAutoOffer: Scalars['ID'];
  upsertGroupEvent: Scalars['ID'];
  upsertGroupEvent1: Scalars['ID'];
  upsertHolidayRegions: Scalars['ID'];
  upsertHolidays: Scalars['ID'];
  upsertJobAllocations: Scalars['ID'];
  upsertJobDependencies: Scalars['ID'];
  upsertJobOffers: Scalars['ID'];
  upsertJobProducts: Scalars['ID'];
  upsertJobTags: Scalars['ID'];
  upsertJobTasks: Scalars['ID'];
  upsertJobTimeConstraints: Scalars['ID'];
  upsertJobs: Scalars['ID'];
  upsertLocationResourceScores: Scalars['ID'];
  upsertLocations: Scalars['ID'];
  upsertLogger: Scalars['ID'];
  upsertMonitorLogs: Scalars['ID'];
  upsertMonitors: Scalars['ID'];
  upsertPatients: Scalars['ID'];
  upsertProducts: Scalars['ID'];
  upsertProjects: Scalars['ID'];
  upsertPublicPageSetting: Scalars['ID'];
  upsertPublicPageTemplate: Scalars['ID'];
  upsertPublicSchedule: Scalars['ID'];
  upsertRecurringSchedules: Scalars['ID'];
  upsertRegions: Scalars['ID'];
  upsertResourceJobOffers: Scalars['ID'];
  upsertResourceOverrideRegions: Scalars['ID'];
  upsertResourceOverrides: Scalars['ID'];
  upsertResourceRegions: Scalars['ID'];
  upsertResourceRequirementTags: Scalars['ID'];
  upsertResourceRequirements: Scalars['ID'];
  upsertResourceShiftBreaks: Scalars['ID'];
  upsertResourceShiftOffers: Scalars['ID'];
  upsertResourceShifts: Scalars['ID'];
  upsertResourceTags: Scalars['ID'];
  upsertResources: Scalars['ID'];
  upsertScheduleTemplates: Scalars['ID'];
  upsertShiftOfferShifts: Scalars['ID'];
  upsertShiftOffers: Scalars['ID'];
  upsertShiftTags: Scalars['ID'];
  upsertShifts: Scalars['ID'];
  upsertTagManagerSettings: Scalars['ID'];
  upsertTagRequest: Scalars['ID'];
  upsertTags: Scalars['ID'];
  upsertTemplatedActivities: Scalars['ID'];
  upsertTemplatedActivityResources: Scalars['ID'];
  upsertTemplatedAttendees: Scalars['ID'];
  upsertTemplatedJobAllocations: Scalars['ID'];
  upsertTemplatedJobDependencies: Scalars['ID'];
  upsertTemplatedJobProducts: Scalars['ID'];
  upsertTemplatedJobTags: Scalars['ID'];
  upsertTemplatedJobTasks: Scalars['ID'];
  upsertTemplatedJobTimeConstraints: Scalars['ID'];
  upsertTemplatedJobs: Scalars['ID'];
  upsertTemplatedResourceRequirementTags: Scalars['ID'];
  upsertTemplatedResourceRequirements: Scalars['ID'];
  upsertTemplatedResourceShifts: Scalars['ID'];
  upsertTemplatedShiftTags: Scalars['ID'];
  upsertTemplatedShifts: Scalars['ID'];
  upsertTestPerObj: Scalars['ID'];
  upsertTestPerObject2: Scalars['ID'];
  upsertTimesheet: Scalars['ID'];
  upsertTimesheetEntry: Scalars['ID'];
  upsertTraining: Scalars['ID'];
  upsertTuanTest: Scalars['ID'];
  upsertUserRegions: Scalars['ID'];
  upsertVendorTag: Scalars['ID'];
  upsertVendors: Scalars['ID'];
};


export type SchemaMutationDeleteAccountResourceScoresArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAccountTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAccountsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteActivitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteActivityResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteArcadeGamesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAttendeeArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAttendee1Args = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAttendeesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityPatternResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityPatternsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityTemplateEntriesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityTemplateResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityTemplatesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteClassArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteClientAvailabilitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteContactTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteContactsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteDefaultAutoOfferArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteGroupEventArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteGroupEvent1Args = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteHolidayRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteHolidaysArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobAllocationsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobDependenciesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobProductsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobTasksArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobTimeConstraintsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteLocationResourceScoresArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteLocationsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteLoggerArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteMonitorLogsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteMonitorsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeletePatientsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteProductsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteProjectsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeletePublicPageSettingArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeletePublicPageTemplateArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeletePublicScheduleArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteRecurringSchedulesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceJobOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceOverrideRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceOverridesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceRequirementTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceRequirementsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceShiftBreaksArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceShiftOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteScheduleTemplatesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftOfferShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTagManagerSettingsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTagRequestArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedActivitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedActivityResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedAttendeesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobAllocationsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobDependenciesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobProductsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobTasksArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobTimeConstraintsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedResourceRequirementTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedResourceRequirementsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedResourceShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedShiftTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTestPerObjArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTestPerObject2Args = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTimesheetArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTimesheetEntryArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTrainingArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTuanTestArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteUserRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteVendorTagArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteVendorsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationGetAccountResourceScoresArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAccountTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAccountsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetActivitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetActivityResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetArcadeGamesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAttendeeArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAttendee1Args = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAttendeesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityPatternResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityPatternsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityTemplateEntriesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityTemplateResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityTemplatesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetClassArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetClientAvailabilitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetContactTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetContactsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetDefaultAutoOfferArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetGroupEventArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetGroupEvent1Args = {
  id: Scalars['ID'];
};


export type SchemaMutationGetHolidayRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetHolidaysArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobAllocationsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobDependenciesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobProductsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobTasksArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobTimeConstraintsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetLocationResourceScoresArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetLocationsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetLoggerArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetMonitorLogsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetMonitorsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetPatientsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetProductsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetProjectsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetPublicPageSettingArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetPublicPageTemplateArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetPublicScheduleArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetRecurringSchedulesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceJobOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceOverrideRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceOverridesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceRequirementTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceRequirementsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceShiftBreaksArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceShiftOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetScheduleTemplatesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftOfferShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTagManagerSettingsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTagRequestArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedActivitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedActivityResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedAttendeesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobAllocationsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobDependenciesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobProductsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobTasksArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobTimeConstraintsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedResourceRequirementTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedResourceRequirementsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedResourceShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedShiftTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTestPerObjArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTestPerObject2Args = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTimesheetArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTimesheetEntryArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTrainingArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTuanTestArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetUserRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetVendorTagArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetVendorsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationInsertAccountResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAccountResourceScores;
};


export type SchemaMutationInsertAccountTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAccountTags;
};


export type SchemaMutationInsertAccountsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAccounts;
};


export type SchemaMutationInsertActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewActivities;
};


export type SchemaMutationInsertActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewActivityResources;
};


export type SchemaMutationInsertArcadeGamesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewArcadeGames;
};


export type SchemaMutationInsertAttendeeArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAttendee;
};


export type SchemaMutationInsertAttendee1Args = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAttendee1;
};


export type SchemaMutationInsertAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAttendees;
};


export type SchemaMutationInsertAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilities;
};


export type SchemaMutationInsertAvailabilityPatternResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityPatternResources;
};


export type SchemaMutationInsertAvailabilityPatternsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityPatterns;
};


export type SchemaMutationInsertAvailabilityTemplateEntriesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityTemplateEntries;
};


export type SchemaMutationInsertAvailabilityTemplateResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityTemplateResources;
};


export type SchemaMutationInsertAvailabilityTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityTemplates;
};


export type SchemaMutationInsertClassArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewClass;
};


export type SchemaMutationInsertClientAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewClientAvailabilities;
};


export type SchemaMutationInsertContactTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewContactTags;
};


export type SchemaMutationInsertContactsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewContacts;
};


export type SchemaMutationInsertDefaultAutoOfferArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewDefaultAutoOffer;
};


export type SchemaMutationInsertGroupEventArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewGroupEvent;
};


export type SchemaMutationInsertGroupEvent1Args = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewGroupEvent1;
};


export type SchemaMutationInsertHolidayRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewHolidayRegions;
};


export type SchemaMutationInsertHolidaysArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewHolidays;
};


export type SchemaMutationInsertJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobAllocations;
};


export type SchemaMutationInsertJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobDependencies;
};


export type SchemaMutationInsertJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobOffers;
};


export type SchemaMutationInsertJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobProducts;
};


export type SchemaMutationInsertJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobTags;
};


export type SchemaMutationInsertJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobTasks;
};


export type SchemaMutationInsertJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobTimeConstraints;
};


export type SchemaMutationInsertJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobs;
};


export type SchemaMutationInsertLocationResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewLocationResourceScores;
};


export type SchemaMutationInsertLocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewLocations;
};


export type SchemaMutationInsertLoggerArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewLogger;
};


export type SchemaMutationInsertMonitorLogsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewMonitorLogs;
};


export type SchemaMutationInsertMonitorsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewMonitors;
};


export type SchemaMutationInsertPatientsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewPatients;
};


export type SchemaMutationInsertProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewProducts;
};


export type SchemaMutationInsertProjectsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewProjects;
};


export type SchemaMutationInsertPublicPageSettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewPublicPageSetting;
};


export type SchemaMutationInsertPublicPageTemplateArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewPublicPageTemplate;
};


export type SchemaMutationInsertPublicScheduleArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewPublicSchedule;
};


export type SchemaMutationInsertRecurringSchedulesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewRecurringSchedules;
};


export type SchemaMutationInsertRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewRegions;
};


export type SchemaMutationInsertResourceJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceJobOffers;
};


export type SchemaMutationInsertResourceOverrideRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceOverrideRegions;
};


export type SchemaMutationInsertResourceOverridesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceOverrides;
};


export type SchemaMutationInsertResourceRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceRegions;
};


export type SchemaMutationInsertResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceRequirementTags;
};


export type SchemaMutationInsertResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceRequirements;
};


export type SchemaMutationInsertResourceShiftBreaksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceShiftBreaks;
};


export type SchemaMutationInsertResourceShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceShiftOffers;
};


export type SchemaMutationInsertResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceShifts;
};


export type SchemaMutationInsertResourceTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceTags;
};


export type SchemaMutationInsertResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResources;
};


export type SchemaMutationInsertScheduleTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewScheduleTemplates;
};


export type SchemaMutationInsertShiftOfferShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShiftOfferShifts;
};


export type SchemaMutationInsertShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShiftOffers;
};


export type SchemaMutationInsertShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShiftTags;
};


export type SchemaMutationInsertShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShifts;
};


export type SchemaMutationInsertTagManagerSettingsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTagManagerSettings;
};


export type SchemaMutationInsertTagRequestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTagRequest;
};


export type SchemaMutationInsertTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTags;
};


export type SchemaMutationInsertTemplatedActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedActivities;
};


export type SchemaMutationInsertTemplatedActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedActivityResources;
};


export type SchemaMutationInsertTemplatedAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedAttendees;
};


export type SchemaMutationInsertTemplatedJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobAllocations;
};


export type SchemaMutationInsertTemplatedJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobDependencies;
};


export type SchemaMutationInsertTemplatedJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobProducts;
};


export type SchemaMutationInsertTemplatedJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobTags;
};


export type SchemaMutationInsertTemplatedJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobTasks;
};


export type SchemaMutationInsertTemplatedJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobTimeConstraints;
};


export type SchemaMutationInsertTemplatedJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobs;
};


export type SchemaMutationInsertTemplatedResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedResourceRequirementTags;
};


export type SchemaMutationInsertTemplatedResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedResourceRequirements;
};


export type SchemaMutationInsertTemplatedResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedResourceShifts;
};


export type SchemaMutationInsertTemplatedShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedShiftTags;
};


export type SchemaMutationInsertTemplatedShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedShifts;
};


export type SchemaMutationInsertTestPerObjArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTestPerObj;
};


export type SchemaMutationInsertTestPerObject2Args = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTestPerObject2;
};


export type SchemaMutationInsertTimesheetArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTimesheet;
};


export type SchemaMutationInsertTimesheetEntryArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTimesheetEntry;
};


export type SchemaMutationInsertTrainingArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTraining;
};


export type SchemaMutationInsertTuanTestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTuanTest;
};


export type SchemaMutationInsertUserRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewUserRegions;
};


export type SchemaMutationInsertVendorTagArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewVendorTag;
};


export type SchemaMutationInsertVendorsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewVendors;
};


export type SchemaMutationUpdateAccountResourceScoresArgs = {
  input: UpdateAccountResourceScores;
};


export type SchemaMutationUpdateAccountTagsArgs = {
  input: UpdateAccountTags;
};


export type SchemaMutationUpdateAccountsArgs = {
  input: UpdateAccounts;
};


export type SchemaMutationUpdateActivitiesArgs = {
  input: UpdateActivities;
};


export type SchemaMutationUpdateActivityResourcesArgs = {
  input: UpdateActivityResources;
};


export type SchemaMutationUpdateArcadeGamesArgs = {
  input: UpdateArcadeGames;
};


export type SchemaMutationUpdateAttendeeArgs = {
  input: UpdateAttendee;
};


export type SchemaMutationUpdateAttendee1Args = {
  input: UpdateAttendee1;
};


export type SchemaMutationUpdateAttendeesArgs = {
  input: UpdateAttendees;
};


export type SchemaMutationUpdateAvailabilitiesArgs = {
  input: UpdateAvailabilities;
};


export type SchemaMutationUpdateAvailabilityPatternResourcesArgs = {
  input: UpdateAvailabilityPatternResources;
};


export type SchemaMutationUpdateAvailabilityPatternsArgs = {
  input: UpdateAvailabilityPatterns;
};


export type SchemaMutationUpdateAvailabilityTemplateEntriesArgs = {
  input: UpdateAvailabilityTemplateEntries;
};


export type SchemaMutationUpdateAvailabilityTemplateResourcesArgs = {
  input: UpdateAvailabilityTemplateResources;
};


export type SchemaMutationUpdateAvailabilityTemplatesArgs = {
  input: UpdateAvailabilityTemplates;
};


export type SchemaMutationUpdateClassArgs = {
  input: UpdateClass;
};


export type SchemaMutationUpdateClientAvailabilitiesArgs = {
  input: UpdateClientAvailabilities;
};


export type SchemaMutationUpdateContactTagsArgs = {
  input: UpdateContactTags;
};


export type SchemaMutationUpdateContactsArgs = {
  input: UpdateContacts;
};


export type SchemaMutationUpdateDefaultAutoOfferArgs = {
  input: UpdateDefaultAutoOffer;
};


export type SchemaMutationUpdateGroupEventArgs = {
  input: UpdateGroupEvent;
};


export type SchemaMutationUpdateGroupEvent1Args = {
  input: UpdateGroupEvent1;
};


export type SchemaMutationUpdateHolidayRegionsArgs = {
  input: UpdateHolidayRegions;
};


export type SchemaMutationUpdateHolidaysArgs = {
  input: UpdateHolidays;
};


export type SchemaMutationUpdateJobAllocationsArgs = {
  input: UpdateJobAllocations;
};


export type SchemaMutationUpdateJobDependenciesArgs = {
  input: UpdateJobDependencies;
};


export type SchemaMutationUpdateJobOffersArgs = {
  input: UpdateJobOffers;
};


export type SchemaMutationUpdateJobProductsArgs = {
  input: UpdateJobProducts;
};


export type SchemaMutationUpdateJobTagsArgs = {
  input: UpdateJobTags;
};


export type SchemaMutationUpdateJobTasksArgs = {
  input: UpdateJobTasks;
};


export type SchemaMutationUpdateJobTimeConstraintsArgs = {
  input: UpdateJobTimeConstraints;
};


export type SchemaMutationUpdateJobsArgs = {
  input: UpdateJobs;
};


export type SchemaMutationUpdateLocationResourceScoresArgs = {
  input: UpdateLocationResourceScores;
};


export type SchemaMutationUpdateLocationsArgs = {
  input: UpdateLocations;
};


export type SchemaMutationUpdateLoggerArgs = {
  input: UpdateLogger;
};


export type SchemaMutationUpdateMonitorLogsArgs = {
  input: UpdateMonitorLogs;
};


export type SchemaMutationUpdateMonitorsArgs = {
  input: UpdateMonitors;
};


export type SchemaMutationUpdatePatientsArgs = {
  input: UpdatePatients;
};


export type SchemaMutationUpdateProductsArgs = {
  input: UpdateProducts;
};


export type SchemaMutationUpdateProjectsArgs = {
  input: UpdateProjects;
};


export type SchemaMutationUpdatePublicPageSettingArgs = {
  input: UpdatePublicPageSetting;
};


export type SchemaMutationUpdatePublicPageTemplateArgs = {
  input: UpdatePublicPageTemplate;
};


export type SchemaMutationUpdatePublicScheduleArgs = {
  input: UpdatePublicSchedule;
};


export type SchemaMutationUpdateRecurringSchedulesArgs = {
  input: UpdateRecurringSchedules;
};


export type SchemaMutationUpdateRegionsArgs = {
  input: UpdateRegions;
};


export type SchemaMutationUpdateResourceJobOffersArgs = {
  input: UpdateResourceJobOffers;
};


export type SchemaMutationUpdateResourceOverrideRegionsArgs = {
  input: UpdateResourceOverrideRegions;
};


export type SchemaMutationUpdateResourceOverridesArgs = {
  input: UpdateResourceOverrides;
};


export type SchemaMutationUpdateResourceRegionsArgs = {
  input: UpdateResourceRegions;
};


export type SchemaMutationUpdateResourceRequirementTagsArgs = {
  input: UpdateResourceRequirementTags;
};


export type SchemaMutationUpdateResourceRequirementsArgs = {
  input: UpdateResourceRequirements;
};


export type SchemaMutationUpdateResourceShiftBreaksArgs = {
  input: UpdateResourceShiftBreaks;
};


export type SchemaMutationUpdateResourceShiftOffersArgs = {
  input: UpdateResourceShiftOffers;
};


export type SchemaMutationUpdateResourceShiftsArgs = {
  input: UpdateResourceShifts;
};


export type SchemaMutationUpdateResourceTagsArgs = {
  input: UpdateResourceTags;
};


export type SchemaMutationUpdateResourcesArgs = {
  input: UpdateResources;
};


export type SchemaMutationUpdateScheduleTemplatesArgs = {
  input: UpdateScheduleTemplates;
};


export type SchemaMutationUpdateShiftOfferShiftsArgs = {
  input: UpdateShiftOfferShifts;
};


export type SchemaMutationUpdateShiftOffersArgs = {
  input: UpdateShiftOffers;
};


export type SchemaMutationUpdateShiftTagsArgs = {
  input: UpdateShiftTags;
};


export type SchemaMutationUpdateShiftsArgs = {
  input: UpdateShifts;
};


export type SchemaMutationUpdateTagManagerSettingsArgs = {
  input: UpdateTagManagerSettings;
};


export type SchemaMutationUpdateTagRequestArgs = {
  input: UpdateTagRequest;
};


export type SchemaMutationUpdateTagsArgs = {
  input: UpdateTags;
};


export type SchemaMutationUpdateTemplatedActivitiesArgs = {
  input: UpdateTemplatedActivities;
};


export type SchemaMutationUpdateTemplatedActivityResourcesArgs = {
  input: UpdateTemplatedActivityResources;
};


export type SchemaMutationUpdateTemplatedAttendeesArgs = {
  input: UpdateTemplatedAttendees;
};


export type SchemaMutationUpdateTemplatedJobAllocationsArgs = {
  input: UpdateTemplatedJobAllocations;
};


export type SchemaMutationUpdateTemplatedJobDependenciesArgs = {
  input: UpdateTemplatedJobDependencies;
};


export type SchemaMutationUpdateTemplatedJobProductsArgs = {
  input: UpdateTemplatedJobProducts;
};


export type SchemaMutationUpdateTemplatedJobTagsArgs = {
  input: UpdateTemplatedJobTags;
};


export type SchemaMutationUpdateTemplatedJobTasksArgs = {
  input: UpdateTemplatedJobTasks;
};


export type SchemaMutationUpdateTemplatedJobTimeConstraintsArgs = {
  input: UpdateTemplatedJobTimeConstraints;
};


export type SchemaMutationUpdateTemplatedJobsArgs = {
  input: UpdateTemplatedJobs;
};


export type SchemaMutationUpdateTemplatedResourceRequirementTagsArgs = {
  input: UpdateTemplatedResourceRequirementTags;
};


export type SchemaMutationUpdateTemplatedResourceRequirementsArgs = {
  input: UpdateTemplatedResourceRequirements;
};


export type SchemaMutationUpdateTemplatedResourceShiftsArgs = {
  input: UpdateTemplatedResourceShifts;
};


export type SchemaMutationUpdateTemplatedShiftTagsArgs = {
  input: UpdateTemplatedShiftTags;
};


export type SchemaMutationUpdateTemplatedShiftsArgs = {
  input: UpdateTemplatedShifts;
};


export type SchemaMutationUpdateTestPerObjArgs = {
  input: UpdateTestPerObj;
};


export type SchemaMutationUpdateTestPerObject2Args = {
  input: UpdateTestPerObject2;
};


export type SchemaMutationUpdateTimesheetArgs = {
  input: UpdateTimesheet;
};


export type SchemaMutationUpdateTimesheetEntryArgs = {
  input: UpdateTimesheetEntry;
};


export type SchemaMutationUpdateTrainingArgs = {
  input: UpdateTraining;
};


export type SchemaMutationUpdateTuanTestArgs = {
  input: UpdateTuanTest;
};


export type SchemaMutationUpdateUserRegionsArgs = {
  input: UpdateUserRegions;
};


export type SchemaMutationUpdateVendorTagArgs = {
  input: UpdateVendorTag;
};


export type SchemaMutationUpdateVendorsArgs = {
  input: UpdateVendors;
};


export type SchemaMutationUpsertAccountResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAccountResourceScores;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAccountTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAccountTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAccountsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAccounts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertActivities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertActivityResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertArcadeGamesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertArcadeGames;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAttendeeArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAttendee;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAttendee1Args = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAttendee1;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAttendees;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityPatternResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityPatternResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityPatternsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityPatterns;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityTemplateEntriesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityTemplateEntries;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityTemplateResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityTemplateResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityTemplates;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertClassArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertClass;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertClientAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertClientAvailabilities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertContactTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertContactTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertContactsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertContacts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertDefaultAutoOfferArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertDefaultAutoOffer;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertGroupEventArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertGroupEvent;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertGroupEvent1Args = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertGroupEvent1;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertHolidayRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertHolidayRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertHolidaysArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertHolidays;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobAllocations;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobDependencies;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobProducts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobTasks;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobTimeConstraints;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobs;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertLocationResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertLocationResourceScores;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertLocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertLocations;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertLoggerArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertLogger;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertMonitorLogsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertMonitorLogs;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertMonitorsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertMonitors;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertPatientsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertPatients;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertProducts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertProjectsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertProjects;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertPublicPageSettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertPublicPageSetting;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertPublicPageTemplateArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertPublicPageTemplate;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertPublicScheduleArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertPublicSchedule;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertRecurringSchedulesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertRecurringSchedules;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceJobOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceOverrideRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceOverrideRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceOverridesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceOverrides;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceRequirementTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceRequirements;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceShiftBreaksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceShiftBreaks;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceShiftOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertScheduleTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertScheduleTemplates;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftOfferShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShiftOfferShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShiftOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShiftTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTagManagerSettingsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTagManagerSettings;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTagRequestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTagRequest;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedActivities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedActivityResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedAttendees;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobAllocations;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobDependencies;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobProducts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobTasks;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobTimeConstraints;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobs;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedResourceRequirementTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedResourceRequirements;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedResourceShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedShiftTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTestPerObjArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTestPerObj;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTestPerObject2Args = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTestPerObject2;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTimesheetArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTimesheet;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTimesheetEntryArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTimesheetEntry;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTrainingArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTraining;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTuanTestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTuanTest;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertUserRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertUserRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertVendorTagArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertVendorTag;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertVendorsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertVendors;
  keyField: Scalars['String'];
};

export type SchemaSubscriptionAccounts = {
  __typename?: 'SchemaSubscriptionAccounts';
  BillingCity?: Maybe<Scalars['String']>;
  BillingPostalCode?: Maybe<Scalars['String']>;
  BillingState?: Maybe<Scalars['String']>;
  BillingStreet?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Fax?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Level?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Phone?: Maybe<Scalars['String']>;
  Rank?: Maybe<Scalars['Int']>;
  RequiresWhitelist: Scalars['Boolean'];
  ShippingCity?: Maybe<Scalars['String']>;
  ShippingPostalCode?: Maybe<Scalars['String']>;
  ShippingState?: Maybe<Scalars['String']>;
  ShippingStreet?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionActivities = {
  __typename?: 'SchemaSubscriptionActivities';
  Address?: Maybe<Scalars['String']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: Maybe<Scalars['ID']>;
  Timezone?: Maybe<Scalars['String']>;
  TuanTest?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAvailabilities = {
  __typename?: 'SchemaSubscriptionAvailabilities';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Notes?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionContacts = {
  __typename?: 'SchemaSubscriptionContacts';
  AccountId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  FullName: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MailingCity?: Maybe<Scalars['String']>;
  MailingPostalCode?: Maybe<Scalars['String']>;
  MailingState?: Maybe<Scalars['String']>;
  MailingStreet?: Maybe<Scalars['String']>;
  MobilePhone?: Maybe<Scalars['String']>;
  OtherCity?: Maybe<Scalars['String']>;
  OtherPostalCode?: Maybe<Scalars['String']>;
  OtherState?: Maybe<Scalars['String']>;
  OtherStreet?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['ID']>;
  Title?: Maybe<Scalars['String']>;
  TuanTest?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobAllocations = {
  __typename?: 'SchemaSubscriptionJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeclineDescription?: Maybe<Scalars['String']>;
  DeclineReason?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  End?: Maybe<Scalars['Instant']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotificationType?: Maybe<Scalars['String']>;
  PhoneResponse?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  Status: Scalars['String'];
  TeamLeader: Scalars['Boolean'];
  TimeCheckedIn?: Maybe<Scalars['Instant']>;
  TimeCompleted?: Maybe<Scalars['Instant']>;
  TimeInProgress?: Maybe<Scalars['Instant']>;
  TimePublished?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  TimeStartTravel?: Maybe<Scalars['Instant']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']>;
  TravelTime?: Maybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobs = {
  __typename?: 'SchemaSubscriptionJobs';
  AbortReason?: Maybe<Scalars['String']>;
  AccountId?: Maybe<Scalars['ID']>;
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Address?: Maybe<Scalars['String']>;
  AutoOffer?: Maybe<Scalars['String']>;
  AutoOfferDate?: Maybe<Scalars['String']>;
  AutoOfferOffset?: Maybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion: Scalars['Boolean'];
  AutoOfferRespectJobTags: Scalars['Boolean'];
  AutoOfferRespectPreviousOfferStatus: Scalars['Boolean'];
  AutoOfferRespectResourceAvailability: Scalars['Boolean'];
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  CompletionNotes?: Maybe<Scalars['String']>;
  Confirmed: Scalars['Boolean'];
  ContactId?: Maybe<Scalars['ID']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: Maybe<Scalars['Instant']>;
  EstimatedEnd?: Maybe<Scalars['Instant']>;
  EstimatedStart?: Maybe<Scalars['Instant']>;
  FollowupReason?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobStartDefer?: Maybe<Scalars['BigDecimal']>;
  JobStatus: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  NotesComments?: Maybe<Scalars['String']>;
  NotifyBy?: Maybe<Scalars['Instant']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  ParentId?: Maybe<Scalars['ID']>;
  Quantity?: Maybe<Scalars['Int']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  RequiredKit?: Maybe<Scalars['BigDecimal']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  TemplatedJobId?: Maybe<Scalars['ID']>;
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SchemaSubscriptionMonitorLogs = {
  __typename?: 'SchemaSubscriptionMonitorLogs';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MonitorsId: Scalars['ID'];
  Name: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionNotification = {
  operation: SchemaSubscriptionOp;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAccounts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAccounts';
  data: SchemaSubscriptionAccounts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAccounts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationActivities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationActivities';
  data: SchemaSubscriptionActivities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionActivities;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilities';
  data: SchemaSubscriptionAvailabilities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilities;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationContacts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationContacts';
  data: SchemaSubscriptionContacts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionContacts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobAllocations = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobAllocations';
  data: SchemaSubscriptionJobAllocations;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobAllocations;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobs = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobs';
  data: SchemaSubscriptionJobs;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobs;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationMonitorLogs = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationMonitorLogs';
  data: SchemaSubscriptionMonitorLogs;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionMonitorLogs;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationShifts';
  data: SchemaSubscriptionShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionShifts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTagManagerSettings = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTagManagerSettings';
  data: SchemaSubscriptionTagManagerSettings;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTagManagerSettings;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTimesheet = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTimesheet';
  data: SchemaSubscriptionTimesheet;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTimesheet;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTimesheetEntry = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTimesheetEntry';
  data: SchemaSubscriptionTimesheetEntry;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTimesheetEntry;
  timestamp: Scalars['Instant'];
};

export enum SchemaSubscriptionOp {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Update = 'UPDATE'
}

export type SchemaSubscriptionShifts = {
  __typename?: 'SchemaSubscriptionShifts';
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End: Scalars['Instant'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedShiftId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTagManagerSettings = {
  __typename?: 'SchemaSubscriptionTagManagerSettings';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiredReminder: Scalars['Boolean'];
  ExpiredReminderTemplate?: Maybe<Scalars['String']>;
  ExpiringSoonReminderDays?: Maybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled: Scalars['Boolean'];
  ExpiringSoonReminderTemplate?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LongLiveToken?: Maybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: Maybe<Scalars['BigDecimal']>;
  ReminderSendTime?: Maybe<Scalars['BigDecimal']>;
  ReminderTimezone?: Maybe<Scalars['String']>;
  RemindersEnabled: Scalars['Boolean'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTimesheet = {
  __typename?: 'SchemaSubscriptionTimesheet';
  ApprovedById?: Maybe<Scalars['ID']>;
  ApprovedDate?: Maybe<Scalars['LocalDate']>;
  ApproverComments?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate?: Maybe<Scalars['LocalDate']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId?: Maybe<Scalars['ID']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  Status?: Maybe<Scalars['String']>;
  SubmitterComments?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTimesheetEntry = {
  __typename?: 'SchemaSubscriptionTimesheetEntry';
  ActivityId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Distance?: Maybe<Scalars['BigDecimal']>;
  EndDate?: Maybe<Scalars['LocalDate']>;
  EndTime?: Maybe<Scalars['LocalTime']>;
  EntryType?: Maybe<Scalars['String']>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ShiftId?: Maybe<Scalars['ID']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  TimesheetId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
  UnavailabilityId?: Maybe<Scalars['ID']>;
};

export type ShiftOfferShifts = {
  __typename?: 'ShiftOfferShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Shift: Shifts;
  ShiftId: Scalars['ID'];
  ShiftOffer: ShiftOffers;
  ShiftOfferId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ShiftOfferShiftsConnection = {
  __typename?: 'ShiftOfferShiftsConnection';
  edges: Array<ShiftOfferShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftOfferShiftsEdge = {
  __typename?: 'ShiftOfferShiftsEdge';
  cursor: Scalars['Base64'];
  node: ShiftOfferShifts;
  offset: Scalars['Int'];
};

export type ShiftOffers = {
  __typename?: 'ShiftOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShiftOffers: Array<ResourceShiftOffers>;
  Shifts: Array<ShiftOfferShifts>;
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};


export type ShiftOffersResourceShiftOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftOffers']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftOffers']>;
};


export type ShiftOffersShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']>;
};

export type ShiftOffersConnection = {
  __typename?: 'ShiftOffersConnection';
  edges: Array<ShiftOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftOffersEdge = {
  __typename?: 'ShiftOffersEdge';
  cursor: Scalars['Base64'];
  node: ShiftOffers;
  offset: Scalars['Int'];
};

export type ShiftTags = {
  __typename?: 'ShiftTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Shift: Shifts;
  ShiftId: Scalars['ID'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type ShiftTagsConnection = {
  __typename?: 'ShiftTagsConnection';
  edges: Array<ShiftTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftTagsEdge = {
  __typename?: 'ShiftTagsEdge';
  cursor: Scalars['Base64'];
  node: ShiftTags;
  offset: Scalars['Int'];
};

export type Shifts = {
  __typename?: 'Shifts';
  CopiedFrom?: Maybe<Shifts>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End: Scalars['Instant'];
  IsDraft: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  ResourceShifts: Array<ResourceShifts>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  ShiftOffers: Array<ShiftOfferShifts>;
  ShiftTags: Array<ShiftTags>;
  Start: Scalars['Instant'];
  TemplatedShift?: Maybe<TemplatedShifts>;
  TemplatedShiftId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};


export type ShiftsResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']>;
};


export type ShiftsShiftOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']>;
};


export type ShiftsShiftTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftTags']>;
};

export type ShiftsConnection = {
  __typename?: 'ShiftsConnection';
  edges: Array<ShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftsEdge = {
  __typename?: 'ShiftsEdge';
  cursor: Scalars['Base64'];
  node: Shifts;
  offset: Scalars['Int'];
};

export type SimpleAccountResourceScores = {
  __typename?: 'SimpleAccountResourceScores';
  AccountId: Scalars['ID'];
  Blacklisted: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type SimpleAccountTags = {
  __typename?: 'SimpleAccountTags';
  AccountId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleAccounts = {
  __typename?: 'SimpleAccounts';
  BillingCity?: Maybe<Scalars['String']>;
  BillingPostalCode?: Maybe<Scalars['String']>;
  BillingState?: Maybe<Scalars['String']>;
  BillingStreet?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Fax?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Level?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Phone?: Maybe<Scalars['String']>;
  Rank?: Maybe<Scalars['Int']>;
  RequiresWhitelist: Scalars['Boolean'];
  ShippingCity?: Maybe<Scalars['String']>;
  ShippingPostalCode?: Maybe<Scalars['String']>;
  ShippingState?: Maybe<Scalars['String']>;
  ShippingStreet?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleActivities = {
  __typename?: 'SimpleActivities';
  Address?: Maybe<Scalars['String']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: Maybe<Scalars['ID']>;
  Timezone?: Maybe<Scalars['String']>;
  TuanTest?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleActivityResources = {
  __typename?: 'SimpleActivityResources';
  ActivityId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleArcadeGames = {
  __typename?: 'SimpleArcadeGames';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  active: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  verbiage?: Maybe<Scalars['String']>;
};

export type SimpleAttendee = {
  __typename?: 'SimpleAttendee';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GroupEventId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TestAttendee?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleAttendee1 = {
  __typename?: 'SimpleAttendee1';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GroupEventId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleAttendees = {
  __typename?: 'SimpleAttendees';
  CancelReason?: Maybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['AttendeeStatus'];
  TimeCancelled?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleAvailabilities = {
  __typename?: 'SimpleAvailabilities';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Notes?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleAvailabilityPatternResources = {
  __typename?: 'SimpleAvailabilityPatternResources';
  AvailabilityPatternId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  UID: Scalars['ID'];
};

export type SimpleAvailabilityPatterns = {
  __typename?: 'SimpleAvailabilityPatterns';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Hash: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  UID: Scalars['ID'];
};

export type SimpleAvailabilityTemplateEntries = {
  __typename?: 'SimpleAvailabilityTemplateEntries';
  AvailabilityTemplateId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FinishTime: Scalars['Int'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  StartTime: Scalars['Int'];
  UID: Scalars['ID'];
  Weekday: Scalars['Weekday'];
};

export type SimpleAvailabilityTemplateResources = {
  __typename?: 'SimpleAvailabilityTemplateResources';
  AvailabilityTemplateId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Migrated: Scalars['Boolean'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleAvailabilityTemplates = {
  __typename?: 'SimpleAvailabilityTemplates';
  AvailabilityPatternId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish?: Maybe<Scalars['LocalDate']>;
  Global: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Start?: Maybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type SimpleClass = {
  __typename?: 'SimpleClass';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type SimpleClientAvailabilities = {
  __typename?: 'SimpleClientAvailabilities';
  AccountId?: Maybe<Scalars['ID']>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PreferredEnd?: Maybe<Scalars['Instant']>;
  PreferredStart?: Maybe<Scalars['Instant']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleContactTags = {
  __typename?: 'SimpleContactTags';
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleContacts = {
  __typename?: 'SimpleContacts';
  AccountId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  FullName: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MailingCity?: Maybe<Scalars['String']>;
  MailingPostalCode?: Maybe<Scalars['String']>;
  MailingState?: Maybe<Scalars['String']>;
  MailingStreet?: Maybe<Scalars['String']>;
  MobilePhone?: Maybe<Scalars['String']>;
  OtherCity?: Maybe<Scalars['String']>;
  OtherPostalCode?: Maybe<Scalars['String']>;
  OtherState?: Maybe<Scalars['String']>;
  OtherStreet?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['ID']>;
  Title?: Maybe<Scalars['String']>;
  TuanTest?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type SimpleDefaultAutoOffer = {
  __typename?: 'SimpleDefaultAutoOffer';
  AutoOffer?: Maybe<Scalars['String']>;
  AutoOfferOffset?: Maybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion: Scalars['Boolean'];
  AutoOfferRespectJobTags: Scalars['Boolean'];
  AutoOfferRespectPreviousOfferStatus: Scalars['Boolean'];
  AutoOfferRespectResourceAvailability: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleGroupEvent = {
  __typename?: 'SimpleGroupEvent';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleGroupEvent1 = {
  __typename?: 'SimpleGroupEvent1';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SimpleHolidayRegions = {
  __typename?: 'SimpleHolidayRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  HolidayId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleHolidays = {
  __typename?: 'SimpleHolidays';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate: Scalars['LocalDate'];
  Global: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID: Scalars['ID'];
};

export type SimpleJobAllocations = {
  __typename?: 'SimpleJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeclineDescription?: Maybe<Scalars['String']>;
  DeclineReason?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  End?: Maybe<Scalars['Instant']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotificationType?: Maybe<Scalars['String']>;
  PhoneResponse?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TimeCheckedIn?: Maybe<Scalars['Instant']>;
  TimeCompleted?: Maybe<Scalars['Instant']>;
  TimeInProgress?: Maybe<Scalars['Instant']>;
  TimePublished?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  TimeStartTravel?: Maybe<Scalars['Instant']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']>;
  TravelTime?: Maybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type SimpleJobDependencies = {
  __typename?: 'SimpleJobDependencies';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromJobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleJobOffers = {
  __typename?: 'SimpleJobOffers';
  CreatedById: Scalars['ID'];
  CreatedByResource: Scalars['Boolean'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};

export type SimpleJobProducts = {
  __typename?: 'SimpleJobProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductId?: Maybe<Scalars['ID']>;
  ProductName?: Maybe<Scalars['String']>;
  Qty: Scalars['BigDecimal'];
  UID: Scalars['ID'];
};

export type SimpleJobTags = {
  __typename?: 'SimpleJobTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleJobTasks = {
  __typename?: 'SimpleJobTasks';
  Completed: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID: Scalars['ID'];
};

export type SimpleJobTimeConstraints = {
  __typename?: 'SimpleJobTimeConstraints';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBefore?: Maybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfter?: Maybe<Scalars['Instant']>;
  StartBefore?: Maybe<Scalars['Instant']>;
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type SimpleJobs = {
  __typename?: 'SimpleJobs';
  AbortReason?: Maybe<Scalars['String']>;
  AccountId?: Maybe<Scalars['ID']>;
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Address?: Maybe<Scalars['String']>;
  AutoOffer?: Maybe<Scalars['String']>;
  AutoOfferDate?: Maybe<Scalars['String']>;
  AutoOfferOffset?: Maybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion: Scalars['Boolean'];
  AutoOfferRespectJobTags: Scalars['Boolean'];
  AutoOfferRespectPreviousOfferStatus: Scalars['Boolean'];
  AutoOfferRespectResourceAvailability: Scalars['Boolean'];
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  CompletionNotes?: Maybe<Scalars['String']>;
  Confirmed: Scalars['Boolean'];
  ContactId?: Maybe<Scalars['ID']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: Maybe<Scalars['Instant']>;
  EstimatedEnd?: Maybe<Scalars['Instant']>;
  EstimatedStart?: Maybe<Scalars['Instant']>;
  FollowupReason?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobStartDefer?: Maybe<Scalars['BigDecimal']>;
  JobStatus: Scalars['JobStatus'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  NotesComments?: Maybe<Scalars['String']>;
  NotifyBy?: Maybe<Scalars['Instant']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  ParentId?: Maybe<Scalars['ID']>;
  Quantity?: Maybe<Scalars['Int']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  RequiredKit?: Maybe<Scalars['BigDecimal']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  TemplatedJobId?: Maybe<Scalars['ID']>;
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SimpleLocationResourceScores = {
  __typename?: 'SimpleLocationResourceScores';
  Blacklisted: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type SimpleLocations = {
  __typename?: 'SimpleLocations';
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleLogger = {
  __typename?: 'SimpleLogger';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  jobhistoryId?: Maybe<Scalars['ID']>;
};

export type SimpleMonitorLogs = {
  __typename?: 'SimpleMonitorLogs';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MonitorsId: Scalars['ID'];
  Name: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleMonitors = {
  __typename?: 'SimpleMonitors';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  UID: Scalars['ID'];
  VendorsId: Scalars['ID'];
};

export type SimplePatients = {
  __typename?: 'SimplePatients';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleProducts = {
  __typename?: 'SimpleProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Family?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductCode?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleProjects = {
  __typename?: 'SimpleProjects';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimplePublicPageSetting = {
  __typename?: 'SimplePublicPageSetting';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Link?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimplePublicPageTemplate = {
  __typename?: 'SimplePublicPageTemplate';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimplePublicSchedule = {
  __typename?: 'SimplePublicSchedule';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsInactivated?: Maybe<Scalars['Boolean']>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  PublicPageTemplateId?: Maybe<Scalars['ID']>;
  Status?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleRecurringSchedules = {
  __typename?: 'SimpleRecurringSchedules';
  AckAllJobs: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern?: Maybe<Scalars['String']>;
  Summary?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleRegions = {
  __typename?: 'SimpleRegions';
  CountryCode?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Radius?: Maybe<Scalars['Int']>;
  Timezone: Scalars['String'];
  UID: Scalars['ID'];
};

export type SimpleResourceJobOffers = {
  __typename?: 'SimpleResourceJobOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobOfferId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleResourceOverrideRegions = {
  __typename?: 'SimpleResourceOverrideRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleResourceOverrides = {
  __typename?: 'SimpleResourceOverrides';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleResourceRegions = {
  __typename?: 'SimpleResourceRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleResourceRequirementTags = {
  __typename?: 'SimpleResourceRequirementTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleResourceRequirements = {
  __typename?: 'SimpleResourceRequirements';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  ScheduledEnd?: Maybe<Scalars['Instant']>;
  ScheduledStart?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobStatus'];
  UID: Scalars['ID'];
};

export type SimpleResourceShiftBreaks = {
  __typename?: 'SimpleResourceShiftBreaks';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleResourceShiftOffers = {
  __typename?: 'SimpleResourceShiftOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  ShiftOfferId: Scalars['ID'];
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleResourceShifts = {
  __typename?: 'SimpleResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleResourceTags = {
  __typename?: 'SimpleResourceTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiryDate?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleResources = {
  __typename?: 'SimpleResources';
  Alias?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  Birthday?: Maybe<Scalars['LocalDate']>;
  Category?: Maybe<Scalars['String']>;
  CountryCode?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  EmploymentType?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  Language?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  NotificationType?: Maybe<Scalars['String']>;
  PrimaryPhone?: Maybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: Maybe<Scalars['Int']>;
  ResourceType?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserId?: Maybe<Scalars['ID']>;
  VehicleID?: Maybe<Scalars['String']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']>;
  WorkingHourType?: Maybe<Scalars['WorkingHourType']>;
};

export type SimpleScheduleTemplates = {
  __typename?: 'SimpleScheduleTemplates';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeletedById?: Maybe<Scalars['ID']>;
  DeletedDate?: Maybe<Scalars['Instant']>;
  Description?: Maybe<Scalars['String']>;
  IsDeleted: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  PeriodDays?: Maybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type SimpleShiftOfferShifts = {
  __typename?: 'SimpleShiftOfferShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleShiftOffers = {
  __typename?: 'SimpleShiftOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};

export type SimpleShiftTags = {
  __typename?: 'SimpleShiftTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleShifts = {
  __typename?: 'SimpleShifts';
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End: Scalars['Instant'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedShiftId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SimpleTagManagerSettings = {
  __typename?: 'SimpleTagManagerSettings';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiredReminder: Scalars['Boolean'];
  ExpiredReminderTemplate?: Maybe<Scalars['String']>;
  ExpiringSoonReminderDays?: Maybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled: Scalars['Boolean'];
  ExpiringSoonReminderTemplate?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LongLiveToken?: Maybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: Maybe<Scalars['BigDecimal']>;
  ReminderSendTime?: Maybe<Scalars['BigDecimal']>;
  ReminderTimezone?: Maybe<Scalars['String']>;
  RemindersEnabled: Scalars['Boolean'];
  UID: Scalars['ID'];
};

export type SimpleTagRequest = {
  __typename?: 'SimpleTagRequest';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsRenewal: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NewExpiryDate?: Maybe<Scalars['LocalDate']>;
  OldExpiryDate?: Maybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: Maybe<Scalars['String']>;
  TagAssignmentId?: Maybe<Scalars['ID']>;
  TagId?: Maybe<Scalars['ID']>;
  TagName?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTags = {
  __typename?: 'SimpleTags';
  Classification?: Maybe<Scalars['TagClassification']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Groups?: Maybe<Array<Scalars['String']>>;
  IsRequestable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotVisibleToResources: Scalars['Boolean'];
  RequestEvidence: Scalars['Boolean'];
  RequiresExpiryDate: Scalars['Boolean'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTemplatedActivities = {
  __typename?: 'SimpleTemplatedActivities';
  Address?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTemplatedActivityResources = {
  __typename?: 'SimpleTemplatedActivityResources';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedAttendees = {
  __typename?: 'SimpleTemplatedAttendees';
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobAllocations = {
  __typename?: 'SimpleTemplatedJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration?: Maybe<Scalars['Duration']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NotificationType?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: Maybe<Scalars['Int']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobDependencies = {
  __typename?: 'SimpleTemplatedJobDependencies';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromTemplatedJobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobProducts = {
  __typename?: 'SimpleTemplatedJobProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ProductId?: Maybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobTags = {
  __typename?: 'SimpleTemplatedJobTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleTemplatedJobTasks = {
  __typename?: 'SimpleTemplatedJobTasks';
  Completed: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobTimeConstraints = {
  __typename?: 'SimpleTemplatedJobTimeConstraints';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobs = {
  __typename?: 'SimpleTemplatedJobs';
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  ContactId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  NotesComments?: Maybe<Scalars['String']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SimpleTemplatedResourceRequirementTags = {
  __typename?: 'SimpleTemplatedResourceRequirementTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleTemplatedResourceRequirements = {
  __typename?: 'SimpleTemplatedResourceRequirements';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedResourceShifts = {
  __typename?: 'SimpleTemplatedResourceShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedShiftTags = {
  __typename?: 'SimpleTemplatedShiftTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleTemplatedShifts = {
  __typename?: 'SimpleTemplatedShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  UID: Scalars['ID'];
};

export type SimpleTestPerObj = {
  __typename?: 'SimpleTestPerObj';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Field1?: Maybe<Scalars['String']>;
  Field2?: Maybe<Scalars['String']>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleTestPerObject2 = {
  __typename?: 'SimpleTestPerObject2';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FieldA?: Maybe<Scalars['BigDecimal']>;
  FieldB?: Maybe<Scalars['BigDecimal']>;
  JobId?: Maybe<Scalars['ID']>;
  JobTestPer2Id?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleTimesheet = {
  __typename?: 'SimpleTimesheet';
  ApprovedById?: Maybe<Scalars['ID']>;
  ApprovedDate?: Maybe<Scalars['LocalDate']>;
  ApproverComments?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate?: Maybe<Scalars['LocalDate']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId?: Maybe<Scalars['ID']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  Status?: Maybe<Scalars['String']>;
  SubmitterComments?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTimesheetEntry = {
  __typename?: 'SimpleTimesheetEntry';
  ActivityId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Distance?: Maybe<Scalars['BigDecimal']>;
  EndDate?: Maybe<Scalars['LocalDate']>;
  EndTime?: Maybe<Scalars['LocalTime']>;
  EntryType?: Maybe<Scalars['String']>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ShiftId?: Maybe<Scalars['ID']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  TimesheetId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
  UnavailabilityId?: Maybe<Scalars['ID']>;
};

export type SimpleTraining = {
  __typename?: 'SimpleTraining';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PL?: Maybe<Scalars['String']>;
  TextA?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTuanTest = {
  __typename?: 'SimpleTuanTest';
  Age?: Maybe<Scalars['BigDecimal']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleUserRegions = {
  __typename?: 'SimpleUserRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
  UserId: Scalars['ID'];
};

export type SimpleVendorTag = {
  __typename?: 'SimpleVendorTag';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TagsId: Scalars['ID'];
  UID: Scalars['ID'];
  VendorsId: Scalars['ID'];
};

export type SimpleVendors = {
  __typename?: 'SimpleVendors';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  TenantId?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  schemaAccounts: SchemaSubscriptionNotificationAccounts;
  schemaActivities: SchemaSubscriptionNotificationActivities;
  schemaAvailabilities: SchemaSubscriptionNotificationAvailabilities;
  schemaContacts: SchemaSubscriptionNotificationContacts;
  schemaJobAllocations: SchemaSubscriptionNotificationJobAllocations;
  schemaJobs: SchemaSubscriptionNotificationJobs;
  schemaMonitorLogs: SchemaSubscriptionNotificationMonitorLogs;
  schemaShifts: SchemaSubscriptionNotificationShifts;
  schemaTagManagerSettings: SchemaSubscriptionNotificationTagManagerSettings;
  schemaTimesheet: SchemaSubscriptionNotificationTimesheet;
  schemaTimesheetEntry: SchemaSubscriptionNotificationTimesheetEntry;
};


export type SubscriptionSchemaAccountsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAccounts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAccounts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaActivitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterActivities']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterActivities']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilities']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilities']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaContactsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterContacts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterContacts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobAllocationsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobAllocations']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobAllocations']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobs']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobs']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaMonitorLogsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterMonitorLogs']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterMonitorLogs']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterShifts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterShifts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTagManagerSettingsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTagManagerSettings']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTagManagerSettings']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTimesheetArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTimesheet']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTimesheet']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTimesheetEntryArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTimesheetEntry']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTimesheetEntry']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};

export type TagManagerSettings = {
  __typename?: 'TagManagerSettings';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiredReminder: Scalars['Boolean'];
  ExpiredReminderTemplate?: Maybe<Scalars['String']>;
  ExpiringSoonReminderDays?: Maybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled: Scalars['Boolean'];
  ExpiringSoonReminderTemplate?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LongLiveToken?: Maybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: Maybe<Scalars['BigDecimal']>;
  ReminderSendTime?: Maybe<Scalars['BigDecimal']>;
  ReminderTimezone?: Maybe<Scalars['String']>;
  RemindersEnabled: Scalars['Boolean'];
  UID: Scalars['ID'];
};

export type TagManagerSettingsConnection = {
  __typename?: 'TagManagerSettingsConnection';
  edges: Array<TagManagerSettingsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagManagerSettingsEdge = {
  __typename?: 'TagManagerSettingsEdge';
  cursor: Scalars['Base64'];
  node: TagManagerSettings;
  offset: Scalars['Int'];
};

export type TagRequest = {
  __typename?: 'TagRequest';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsRenewal: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NewExpiryDate?: Maybe<Scalars['LocalDate']>;
  OldExpiryDate?: Maybe<Scalars['LocalDate']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Status?: Maybe<Scalars['String']>;
  Tag?: Maybe<Tags>;
  TagAssignment?: Maybe<ResourceTags>;
  TagAssignmentId?: Maybe<Scalars['ID']>;
  TagId?: Maybe<Scalars['ID']>;
  TagName?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type TagRequestConnection = {
  __typename?: 'TagRequestConnection';
  edges: Array<TagRequestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagRequestEdge = {
  __typename?: 'TagRequestEdge';
  cursor: Scalars['Base64'];
  node: TagRequest;
  offset: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  Classification?: Maybe<Scalars['TagClassification']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Groups?: Maybe<Array<Scalars['String']>>;
  IsRequestable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotVisibleToResources: Scalars['Boolean'];
  RequestEvidence: Scalars['Boolean'];
  RequiresExpiryDate: Scalars['Boolean'];
  ResourceTags: Array<ResourceTags>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type TagsResourceTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']>;
};

export type TagsConnection = {
  __typename?: 'TagsConnection';
  edges: Array<TagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagsEdge = {
  __typename?: 'TagsEdge';
  cursor: Scalars['Base64'];
  node: Tags;
  offset: Scalars['Int'];
};

export type TemplatedActivities = {
  __typename?: 'TemplatedActivities';
  Activities: Array<Activities>;
  Address?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  TemplatedActivityResources: Array<TemplatedActivityResources>;
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type TemplatedActivitiesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type TemplatedActivitiesTemplatedActivityResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']>;
};

export type TemplatedActivitiesConnection = {
  __typename?: 'TemplatedActivitiesConnection';
  edges: Array<TemplatedActivitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedActivitiesEdge = {
  __typename?: 'TemplatedActivitiesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedActivities;
  offset: Scalars['Int'];
};

export type TemplatedActivityResources = {
  __typename?: 'TemplatedActivityResources';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  TemplatedActivity: TemplatedActivities;
  TemplatedActivityId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedActivityResourcesConnection = {
  __typename?: 'TemplatedActivityResourcesConnection';
  edges: Array<TemplatedActivityResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedActivityResourcesEdge = {
  __typename?: 'TemplatedActivityResourcesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedActivityResources;
  offset: Scalars['Int'];
};

export type TemplatedAttendees = {
  __typename?: 'TemplatedAttendees';
  Contact: Contacts;
  ContactId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedAttendeesConnection = {
  __typename?: 'TemplatedAttendeesConnection';
  edges: Array<TemplatedAttendeesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedAttendeesEdge = {
  __typename?: 'TemplatedAttendeesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedAttendees;
  offset: Scalars['Int'];
};

export type TemplatedJobAllocations = {
  __typename?: 'TemplatedJobAllocations';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration?: Maybe<Scalars['Duration']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NotificationType?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: Maybe<Scalars['Int']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirement?: Maybe<TemplatedResourceRequirements>;
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type TemplatedJobAllocationsConnection = {
  __typename?: 'TemplatedJobAllocationsConnection';
  edges: Array<TemplatedJobAllocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobAllocationsEdge = {
  __typename?: 'TemplatedJobAllocationsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobAllocations;
  offset: Scalars['Int'];
};

export type TemplatedJobDependencies = {
  __typename?: 'TemplatedJobDependencies';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromTemplatedJob: TemplatedJobs;
  FromTemplatedJobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToTemplatedJob: TemplatedJobs;
  ToTemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedJobDependenciesConnection = {
  __typename?: 'TemplatedJobDependenciesConnection';
  edges: Array<TemplatedJobDependenciesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobDependenciesEdge = {
  __typename?: 'TemplatedJobDependenciesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobDependencies;
  offset: Scalars['Int'];
};

export type TemplatedJobProducts = {
  __typename?: 'TemplatedJobProducts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Product?: Maybe<Products>;
  ProductId?: Maybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedJobProductsConnection = {
  __typename?: 'TemplatedJobProductsConnection';
  edges: Array<TemplatedJobProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobProductsEdge = {
  __typename?: 'TemplatedJobProductsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobProducts;
  offset: Scalars['Int'];
};

export type TemplatedJobTags = {
  __typename?: 'TemplatedJobTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type TemplatedJobTagsConnection = {
  __typename?: 'TemplatedJobTagsConnection';
  edges: Array<TemplatedJobTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobTagsEdge = {
  __typename?: 'TemplatedJobTagsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobTags;
  offset: Scalars['Int'];
};

export type TemplatedJobTasks = {
  __typename?: 'TemplatedJobTasks';
  Completed: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedJobTasksConnection = {
  __typename?: 'TemplatedJobTasksConnection';
  edges: Array<TemplatedJobTasksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobTasksEdge = {
  __typename?: 'TemplatedJobTasksEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobTasks;
  offset: Scalars['Int'];
};

export type TemplatedJobTimeConstraints = {
  __typename?: 'TemplatedJobTimeConstraints';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type TemplatedJobTimeConstraintsConnection = {
  __typename?: 'TemplatedJobTimeConstraintsConnection';
  edges: Array<TemplatedJobTimeConstraintsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobTimeConstraintsEdge = {
  __typename?: 'TemplatedJobTimeConstraintsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobTimeConstraints;
  offset: Scalars['Int'];
};

export type TemplatedJobs = {
  __typename?: 'TemplatedJobs';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationTimeSource: Scalars['Boolean'];
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  NotesComments?: Maybe<Scalars['String']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  Region: Regions;
  RegionId: Scalars['ID'];
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  TemplatedAttendees: Array<TemplatedAttendees>;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedJobDependenciesFrom: Array<TemplatedJobDependencies>;
  TemplatedJobDependenciesTo: Array<TemplatedJobDependencies>;
  TemplatedJobProducts: Array<TemplatedJobProducts>;
  TemplatedJobTags: Array<TemplatedJobTags>;
  TemplatedJobTasks: Array<TemplatedJobTasks>;
  TemplatedJobTimeConstraints: Array<TemplatedJobTimeConstraints>;
  TemplatedResourceRequirements: Array<TemplatedResourceRequirements>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};


export type TemplatedJobsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type TemplatedJobsTemplatedAttendeesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedAttendees']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedAttendees']>;
};


export type TemplatedJobsTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type TemplatedJobsTemplatedJobDependenciesFromArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']>;
};


export type TemplatedJobsTemplatedJobDependenciesToArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']>;
};


export type TemplatedJobsTemplatedJobProductsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobProducts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobProducts']>;
};


export type TemplatedJobsTemplatedJobTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTags']>;
};


export type TemplatedJobsTemplatedJobTasksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTasks']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTasks']>;
};


export type TemplatedJobsTemplatedJobTimeConstraintsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTimeConstraints']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTimeConstraints']>;
};


export type TemplatedJobsTemplatedResourceRequirementsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirements']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirements']>;
};

export type TemplatedJobsConnection = {
  __typename?: 'TemplatedJobsConnection';
  edges: Array<TemplatedJobsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobsEdge = {
  __typename?: 'TemplatedJobsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobs;
  offset: Scalars['Int'];
};

export type TemplatedResourceRequirementTags = {
  __typename?: 'TemplatedResourceRequirementTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  TemplatedResourceRequirement: TemplatedResourceRequirements;
  TemplatedResourceRequirementId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type TemplatedResourceRequirementTagsConnection = {
  __typename?: 'TemplatedResourceRequirementTagsConnection';
  edges: Array<TemplatedResourceRequirementTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedResourceRequirementTagsEdge = {
  __typename?: 'TemplatedResourceRequirementTagsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedResourceRequirementTags;
  offset: Scalars['Int'];
};

export type TemplatedResourceRequirements = {
  __typename?: 'TemplatedResourceRequirements';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  TemplatedJob: TemplatedJobs;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedJobId: Scalars['ID'];
  TemplatedTags: Array<TemplatedResourceRequirementTags>;
  UID: Scalars['ID'];
};


export type TemplatedResourceRequirementsTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type TemplatedResourceRequirementsTemplatedTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirementTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirementTags']>;
};

export type TemplatedResourceRequirementsConnection = {
  __typename?: 'TemplatedResourceRequirementsConnection';
  edges: Array<TemplatedResourceRequirementsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedResourceRequirementsEdge = {
  __typename?: 'TemplatedResourceRequirementsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedResourceRequirements;
  offset: Scalars['Int'];
};

export type TemplatedResourceShifts = {
  __typename?: 'TemplatedResourceShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  TemplatedShift: TemplatedShifts;
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedResourceShiftsConnection = {
  __typename?: 'TemplatedResourceShiftsConnection';
  edges: Array<TemplatedResourceShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedResourceShiftsEdge = {
  __typename?: 'TemplatedResourceShiftsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedResourceShifts;
  offset: Scalars['Int'];
};

export type TemplatedShiftTags = {
  __typename?: 'TemplatedShiftTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  TemplatedShift: TemplatedShifts;
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type TemplatedShiftTagsConnection = {
  __typename?: 'TemplatedShiftTagsConnection';
  edges: Array<TemplatedShiftTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedShiftTagsEdge = {
  __typename?: 'TemplatedShiftTagsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedShiftTags;
  offset: Scalars['Int'];
};

export type TemplatedShifts = {
  __typename?: 'TemplatedShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Region: Regions;
  RegionId: Scalars['ID'];
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID'];
  Shifts: Array<Shifts>;
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  TemplatedResourceShifts: Array<TemplatedResourceShifts>;
  TemplatedShiftTags: Array<TemplatedShiftTags>;
  UID: Scalars['ID'];
};


export type TemplatedShiftsShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};


export type TemplatedShiftsTemplatedResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']>;
};


export type TemplatedShiftsTemplatedShiftTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShiftTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShiftTags']>;
};

export type TemplatedShiftsConnection = {
  __typename?: 'TemplatedShiftsConnection';
  edges: Array<TemplatedShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedShiftsEdge = {
  __typename?: 'TemplatedShiftsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedShifts;
  offset: Scalars['Int'];
};

export type TestPerObj = {
  __typename?: 'TestPerObj';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Field1?: Maybe<Scalars['String']>;
  Field2?: Maybe<Scalars['String']>;
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type TestPerObjConnection = {
  __typename?: 'TestPerObjConnection';
  edges: Array<TestPerObjEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TestPerObjEdge = {
  __typename?: 'TestPerObjEdge';
  cursor: Scalars['Base64'];
  node: TestPerObj;
  offset: Scalars['Int'];
};

export type TestPerObject2 = {
  __typename?: 'TestPerObject2';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FieldA?: Maybe<Scalars['BigDecimal']>;
  FieldB?: Maybe<Scalars['BigDecimal']>;
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']>;
  JobTestPer2?: Maybe<Jobs>;
  JobTestPer2Id?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type TestPerObject2Connection = {
  __typename?: 'TestPerObject2Connection';
  edges: Array<TestPerObject2Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TestPerObject2Edge = {
  __typename?: 'TestPerObject2Edge';
  cursor: Scalars['Base64'];
  node: TestPerObject2;
  offset: Scalars['Int'];
};

export type Timesheet = {
  __typename?: 'Timesheet';
  ApprovedBy?: Maybe<Users>;
  ApprovedById?: Maybe<Scalars['ID']>;
  ApprovedDate?: Maybe<Scalars['LocalDate']>;
  ApproverComments?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate?: Maybe<Scalars['LocalDate']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  Status?: Maybe<Scalars['String']>;
  SubmitterComments?: Maybe<Scalars['String']>;
  Timesheet: Array<TimesheetEntry>;
  UID: Scalars['ID'];
};


export type TimesheetTimesheetArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheetEntry']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheetEntry']>;
};

export type TimesheetConnection = {
  __typename?: 'TimesheetConnection';
  edges: Array<TimesheetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TimesheetEdge = {
  __typename?: 'TimesheetEdge';
  cursor: Scalars['Base64'];
  node: Timesheet;
  offset: Scalars['Int'];
};

export type TimesheetEntry = {
  __typename?: 'TimesheetEntry';
  Activity?: Maybe<Activities>;
  ActivityId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Distance?: Maybe<Scalars['BigDecimal']>;
  EndDate?: Maybe<Scalars['LocalDate']>;
  EndTime?: Maybe<Scalars['LocalTime']>;
  EntryType?: Maybe<Scalars['String']>;
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Shift?: Maybe<Shifts>;
  ShiftId?: Maybe<Scalars['ID']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  Timesheet?: Maybe<Timesheet>;
  TimesheetId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Unavailability?: Maybe<Availabilities>;
  UnavailabilityId?: Maybe<Scalars['ID']>;
};

export type TimesheetEntryConnection = {
  __typename?: 'TimesheetEntryConnection';
  edges: Array<TimesheetEntryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TimesheetEntryEdge = {
  __typename?: 'TimesheetEntryEdge';
  cursor: Scalars['Base64'];
  node: TimesheetEntry;
  offset: Scalars['Int'];
};

export type Training = {
  __typename?: 'Training';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PL?: Maybe<Scalars['String']>;
  TextA?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type TrainingConnection = {
  __typename?: 'TrainingConnection';
  edges: Array<TrainingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TrainingEdge = {
  __typename?: 'TrainingEdge';
  cursor: Scalars['Base64'];
  node: Training;
  offset: Scalars['Int'];
};

export type TuanTest = {
  __typename?: 'TuanTest';
  Age?: Maybe<Scalars['BigDecimal']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type TuanTestConnection = {
  __typename?: 'TuanTestConnection';
  edges: Array<TuanTestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TuanTestEdge = {
  __typename?: 'TuanTestEdge';
  cursor: Scalars['Base64'];
  node: TuanTest;
  offset: Scalars['Int'];
};

export type UpdateAccountResourceScores = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateAccountTags = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateAccounts = {
  BillingCity?: InputMaybe<Scalars['String']>;
  BillingPostalCode?: InputMaybe<Scalars['String']>;
  BillingState?: InputMaybe<Scalars['String']>;
  BillingStreet?: InputMaybe<Scalars['String']>;
  Fax?: InputMaybe<Scalars['String']>;
  Level?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  Rank?: InputMaybe<Scalars['Int']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  ShippingCity?: InputMaybe<Scalars['String']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']>;
  ShippingState?: InputMaybe<Scalars['String']>;
  ShippingStreet?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateActivities = {
  Address?: InputMaybe<Scalars['String']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  End?: InputMaybe<Scalars['Instant']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  Timezone?: InputMaybe<Scalars['String']>;
  TuanTest?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateActivityResources = {
  ActivityId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateArcadeGames = {
  UID: Scalars['ID'];
  active?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  verbiage?: InputMaybe<Scalars['String']>;
};

export type UpdateAttendee = {
  GroupEventId?: InputMaybe<Scalars['ID']>;
  TestAttendee?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateAttendee1 = {
  GroupEventId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateAttendees = {
  CancelReason?: InputMaybe<Scalars['String']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['AttendeeStatus']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilities = {
  Finish?: InputMaybe<Scalars['Instant']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  Notes?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityPatternResources = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  End?: InputMaybe<Scalars['Instant']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']>;
  Hash?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityTemplateEntries = {
  AvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  FinishTime?: InputMaybe<Scalars['Int']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  StartTime?: InputMaybe<Scalars['Int']>;
  UID: Scalars['ID'];
  Weekday?: InputMaybe<Scalars['Weekday']>;
};

export type UpdateAvailabilityTemplateResources = {
  AvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  Migrated?: InputMaybe<Scalars['Boolean']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  Finish?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type UpdateClass = {
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']>;
  PreferredStart?: InputMaybe<Scalars['Instant']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateContactTags = {
  ContactId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateContacts = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  MailingCity?: InputMaybe<Scalars['String']>;
  MailingPostalCode?: InputMaybe<Scalars['String']>;
  MailingState?: InputMaybe<Scalars['String']>;
  MailingStreet?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  OtherCity?: InputMaybe<Scalars['String']>;
  OtherPostalCode?: InputMaybe<Scalars['String']>;
  OtherState?: InputMaybe<Scalars['String']>;
  OtherStreet?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
  TuanTest?: InputMaybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type UpdateDefaultAutoOffer = {
  AutoOffer?: InputMaybe<Scalars['String']>;
  AutoOfferOffset?: InputMaybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectJobTags?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectPreviousOfferStatus?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectResourceAvailability?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateGroupEvent = {
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateGroupEvent1 = {
  JobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateHolidayRegions = {
  HolidayId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateHolidays = {
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type UpdateJobAllocations = {
  DeclineDescription?: InputMaybe<Scalars['String']>;
  DeclineReason?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']>;
  JobId?: InputMaybe<Scalars['ID']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PhoneResponse?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']>;
  TimePublished?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  TravelTime?: InputMaybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type UpdateJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromJobId?: InputMaybe<Scalars['ID']>;
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID: Scalars['ID'];
};

export type UpdateJobProducts = {
  JobId?: InputMaybe<Scalars['ID']>;
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty?: InputMaybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type UpdateJobTags = {
  JobId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  Seq?: InputMaybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type UpdateJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfter?: InputMaybe<Scalars['Instant']>;
  StartBefore?: InputMaybe<Scalars['Instant']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
  UID: Scalars['ID'];
};

export type UpdateJobs = {
  AbortReason?: InputMaybe<Scalars['String']>;
  AccountId?: InputMaybe<Scalars['ID']>;
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoOffer?: InputMaybe<Scalars['String']>;
  AutoOfferDate?: InputMaybe<Scalars['String']>;
  AutoOfferOffset?: InputMaybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectJobTags?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectPreviousOfferStatus?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectResourceAvailability?: InputMaybe<Scalars['Boolean']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  CompletionNotes?: InputMaybe<Scalars['String']>;
  Confirmed?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']>;
  FollowupReason?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobStartDefer?: InputMaybe<Scalars['BigDecimal']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyBy?: InputMaybe<Scalars['Instant']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  ParentId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiredKit?: InputMaybe<Scalars['BigDecimal']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpdateLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateLocations = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateLogger = {
  Description?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  jobhistoryId?: InputMaybe<Scalars['ID']>;
};

export type UpdateMonitorLogs = {
  Description?: InputMaybe<Scalars['String']>;
  MonitorsId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateMonitors = {
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  VendorsId?: InputMaybe<Scalars['ID']>;
};

export type UpdatePatients = {
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateProducts = {
  Description?: InputMaybe<Scalars['String']>;
  Family?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  ProductCode?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateProjects = {
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdatePublicPageSetting = {
  Link?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdatePublicPageTemplate = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdatePublicSchedule = {
  IsInactivated?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  Note?: InputMaybe<Scalars['String']>;
  PublicPageTemplateId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  Summary?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateRegions = {
  CountryCode?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  Radius?: InputMaybe<Scalars['Int']>;
  Timezone?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateResourceJobOffers = {
  JobOfferId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Response?: InputMaybe<Scalars['OfferResponse']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceOverrideRegions = {
  RegionId?: InputMaybe<Scalars['ID']>;
  ResourceOverrideId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateResourceOverrides = {
  Description?: InputMaybe<Scalars['String']>;
  End?: InputMaybe<Scalars['Instant']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceRegions = {
  End?: InputMaybe<Scalars['Instant']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobStatus']>;
  UID: Scalars['ID'];
};

export type UpdateResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']>;
  ResourceShiftId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceShiftOffers = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  Response?: InputMaybe<Scalars['OfferResponse']>;
  ShiftOfferId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateResources = {
  Alias?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  Birthday?: InputMaybe<Scalars['LocalDate']>;
  Category?: InputMaybe<Scalars['String']>;
  CountryCode?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  EmploymentType?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Language?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Notes?: InputMaybe<Scalars['String']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PrimaryPhone?: InputMaybe<Scalars['String']>;
  PrimaryRegionId?: InputMaybe<Scalars['ID']>;
  Rating?: InputMaybe<Scalars['Int']>;
  ResourceType?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserId?: InputMaybe<Scalars['ID']>;
  VehicleID?: InputMaybe<Scalars['String']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']>;
};

export type UpdateScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']>;
  DeletedDate?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  PeriodDays?: InputMaybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type UpdateShiftOfferShifts = {
  ShiftId?: InputMaybe<Scalars['ID']>;
  ShiftOfferId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID: Scalars['ID'];
};

export type UpdateShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTagManagerSettings = {
  ExpiredReminder?: InputMaybe<Scalars['Boolean']>;
  ExpiredReminderTemplate?: InputMaybe<Scalars['String']>;
  ExpiringSoonReminderDays?: InputMaybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled?: InputMaybe<Scalars['Boolean']>;
  ExpiringSoonReminderTemplate?: InputMaybe<Scalars['String']>;
  LongLiveToken?: InputMaybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: InputMaybe<Scalars['BigDecimal']>;
  ReminderSendTime?: InputMaybe<Scalars['BigDecimal']>;
  ReminderTimezone?: InputMaybe<Scalars['String']>;
  RemindersEnabled?: InputMaybe<Scalars['Boolean']>;
  UID: Scalars['ID'];
};

export type UpdateTagRequest = {
  IsRenewal?: InputMaybe<Scalars['Boolean']>;
  NewExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  OldExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['String']>;
  TagAssignmentId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TagName?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTags = {
  Classification?: InputMaybe<Scalars['TagClassification']>;
  Groups?: InputMaybe<Array<Scalars['String']>>;
  IsRequestable?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  NotVisibleToResources?: InputMaybe<Scalars['Boolean']>;
  RequestEvidence?: InputMaybe<Scalars['Boolean']>;
  RequiresExpiryDate?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Timezone?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedActivityResources = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedAttendees = {
  ContactId?: InputMaybe<Scalars['ID']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromTemplatedJobId?: InputMaybe<Scalars['ID']>;
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToTemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty?: InputMaybe<Scalars['BigDecimal']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Seq?: InputMaybe<Scalars['Int']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpdateTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedResourceShifts = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  UID: Scalars['ID'];
};

export type UpdateTestPerObj = {
  Field1?: InputMaybe<Scalars['String']>;
  Field2?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTestPerObject2 = {
  FieldA?: InputMaybe<Scalars['BigDecimal']>;
  FieldB?: InputMaybe<Scalars['BigDecimal']>;
  JobId?: InputMaybe<Scalars['ID']>;
  JobTestPer2Id?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTimesheet = {
  ApprovedById?: InputMaybe<Scalars['ID']>;
  ApprovedDate?: InputMaybe<Scalars['LocalDate']>;
  ApproverComments?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  Status?: InputMaybe<Scalars['String']>;
  SubmitterComments?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTimesheetEntry = {
  ActivityId?: InputMaybe<Scalars['ID']>;
  Description?: InputMaybe<Scalars['String']>;
  Distance?: InputMaybe<Scalars['BigDecimal']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  EntryType?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  TimesheetId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  UnavailabilityId?: InputMaybe<Scalars['ID']>;
};

export type UpdateTraining = {
  PL?: InputMaybe<Scalars['String']>;
  TextA?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTuanTest = {
  Age?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateUserRegions = {
  RegionId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  UserId?: InputMaybe<Scalars['ID']>;
};

export type UpdateVendorTag = {
  TagsId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  VendorsId?: InputMaybe<Scalars['ID']>;
};

export type UpdateVendors = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  TenantId?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpsertAccountResourceScores = {
  AccountId: Scalars['ID'];
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertAccountTags = {
  AccountId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertAccounts = {
  BillingCity?: InputMaybe<Scalars['String']>;
  BillingPostalCode?: InputMaybe<Scalars['String']>;
  BillingState?: InputMaybe<Scalars['String']>;
  BillingStreet?: InputMaybe<Scalars['String']>;
  Fax?: InputMaybe<Scalars['String']>;
  Level?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Phone?: InputMaybe<Scalars['String']>;
  Rank?: InputMaybe<Scalars['Int']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  ShippingCity?: InputMaybe<Scalars['String']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']>;
  ShippingState?: InputMaybe<Scalars['String']>;
  ShippingStreet?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertActivities = {
  Address?: InputMaybe<Scalars['String']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  Timezone?: InputMaybe<Scalars['String']>;
  TuanTest?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertActivityResources = {
  ActivityId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertArcadeGames = {
  UID?: InputMaybe<Scalars['ID']>;
  active?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  verbiage?: InputMaybe<Scalars['String']>;
};

export type UpsertAttendee = {
  GroupEventId?: InputMaybe<Scalars['ID']>;
  TestAttendee?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAttendee1 = {
  GroupEventId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAttendees = {
  CancelReason?: InputMaybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  JobId: Scalars['ID'];
  Status?: InputMaybe<Scalars['AttendeeStatus']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilities = {
  Finish: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  Notes?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityPatternResources = {
  AvailabilityPatternId: Scalars['ID'];
  End?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']>;
  Hash: Scalars['String'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityTemplateEntries = {
  AvailabilityTemplateId: Scalars['ID'];
  FinishTime: Scalars['Int'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  StartTime: Scalars['Int'];
  UID?: InputMaybe<Scalars['ID']>;
  Weekday: Scalars['Weekday'];
};

export type UpsertAvailabilityTemplateResources = {
  AvailabilityTemplateId: Scalars['ID'];
  Migrated?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  Finish?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['LocalDate']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertClass = {
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']>;
  PreferredStart?: InputMaybe<Scalars['Instant']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertContactTags = {
  ContactId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertContacts = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName: Scalars['String'];
  MailingCity?: InputMaybe<Scalars['String']>;
  MailingPostalCode?: InputMaybe<Scalars['String']>;
  MailingState?: InputMaybe<Scalars['String']>;
  MailingStreet?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  OtherCity?: InputMaybe<Scalars['String']>;
  OtherPostalCode?: InputMaybe<Scalars['String']>;
  OtherState?: InputMaybe<Scalars['String']>;
  OtherStreet?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
  TuanTest?: InputMaybe<Scalars['BigDecimal']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertDefaultAutoOffer = {
  AutoOffer?: InputMaybe<Scalars['String']>;
  AutoOfferOffset?: InputMaybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectJobTags?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectPreviousOfferStatus?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectResourceAvailability?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertGroupEvent = {
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertGroupEvent1 = {
  JobId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertHolidayRegions = {
  HolidayId: Scalars['ID'];
  RegionId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertHolidays = {
  EndDate: Scalars['LocalDate'];
  Global?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobAllocations = {
  DeclineDescription?: InputMaybe<Scalars['String']>;
  DeclineReason?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  NotificationType?: InputMaybe<Scalars['String']>;
  PhoneResponse?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']>;
  TimePublished?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  TravelTime?: InputMaybe<Scalars['Duration']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobProducts = {
  JobId: Scalars['ID'];
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobTags = {
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  JobId: Scalars['ID'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfter?: InputMaybe<Scalars['Instant']>;
  StartBefore?: InputMaybe<Scalars['Instant']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobs = {
  AbortReason?: InputMaybe<Scalars['String']>;
  AccountId?: InputMaybe<Scalars['ID']>;
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoOffer?: InputMaybe<Scalars['String']>;
  AutoOfferDate?: InputMaybe<Scalars['String']>;
  AutoOfferOffset?: InputMaybe<Scalars['BigDecimal']>;
  AutoOfferRespectJobRegion?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectJobTags?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectPreviousOfferStatus?: InputMaybe<Scalars['Boolean']>;
  AutoOfferRespectResourceAvailability?: InputMaybe<Scalars['Boolean']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  CompletionNotes?: InputMaybe<Scalars['String']>;
  Confirmed?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']>;
  FollowupReason?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobStartDefer?: InputMaybe<Scalars['BigDecimal']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyBy?: InputMaybe<Scalars['Instant']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  ParentId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  RequiredKit?: InputMaybe<Scalars['BigDecimal']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpsertLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertLocations = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertLogger = {
  Description?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  jobhistoryId?: InputMaybe<Scalars['ID']>;
};

export type UpsertMonitorLogs = {
  Description?: InputMaybe<Scalars['String']>;
  MonitorsId: Scalars['ID'];
  Name: Scalars['String'];
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertMonitors = {
  Name: Scalars['String'];
  UID?: InputMaybe<Scalars['ID']>;
  VendorsId: Scalars['ID'];
};

export type UpsertPatients = {
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertProducts = {
  Description?: InputMaybe<Scalars['String']>;
  Family?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  ProductCode?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertProjects = {
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertPublicPageSetting = {
  Link?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertPublicPageTemplate = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertPublicSchedule = {
  IsInactivated?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  Note?: InputMaybe<Scalars['String']>;
  PublicPageTemplateId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  Summary?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertRegions = {
  CountryCode?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  Radius?: InputMaybe<Scalars['Int']>;
  Timezone: Scalars['String'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceJobOffers = {
  JobOfferId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceOverrideRegions = {
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceOverrides = {
  Description?: InputMaybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceRegions = {
  End?: InputMaybe<Scalars['Instant']>;
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']>;
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceShiftOffers = {
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  ShiftOfferId: Scalars['ID'];
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResources = {
  Alias?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  Birthday?: InputMaybe<Scalars['LocalDate']>;
  Category?: InputMaybe<Scalars['String']>;
  CountryCode?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  EmploymentType?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Language?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: InputMaybe<Scalars['String']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PrimaryPhone?: InputMaybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: InputMaybe<Scalars['Int']>;
  ResourceType?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  UserId?: InputMaybe<Scalars['ID']>;
  VehicleID?: InputMaybe<Scalars['String']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']>;
};

export type UpsertScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']>;
  DeletedDate?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  PeriodDays?: InputMaybe<Scalars['Int']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertShiftOfferShifts = {
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTagManagerSettings = {
  ExpiredReminder?: InputMaybe<Scalars['Boolean']>;
  ExpiredReminderTemplate?: InputMaybe<Scalars['String']>;
  ExpiringSoonReminderDays?: InputMaybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled?: InputMaybe<Scalars['Boolean']>;
  ExpiringSoonReminderTemplate?: InputMaybe<Scalars['String']>;
  LongLiveToken?: InputMaybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: InputMaybe<Scalars['BigDecimal']>;
  ReminderSendTime?: InputMaybe<Scalars['BigDecimal']>;
  ReminderTimezone?: InputMaybe<Scalars['String']>;
  RemindersEnabled?: InputMaybe<Scalars['Boolean']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTagRequest = {
  IsRenewal?: InputMaybe<Scalars['Boolean']>;
  NewExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  OldExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: InputMaybe<Scalars['String']>;
  TagAssignmentId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TagName?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTags = {
  Classification?: InputMaybe<Scalars['TagClassification']>;
  Groups?: InputMaybe<Array<Scalars['String']>>;
  IsRequestable?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  NotVisibleToResources?: InputMaybe<Scalars['Boolean']>;
  RequestEvidence?: InputMaybe<Scalars['Boolean']>;
  RequiresExpiryDate?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedActivityResources = {
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedAttendees = {
  ContactId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromTemplatedJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpsertTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedResourceShifts = {
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTestPerObj = {
  Field1?: InputMaybe<Scalars['String']>;
  Field2?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTestPerObject2 = {
  FieldA?: InputMaybe<Scalars['BigDecimal']>;
  FieldB?: InputMaybe<Scalars['BigDecimal']>;
  JobId?: InputMaybe<Scalars['ID']>;
  JobTestPer2Id?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTimesheet = {
  ApprovedById?: InputMaybe<Scalars['ID']>;
  ApprovedDate?: InputMaybe<Scalars['LocalDate']>;
  ApproverComments?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  Status?: InputMaybe<Scalars['String']>;
  SubmitterComments?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTimesheetEntry = {
  ActivityId?: InputMaybe<Scalars['ID']>;
  Description?: InputMaybe<Scalars['String']>;
  Distance?: InputMaybe<Scalars['BigDecimal']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  EntryType?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  TimesheetId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
  UnavailabilityId?: InputMaybe<Scalars['ID']>;
};

export type UpsertTraining = {
  PL?: InputMaybe<Scalars['String']>;
  TextA?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTuanTest = {
  Age?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertUserRegions = {
  RegionId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  UserId: Scalars['ID'];
};

export type UpsertVendorTag = {
  TagsId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  VendorsId: Scalars['ID'];
};

export type UpsertVendors = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  TenantId?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UserRegions = {
  __typename?: 'UserRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
  User: Users;
  UserId: Scalars['ID'];
};

export type UserRegionsConnection = {
  __typename?: 'UserRegionsConnection';
  edges: Array<UserRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserRegionsEdge = {
  __typename?: 'UserRegionsEdge';
  cursor: Scalars['Base64'];
  node: UserRegions;
  offset: Scalars['Int'];
};

export type Users = {
  __typename?: 'Users';
  City?: Maybe<Scalars['String']>;
  Country?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email: Scalars['String'];
  FirstName?: Maybe<Scalars['String']>;
  FullPhotoUrl: Scalars['String'];
  IsActive: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  PostalCode?: Maybe<Scalars['String']>;
  Resources: Array<Resources>;
  SmallPhotoUrl: Scalars['String'];
  State?: Maybe<Scalars['String']>;
  Street?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserRegions: Array<UserRegions>;
  UserTypes?: Maybe<Array<Scalars['String']>>;
};


export type UsersResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']>;
};


export type UsersUserRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterUserRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUserRegions']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor: Scalars['Base64'];
  node: Users;
  offset: Scalars['Int'];
};

export type VendorTag = {
  __typename?: 'VendorTag';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Tags: Tags;
  TagsId: Scalars['ID'];
  UID: Scalars['ID'];
  Vendors: Vendors;
  VendorsId: Scalars['ID'];
};

export type VendorTagConnection = {
  __typename?: 'VendorTagConnection';
  edges: Array<VendorTagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type VendorTagEdge = {
  __typename?: 'VendorTagEdge';
  cursor: Scalars['Base64'];
  node: VendorTag;
  offset: Scalars['Int'];
};

export type Vendors = {
  __typename?: 'Vendors';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  TenantId?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type VendorsConnection = {
  __typename?: 'VendorsConnection';
  edges: Array<VendorsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type VendorsEdge = {
  __typename?: 'VendorsEdge';
  cursor: Scalars['Base64'];
  node: Vendors;
  offset: Scalars['Int'];
};

export type FetchJobsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
}>;


export type FetchJobsQuery = { __typename?: 'Query', jobs: { __typename?: 'JobsConnection', edges: Array<{ __typename?: 'JobsEdge', node: { __typename?: 'Jobs', UID: string, Name: string } }> } };

export type FetchVendorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchVendorsQuery = { __typename?: 'Query', vendors: { __typename?: 'VendorsConnection', edges: Array<{ __typename?: 'VendorsEdge', node: { __typename?: 'Vendors', UID: string, Name?: string | null, TenantId?: string | null, Description?: string | null } }> } };

export type FetchVendorByIdQueryVariables = Exact<{
  UID: Scalars['ID'];
}>;


export type FetchVendorByIdQuery = { __typename?: 'Query', vendorsById?: { __typename?: 'Vendors', UID: string, Name?: string | null, TenantId?: string | null, Description?: string | null } | null };

export type InsertVendorMutationVariables = Exact<{
  input: NewVendors;
}>;


export type InsertVendorMutation = { __typename?: 'Mutation', schema: { __typename?: 'SchemaMutation', insertVendors: string } };

export type InsertMonitorMutationVariables = Exact<{
  input: NewMonitors;
}>;


export type InsertMonitorMutation = { __typename?: 'Mutation', schema: { __typename?: 'SchemaMutation', insertMonitors: string } };

export type MonitorLogsMutationVariables = Exact<{
  input: NewMonitorLogs;
}>;


export type MonitorLogsMutation = { __typename?: 'Mutation', schema: { __typename?: 'SchemaMutation', insertMonitorLogs: string } };

export type FetchMonitorQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterMonitors']>;
}>;


export type FetchMonitorQuery = { __typename?: 'Query', monitors: { __typename?: 'MonitorsConnection', edges: Array<{ __typename?: 'MonitorsEdge', node: { __typename?: 'Monitors', UID: string, Name: string, VendorsId: string } }> } };

export type FetchVendorTagsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterVendorTag']>;
}>;


export type FetchVendorTagsQuery = { __typename?: 'Query', vendorTag: { __typename?: 'VendorTagConnection', edges: Array<{ __typename?: 'VendorTagEdge', node: { __typename?: 'VendorTag', UID: string, VendorsId: string, TagsId: string } }> } };

export type FetchTagsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterTags']>;
}>;


export type FetchTagsQuery = { __typename?: 'Query', tags: { __typename?: 'TagsConnection', edges: Array<{ __typename?: 'TagsEdge', node: { __typename?: 'Tags', UID: string, Name: string } }> } };

export type FetchMonitorLogsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterMonitorLogs']>;
}>;


export type FetchMonitorLogsQuery = { __typename?: 'Query', monitorLogs: { __typename?: 'MonitorLogsConnection', edges: Array<{ __typename?: 'MonitorLogsEdge', node: { __typename?: 'MonitorLogs', CreatedDate: any, UID: string, Name: string, Description?: string | null, Type?: string | null, MonitorsId: string } }> } };

export type SubLogSubscriptionVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLRecordFilterMonitorLogs']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp> | SchemaSubscriptionOp>;
}>;


export type SubLogSubscription = { __typename?: 'Subscription', schemaMonitorLogs: { __typename?: 'SchemaSubscriptionNotificationMonitorLogs', data: { __typename?: 'SchemaSubscriptionMonitorLogs', CreatedDate: any, UID: string, Name: string, Description?: string | null, Type?: string | null } } };


export const FetchJobsDocument = gql`
    query fetchJobs($filter: EQLQueryFilterJobs) {
  jobs(filter: $filter, orderBy: "CreatedDate DESC") {
    edges {
      node {
        UID
        Name
      }
    }
  }
}
    `;

/**
 * __useFetchJobsQuery__
 *
 * To run a query within a React component, call `useFetchJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchJobsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchJobsQuery(baseOptions?: Apollo.QueryHookOptions<FetchJobsQuery, FetchJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchJobsQuery, FetchJobsQueryVariables>(FetchJobsDocument, options);
      }
export function useFetchJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchJobsQuery, FetchJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchJobsQuery, FetchJobsQueryVariables>(FetchJobsDocument, options);
        }
export type FetchJobsQueryHookResult = ReturnType<typeof useFetchJobsQuery>;
export type FetchJobsLazyQueryHookResult = ReturnType<typeof useFetchJobsLazyQuery>;
export type FetchJobsQueryResult = Apollo.QueryResult<FetchJobsQuery, FetchJobsQueryVariables>;
export const FetchVendorsDocument = gql`
    query fetchVendors {
  vendors {
    edges {
      node {
        UID
        Name
        TenantId
        Description
      }
    }
  }
}
    `;

/**
 * __useFetchVendorsQuery__
 *
 * To run a query within a React component, call `useFetchVendorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchVendorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchVendorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchVendorsQuery(baseOptions?: Apollo.QueryHookOptions<FetchVendorsQuery, FetchVendorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchVendorsQuery, FetchVendorsQueryVariables>(FetchVendorsDocument, options);
      }
export function useFetchVendorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchVendorsQuery, FetchVendorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchVendorsQuery, FetchVendorsQueryVariables>(FetchVendorsDocument, options);
        }
export type FetchVendorsQueryHookResult = ReturnType<typeof useFetchVendorsQuery>;
export type FetchVendorsLazyQueryHookResult = ReturnType<typeof useFetchVendorsLazyQuery>;
export type FetchVendorsQueryResult = Apollo.QueryResult<FetchVendorsQuery, FetchVendorsQueryVariables>;
export const FetchVendorByIdDocument = gql`
    query fetchVendorById($UID: ID!) {
  vendorsById(UID: $UID) {
    UID
    Name
    TenantId
    Description
  }
}
    `;

/**
 * __useFetchVendorByIdQuery__
 *
 * To run a query within a React component, call `useFetchVendorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchVendorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchVendorByIdQuery({
 *   variables: {
 *      UID: // value for 'UID'
 *   },
 * });
 */
export function useFetchVendorByIdQuery(baseOptions: Apollo.QueryHookOptions<FetchVendorByIdQuery, FetchVendorByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchVendorByIdQuery, FetchVendorByIdQueryVariables>(FetchVendorByIdDocument, options);
      }
export function useFetchVendorByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchVendorByIdQuery, FetchVendorByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchVendorByIdQuery, FetchVendorByIdQueryVariables>(FetchVendorByIdDocument, options);
        }
export type FetchVendorByIdQueryHookResult = ReturnType<typeof useFetchVendorByIdQuery>;
export type FetchVendorByIdLazyQueryHookResult = ReturnType<typeof useFetchVendorByIdLazyQuery>;
export type FetchVendorByIdQueryResult = Apollo.QueryResult<FetchVendorByIdQuery, FetchVendorByIdQueryVariables>;
export const InsertVendorDocument = gql`
    mutation insertVendor($input: NewVendors!) {
  schema {
    insertVendors(input: $input)
  }
}
    `;
export type InsertVendorMutationFn = Apollo.MutationFunction<InsertVendorMutation, InsertVendorMutationVariables>;

/**
 * __useInsertVendorMutation__
 *
 * To run a mutation, you first call `useInsertVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVendorMutation, { data, loading, error }] = useInsertVendorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertVendorMutation(baseOptions?: Apollo.MutationHookOptions<InsertVendorMutation, InsertVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertVendorMutation, InsertVendorMutationVariables>(InsertVendorDocument, options);
      }
export type InsertVendorMutationHookResult = ReturnType<typeof useInsertVendorMutation>;
export type InsertVendorMutationResult = Apollo.MutationResult<InsertVendorMutation>;
export type InsertVendorMutationOptions = Apollo.BaseMutationOptions<InsertVendorMutation, InsertVendorMutationVariables>;
export const InsertMonitorDocument = gql`
    mutation insertMonitor($input: NewMonitors!) {
  schema {
    insertMonitors(input: $input)
  }
}
    `;
export type InsertMonitorMutationFn = Apollo.MutationFunction<InsertMonitorMutation, InsertMonitorMutationVariables>;

/**
 * __useInsertMonitorMutation__
 *
 * To run a mutation, you first call `useInsertMonitorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMonitorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMonitorMutation, { data, loading, error }] = useInsertMonitorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertMonitorMutation(baseOptions?: Apollo.MutationHookOptions<InsertMonitorMutation, InsertMonitorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertMonitorMutation, InsertMonitorMutationVariables>(InsertMonitorDocument, options);
      }
export type InsertMonitorMutationHookResult = ReturnType<typeof useInsertMonitorMutation>;
export type InsertMonitorMutationResult = Apollo.MutationResult<InsertMonitorMutation>;
export type InsertMonitorMutationOptions = Apollo.BaseMutationOptions<InsertMonitorMutation, InsertMonitorMutationVariables>;
export const MonitorLogsDocument = gql`
    mutation monitorLogs($input: NewMonitorLogs!) {
  schema {
    insertMonitorLogs(input: $input)
  }
}
    `;
export type MonitorLogsMutationFn = Apollo.MutationFunction<MonitorLogsMutation, MonitorLogsMutationVariables>;

/**
 * __useMonitorLogsMutation__
 *
 * To run a mutation, you first call `useMonitorLogsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMonitorLogsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [monitorLogsMutation, { data, loading, error }] = useMonitorLogsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMonitorLogsMutation(baseOptions?: Apollo.MutationHookOptions<MonitorLogsMutation, MonitorLogsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MonitorLogsMutation, MonitorLogsMutationVariables>(MonitorLogsDocument, options);
      }
export type MonitorLogsMutationHookResult = ReturnType<typeof useMonitorLogsMutation>;
export type MonitorLogsMutationResult = Apollo.MutationResult<MonitorLogsMutation>;
export type MonitorLogsMutationOptions = Apollo.BaseMutationOptions<MonitorLogsMutation, MonitorLogsMutationVariables>;
export const FetchMonitorDocument = gql`
    query fetchMonitor($filter: EQLQueryFilterMonitors) {
  monitors(filter: $filter) {
    edges {
      node {
        UID
        Name
        VendorsId
      }
    }
  }
}
    `;

/**
 * __useFetchMonitorQuery__
 *
 * To run a query within a React component, call `useFetchMonitorQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMonitorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMonitorQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchMonitorQuery(baseOptions?: Apollo.QueryHookOptions<FetchMonitorQuery, FetchMonitorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMonitorQuery, FetchMonitorQueryVariables>(FetchMonitorDocument, options);
      }
export function useFetchMonitorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMonitorQuery, FetchMonitorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMonitorQuery, FetchMonitorQueryVariables>(FetchMonitorDocument, options);
        }
export type FetchMonitorQueryHookResult = ReturnType<typeof useFetchMonitorQuery>;
export type FetchMonitorLazyQueryHookResult = ReturnType<typeof useFetchMonitorLazyQuery>;
export type FetchMonitorQueryResult = Apollo.QueryResult<FetchMonitorQuery, FetchMonitorQueryVariables>;
export const FetchVendorTagsDocument = gql`
    query fetchVendorTags($filter: EQLQueryFilterVendorTag) {
  vendorTag(filter: $filter) {
    edges {
      node {
        UID
        VendorsId
        TagsId
      }
    }
  }
}
    `;

/**
 * __useFetchVendorTagsQuery__
 *
 * To run a query within a React component, call `useFetchVendorTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchVendorTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchVendorTagsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchVendorTagsQuery(baseOptions?: Apollo.QueryHookOptions<FetchVendorTagsQuery, FetchVendorTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchVendorTagsQuery, FetchVendorTagsQueryVariables>(FetchVendorTagsDocument, options);
      }
export function useFetchVendorTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchVendorTagsQuery, FetchVendorTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchVendorTagsQuery, FetchVendorTagsQueryVariables>(FetchVendorTagsDocument, options);
        }
export type FetchVendorTagsQueryHookResult = ReturnType<typeof useFetchVendorTagsQuery>;
export type FetchVendorTagsLazyQueryHookResult = ReturnType<typeof useFetchVendorTagsLazyQuery>;
export type FetchVendorTagsQueryResult = Apollo.QueryResult<FetchVendorTagsQuery, FetchVendorTagsQueryVariables>;
export const FetchTagsDocument = gql`
    query fetchTags($filter: EQLQueryFilterTags) {
  tags(filter: $filter) {
    edges {
      node {
        UID
        Name
      }
    }
  }
}
    `;

/**
 * __useFetchTagsQuery__
 *
 * To run a query within a React component, call `useFetchTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTagsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchTagsQuery(baseOptions?: Apollo.QueryHookOptions<FetchTagsQuery, FetchTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchTagsQuery, FetchTagsQueryVariables>(FetchTagsDocument, options);
      }
export function useFetchTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchTagsQuery, FetchTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchTagsQuery, FetchTagsQueryVariables>(FetchTagsDocument, options);
        }
export type FetchTagsQueryHookResult = ReturnType<typeof useFetchTagsQuery>;
export type FetchTagsLazyQueryHookResult = ReturnType<typeof useFetchTagsLazyQuery>;
export type FetchTagsQueryResult = Apollo.QueryResult<FetchTagsQuery, FetchTagsQueryVariables>;
export const FetchMonitorLogsDocument = gql`
    query fetchMonitorLogs($filter: EQLQueryFilterMonitorLogs) {
  monitorLogs(filter: $filter, orderBy: "CreatedDate DESC") {
    edges {
      node {
        CreatedDate
        UID
        Name
        Description
        Type
        MonitorsId
      }
    }
  }
}
    `;

/**
 * __useFetchMonitorLogsQuery__
 *
 * To run a query within a React component, call `useFetchMonitorLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMonitorLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMonitorLogsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchMonitorLogsQuery(baseOptions?: Apollo.QueryHookOptions<FetchMonitorLogsQuery, FetchMonitorLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMonitorLogsQuery, FetchMonitorLogsQueryVariables>(FetchMonitorLogsDocument, options);
      }
export function useFetchMonitorLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMonitorLogsQuery, FetchMonitorLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMonitorLogsQuery, FetchMonitorLogsQueryVariables>(FetchMonitorLogsDocument, options);
        }
export type FetchMonitorLogsQueryHookResult = ReturnType<typeof useFetchMonitorLogsQuery>;
export type FetchMonitorLogsLazyQueryHookResult = ReturnType<typeof useFetchMonitorLogsLazyQuery>;
export type FetchMonitorLogsQueryResult = Apollo.QueryResult<FetchMonitorLogsQuery, FetchMonitorLogsQueryVariables>;
export const SubLogDocument = gql`
    subscription SubLog($filter: EQLRecordFilterMonitorLogs, $operation: [SchemaSubscriptionOp!]) {
  schemaMonitorLogs(operation: $operation, filter: $filter) {
    data {
      CreatedDate
      UID
      Name
      Description
      Type
    }
  }
}
    `;

/**
 * __useSubLogSubscription__
 *
 * To run a query within a React component, call `useSubLogSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubLogSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubLogSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      operation: // value for 'operation'
 *   },
 * });
 */
export function useSubLogSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubLogSubscription, SubLogSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubLogSubscription, SubLogSubscriptionVariables>(SubLogDocument, options);
      }
export type SubLogSubscriptionHookResult = ReturnType<typeof useSubLogSubscription>;
export type SubLogSubscriptionResult = Apollo.SubscriptionResult<SubLogSubscription>;