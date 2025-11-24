# Gyandeep Portfolio

Personal portfolio website built with React and Vite. It showcases projects, skills, and includes a contact form to reach out.

## Features

- Responsive portfolio layout with project gallery
- Animated UI elements using `framer-motion`
- Contact form (client-side via `@emailjs/browser` and an optional server endpoint in `api/send-email.js`)
- Built with Tailwind CSS for utility-first styling

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS (`@emailjs/browser`) and an optional Node server endpoint (`api/send-email.js`)

## Quick Start

Prerequisites: Node.js (v16 or newer) and npm installed.

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

Available npm scripts (from `package.json`): `dev`, `build`, `preview`, and `lint`.

## Contact / Email setup

- The front-end uses `@emailjs/browser` to send emails directly from the client. Check `src/components/Contact/Contact.jsx` for implementation details.
- There is an optional server endpoint at `api/send-email.js` if you prefer sending emails from a server. Configure any required environment variables (SMTP credentials, API keys) before deploying the server endpoint.

## Contributing

If you'd like to contribute or update content (projects, skills, or contact settings), feel free to open a PR or update the files in `src/components` and `src/assets`.

## Author

Gyandeep — repository: `Gyandeep1030/gyandeep_portfolio`

---

If you want, I can add a screenshot, a live demo link, or personalize the README with your bio and social links. Tell me what you'd like included.
