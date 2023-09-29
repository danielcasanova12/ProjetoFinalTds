import {Routes , Route, Navigate} from 'react-router-dom'
import {Button} from '@mui/material';
import { useAppThemeContext } from '../shared/context';



export const AppRoutes = () => {

    const {toggleTheme} = useAppThemeContext();
    return (
        <Routes>
            {/* Route for the initial page */}
            <Route 
                path='/pagina-inicial' 
                element={<Button variant='contained' color='primary' onClick={toggleTheme}>Button</Button>}
            />
            {/* Redirects to the initial page for all other paths */}
            <Route 
                path='*' 
                element={<Navigate to='/pagina-inicial'></Navigate>}
            />
        </Routes>
    );
}