import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, colors, Grid } from '@material-ui/core';
import Inicio from './Inicio';
import PrimerForm from './PrimerForm';
import SegundoForm from './SegundoForm';


//Styles con MakeStyles
const useStyles = makeStyles({
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
        background: '#0bc6fe',
        padding: '4px 3rem',
        boxShadow: '0px 3px .4em #303030',
    },
  });

  
  function obtenerContenido(paso) {
    switch (paso) {
      case 0:
        return <PrimerForm/>;
      case 1:
        return <SegundoForm/>;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }


const Wizard = () => {
    
    //Estado de lo Pasos del Wizard
    const [pasoActivo, setPasoActivo] = useState(-1); // En el valor - 1 ventana inicial, en el 6 en la final. Capaz haga falta un 7 para todo el resumen
    //Funciones para cambiar el Estado
    const siguientePaso = () =>{
        if(pasoActivo < 6)
        setPasoActivo((pasoActual) => pasoActual + 1) 
    }
    const anteriorPaso = () =>{
        if(pasoActivo !== -1)
        setPasoActivo((pasoActual) => pasoActual - 1) 
    }
    //Funcion para hacer uso del MakeStyled
    const classes = useStyles()
    if(pasoActivo === -1 || pasoActivo === 6 ) return <Inicio setPasoActivo={setPasoActivo} />;
    return ( 
        <Grid container className={classes.vista} direction="row" justifyContent="center">
 {/*Wizard*/}
            <Grid container item xs={4}  className={classes.fondo} >
                <Grid item xs={12} className={classes.centrado} >
                    <img src="https://web.magister.com/wp-content/uploads/2017/07/logo-web-azul-iso-1.png" alt="logo"></img>
                </Grid>
                <Grid item xs={12}>  
                    <Stepper className={classes.fondo} activeStep={pasoActivo} orientation="vertical">
                        <Step>
                            <StepLabel>¿En qué te quieres especializar?</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Horario y Modalidad</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Tarifa</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Datos Personales</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Dirección</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Forma de Pago</StepLabel>
                        </Step>
                    </Stepper>
                </Grid>
            </Grid>
 {/*Form*/}
            <Grid container item xs={8}>
                <Grid item xs={12}>   
                    {obtenerContenido(pasoActivo)/*Esta funcion es la que trae el contendo por paso */}
                </Grid>
 {/*Botones*/}
                <Grid className={classes.centrado} item xs={6}>
                    <Button className={classes.btn} variant="text" onClick={() => anteriorPaso()}>
                        Atras
                    </Button>
                </Grid>
                <Grid className={classes.centrado} item xs={6}>
                    <Button className={classes.btn} variant="text" onClick={() => siguientePaso()}>
                        Siguiente
                    </Button>
                </Grid>
            </Grid>  

        </Grid> 
    );
}
 
export default Wizard;