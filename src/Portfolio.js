import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';

const galleryData = [
  {
    src: require('./assets/beta_small.png'),
    title: 'Beta Distribution',
  },
  {
    src: require('./assets/eigenvalue_rotation.gif'),
    title: 'Rotating the matrice distribution',
  },
  {
    src: require('./assets/littlewood_fractal_small.png'),
    title: 'Littlewood Fractal',
  },
  {
    src: require('./assets/mandelbrot+julia.gif'),
    title: 'Mandelbrot and Julia Fractal',
  },
  {
    src: require('./assets/triangle_chaos_game_small.png'),
    title: 'Mandelbrot and Julia Fractal',
  },
  {
    src: require('./assets/random_scene.png'),
    title: 'A path traced scene',
  },
  {
    src: require('./assets/sphere_cube.gif'),
    title: 'Sphere inside a rotating cube',
  },
  {
    src: require('./assets/pathtrace_forest.png'),
    title: 'A path traced scene',
  },
  {
    src: require('./assets/newton_fractal.png'),
    title: 'A path traced scene',
  },
  {
    src: require('./assets/tridiagonal_small.png'),
    title: 'Tridiagonal distribution',
  },
  {
    src: require('./assets/slimy.gif'),
    title: 'Simulated slime mold',
  },
  {
    src: require('./assets/random_walkers.gif'),
    title: 'Random walks on the GPU',
  },
  {
    src: require('./assets/julia_tile.gif'),
    title: 'Random walks on the GPU',
  },
  {
    src: require('./assets/julia_rotate.gif'),
    title: 'Rotating Julia set.',
  },
  {
    src: require('./assets/dark_scene.png'),
    title: 'A path traced dark scene',
  },
  {
    src: require('./assets/mandelbrot_small.png'),
    title: 'Mandelbrot set',
  },
  {
    src: require('./assets/DLA_colors.gif'),
    title: 'Rotating the matrice distribution',
  },
  {
    src: require('./assets/littlewood_zoom.png'),
    title: 'Zoomed in region of littlewood fractal',
  },
];

const Portfolio = (() => {
  const matches = useMediaQuery('(min-width:800px)');

  return (
    <>
      <Toolbar />
      <ImageList cols={matches ? 5 : 1} gap={8} variant='masonry'>
      {galleryData.map((item) => (
        <ImageListItem key={item.src}>
          <img
            src={`${item.src}?w=248&h=164&fit=crop&auto=format`}
            srcSet={`${item.src}?w=248&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
});

export default Portfolio;