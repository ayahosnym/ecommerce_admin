import * as React from 'react';

import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function AdminProfile() {
	return (
		<Container maxWidth="xl">
			<Grid container>
				<Grid item xs={6}>
					<Box sx={{ bgcolor: '#f2f4ff', height: '100vh', }}>
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="end"
							justifyContent="center"
							marginLeft="13rem"
							position="relative"
							zIndex="10"
							style={{ minHeight: '100vh' }}>
							<Paper elevation={3} sx={{ width: 380, height: 450, display: 'flex', flexDirection: "column", alignItems: 'center' }} >
								<img src='/images/user1.jpg' alt=""
									style={{ height: '7rem', width: '7rem', borderRadius: "50%", marginTop: "3rem", objectFit: "cover" }}
								/>
								<Box>
									<Typography variant="body1" component="h2">
										User Name
									</Typography>
								</Box>
							</Paper>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box sx={{ bgcolor: '#40576f', height: '100vh', }} >
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}