// This file was generated by a custom prisma generator, do not edit manually.
export const MemberStatusEnum = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;

export type MemberStatusEnum = (typeof MemberStatusEnum)[keyof typeof MemberStatusEnum];

export const StakeholderTypeEnum = {
  INDIVIDUAL: "INDIVIDUAL",
  INSTITUTION: "INSTITUTION",
} as const;

export type StakeholderTypeEnum = (typeof StakeholderTypeEnum)[keyof typeof StakeholderTypeEnum];

export const StakeholderRelationshipEnum = {
  ADVISOR: "ADVISOR",
  BOARD_MEMBER: "BOARD_MEMBER",
  CONSULTANT: "CONSULTANT",
  EMPLOYEE: "EMPLOYEE",
  EX_ADVISOR: "EX_ADVISOR",
  EX_CONSULTANT: "EX_CONSULTANT",
  EX_EMPLOYEE: "EX_EMPLOYEE",
  EXECUTIVE: "EXECUTIVE",
  FOUNDER: "FOUNDER",
  INVESTOR: "INVESTOR",
  NON_US_EMPLOYEE: "NON_US_EMPLOYEE",
  OFFICER: "OFFICER",
  OTHER: "OTHER",
} as const;

export type StakeholderRelationshipEnum = (typeof StakeholderRelationshipEnum)[keyof typeof StakeholderRelationshipEnum];

export const ShareTypeEnum = {
  COMMON: "COMMON",
  PREFERRED: "PREFERRED",
} as const;

export type ShareTypeEnum = (typeof ShareTypeEnum)[keyof typeof ShareTypeEnum];

export const SharePrefixEnum = {
  CS: "CS",
  PS: "PS",
} as const;

export type SharePrefixEnum = (typeof SharePrefixEnum)[keyof typeof SharePrefixEnum];

export const ConversionRightsEnum = {
  CONVERTS_TO_FUTURE_ROUND: "CONVERTS_TO_FUTURE_ROUND",
  CONVERTS_TO_SHARE_CLASS_ID: "CONVERTS_TO_SHARE_CLASS_ID",
} as const;

export type ConversionRightsEnum = (typeof ConversionRightsEnum)[keyof typeof ConversionRightsEnum];

export const CancellationBehaviorEnum = {
  RETIRE: "RETIRE",
  RETURN_TO_POOL: "RETURN_TO_POOL",
  HOLD_AS_CAPITAL_STOCK: "HOLD_AS_CAPITAL_STOCK",
  DEFINED_PER_PLAN_SECURITY: "DEFINED_PER_PLAN_SECURITY",
} as const;

export type CancellationBehaviorEnum = (typeof CancellationBehaviorEnum)[keyof typeof CancellationBehaviorEnum];

export const FieldTypes = {
  TEXT: "TEXT",
  RADIO: "RADIO",
  EMAIL: "EMAIL",
  DATE: "DATE",
  DATETIME: "DATETIME",
  TEXTAREA: "TEXTAREA",
  CHECKBOX: "CHECKBOX",
  SIGNATURE: "SIGNATURE",
} as const;

export type FieldTypes = (typeof FieldTypes)[keyof typeof FieldTypes];

export const TemplateStatus = {
  DRAFT: "DRAFT",
  COMPLETE: "COMPLETE",
} as const;

export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];

export const EsignRecipientStatus = {
  SENT: "SENT",
  SIGNED: "SIGNED",
  PENDING: "PENDING",
} as const;

export type EsignRecipientStatus = (typeof EsignRecipientStatus)[keyof typeof EsignRecipientStatus];

export const SecuritiesStatusEnum = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
  SIGNED: "SIGNED",
  PENDING: "PENDING",
} as const;

export type SecuritiesStatusEnum = (typeof SecuritiesStatusEnum)[keyof typeof SecuritiesStatusEnum];

export const VestingScheduleEnum = {
  VESTING_0_0_0: "VESTING_0_0_0",
  VESTING_0_0_1: "VESTING_0_0_1",
  VESTING_4_1_0: "VESTING_4_1_0",
  VESTING_4_1_1: "VESTING_4_1_1",
  VESTING_4_3_1: "VESTING_4_3_1",
  VESTING_4_6_1: "VESTING_4_6_1",
  VESTING_4_12_1: "VESTING_4_12_1",
} as const;

export type VestingScheduleEnum = (typeof VestingScheduleEnum)[keyof typeof VestingScheduleEnum];

export const ShareLegendsEnum = {
  US_SECURITIES_ACT: "US_SECURITIES_ACT",
  SALE_AND_ROFR: "SALE_AND_ROFR",
  TRANSFER_RESTRICTIONS: "TRANSFER_RESTRICTIONS",
} as const;

export type ShareLegendsEnum = (typeof ShareLegendsEnum)[keyof typeof ShareLegendsEnum];

export const OptionTypeEnum = {
  ISO: "ISO",
  NSO: "NSO",
  RSU: "RSU",
} as const;

export type OptionTypeEnum = (typeof OptionTypeEnum)[keyof typeof OptionTypeEnum];

export const OptionStatusEnum = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  EXERCISED: "EXERCISED",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED",
} as const;

export type OptionStatusEnum = (typeof OptionStatusEnum)[keyof typeof OptionStatusEnum];

export const SafeTypeEnum = {
  PRE_MONEY: "PRE_MONEY",
  POST_MONEY: "POST_MONEY",
} as const;

export type SafeTypeEnum = (typeof SafeTypeEnum)[keyof typeof SafeTypeEnum];

export const SafeStatusEnum = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED",
} as const;

export type SafeStatusEnum = (typeof SafeStatusEnum)[keyof typeof SafeStatusEnum];

export const SafeTemplateEnum = {
  POST_MONEY_CAP: "POST_MONEY_CAP",
  POST_MONEY_DISCOUNT: "POST_MONEY_DISCOUNT",
  POST_MONEY_MFN: "POST_MONEY_MFN",
  POST_MONEY_CAP_WITH_PRO_RATA: "POST_MONEY_CAP_WITH_PRO_RATA",
  POST_MONEY_DISCOUNT_WITH_PRO_RATA: "POST_MONEY_DISCOUNT_WITH_PRO_RATA",
  POST_MONEY_MFN_WITH_PRO_RATA: "POST_MONEY_MFN_WITH_PRO_RATA",
  CUSTOM: "CUSTOM",
} as const;

export type SafeTemplateEnum = (typeof SafeTemplateEnum)[keyof typeof SafeTemplateEnum];

export const ConvertibleStatusEnum = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED",
} as const;

export type ConvertibleStatusEnum = (typeof ConvertibleStatusEnum)[keyof typeof ConvertibleStatusEnum];

export const ConvertibleTypeEnum = {
  CCD: "CCD",
  OCD: "OCD",
  NOTE: "NOTE",
} as const;

export type ConvertibleTypeEnum = (typeof ConvertibleTypeEnum)[keyof typeof ConvertibleTypeEnum];

export const ConvertibleInterestMethodEnum = {
  SIMPLE: "SIMPLE",
  COMPOUND: "COMPOUND",
} as const;

export type ConvertibleInterestMethodEnum = (typeof ConvertibleInterestMethodEnum)[keyof typeof ConvertibleInterestMethodEnum];

export const ConvertibleInterestAccrualEnum = {
  DAILY: "DAILY",
  MONTHLY: "MONTHLY",
  SEMI_ANNUALLY: "SEMI_ANNUALLY",
  ANNUALLY: "ANNUALLY",
  YEARLY: "YEARLY",
  CONTINUOUSLY: "CONTINUOUSLY",
} as const;

export type ConvertibleInterestAccrualEnum = (typeof ConvertibleInterestAccrualEnum)[keyof typeof ConvertibleInterestAccrualEnum];

export const ConvertibleInterestPaymentScheduleEnum = {
  DEFERRED: "DEFERRED",
  PAY_AT_MATURITY: "PAY_AT_MATURITY",
} as const;

export type ConvertibleInterestPaymentScheduleEnum = (typeof ConvertibleInterestPaymentScheduleEnum)[keyof typeof ConvertibleInterestPaymentScheduleEnum];

export const UpdateEmailStatusEnum = {
  SENT: "SENT",
  PENDING: "PENDING",
  FAILED: "FAILED",
} as const;

export type UpdateEmailStatusEnum = (typeof UpdateEmailStatusEnum)[keyof typeof UpdateEmailStatusEnum];
