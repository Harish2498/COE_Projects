import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


export default function BasicCard({ project }) {

  const [expanded, setExpanded] = React.useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ minWidth: 500, maxWidth: 400, margin: 1, boxShadow: "none" }}>
      <CardContent sx={{ padding: 0 }} >
        <Typography variant="body" component="div" sx={{ background: "#000080", color: "white", height: 40, display: "flex", alignItems: "center", justifyContent: "center" }} >
          {project.Name}
        </Typography>


      </CardContent>
      <CardActions disableSpacing>
        <Button href={project.Link} target="_blank" size='small' sx={{ textTransform: "none" }} >
          Click here to launch
        </Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: 0 }} >
          <Typography variant="body2" sx={{ textAlign: "initial", background: "#e4e4f7", padding: 1 }}>
            {project.Description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}