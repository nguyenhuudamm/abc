import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
			<BrowserRouter>
				<SnackbarProvider preventDuplicate maxSnack={1} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} autoHideDuration={3000}>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</SnackbarProvider>
			</BrowserRouter>
	</React.StrictMode>
);
