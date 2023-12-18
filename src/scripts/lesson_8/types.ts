// import { TSeason } from './types';
// export type TSeason = {
//   closeProjects: number;
//   income: number;
//   hired: number;
//   dismissed: number;
//   newProjects: number;
// };

// export type TSeasons = {
//   winter: TSeason;
//   spring: TSeason;
//   summer: TSeason;
//   autumn: TSeason;
// }

export type TParams = {
  width: number, 
  height: number, 
  weight: number 
}
export type TDetail = {
  title: string,
  params: TParams
}

export type TPart = {
  name: string,
  details: TDetail[],
  mainEngineer: string,
  deadline: string,
}

export type TDepartment = {
  tech: TPart[]
  turbo: TPart[]
  chemical: TPart[]
}