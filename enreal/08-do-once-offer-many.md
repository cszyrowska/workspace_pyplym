---
title: "Do once, offer many times"
owner: Tomasz
status: current
---

# Do once, offer many times

**Draft 0.1 · 16 October 2026 · internal (Tomasz, Kamila, Cecy).** The core idea behind how SoftOcean frees time: **every piece of work is prepared once, reused many times, and improved each time it is used.** Without reuse, Tomasz becomes a contractor for every customer, which is exactly what the business exists to escape.

---

## 1. The principle

> **Prepare once. Reuse many times. Improve each time.**

- **Prepare once:** build things as reusable from the start: templates, settings, automation, not one-off copies.
- **Reuse many times:** the same platform, content, report or deck serves several customers, events and audiences.
- **Improve each time:** every reuse teaches something; the next version is better, and every user of it benefits.

**The contractor test:** if a piece of work cannot be reused, it is contracting. Either price it as consulting (about £1,200/day) or do not take it.

## 2. Why it frees time: the arithmetic

| Approach | Preparation | Delivery | Total hours | Hours per delivered hour |
| --- | ---: | ---: | ---: | ---: |
| Prepare 10 h for each 1-hour workshop, three times | 30 | 3 | 33 | **11.0** |
| Prepare once (20 h), run three 2-hour workshops | 20 | 6 | 26 | **4.3** |
| Prepare once (20 h), run it six times | 20 | 12 | 32 | **2.7** |

The more often a prepared piece is reused, the cheaper each use becomes, and each run improves it.

## 3. The reuse map

| Prepared once | Reused for | Improves with |
| --- | --- | --- |
| **ProDanX** (one code base) | EnReal (PyPlym, AI-Bench, AI Workbench); Sobey Fitness; future clubs, studios and communities | Every fix or feature built for one app reaches all of them |
| **A Brand's look** (colours, logo, labels, screens set by data, not code) | A new customer is a new set of settings, not a new app | Cecy's templates get faster each time |
| **Event content** (each Human × Machine topic) | The online EnReal **issue** (notes, live session, challenge) and the PyPlym evening in the same month → an AI Workbench week at technical depth → an AI-Bench technique in business language → a blog post, a podcast, a talk elsewhere | Feedback from each audience |
| **The impact report** (one core, several views) | The Council, employers, the college, the website, partners, funding applications, marketing | Better measures each cycle |
| **Decks and visuals** (one master deck plus audience slides) | Digital Plymouth, Real Ideas, sponsors, Monument, the Council, companies | Each conversation shows what lands |
| **Automation** (sign-up, reminders, attendance, reporting, deployments) | Every event, every cohort, every customer's app | Tasks done by hand three times, then automated |
| **Methods** ("one workflow better"; builder and explorer pairing; evaluation habits) | AI-Bench, AI Workbench, PyPlym, consulting engagements | Evidence from every cycle |
| **The Sobey setup** (a fitness and martial-arts template) | Other gyms, studios and clubs | Sobey's real use |
| **Consulting deliverables** (where the client agrees) | Reusable methods and components for the next client | Each engagement |

## 4. The engine: one code base, many apps

ProDanX is built for this:

- **One code base** serves every customer. Each customer's app differs by **settings only** (look, labels, which screens appear), a design decision already made and tested: two different-looking apps already run from the same code.
- **Separate installations** keep each customer's data apart.
- **Automation already exists** for setting up and deploying installations (an installation manifest, deploy scripts, a runbook).

**Maintenance is accepted, and kept to one code base.** Ten apps on one code base are cheaper to look after than three apps in three technologies. What still costs something **per customer**: each separate installation needs updates, monitoring, backups and occasional support.

| Per-customer cost | How we keep it small |
| --- | --- |
| Updates to each installation | Automated, the same steps for every installation |
| Monitoring and alerts | Shared set-up, the same for all |
| Hosting | Scale-to-zero cloud services; costs tracked per customer |
| Support | A clear response window; common questions answered once, in a help page |
| Mobile app-store releases | Planned, batched releases; web-first where possible |

**Rule:** a new customer is worth taking only if the per-customer cost is covered by their price.

## 5. How we work to make reuse happen

1. **Build for reuse from the start**: templates, settings and parameters, not copy-and-edit.
2. **Do it by hand three times, then automate it.** Automation is built when we know the task really repeats.
3. **Write it down once**: help pages, checklists and runbooks, so the next person (or the next run) does not start from zero.
4. **Record what each reuse taught us**, and update the original.
5. **Say no to one-offs**, or price them as consulting.

## 6. Who it helps in the team

| Person | How reuse helps |
| --- | --- |
| **Kamila** | The same event checklist and registration steps every month; Sobey set up from a template |
| **Cecy** | One design system for all decks and apps; a new customer is a new theme, not a new design |
| **Tomasz** | Content prepared once runs in three programmes; one code base to maintain |

## 7. Slide outline for Cecy (internal deck, about 8 slides)

| # | Title | One message | Supporting points | Visual |
| --- | --- | --- | --- | --- |
| 1 | Do once, offer many times | How we free our time | Prepare · reuse · improve | Three arrows in a loop |
| 2 | The contractor trap | Without reuse, every customer becomes a contract | The contractor test | One person, many queues |
| 3 | The arithmetic | Prepare once and the cost per use falls | The table: 11 → 4.3 → 2.7 hours | Falling bars |
| 4 | The reuse map | Everything we make is used several times | Platform, content, report, decks, automation, methods | Hub and spokes |
| 5 | One engine, many apps | One code base; each app is settings | Two existing apps from one code | Phones side by side |
| 6 | What still costs | Every installation needs care | Per-customer costs and how we keep them small | Small checklist |
| 7 | How we work | Template first; by hand three times, then automate | Five rules | Steps |
| 8 | For each of us | Less repeated work for everyone | Kamila, Cecy, Tomasz | Three portraits |

## 8. Open decisions

| # | Question |
| --- | --- |
| 1 | Whether consulting deliverables can be reused (depends on each client's terms) |
| 2 | The minimum price per new customer that covers per-installation costs |
