# QBE Project — *Lac Operon* Website (Svelte) 

Single-page educational website explaining the *lac operon* and basic principles of prokaryotic gene regulation, built with Svelte. The site is designed to help students visualize how the *lac operon* turns gene expression on and off in response to lactose and glucose.

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

