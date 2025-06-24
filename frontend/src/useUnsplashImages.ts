// src/hooks/useUnsplashImages.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { UnsplashImage } from './types';

const fetchImages = async (): Promise<UnsplashImage[]> => {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID SpwqMgyuOEu5WiJI-HLF3PN_Vej-yGVjDRcCnpDRKT8',
    },
    params: {
      query: 'plant',
      per_page: 9,
      orientation: 'portrait',
    },
  });

  return res.data.results;
};

export const useUnsplashImages = () => {
  return useQuery({
    queryKey: ['unsplashImages'],
    queryFn: fetchImages,
  });
};
