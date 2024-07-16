// http://localhost:3000/api/movies

import prisma from './../../lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { title, actors, year } = body;

    // Validate the input data
    if (!title || !actors || !year) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newMovie = await prisma.movie.create({
      data: {
        title,
        actors,
        year: parseInt(year), // Ensure year is an integer
      },
    });

    return NextResponse.json(newMovie);
  } catch (error) {
    console.error('Error creating movie:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const movies = await prisma.movie.findMany();
    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json({ message: 'Get Error' }, { status: 500 });
  }
};
