import { Container, Grid } from '@mui/material';
import List from './List';

export default function ShowBoardLists() {
    return (
        <Grid container>
            {Array.from(Array(6)).map((_, index) => (
                <Grid rowSpacing={6} xs={4} sm={4} md={6} lg={3} key={index}>
                    <List />
                </Grid>
            ))}
        </Grid>
    )
}