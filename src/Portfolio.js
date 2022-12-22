import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';
import { useMediaQuery, Tooltip, Typography } from '@mui/material';

const galleryData = [
  {
    src: require('./assets/beta_small.png'),
    title: 'Beta Distribution',
    description: 'Density plot of eigenvalues of a random sample of matrices whose entries lie in the beta distribution.',
    link: 'https://github.com/seansiddens/BohemianMatrices',
  },
  {
    src: require('./assets/eigenvalue_rotation.gif'),
    title: 'Rotating the matrice distribution',
    description: 'Density plot of eigenvalues of matrices whose samples are changing over time.',
    link: 'https://github.com/seansiddens/BohemianMatrices',
  },
  {
    src: require('./assets/littlewood_fractal_small.png'),
    title: 'Littlewood Fractal',
    description: 'Density plot of eigenvaules of the companion matrices of degree 23 Littlewood polynomials.',
    link: 'https://github.com/seansiddens/BohemianMatrices',
  },
  {
    src: require('./assets/mandelbrot+julia.gif'),
    title: 'Mandelbrot and Julia Fractal',
    description: 'Exploring the relationship between Mandelbrot and Julia sets.',
    link: 'https://www.shadertoy.com/view/3tyyz3',
  },
  {
    src: require('./assets/triangle_chaos_game_small.png'),
    title: 'IFS attractor',
    description: 'Attractor of a linear iterated function system. Created by following the chaos game.',
    link: 'https://gist.github.com/seansiddens/3b8d41e5d013acbff96489f170eb81db',
  },
  {
    src: require('./assets/random_scene.png'),
    title: 'A path traced scene',
    description: 'A rendering from my CPU path tracer. Code adapted from Peter Shirley\'s Ray Tracing Weekend book series.',
    link: 'https://github.com/seansiddens/Pathtracer',
  },
  {
    src: require('./assets/sphere_cube.gif'),
    title: 'Sphere inside a rotating cube',
    description: 'Sphere inside a rotating cube. Rendered from scratch using 3D points and a perspective transformation matrix',
  },
  {
    src: require('./assets/pathtrace_forest.png'),
    title: 'A path traced scene',
    description: 'A rendering from my CPU path tracer. Scene is illuminated by the HDRI sky-box.',
    link: 'https://github.com/seansiddens/Pathtracer',
  },
  {
    src: require('./assets/newton_fractal.png'),
    title: 'Newton Fractal',
    description: 'Newton fractal created by applying Newton\'s method to a complex-valued function.',
    link: 'https://github.com/seansiddens/NewtonFractals',
  },
  {
    src: require('./assets/tridiagonal_small.png'),
    title: 'Tridiagonal distribution',
    description: 'Density plot of eignevalues of tridiagonal matrices.',
    link: 'https://github.com/seansiddens/BohemianMatrices',
  },
  {
    src: require('./assets/slimy.gif'),
    title: 'Simulated slime mold',
    description: 'Slime mold simulation',
    link: 'https://github.com/seansiddens/PhysarumSim',
  },
  {
    src: require('./assets/random_walkers.gif'),
    title: 'Random walks on the GPU',
    description: 'OpenGL compute shader updating the positions of random walkers every frame.',
  },
  {
    src: require('./assets/julia_tile.gif'),
    title: 'Tiled Julia sets forming the Mandelbrot set',
    description: 'Tiling Julia sets along the complex plane reveals the Mandelbrot set.',
    link: 'https://www.shadertoy.com/view/3tyyz3',
  },
  {
    src: require('./assets/julia_rotate.gif'),
    title: 'Rotating Julia set.',
    description: 'Julia sets for values rotated along the unit circle on the complex plane.',
    link: 'https://www.shadertoy.com/view/3tyyz3'
  },
  {
    src: require('./assets/dark_scene.png'),
    title: 'A path traced dark scene',
    description: 'A rendering from my CPU path tracer. Scene is illuminated by an emmisive sphere',
    link: 'https://github.com/seansiddens/Pathtracer',
  },
  {
    src: require('./assets/mandelbrot_small.png'),
    title: 'Mandelbrot set',
    description: 'Rendering of the Mandelbrot set using the escape time iteration coloring algorithm',
    link: 'https://github.com/seansiddens/Mandelbrot',
  },
  {
    src: require('./assets/DLA_colors.gif'),
    title: 'Diffusion-Limited Aggregation',
    description: 'Real-time diffusion-limited aggregation simulation using OpenGL compute shaders.',
    link: 'https://github.com/seansiddens/DLA',
  },
  {
    src: require('./assets/littlewood_zoom.png'),
    title: 'Zoomed in region of littlewood fractal',
    description: 'A zoom in on a point in the Littlewood fractal.',
    link: 'https://github.com/seansiddens/BohemianMatrices',
  },
];

const Gallery = (() => {
  const matches = useMediaQuery('(min-width:800px)');

  return (
    <>
      <Toolbar />
      <ImageList cols={matches ? 5 : 1} gap={8} variant='masonry'>
        {galleryData.map((item) => (
          <Tooltip
            key={item.src}
            title={
              <React.Fragment>
                <Typography variant='h5'>
                  {item.description}
                </Typography>
              </React.Fragment>
            }
          >
            <Link href={item.link ? item.link : item.src}>
              <ImageListItem>
                <img
                  src={`${item.src}?w=248&h=164&fit=crop&auto=format`}
                  srcSet={`${item.src}?w=248&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                {/* <ImageListItemBar
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              /> */}
              </ImageListItem>
            </Link>
          </Tooltip>
        ))}
      </ImageList>
    </>
  );
});

export default Gallery;