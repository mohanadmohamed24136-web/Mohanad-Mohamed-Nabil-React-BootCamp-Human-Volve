# NEXORA

**A clean React product app built from scratch with TypeScript, Tailwind CSS, and a real REST API.**

NEXORA is a product browsing application I built during the React BootCamp to put React concepts into practice in a real project instead of keeping everything as isolated exercises.

The main focus was on building something structured, reusable, and easy to work with — from the project architecture and API layer to search, pagination, routing, and product details.

---

## What NEXORA Does

NEXORA lets users:

* Browse products fetched from a real API
* Search for products
* Move between product pages using pagination
* Open a dedicated product details page
* Handle loading and error states
* Get a clear empty state when no products are found
* Use the application comfortably across different screen sizes

---

## Built With

| Technology               | Why I Used It                                    |
| ------------------------ | ------------------------------------------------ |
| **React**                | Building the application and reusable components |
| **TypeScript**           | Better type safety and clearer code              |
| **Vite**                 | Fast development and build tooling               |
| **Tailwind CSS**         | Building the UI without writing large CSS files  |
| **TanStack React Query** | Managing API requests and server state           |
| **React Router**         | Handling application routes                      |
| **Lucide React**         | Lightweight interface icons                      |
| **DummyJSON**            | Product data and REST API                        |

---

## Project Structure

I kept the project separated by responsibility so that the code doesn't turn into one large collection of components.

```text
src/
│
├── api/
│   └── API requests and data fetching
│
├── assets/
│   └── Static assets
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── providers/
│   ├── skeleton/
│   └── ui/
│
├── constants/
│   └── Shared application constants
│
├── hooks/
│   └── Reusable React hooks
│
├── i18n/
│   └── Internationalization setup
│
├── pages/
│   └── Application pages
│
├── schemas/
│   └── Validation schemas
│
├── store/
│   └── Application state
│
├── types/
│   └── TypeScript types
│
└── utils/
    └── Helper functions
```

---

## Product API

NEXORA uses the [DummyJSON API](https://dummyjson.com/) for product data.

### Get Products

```http
GET https://dummyjson.com/products
```

### Search Products

```http
GET https://dummyjson.com/products/search?q={query}
```

### Get Product

```http
GET https://dummyjson.com/products/{id}
```

### Pagination

The product endpoint supports:

```text
limit
skip
```

NEXORA uses these parameters to load products page by page instead of requesting the complete dataset every time.

---

## Search

One thing I wanted to avoid was fetching all products and filtering them only on the client.

Instead, the search input uses the API's own search endpoint:

```text
/products/search?q={query}
```

There is also a small debounce hook so the application doesn't fire a request for every single keystroke.

That keeps the search flow simple and closer to how a real API-driven application would work.

---

## Data Fetching

API data is handled with **TanStack React Query**.

This keeps server data separate from normal UI state and gives the application:

* Request caching
* Loading states
* Error handling
* Query management
* Refetching support

The project doesn't rely on a `useEffect` + `useState` combination as the main way of fetching and storing API responses.

---

## Reusable Components

The project includes reusable components instead of rebuilding the same UI in every page.

Some of the main reusable pieces include:

* `Button`
* `Card`
* `Table`
* `Navbar`
* `Footer`
* Loading / Skeleton components

For example, the same Card component can be used with different content through props and children.

---

## Routing

React Router is used to handle navigation between the application pages.

The application includes routes for:

```text
/
├── Home
├── Products
├── Products/:id
└── About
```

The dynamic product route allows each product to have its own details page.

---

## UI & Responsive Design

I kept the interface intentionally simple instead of adding unnecessary visual effects.

The design uses:

* Clean layouts
* Consistent spacing
* Simple cards
* Clear typography
* Responsive Tailwind classes
* Loading and empty states
* Mobile-friendly layouts

The goal was to make the application feel like a real small product rather than a collection of separate bootcamp tasks.

---

## Error & Loading States

API-driven applications need to handle more than just the successful case.

NEXORA includes states for:

**Loading**

The UI shows loading feedback while product data is being requested.

**Error**

If the API request fails, the user gets a clear error state instead of a broken page.

**Empty**

If a search returns no products, the application displays an empty state instead of leaving the page blank.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/mohanadmohamed24136-web/Mohanad-Mohamed-Nabil-React-BootCamp-Human-Volve.git
```

Move into the project:

```bash
cd react-tasks
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Build Check

The project builds successfully with:

```bash
npm run build
```

The production build completed without build errors.

---

## What I Practiced

This project gave me the chance to work with several React concepts together instead of learning them separately:

* Component-based architecture
* Props and reusable components
* TypeScript types
* React Router
* Dynamic routes
* Custom hooks
* Debounced search
* REST API integration
* TanStack React Query
* Pagination
* Loading and error handling
* Responsive UI
* Project organization

---

## The Idea Behind NEXORA

The goal wasn't to build the biggest application.

It was to take the React concepts I was learning and connect them together into one project that actually behaves like a small real-world application.

Every part of NEXORA — from the API layer to the product details page — was built around that idea.

---

## Author

**Mohanad Mohamed**

Frontend Developer | AI Enthusiast

GitHub:
https://github.com/mohanadmohamed24136-web

---

## React BootCamp

Built as part of the **React BootCamp — Human Volve**.

**NEXORA** — Learn it. Build it. Improve it.
