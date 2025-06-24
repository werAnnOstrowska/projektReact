import axios from "axios";
import type { UnsplashImage } from "./types"

// export type UnsplashImage = {
//   id: string;
//   description: string | null;
//   alt_description: string | null;
//   urls: {
//     raw: string;
//     full: string;
//     regular: string;
//     small: string;
//     thumb: string;
//   };
// };

const imagesDownload = async (): Promise<UnsplashImage[]> => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID SpwqMgyuOEu5WiJI-HLF3PN_Vej-yGVjDRcCnpDRKT8",
    },
    params: {
      query: "plant",
      per_page: 9,             
      orientation: "portrait",
    },
  });
    console.log(response.data.results);
    return response.data.results;
};

export default imagesDownload;