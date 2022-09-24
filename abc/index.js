import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from './redux/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
			<BrowserRouter>
				<SnackbarProvider preventDuplicate maxSnack={1} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} autoHideDuration={3000}>
					<App />
				</SnackbarProvider>
			</BrowserRouter>
		{/* </Provider> */}
	</React.StrictMode>
);
