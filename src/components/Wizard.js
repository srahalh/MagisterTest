import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import clsx from  'clsx'; //Permite multiples clases
import StepConnector from '@material-ui/core/StepConnector';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
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
    root: {
        width: '100%',
      },
      button: {
        marginRight: '8px',
      },
      instructions: {
        marginTop: '8px',
        marginBottom: '8px',
      },
      wizard: {
        fontSize: '22px',
      },
      padd:{
          height: '10%',
          
      },
  });
  
  /**
     * inicio de prueba
     *alternativeLabel:
     * top: 10,
       left: 'calc(-50% + 16px)',
       right: 'calc(-50% + 16px)',

       .MuiStepConnector-lineHorizontal //Esta clase es la barrita que se pone sobre el circulo, hay que buscar eliminarla
       /*El prop Alternative label puede ayudar pero hay que investigarlo mejor */
 
   const QontoConnector = withStyles({
     alternativeLabel: {
       left:10,
       left: 'calc(-50% + 16px)',
       right: 'calc(-50% + 16px)',
     },
     active: {
       '& $line': {
         borderColor: '#bfbfbf',
       },
     },
     completed: {
       '& $line': {
         borderColor: '#bfbfbf',
       },
     },
     line: {
       borderColor: '#bfbfbf',
       borderLeftWidth: 4,
       borderTopWidth: 0,
       borderRadius: 1,
       
     },
   })(StepConnector);
   
   const useQontoStepIconStyles = makeStyles({
     root: {
       display: 'flex',
       height: 22,
       alignItems: 'center',
     },
     circle: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        border: '2px solid #bfbfbf',
        backgroundColor: '#bfbfbf',
      },
     completed: {
       color: '#0a3868',
       border: '3px solid white',
       borderRadius: '50%',
       width: 22,
       height: 22,
       backgroundColor: '#0a3868',
     },
     active: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        border: '4px solid #bfbfbf',
       
     },
   });
   
   function QontoStepIcon(props) {
     const classes = useQontoStepIconStyles();
     const { active, completed } = props;
   
     return (
       <div
         
       >
         {active ? 
         <QontoConnector className={classes.completed} />
         : 
         <div className={classes.circle}  />}
       </div>
     );
   }
   
   QontoStepIcon.propTypes = {
     /**
      * Whether this step is active.
      */
     active: PropTypes.bool,
     /**
      * Mark the step as completed. Is passed to child components.
      */
     completed: PropTypes.bool,
   };
   
   

  /**
     * fin de prueba
     */
  
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
    if(pasoActivo === -1 || pasoActivo === 6 ) return <Inicio setPasoActivo={setPasoActivo} pasoActivo={pasoActivo} />;
    return ( 
        <Grid container className={classes.vista} direction="row" justifyContent="center">
 {/*Wizard*/}
            <Grid container item xs={4}  className={classes.fondo} >
                <Grid item xs={12} className={classes.centrado} >
                    <img src="https://dm2305files.storage.live.com/y4mjSJo0BUx7gq7nUdEHJtrCNAODHs65FggMJvEmisyp67DgfqhTW4hr-KBo008aa6lpukgjdY3BYZPcsUKsevp7gUoD5HniQueAr3NOgm21XYiIMyL0uYxkPQlRczmJn1FksiAc3PKKSYh3QhnFIaMsXx2xxify16h5fy6d3N4reu1EItZpHSoRYBZ70KYm2nI?width=1091&height=348&cropmode=none" width="240px" height="80px" alt="logo"></img>
                </Grid>
                <Grid item xs={12}>  
                    <Stepper className={classes.fondo} activeStep={pasoActivo}  orientation="vertical" connector={<QontoConnector />} >
                        <Step>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam, classes.wizard)}>
                                    ¿En qué te quieres especializar?
                                </Typography> 
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam, classes.wizard)}>
                                 Horario y Modalidad
                                </Typography> 
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam, classes.wizard)}>
                                    Tarifa
                                </Typography> 
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam, classes.wizard)}>
                                    Datos Personales
                                </Typography> 
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam, classes.wizard)}>
                                    Dirección
                                </Typography> 
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam, classes.wizard)}>
                                    Forma de Pago
                                </Typography> 
                            </StepLabel>
                        </Step>
                    </Stepper>
                </Grid>
            </Grid>
 {/*Form*/}
            <Grid container item xs={8}>
                <Grid item xs={12}>   
                    {obtenerContenido(pasoActivo)/*Esta funcion es la que trae el contendo por paso */}
                </Grid>
 {/*Botones, hay algo con la alineacion de los botones que no esta fucionando bien*/}
                <Grid container 
                xs={12}
                spacing={0}
                direction="row"   
                justifyContent="stretch"
                alignItems="flex-end"
                className={classes.padd} >
                    <Grid item className={classes.centrado} xs={12}>
                        <Button className={classes.btn} variant="text" onClick={() => siguientePaso()}>
                            <Typography variant="body1" className={clsx(classes.texBlanco, classes.fontFam)} >Siguiente</Typography> 
                        </Button>     
                    </Grid>
                    <Grid item className={classes.centrado} xs={12}>
                        <Button className={classes.btnPrevio} variant="text" onClick={() => anteriorPaso()}  >
                            <Typography variant="body1" className={classes.fontFam}>Volver atrás</Typography>  
                        </Button>
                    </Grid> 
                    </Grid>
             </Grid>
            </Grid>
    );
}
 
export default Wizard;