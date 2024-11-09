export const useTheme = () => {
    const theme = localStorage.getItem("theme") || "light";

    const setTheme = (theme: string) => {
        const isDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        if (theme === "system") {
            theme = isDarkMode ? "dark" : "light";
        }
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    };

    return { theme, setTheme };
};
