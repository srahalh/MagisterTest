import React, {useEffect, useState} from 'react';
import { formatMs, FormControl, FormHelperText, FormLabel, Grid } from '@material-ui/core';
import clsx from  'clsx'; //Permite multiples clases
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';


import { db } from '../firebase'; // conexion con firestore


//Styles con MakeStyles
const useStyles = makeStyles((theme) => ({
    fondo: {
      background: '#0a3868',
      padding: '4rem',
    },
    centrado:{
        margin: '0 auto',
        textAlign: 'center',
    },
    vista:{
        height: '100vh',
    },
    btn:{
            padding: '1rem 3rem',
            marginBottom: '1rem',
            borderRadius: '10px',
    },
    btnMaterial:{
        background: '#a9d4ea',
        color: '#0a3868',
        boxShadow: 'none',
    },
    texBlanco:{
        color: 'white',
    },
    bold:{
        fontWeight: 'bold',
    },
    mbut:{
        marginBottom: '4rem',
    },
    mtop:{
        marginTop: '.5rem',
    },
    pbut:{
        paddingBottom: '1rem',
    },
    fontFam:{
        fontFamily: 'Open Sans',
    },
    descripcion:{
        fontSize: '30px',
        margin: '0px 6rem',
        marginTop: '2rem'
    },
    padd:{
        padding: '7rem 7rem 3rem 7rem',
      },
    textColorPrimario: {
       color: '#577294',
    },
    textColorSecundario:{
        color: '#0bc6fe',
    },
    select:{
        border: '1px solid #577294',
        borderRadius: '10px',
        backgroundColor: 'white',
        width: '100%',
    },
    FormControl:{
        margin: '1rem 0rem',
        minWidth: '100%',

    },
    enlace:{
        textDecoration: 'none',
    },
    p20:{
        padding: '20px',
    },
  }));



const PrimerForm = () => {

    const [ramas, setRamas] = useState([]);
    const [provincias, setProvincias] = useState([]);

    /*Obteniendo data de FireBase Ramas */
    useEffect(() => {
        getRamas()
      }, [])
    
      const getRamas = async () => {
        let obj;
        let lista = []
        const querySnapshot = await db.collection('ramas').get();
        querySnapshot.forEach((doc) => {
          obj = doc.data() 
          obj.id = doc.id 
          lista.push(obj)
        });
        setRamas(lista)
      }
    /*Obteniendo data de FireBase Provincias */
      useEffect(() => {
        getProvincias()
      }, [])
    
      const getProvincias = async () => {
        let obj;
        let ciudad = []
        const querySnapshot = await db.collection('provincias').get();
        querySnapshot.forEach((doc) => {
          obj = doc.data() 
          obj.id = doc.id 
          ciudad.push(obj)
        });
        setProvincias(ciudad)
      }
    /*Nota se puede crear un hook con esto*/
    

    const classes = useStyles()
    return ( 
        <Grid 
        container 
        spacing={0}
        direction="row"   
        justifyContent="center"
        alignItems="center"
        className={classes.padd}
        >
            <Grid item xs={12}>
                <Typography variant="h4" className={clsx(classes.textColorPrimario, classes.fontFam, classes.centrado, classes.bold, classes.mbut)}>
                    ¿En qué te quieres especializar?
                </Typography>
            </Grid>
            <Grid 
                container 
                spacing={5}
                direction="row" 
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <Grid item xs={6}>
                        <Typography variant="h5" className={clsx(classes.textColorPrimario, classes.fontFam, classes.bold)}>
                                    Rama
                        </Typography>
                        <Typography variant="h6" className={clsx(classes.textColorPrimario, classes.fontFam, classes.pbut)}>
                                    Selecciona una opción
                        </Typography>
                        <FormControl className={classes.FormControl}>
                            <InputLabel variant="outlined">Ej: Maestros - Audición y Alumnos</InputLabel>
                            <Select id="" variant="outlined" className={classes.select}>
                                {ramas.map((ramas) => (<option key={ramas.id} value={ramas.maestros}>{ramas.maestros}</option>))}
                            </Select>
                        </FormControl>            
                </Grid>
                <Grid item xs={6}>
                        <Typography variant="h5" className={clsx(classes.textColorPrimario, classes.fontFam, classes.bold)}>
                                    Provincia
                        </Typography>
                        <Typography variant="h6" className={clsx(classes.textColorPrimario, classes.fontFam, classes.pbut)}>
                                    Selecciona una opción
                        </Typography>
                        <FormControl className={classes.FormControl}>
                            <InputLabel variant="outlined">Ej: Madrid</InputLabel>
                            <Select id="rama" variant="outlined" className={classes.select}>
                                {provincias.map((provincias) => (<option key={provincias.id} value={provincias.ciudad}>{provincias.ciudad}</option>))}
                            </Select>
                        </FormControl>           
                </Grid>
                <Grid 
                container 
                spacing={5}
                direction="row" 
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                className={classes.mtop}
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" className={clsx(classes.textColorPrimario, classes.fontFam, classes.bold)}>
                            ¿Has sido alumno de Magister?
                        </Typography>
                        <a href="#" className={classes.enlace}><Typography variant="h5" className={clsx(classes.textColorSecundario, classes.fontFam)}>
                            Consulta Condiciones <ArrowForwardIcon />
                        </Typography></a>
                    </Grid>
                    <Grid container justifyContent="flex-start" direction="row" alignItems="center" className={classes.p20}>
                        <Grid item xs={2}>
                            <Button variant="outlined" className={classes.btn}>No</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" className={classes.btn}>Si</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" className={classes.btn}>Si, despues de 2017</Button>
                        </Grid>
                    </Grid>
                        
                </Grid>
                <Grid 
                container 
                spacing={5}
                direction="row" 
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                className={classes.mtop}
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" className={clsx(classes.textColorPrimario, classes.fontFam, classes.bold)}>
                            Entrega de material
                        </Typography>
                        <a href="#" className={classes.enlace}><Typography variant="h5" className={clsx(classes.textColorSecundario, classes.fontFam)}>
                            Consulta Condiciones <ArrowForwardIcon />
                        </Typography></a>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={clsx(classes.btnMaterial, classes.btn)}>Material mes a mes</Button>
                    </Grid>
                    
                    
                </Grid>



                       
         </Grid>
                

        </Grid>
        
        
     );
}
 
export default PrimerForm;