import React, { useEffect } from "react";
import { useColorScheme } from 'react-native';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {

    let colorScheme = useColorScheme();
 
    const [theme, setTheme] = React.useState(colorScheme);

    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
            save()
        } else {
            setTheme('light')
            save()
        }
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}