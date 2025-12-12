# QBE Project — Lac Operon Website (Svelte) 

Single-page educational website explaining the lac operon and basic principles of prokaryotic gene regulation, built with Svelte. The site is designed to help students visualize how the lac operon turns gene expression on and off in response to lactose and glucose.

## Quick start

```bash
# from project root
npm install
npm run dev
```

Open http://localhost:5173

### Additional scripts

```bash
npm run build   # production bundle
npm run preview # serve dist locally after build
```

## Updating Content

### Events

To add, edit, or remove events, update `src/data/events.json`:

```json
{
  "Event Name": {
    "date": "2025-11-28",
    "start_time": "16:00",
    "end_time": "17:00",
    "location": "East Building 250",
    "description": "Event description here."
  }
}
```

- Place `"TBD"` fir `"date"` and `"location:` when applicable, they can also be excluded.
- Times use 24-hour format (e.g., "16:00" for 4pm)
- Events automatically sort by date on the Events page
- Optional `oreconnect_url` adds a button to link the orceconnet page for that event

### Projects showcase

Edit `src/data/projects.json` to update the Projects page. Example entry:

```json
[
  {
    "title": "Neural Network from Scratch",
    "description": "What the team built...",
    "members": ["Name One", "Name Two"],
    "technologies": ["Python", "NumPy"],
    "github_url": "https://github.com/example/repo"
  }
]
```

- `members`, `technologies`, and `github_url` are optional; cards fall back to placeholders when omitted

### Contact/Team Members

To update team members, edit `src/data/people.json`:

```json
{
  "leadership": [
    {
      "name": "Person Name",
      "role": "President",
      "email": "email@mines.edu"
    },

    ...
  ],
  "advisors": [
    {
      "name": "Dr. Name",
      "role": "Faculty Advisor",
      "url": "https://profile-url.com",
      "image": "/src/assets/photo.jpg"
    },

    ...
  ],
  "officers": [
    {
      "name": "Person Name",
      "role": "Officer Title"
    },

    ...
  ]
}
```

- `email`: Optional contact email
- `url`: Optional external profile link
- `image`: Optional profile photo that shold be placed in `src/assets` (if omitted, initials will be shown)

## Theming

- Theme definitions live in `src/config/themes.js`
- Each theme maps to CSS custom properties; use the `ThemeSwitcher` component (top-right of nav) to preview
- Default theme is `auricCore`, inspired by the club gold + cyan palette

## Technical Notes

- Single-page Svelte app using hash-based routing (`src/stores/router.js`), so it can host on any static server without custom rewrites
- Contact form is a placeholder—connect it to Netlify Functions, Formspree, etc., if needed
- Assets (images) live in `src/assets`;

