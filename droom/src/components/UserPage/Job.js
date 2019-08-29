import React from 'react';
import {connect} from 'react-redux'
import {deleteData} from '../../Actions'
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
      width: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      fontSize: "1.4rem"
    },
  });

const Job = (props) => {
    const classes = useStyles();

    const deleteJob = () => {
        props.deleteData(props.job.id);
    }
    return ( 
        <div>
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.job.company}
          </Typography>
          <Typography className={classes.pos} >
            {props.job.position}
          </Typography>
          <Typography variant="body2" component="p">
            Recruiter: <br />
            {props.job.title}
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={deleteJob}>Delete</Button>
        </CardActions>
      </Card>
      </div>
     );
}
//    
export default connect(null, {deleteData})(Job);