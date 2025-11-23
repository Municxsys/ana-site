
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      neutral:{sand:"#F2EFE9",taupe:"#B8B2A7",gray:"#9E9A91",charcoal:"#6B6863"},
      green:{vitality:"#1C3A19",harmony:"#00553B",serenity:"#D2DDBC",calm:"#D3E3B5",dark:"#031F01"},
      terra:{base:"#C17E42",light:"#D9A66B",deep:"#875223"},
      ink:"#333333"
    },
    boxShadow:{
      soft:"0 10px 30px rgba(0,0,0,0.08)",
      card:"0 12px 40px rgba(0,0,0,0.10)",
      glowGold:"0 0 0 1px rgba(193,126,66,0.25), 0 8px 30px rgba(193,126,66,0.25)",
      glowGreen:"0 0 0 1px rgba(0,85,59,0.15), 0 8px 30px rgba(0,85,59,0.15)"
    },
    borderRadius:{xl:"1.2rem","2xl":"1.8rem","3xl":"2.2rem"},
    fontFamily:{serif:["'Playfair Display'","serif"],sans:["Inter","system-ui","Arial","sans-serif"]}
  }},
  plugins: [],
};
export default config;
