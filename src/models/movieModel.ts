import { Schema, model, Document } from "mongoose";

import { Movie } from "../types/movie";

// Omitimos el id porque Mongo nos genera el id o _id
interface MovieDocument extends Omit<Movie, 'id'>, Document {}

const movieSchema = new Schema<MovieDocument>(
    {
        // trim elimina los espacios en blanco
        title: { type: String, required: true, trim: true },
        gender: { type: String, required: true, trim: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
    },
    {
        timestamps: true,
        // formato recibido
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id.toString();
                delete ret.id;
                delete ret._v;
                return ret;
            }
        }
    }
);

export const MovieModel = model<MovieDocument>('Movie', movieSchema);