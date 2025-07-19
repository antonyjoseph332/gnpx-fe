import { IBanner } from "./banner.model";
import { IContact } from "./contact.model";
import { IPortfolio } from "./portfolio.model";
import { IServices } from "./services.model";
import { ITestimonial } from "./testimonial.model";

export interface ISheetData {
  portfolio: IPortfolio[];
  testimonial: ITestimonial[];
  services: IServices[];
  banner: IBanner | null;
  contact: IContact | null;
}