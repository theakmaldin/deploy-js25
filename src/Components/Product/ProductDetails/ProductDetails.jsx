import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Scrollbar, Thumbs } from "swiper";
import { Autoplay } from "swiper";
import { basketContext } from "../../../context/BasketProductProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);
  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                scrollbar={{
                  hide: true,
                  width: "70%",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img
                    style={{ width: "80%" }}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "80%" }}
                    src={productDetails.img2}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "80%" }}
                    src={productDetails.img3}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
              </Swiper>
            </Grid>

            <Grid item xs={6}>
              <Typography
                style={{ paddingBottom: "15px", paddingLeft: "10px" }}
                variant="h6">
                {productDetails.title}{" "}
              </Typography>
              <Typography className="priceEuro" variant="h5">
                {productDetails.price}
              </Typography>

              <Box style={{ width: "88%" }}>
                <Grid className="gridButtonContainer">
                  <Grid className="gridButton">
                    <button className="button"></button>
                    <button className="button"></button>
                    <button className="button"></button>
                    <button className="button"></button>
                    <button className="button"></button>
                    <button className="button"></button>
                    <button className="button"></button>
                  </Grid>
                </Grid>

                <Grid className="gridLinkContainer">
                  <Grid className="gridLink">
                    <a className="linkSize" href="#">
                      XS
                    </a>
                    <a className="linkSize" href="#">
                      S
                    </a>
                    <a className="linkSize" href="#">
                      M
                    </a>
                    <a className="linkSize" href="#">
                      L
                    </a>
                    <a className="linkSize" href="#">
                      XL
                    </a>
                  </Grid>
                </Grid>
              </Box>

              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "3%",
                  paddingTop: "2%",
                }}>
                <img
                  width="5%"
                  src="https://thumb.tildacdn.com/tild3165-3861-4435-b866-393638646664/-/format/webp/Screenshot_2021-02-1.png"
                  alt=""
                />
                <a href="#">
                  <p>Size Table</p>
                </a>
              </Grid>

              <Grid>
                <Button
                  variant="contained"
                  style={{
                    textTransform: "capitalize",
                    borderRadius: "0",
                    width: "32%",
                    height: "43px",
                    background: "rgba(60, 55, 55, 0.8)",
                    opacity: " 0.5",
                  }}
                  sx={{ marginLeft: "20px", marginTop: "32px" }}
                  onClick={() => addProductToBasket(productDetails)}>
                  <Grid
                    style={{
                      fontFamily: "Roboto,Arial,sans-serif",
                      fontSize: "20px",
                    }}>
                    Add to cart
                  </Grid>
                </Button>
              </Grid>
              <Typography sx={{ marginTop: "10px" }} style={{}}>
                <p className="infoLink">Product Info</p>
                {productDetails.description}
              </Typography>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "48%" }}
                  onClick={() => deleteProduct(productDetails.id)}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "48%" }}
                  onClick={() => navigate(`/edit/${productDetails.id}`)}>
                  Edit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
