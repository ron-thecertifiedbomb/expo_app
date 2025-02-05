export interface RootObject {
  basicInformation: BasicInformation;
  currentWorkDetails: CurrentWorkDetails;
  previousEmployer: PreviousEmployer;
}

export interface BasicInformation {
  companyEmailAddress: string;
  officialBusinessNo: string;
}

export interface CurrentWorkDetails {
  building: Building;
  companyCode: string;
  companyName: string;
  costCenter: string;
  costCenterTitle: string;
  department: string;
  departmentCode: string;
  employeeGroup: string;
  employeeStatus: string;
  employeeSubgroup: string;
  hiringDate: string;
  immediateSuperior: string;
  managerCode: string;
  motherDepartment: string;
  motherDepartmentCode: string;
  pagibigHDMF: string;
  payrollAccountNo: string;
  personnelAreaCode: string;
  personnelAreaTitle: string;
  philHealth: string;
  positionCode: string;
  positionLevel: string;
  positionTitle: string;
  regularizationDate: string;
  sapEmpNum: string;
  separationDate: string;
  sss: string;
  stationBase: string;
  stationManagerPosition: string;
  stationManagerPositionDescription: string;
  tin: string;
  workContract: string;
  workLocation: string;
  workLocationCode: string;
  workLocationTitle: string;
}

export interface Building {
  code: string;
  floorNo: string;
  name: string;
}

export interface PreviousEmployer {
  dateEnded: string;
  dateStarted: string;
  employerCompanyName: string;
  position: string;
}
