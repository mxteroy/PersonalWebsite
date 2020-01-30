import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Descriptions from './Descriptions.js';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

const Section =props=> {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleChange = panel => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

        const  { id, title, image, summary, link, descriptions } = props.content;

        return (
            <ExpansionPanel defaultExpanded={true} expanded={expanded === ('panel' + id)} onChange={handleChange('panel' + id)}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <img src={image} style={{ width: 30, height: 30, marginRight: 20}} alt={title}/>

                <Typography className={classes.heading} >{title}</Typography>
                
                <Typography style={{display: (expanded || window.screen.width < 769 ? "none" : "block")}} id="expansion-description-mobile" className={classes.secondaryHeading}>{summary}</Typography>

            </ExpansionPanelSummary>
                <Typography style={{display: (!expanded ? "none" : "block")}} id="expansion-description-mobile" className={classes.secondaryHeading}>{summary}</Typography>

            {/* <a href={link}>{link}</a> */}
            <ExpansionPanelDetails>

                <Typography>
                
                </Typography>

                <Descriptions descriptions={descriptions} parentid={props.id}/>
                
            </ExpansionPanelDetails>
            </ExpansionPanel>
        )
}

class Sections extends Component {
    render () {
        return (
            <div>
                <h2>
                    {this.props.section}
                </h2>
                <div>
                    {
                        this.props.contents.map((CONTENT) => {
                            return (
                                <Section key={CONTENT.id} content={CONTENT}></Section>
                            )
                        })
                    } 
                </div>
            </div> 
        )
    }
}

export default Sections;