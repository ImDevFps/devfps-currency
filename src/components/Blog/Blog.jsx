import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  BlogContainer,
  TypographyTitle,
  TypographyBody,
  BlogLink,
} from "./Blog.styles";

const Blog = ({ blog }) => {
  const { imageurl, title, body, url } = blog;
  return (
    <BlogContainer>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component='img'
          height='250'
          image={imageurl}
          alt='green iguana'
        />
        <CardContent sx={{ height: 150 }}>
          <TypographyTitle gutterBottom variant='h5' component='div'>
            {title}
          </TypographyTitle>
          <TypographyBody variant='body2' color='text.secondary'>
            {body}
          </TypographyBody>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <BlogLink href={url}>Learn More</BlogLink>
          </Button>
        </CardActions>
      </Card>
    </BlogContainer>
  );
};

export default Blog;
