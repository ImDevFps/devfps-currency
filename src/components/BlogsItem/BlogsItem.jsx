import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import { TypographyBody } from "./../Blog/Blog.styles";
import { CardHeaderContainer } from "./BlogsItem.styles";

const BlogsItem = ({ blog, loading }) => {
  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardHeaderContainer
        avatar={
          loading ? (
            <Skeleton
              animation='wave'
              variant='circular'
              width={40}
              height={40}
            />
          ) : (
            <Avatar alt='Ted talk' src={blog.imageurl} />
          )
        }
        title={
          loading ? (
            <Skeleton
              animation='wave'
              height={10}
              width='80%'
              style={{ marginBottom: 6 }}
            />
          ) : (
            blog.source_info.name
          )
        }
      />
      {loading ? (
        <Skeleton
          sx={{ height: 190, width: 345 }}
          animation='wave'
          variant='rectangular'
        />
      ) : (
        <a href={blog.url}>
          <CardMedia
            component='img'
            height={200}
            image={blog.imageurl}
            alt='Nicola Sturgeon on a TED talk stage'
          />
        </a>
      )}

      <CardContent sx={{ height: 100 }}>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation='wave'
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation='wave' height={10} width='80%' />
          </React.Fragment>
        ) : (
          <TypographyBody variant='body2' color='text.secondary' component='p'>
            {blog.body}
          </TypographyBody>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogsItem;
