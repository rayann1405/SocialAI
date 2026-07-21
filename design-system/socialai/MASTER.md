# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** SocialAI  
**Updated:** 2026-07-21  
**Category:** SaaS · Content creators · Social media scheduling  
**Identity:** Slate & Coral

---

## Color Palette

| Role | Hex | Token |
|------|-----|-------|
| Primary (Coral) | `#E85D0C` | `--primary` |
| On Primary | `#FFFFFF` | `--primary-foreground` |
| Accent (Ink) | `#0F172A` | `--accent` |
| Background | `#F8FAFC` | `--background` |
| Foreground | `#0F172A` | `--foreground` |
| Muted | `#F1F5F9` | `--muted` |
| Border | `#E2E8F0` | `--border` |

Dark mode uses brighter coral `#F97316` on deep ink `#0B1220`.

**Avoid:** purple→pink AI gradients, cream+terracotta serif editorial cliché.

## Typography

- **Heading:** Plus Jakarta Sans (600–800)
- **Body:** Inter (400–600)

## Motion

1. Hero kenburns (18s, image scale) — landing only  
2. Logo mark subtle pulse (3.2s)  
3. Scroll reveal + stagger (`Reveal`) — 550ms ease-out, delay 70–90ms  

Respect `prefers-reduced-motion`.

## Imagery

| Asset | Path | Use |
|-------|------|-----|
| Hero | `/brand/hero-creator.jpg` | Full-bleed landing hero |
| Calendar | `/brand/feature-calendar.jpg` | Feature band |
| Auth | `/brand/auth-atmosphere.jpg` | Auth brand panel |
| Logo concept | `/brand/logo-concept.png` | Reference (SVG mark is source of truth) |

## Logo

SVG mark: ink rounded square + coral node + three broadcast arcs. Wordmark: Social**AI** (AI in primary).

## Layout rules

- Landing hero: full-bleed image, brand + one headline + one sentence + CTA group  
- No cards in hero  
- Cards only for interactive/content containers below the fold  
- One primary CTA per screen section  
