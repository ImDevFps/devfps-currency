import React, { useState, useEffect } from "react";
import Menu from "./../../components/menu/Menu";
import {
  CarouselItemContainer,
  HomePageContainer,
  BlogsContainer,
  SliderImage,
  FooterContainer,
} from "./HomePage.styles";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../assets/b.jpg";
import Banner2 from "../../assets/c.jpeg";
import Blog from "./../../components/Blog/Blog";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
      )
        .then((res) => res.json())
        .then((result) => setData(result));
    };
    fetchData();

    const interval = setInterval(() => fetchData(), 1000 * 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then((res) => res.json())
        .then((result) => setBlogs(result));
    };
    fetchBlog();

    return () => fetchBlog();
  }, [setBlogs]);
  return (
    <HomePageContainer>
      <Carousel>
        <CarouselItemContainer>
          <SliderImage src={Banner1} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItemContainer>
        <CarouselItemContainer>
          <SliderImage src={Banner2} alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </CarouselItemContainer>
      </Carousel>
      {data && <Menu data={data} />}
      <BlogsContainer>
        {blogs &&
          blogs.Data.filter((item, idx) => idx < 6).map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
      </BlogsContainer>
      <FooterContainer>&copy;DevFps 2022</FooterContainer>
    </HomePageContainer>
  );
};

export default HomePage;
