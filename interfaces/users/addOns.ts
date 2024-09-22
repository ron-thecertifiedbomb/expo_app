export interface RootObject {
 _id:       string;
 addOns:    AddOn[];
 code:      string;
 groupCode: string;
 name:      string;
}

export interface AddOn {
 active?:             boolean;
 cebspecialbaggages?: Cebspecialbaggage[];
 code?:               string;
 detail:              string;
 lowestPrice:         number | null;
 name:                string;
 parameters?:         AddOnParameter[];
 promoteAll?:         boolean;
}

export interface Cebspecialbaggage {
 active:      boolean;
 code:        string;
 detail:      string;
 lowestPrice: number;
 name:        string;
 parameters:  CebspecialbaggageParameter[];
 promoteAll:  boolean;
}

export interface CebspecialbaggageParameter {
 active:          boolean;
 channels:        Channel[];
 code:            string;
 conditionaltype: Conditionaltype;
 datatype:        Datatype;
 inputfield:      string;
 param:           string;
 projects:        Channel[];
 promote:         boolean;
 value1:          PurpleValue1;
 value2:          null;
}

export interface Channel {
 name: Name;
}

export enum Name {
 M9Gl1Yx6Ri9Nhwq = "M9GL1YX6RI9NHWQ",
 Mobile = "Mobile",
 Web = "Web",
}

export enum Conditionaltype {
 Value = "Value",
}

export enum Datatype {
 JSON = "json",
}

export interface PurpleValue1 {
 feeCode:              string;
 level:                Level;
 limitPerPassenger:    number;
 pieces?:              number;
 scope:                Scope[];
 totalKg?:             number;
 unavailableByMinutes: number;
}

export enum Level {
 Journey = "journey",
 Leg = "leg",
}

export enum Scope {
 Firm = "FIRM",
 Foc = "FOC",
}

export interface AddOnParameter {
 active:          boolean;
 channels:        Channel[];
 code:            string;
 conditionaltype: Conditionaltype;
 datatype:        Datatype;
 inputfield:      string;
 param:           string;
 projects:        Channel[];
 promote:         boolean;
 value1:          FluffyValue1;
 value2:          null;
}

export interface FluffyValue1 {
 availableBetweenFrom?: number | null;
 availableBetweenTo?:   number | null;
 description?:          string;
 destination?:          string;
 destinations?:         string[];
 feeCode?:              string;
 insuranceFees?:        InsuranceFee[];
 insuranceProduct?:     InsuranceProduct;
 isPrimary?:            boolean;
 level?:                Level;
 limitPerPassenger?:    number;
 origins?:              string[];
 partner?:              Partner;
 pieces?:               number;
 plan?:                 Plan[];
 preRequisiteSsrs?:     string[];
 scope:                 Scope[];
 service?:              number;
 totalKg?:              number;
 travellersOption?:     string;
 tripCoverTypeCode?:    string;
 unavailableByMinutes?: number | null | string;
 version?:              number;
}

export interface InsuranceFee {
 chubbCode:            null;
 feeCode:              string;
 insuranceType:        InsuranceType;
 paxType:              PaxType[];
 preselected:          boolean;
 tripType:             TripType[];
 unavailableByMinutes: number;
}

export enum InsuranceType {
 Basic = "basic",
}

export enum PaxType {
 ADT = "ADT",
 CD = "CD",
 Chd = "CHD",
 Inf = "INF",
 Inft = "INFT",
}

export enum TripType {
 OneWay = "OneWay",
 RoundTrip = "RoundTrip",
}

export interface InsuranceProduct {
 coverTypeCode:  string;
 discountCode:   string;
 policyCategory: string;
 voucherCode:    string;
}

export interface Partner {
 agency:       Agency;
 agent:        Agent;
 channel:      Name;
 market:       string;
 productGroup: string;
 system:       System;
}

export interface Agency {
 code: string;
}

export interface Agent {
 code: string;
 name: string;
}

export interface System {
 code:     string;
 provider: string;
 version:  string;
}

export interface Plan {
 code:     string;
 tripType: TripType[];
}
