
export interface AgentInfo {
  firstname:     string;
  lastname:      string;
  company:       string;
  splashMessage: string;
  customHeader:  string;
}

export interface Records{
  listID:                 number;
  order:                  number;
  propertyID:             number;
  name:                   string;
  streetAddress:          string;
  city:                   City;
  state:                  State;
  pets:                   boolean;
  washerDry:              WasherDry;
  photo:                  string;
  favorite:               boolean;
  highestSentCommissions: number;
  onsiteManager:          null;
  management:             null;
  proximity:              number;
  section8:               boolean;
  seniorHousing:          boolean;
  studentHousting:        boolean;
  floorplans:             Floorplan[];
  highValueAmenities:     HighValueAmenity[];
  paidUtilities:          string[];
  geocode:                Geocode;
}

export enum City {
  Benbrook = "Benbrook",
  FortWorth = "Fort Worth",
}

export interface Floorplan {
  bedrooms: number;
  type:     Type;
  price:    number;
}

export enum Type {
  EFF = "Eff",
  The1Bed = "1 Bed",
  The2Bed = "2 Bed",
  The3Bed = "3 Bed",
}

export interface Geocode {
  Longitude: number;
  Latitude:  number;
  Percision: Percision;
  IsValid:   boolean;
}

export interface  MarkCode {
  Longitude: number;
  Latitude:  number;
  propertyID: number;
  name:      string;
  favorite: boolean;
}

export enum Percision {
  GeometricCenter = "GEOMETRIC_CENTER",
  RangeInterpolated = "RANGE_INTERPOLATED",
  Rooftop = "ROOFTOP",
}

export enum HighValueAmenity {
  BlackStainlessAppliances = "Black/Stainless Appliances",
  DogWalkPark = "Dog/Walk Park",
  FitnessCenter = "Fitness Center",
  GraniteCountertops = "Granite Countertops",
  JoggingTrail = "Jogging Trail",
  StainedConcereteFloors = "Stained Concerete Floors",
  Tennis = "Tennis",
  ValletTrash = "ValletTrash",
  WoodFloors = "Wood Floors",
}

export enum State {
  Tx = "TX",
}

export enum WasherDry {
  Empty = "",
  FullsizeConnections = "FULLSIZE_CONNECTIONS",
  FullsizeFurnished = "FULLSIZE_FURNISHED",
  StackableFurnished = "STACKABLE_FURNISHED",
}
