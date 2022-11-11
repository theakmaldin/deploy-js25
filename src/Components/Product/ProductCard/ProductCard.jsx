import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ obj }) => {
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 347, marginLeft: "20%" }}>
      <Link to={`/details/${obj.id}`}>
        <CardMedia
          className="cardMedia"
          component="img"
          height="auto"
          image={obj.img1}
          alt={obj.title}
        />
      </Link>
      <CardHeader
        sx={{ paddingBottom: "0", paddingLeft: "0", paddingRight: "0" }}
        className="cardHeader"
        title={obj.title}
        subheader={obj.price}></CardHeader>

      {/* <CardContent>
        <Typography variant="body2" color="text.secondary" className="cardText">
          {obj.description}
        </Typography>
      </CardContent> */}

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
