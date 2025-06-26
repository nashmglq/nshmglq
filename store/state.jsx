import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
const server = process.env.NEXT_PUBLIC_SERVER
export const chatState = create(
  devtools((set) => ({
    loading: false,
    success: false,
    error: null,
    message: [],
    chat: async (userMessage) => {
      try {
        console.log(userMessage)
        set({ loading: true, success: false, error: false, message: [] });
       const response = await axios.post(server, userMessage);
  

        if (response.data && response.data.success) {

          set({
            loading: false,
            success: true,
            error: false,
            message: response.data.success,
          });
        }
      } catch (err) {
        set({
          loading: false,
          success: false,
          error: true,
          message:
            err.response && err.response.data.error
              ? err.response.data.error
              : "Something went wrong",
        });
      }
    },
  }))
);
