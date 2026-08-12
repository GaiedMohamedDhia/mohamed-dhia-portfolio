# Mohamed Dhia Gaied — Portfolio

Modern portfolio built with Next.js-compatible vinext, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Create `.env.local` from `.env.example`. Add `NEXT_PUBLIC_GITHUB_USERNAME` and `NEXT_PUBLIC_GITHUB_URL` to enable GitHub links and automatic public repositories. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to activate secure contact-form delivery.

## Update content

- Projects: `data/projects.ts`
- Certifications: `data/certifications.ts`
- Profile, experience, education, and skills: `data/profile.ts`
- CV: add `public/cv/Mohamed-Dhia-Gaied-CV.pdf`
- Portrait/logo: replace the temporary screenshot-derived reference with the original supplied assets when available.

GitHub repositories are fetched server-side, cached for one hour, and hidden gracefully if GitHub is unavailable. Archived repositories, forks, and excluded configuration repositories are not shown.

## Build and deploy

```powershell
npm.cmd run build
npm.cmd run start
```

Deployment metadata is configured in `.openai/hosting.json` for Sites.
