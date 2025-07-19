import { useState, useEffect } from 'react';
import { getPortfolio, getTestimonial, getServices, getBanner, getContact } from './readSheet';
import { ISheetData } from '../../types/sheetData.model';

export const useSheetData = () => {
  const [data, setData] = useState<ISheetData>({
    portfolio: [],
    testimonial: [],
    services: [],
    banner: null,
    contact: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [portfolio, testimonial, services, banner, contact] = await Promise.all([
          getPortfolio(),
          getTestimonial(),
          getServices(),
          getBanner(),
          getContact(),
        ]);
        setData({ portfolio, testimonial, services, banner, contact });
      } catch (error) {
        // handle error as needed
        setData({ portfolio: [], testimonial: [], services: [], banner: null, contact: null });
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return { data, loading };
};
