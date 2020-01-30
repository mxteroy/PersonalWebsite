import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { MdCode } from 'react-icons/md';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

class Item extends React.Component{
    render(){
        return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar style={{marginTop: 0}}>
                <MdCode/>
                </ListItemAvatar>
                <ListItemText
                primary={this.props.description}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={this.props.classes.inline}
                        color="textPrimary"
                    >
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
        );
    }
};

export default function Descriptions(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {
            props.descriptions.map((DESCRIPTION, index) => {
                return (
                    <Item key={index} classes={classes} description={DESCRIPTION}/>
                    )
                }
            )
        }
    </List>
  )
}
