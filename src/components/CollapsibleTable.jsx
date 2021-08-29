import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styled from 'styled-components'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(name, combat, intelligence, speed, durability, power, image, gender, race) {
    return {
        name,
        combat,
        intelligence,
        speed,
        durability,
        power,
        image,
        gender,
        race
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.combat}</TableCell>
                <TableCell align="right">{row.intelligence}</TableCell>
                <TableCell align="right">{row.speed}</TableCell>
                <TableCell align="right">{row.durability}</TableCell>
                <TableCell align="right">{row.power}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>Race</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <HeroImage src={row.image} />
                                        </TableCell>
                                        <TableCell >
                                            {row.gender}
                                        </TableCell>
                                        <TableCell>
                                            {row.race}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        powerstats: PropTypes.number.isRequired,
        appearnce: PropTypes.number.isRequired,
        biography: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        work: PropTypes.number.isRequired,
    }).isRequired,
};


export default function CollapsibleTable({ data }) {
    console.log("serachedHero", data);
    const rows = data.map(datum => {
        return createData(datum.name, datum.powerstats.combat, datum.powerstats.intelligence, datum.powerstats.speed, datum.powerstats.durability, datum.powerstats.power, datum.image.url, datum.appearance.gender, datum.appearance.race);
    });

    console.log("ROWS", rows);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>name</TableCell>
                        <TableCell align="right">combat</TableCell>
                        <TableCell align="right">inteligence</TableCell>
                        <TableCell align="right">durability</TableCell>
                        <TableCell align="right">speed</TableCell>
                        <TableCell align="right">power</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const HeroImage = styled.img`
    
`