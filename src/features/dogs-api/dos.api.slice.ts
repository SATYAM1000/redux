import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

interface Breed {
 id: string;
 name: string;
 image: {
   url: string;
 };
}



