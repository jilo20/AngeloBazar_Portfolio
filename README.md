# Angelo Bazar | Portfolio

My personal portfolio website. It shows who I am, the projects I've built, and the awards I've won.

The content is not hard-coded. It is stored in a Django database and served by my own API. The React site reads from that API.

**Live site:** https://angelo-bazar-portfolio.vercel.app
**API:** https://jilodata.onrender.com/mydata/achievements/

> The backend runs on a free plan, so the first load can take up to a minute while it wakes up.

## What's on the site

- **Home:** my name, photo, and a short bio.
- **Projects:** each project is a dropdown with a description and screenshots.
- **Awards:** same dropdown style, with the certificate shown when I have one.
- **Footer:** LinkedIn, phone number, and a CV download.
- Dark and light colors are set up as CSS variables.

## Technologies

**Frontend:** React 19, Vite, Tailwind CSS 4
**Backend:** Django 6, Django REST Framework, SQLite
**Extras:** django-cors-headers, WhiteNoise, Gunicorn, Pillow

## API

| Endpoint | What it returns |
|---|---|
| `/mydata/profile/` | My name, bio, phone, skills |
| `/mydata/achievements/` | All projects and awards, with their images |
| `/mydata/achievements/?atype=PROJECT` | Projects only |
| `/mydata/achievements/?atype=AWARD` | Awards only |

## Setup

You need Python 3 and Node.js.

### 1. Backend

```
cd backend
python -m venv venv
venv\Scripts\activate          (Mac/Linux: source venv/bin/activate)
pip install -r requirements.txt
copy .env.example .env         (Mac/Linux: cp .env.example .env)
```

Open `.env` and set `SECRET_KEY` to any long random text. Then:

```
python manage.py migrate
python manage.py loaddata portfolio
python manage.py runserver
```

The API runs at http://localhost:8000/mydata/. To edit content, run `python manage.py createsuperuser` and open http://localhost:8000/admin/.

### 2. Frontend

In a second terminal:

```
cd frontend
npm install
copy .env.example .env         (Mac/Linux: cp .env.example .env)
npm run dev
```

Open http://localhost:5173.

## Project structure

```
backend/     Django project (config/ and mydata/ app)
frontend/    React app (src/components, src/hooks)
```

## Deployment

- Backend: Render
- Frontend: Vercel

## Author

Angelo R. Bazar, BS Computer Science student at the University of San Jose-Recoletos, Cebu.
[LinkedIn](https://www.linkedin.com/in/angelo-bazar-0a6748432)
