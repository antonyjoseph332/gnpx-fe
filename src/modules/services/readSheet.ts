// src/services/readSheet.ts
import axios from 'axios';
import { SheetId } from '../../types/sheet-id.enum';
import { IPortfolio } from '../../types/portfolio.model';
import { ITestimonial } from '../../types/testimonial.model';
import { IServices } from '../../types/services.model';
import { IBanner } from '../../types/banner.model';
import { IContact } from '../../types/contact.model';

const sheetApi = `https://opensheet.elk.sh/${import.meta.env.VITE_DATA_SHEET_ID}`;

export const getPortfolio = async (): Promise<IPortfolio[]> => {
  const SHEET_URL = `${sheetApi}/${SheetId.PORTFOLIO}`;
  const response = await axios.get<IPortfolio[]>(SHEET_URL);
  return response.data;
};

export const getTestimonial = async (): Promise<ITestimonial[]> => {
  const SHEET_URL = `${sheetApi}/${SheetId.TESTIMONIAL}`;
  const response = await axios.get<ITestimonial[]>(SHEET_URL);
  return response.data;
};

export const getServices = async (): Promise<IServices[]> => {
  const SHEET_URL = `${sheetApi}/${SheetId.SERVICES}`;
  const response = await axios.get<IServices[]>(SHEET_URL);
  return response.data;
};

export const getBanner = async (): Promise<IBanner> => {
  const SHEET_URL = `${sheetApi}/${SheetId.BANNER}`;
  const response = await axios.get<IBanner[]>(SHEET_URL);
  return response.data[0];
};

export const getContact = async (): Promise<IContact> => {
  const SHEET_URL = `${sheetApi}/${SheetId.CONTACT}`;
  const response = await axios.get<IContact[]>(SHEET_URL);
  return response.data[0];
};