"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = require("../controller/movieController");
const authenticate_1 = __importDefault(require("../authenticate/authenticate"));
const movieRoute = express_1.default.Router();
// Use middleware and controllers directly without unnecessary casting
movieRoute.get("/all-movies", movieController_1.getAllMovies);
movieRoute.post("/create-movie", authenticate_1.default, movieController_1.createMovie);
movieRoute.put("/update-movie/:id", authenticate_1.default, movieController_1.updateMovie);
movieRoute.delete("/delete-movie/:id", authenticate_1.default, movieController_1.deleteMovie);
// For Rating
movieRoute.post("/movie-rate", authenticate_1.default, movieController_1.addRating);
exports.default = movieRoute;
