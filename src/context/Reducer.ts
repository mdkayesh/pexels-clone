import { Video, Photo } from "pexels";

type actionType =
  | {
      type: `CHANGE_THEME`;
      payload: boolean;
    }
  | { type: "SET_HERO_IMG_VDO"; payload: Photo[] | Video[] | [] };

export type stateType = {
  isDark: boolean;
  heroImgVideos: Photo[] | Video[] | [];
};

const counterReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      if (action.payload) {
        document.documentElement.className = "light";
      } else {
        document.documentElement.className = "dark";
      }
      return { ...state, isDark: !state.isDark };
    }

    case "SET_HERO_IMG_VDO":
      return { ...state, heroImgVideos: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
