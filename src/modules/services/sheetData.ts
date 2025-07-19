import { useState, useEffect } from 'react';
import { getPortfolio, getTestimonial, getServices, getBanner } from './readSheet';
import { ISheetData } from '../../types/sheetData.model';

export const useSheetData = () => {
  const [data, setData] = useState<ISheetData>({
    portfolio: [],
    testimonial: [],
    services: [],
    banner: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [portfolio, testimonial, services, banner] = await Promise.all([
          getPortfolio(),
          getTestimonial(),
          getServices(),
          getBanner(),
        ]);
        setData({ portfolio, testimonial, services, banner });
      } catch (error) {
        // handle error as needed
        setData({ portfolio: [], testimonial: [], services: [], banner: null });
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return { data, loading };
};
