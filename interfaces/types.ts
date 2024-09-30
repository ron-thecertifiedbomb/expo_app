
// types.ts
export type Fonts = {
  heading: {
    h1: { fontSize: number; fontFamily: string; lineHeight: number; letterSpacing: number }; // Change letterSpacing to number
    h2: { fontSize: number; fontFamily: string; lineHeight: number; letterSpacing: number };
    h3: { fontSize: number; fontFamily: string; lineHeight: number; letterSpacing: number };
    h4: { fontSize: number; fontFamily: string; lineHeight: number; letterSpacing: number };
    // Add more styles as needed
  };
};


export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  fonts: Fonts; 
};