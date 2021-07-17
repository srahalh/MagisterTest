import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from  'clsx'; //Permite multiples clases
import {Grid} from '@material-ui/core';


//Styles con MakeStyles

    const useStyles = makeStyles({
        fondo: {
        background: '#0a3868',
        padding: '4rem',
        height: '100vh',
        },
        centrado:{
            margin: '0 auto',
            textAlign: 'center',
        },
        btn:{
            background: '#0bc6fe',
            padding: '6px 2.5rem',
            boxShadow: '0px 3px .4em #303030',
            marginBottom: '1rem',
            borderRadius: '10px',
        },
        btnPrevio:{
            background: 'transparent',
            color: '#0bc6fe',
            padding: '6px 2.5rem',
            borderRadius: '10px',
        },
        texBlanco:{
            color: 'white',
        },
        bold:{
            fontWeight: 'bold',
        },
        mbut:{
            marginBottom: '8rem',
        },
        mtop:{
            marginBottom: '8rem',
        },
        fontFam:{
            fontFamily: 'Open Sans',
        },
        descripcion:{
            fontSize: '30px',
            margin: '0px 6rem',
            marginTop: '2rem'
        },
    });

const Inicio = ({setPasoActivo}) => {


    //Funcion para hacer uso del MakeStyled
    const classes = useStyles();

    //Actualizan el estado en el Wizard
    const siguientePaso = () =>{
        setPasoActivo((pasoActual) => pasoActual + 1) 
    }
    const anteriorPaso = () =>{
        setPasoActivo((pasoActual) => pasoActual - 1) 
    }

    return (  
        <Grid 
            container direction="row"   
            justifyContent="center"
            alignItems="center"
            className={clsx(classes.fondo, classes.fontFam)}
            >
                <Grid container spacing={4} >
                    <Grid item xs={12} className={classes.centrado}>
                        <img src="https://dm2305files.storage.live.com/y4mjSJo0BUx7gq7nUdEHJtrCNAODHs65FggMJvEmisyp67DgfqhTW4hr-KBo008aa6lpukgjdY3BYZPcsUKsevp7gUoD5HniQueAr3NOgm21XYiIMyL0uYxkPQlRczmJn1FksiAc3PKKSYh3QhnFIaMsXx2xxify16h5fy6d3N4reu1EItZpHSoRYBZ70KYm2nI?width=1091&height=348&cropmode=none" width="240px" height="80px"/>
                    </Grid>

                    <Grid container spacing={4} className={clsx(classes.centrado, classes.mbut, classes.mtop)} justifyContent="center" >
                        <Grid item xs={12}>
                             <Typography variant="h2" className={clsx(classes.texBlanco, classes.bold, classes.fontFam)} >¡Comencemos con tu matrícula!</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h5" className={clsx(classes.texBlanco, classes.fontFam, classes.descripcion)} >Para comenzar a especializarte, vamos a realizar unas preguntas para dar un mejor servicio.</Typography>
                        </Grid>
                    </Grid>
                        
                    <Grid container xs={12} spacing={2} >
                        <Grid item className={classes.centrado} xs={12}>
                            <Button className={classes.btn} variant="text" >
                            <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam)} onClick={() => siguientePaso(1)}>Comenzar</Typography> 
                            </Button>
                        </Grid>
                        <Grid item className={classes.centrado} xs={12}>
                            <Button className={classes.btnPrevio} variant="text" >
                            <Typography variant="body1" className={classes.fontFam} onClick={() => anteriorPaso(-1)} >Volver atrás</Typography>  
                            </Button>
                        </Grid> 
                    </Grid>
                    
                </Grid>  

        </Grid>  
    );
}
 
export default Inicio;