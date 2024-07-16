// http://localhost:3001/api/movies

import prisma from './../../../lib/prismadb'
import { NextResponse } from 'next/server'

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
      const movies = await prisma.movie.findUnique(
            {
                where: {
                    id
                }
            }
      );
      if(!movies) {
        return NextResponse.json({ error: "Movie not found" }, { status: 404 });
        }
      return NextResponse.json(movies);
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };

  export const PATCH = async (request, {params}) => {

    try {
        const { id } = params;
        const body = await request.json()
        const { title, actors,year } = body

        const updateMovie = await prisma.movie.update({
            where: {
                id
            },
            data: {
              title,
              actors,
              year,
            },
          });
          if(!updateMovie) {
            return NextResponse.json({ error: "Movie not found" }, { status: 404 });
            }
          return NextResponse.json(updateMovie);
        } catch (error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
      };


      export const DELETE = async (request, {params}) => {
        try {
            const { id } = params;
          const movies = await prisma.movie.delete(
                {
                    where: {
                        id
                    }
                }
          );
          return NextResponse.json("Movie Deleted");
        } catch (error) {
          return NextResponse.json({ message: "Delete Error", error }, { status: 500 });
        }
      };
    