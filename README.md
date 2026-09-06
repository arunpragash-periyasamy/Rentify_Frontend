# Rentify Frontend

A React single-page app for **Rentify**, a rental marketplace that connects house owners (who list
properties) with tenants (who browse them).

## Status: Early prototype

This is an early-stage frontend build, not production-ready:

- Login and Signup pages are placeholder stubs (`Login.jsx` renders the text `hello`, `Signup.jsx`
  renders `Sign u page`) — no real authentication flow exists yet.
- No route protection — every page (including the "Add House" form) is reachable without signing
  in, since there's no auth state or guard.
- No automated tests and no CI configuration.
- The backend API base URL is hardcoded to `http://localhost:3000/api` (see `src/HouseOwners/utility/constants.js`
  and inline URLs in a few components) — there's no `.env`-based configuration for different
  environments.
- The "View House" table (`HouseDetails.jsx`) still renders static mock data, not real listings.

## Overview

Rentify Frontend is the client for a two-sided rental listing product: house owners can register a
property through a multi-tab form (address, room details, amenities, terms, images) and manage
their listings from a dashboard; tenants can browse listed properties as cards. The app is built as
a single Parcel-bundled React SPA with client-side routing, Redux Toolkit for shared state, and Ant
Design for the UI layer.

## Tech stack

- **React 18** + **React Router v6** (`createBrowserRouter`) for the SPA and routing
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`) for app state
- **Ant Design** (`antd`, `@ant-design/icons`) as the primary component library, plus **Bootstrap**
  CSS for a handful of layout classes
- **Axios** for HTTP calls to the backend API
- **Parcel** as the bundler/dev server (`npm start` / `npm run build`, no Webpack/Vite/CRA config)

No backend, database, or test framework lives in this repository — see
[Relationship to the backend](#relationship-to-the-backend) below.

## Features implemented

- Dashboard shell with a collapsible sidebar, header, and footer (Ant Design `Layout`)
- "Add House" multi-tab form: property address, room details, amenities (with dynamically
  add/removable fields), terms & conditions, and image upload (`AddHouse.jsx` + `FormTabs.jsx` and
  its tab components), submitted via `axios.post` as `multipart/form-data`
- Tenant-facing property listing (`CardList.jsx`) that fetches houses from the backend
  (`GET /house/houses`) and renders them as cards with a title, price, description, and image
  carousel

## Not yet implemented / known-incomplete

- User authentication (login/signup are placeholder pages)
- Real data in the house listing table (`/table` route shows hardcoded sample rows)
- Any usage of the Redux `theme` slice — it's defined (`ThemeSlice.jsx`) but never dispatched or
  read anywhere in the app

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the component diagram, routing map, and a
folder-by-folder breakdown.

## Folder structure

```
src/
├── App.jsx                  # Root component, renders the router Outlet
├── index.js                 # React entry point, wraps the app in Redux + AntD ConfigProvider
├── Routes/
│   └── Router.jsx           # createBrowserRouter route table
├── HouseOwners/              # Owner-facing pages, layout, and shared utilities
│   ├── Pages/                # Login, SignUp, Dashboard
│   ├── Components/           # Header, Sidebar, Content, Footer, AddHouse (multi-tab form), HouseDetails
│   └── utility/               # axios instance, API constants, Redux store, helper functions
└── Tenants/
    └── Components/Cards/     # Property listing cards fetched from the backend
```

## Getting started

```bash
npm install
npm start        # runs `parcel index.html`, serves the app with hot reload
npm run build     # runs `parcel build index.html`, produces a production bundle
```

The app expects a backend running at `http://localhost:3000/api` (see
[Relationship to the backend](#relationship-to-the-backend)). There is no `.env` file — to point at
a different backend you currently have to edit `src/HouseOwners/utility/constants.js` and the
hardcoded URLs in `AddHouse.jsx`, `Card1.jsx`, and `Cards.jsx` directly.

## Relationship to the backend

This frontend is a separate repository from `Rentify_backend`. It talks to that backend over plain
HTTP, hardcoded to `http://localhost:3000/api`, using these endpoints:

- `POST /api/house` — submit a new property listing (multipart form with images)
- `GET /api/house/houses` — fetch the list of properties for the tenant view
- `GET /api/house/image/:filename` — serve a listing's uploaded image (referenced directly by URL,
  e.g. in `Card1.jsx`/`Cards.jsx`)

No auth token or header is attached to any of these requests (`axiosInstance` in
`src/HouseOwners/utility/axiosInstance.jsx` sets only a `baseURL` and `timeout`), consistent with
the frontend having no authentication implemented yet.
