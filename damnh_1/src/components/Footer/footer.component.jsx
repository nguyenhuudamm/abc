import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export default function Footer(props) {
	const { description, title } = props

	return (
		<div>
			<div style={{ paddingTop: '200px' }}></div>
			<Box component="footer" sx={{
				bgcolor: 'background.paper',
				py: 4,
				position: 'relative',
			}} style={{ boxShadow: '0 0 1px 0 #808080', marginTop: '1px' }} >
				<Container maxWidth="lg">
					<Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					</Grid>
					<Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					</Grid>
					<Grid >
						<Typography variant="h6" align="center" gutterBottom>
							{title}
						</Typography>
						<Typography
							variant="subtitle1"
							align="center"
							color="text.secondary"
							component="p"
						>
							{description}
						</Typography>
						<Copyright />
					</Grid>
				</Container>
			</Box>
		</div>

	)
}