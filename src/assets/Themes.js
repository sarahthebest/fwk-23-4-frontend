import { useEffect, useState } from "react";

export const themes = {
    light: {
        "--primary": "#904fff",
        "--secondary": "#fce4ff",
        "--bg": "#403D39",
        "--accent": "#FF922E",
        "--border": "rgba(73, 73, 73, 0.495)",
        "--text": "#121212",
        gradient: "linear-gradient(to top right, #904fff, #fce4ff, #FF922E)",
    },
    dark: {
        "--primary": "#252422",
        "--secondary": "#FFFCF2",
        "--bg": "#FF922E",
        "--accent": "#403D39",
        "--border": "rgba(255, 255, 255, 0.495)",
        "--text": "#121212",
        gradient: "linear-gradient(to top right, #252422, #403D39,  #FFFCF2)",
    },
    fairy: {
        "--primary": "#e5eec5",
        "--secondary": "#a2d870",
        "--bg": "#295128",
        "--accent": "#db8b97",
        "--border": "rgba(255, 255, 255, 0.495)",
        "--text": "#121212",
        gradient: "linear-gradient(to top right, #295128, #e5eec5, #db8b97)",
    },
};

export const useTheme = () => {
    const [selectedTheme, setSelectedTheme] = useState("light");

    const applyTheme = (themeName) => {
        const theme = themes[themeName];
        if (theme) {
            Object.keys(theme).forEach((key) => {
                document.documentElement.style.setProperty(key, theme[key]);
            });
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setSelectedTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const changeTheme = (themeName) => {
        setSelectedTheme(themeName);
        localStorage.setItem("theme", themeName);
        applyTheme(themeName);
    };

    return { selectedTheme, changeTheme };
};
