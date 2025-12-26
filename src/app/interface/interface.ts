export interface person
{
    name:string;
    phoneno:number;
    email:string;
    address:string;
    gender:Gender
}
export enum Gender{
    Female='female',
    Male='male',
    Other='other'

}