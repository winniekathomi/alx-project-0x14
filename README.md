# CineSeek - Movie Discovery App

## API Overview

The CineSeek app uses the MoviesDatabase API from RapidAPI to retrieve movie data such as titles, posters, genres, and release years. The API supports filtering movies by year, genre, and pagination for navigating through results. It returns structured movie data suitable for display and further processing.

## API Version

- Version: v1 (as available on RapidAPI)

## Available Endpoints

### `/titles`

- Returns a list of movie titles
- Supports filtering by `year`, `genre`
- Supports pagination using `page` and `limit` parameters
- Sorted results available using `sort` query

## Request and Response Format

### Request (example)
