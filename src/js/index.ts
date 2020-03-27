import axios, {
    AxiosResponse, AxiosError
}from "../../node_modules/axios/index";

interface IRecord{
Title:string;
Artist:string;
YearReleased:number;
}