# Journal: EnReal vision documents

Chronological record of how the vision documents were built. Entries are added, never rewritten.

---

## Entry 1 · 16 October 2026 · Starting the vision set

### The founder's brief (in [initial_prompt.md](initial_prompt.md))

Build a set of separate vision documents describing one holistic vision, each for a part and an audience; Cecy will turn them into HTML presentations like the ProDanX decks for JJM and Sobey.

- **PyPlym AI Edition:** one deck for every outside party (Digital Plymouth support, Real Ideas space, Babcock and Helsing sponsorship, Monument AI partnership, the Council, companies). Differentiation: AI combined with a human focus, viewed as a tool from the human perspective, with a technical approach. Event 1: how AI can support human learning (a psychology block by Cecy; technical pitfalls; practical tools and a workshop). Event 2: how we delegate (psychology of delegation and its tensions by Cecy; AI use; workshop). Later topics: RAG, agents, memory. About six events, then revisit. May end in a workshop or hackathon, not promised. Useful to non-technical people as well as developers; practical sessions pair a developer with a non-technical person. PyPlym is the main selling point and can be taken to anyone.
- **AI-B (AI-Bench and AI Workbench):** a partner deck (Monument; the Council and Babcock could sponsor seats) and participant decks (marketing to join and pay).
- **ProDanX for EnReal:** an internal deck to bring the founder's wife and Cecy on board; an external showcase on softocean.net presenting SoftOcean as a builder of community software, possibly marketing a future online cohort.
- **ProDanX for Sobey:** a starter for the founder's wife to lead the Sobey work; an internal "do once, sell multiple times" vision; later Sobey as a second showcase.
- **Loose ends:** consulting could start now, freeing a contract day for each paid consulting day before January; unsure whether to market it now. X-watchers on the back burner.

### Checked

- **Folder:** the workspace has been renamed; the target is `/home/t/workspace_company_vision/EnReal-vision`.
- **Deck formats:** JJM decks are Slidev markdown (`Docs_ProDanX/intro_presentation`); the Sobey deck is a single HTML file of slides. So each vision document ends with a slide-by-slide outline.
- **softocean.net** (a single-page app; text read from its bundle): an IT consultancy "built on strong family values", "no corporate red tape"; PlanktoSpace as flagship; also an electromagnetic-induction instrument, cable-integrity analysis and geophysical surveys.
- **Local partners:** Real Ideas runs Market Hall in Devonport as a hub for immersive experiences, learning, co-working and community, aimed at opening opportunity in a deprived area. Helsing opened an 18,000 sq ft maritime factory near Plymouth in November 2025 (~50 roles, expecting hundreds). Babcock's Devonport STEM team reports 147 events and 13,649 students in a year.
- **Research for events 1 and 2:** Bastani et al. (PNAS 2025); Lee et al. (CHI 2025); delegation studies (a Darden working paper on leaders and AI, a Computers in Human Behavior study on under-delegation, an MIS Quarterly study of 875 store managers, Lubars and Tan at NeurIPS 2019, a 2026 paper separating acceptance from delegation).

### Written

- [README.md](README.md): the document map (00–09), order of work, and rules for every document.
- [00-vision-foundation.md](00-vision-foundation.md): why EnReal exists, positioning, brand architecture and names, audiences, principles, team, truthful proof points, language rules, roadmap, Plymouth context, the website today.
- [01-pyplym-ai-edition.md](01-pyplym-ai-edition.md): draft 0.1 of the PyPlym vision, including a **Human × Machine** series spine, an evening format, **builder and explorer** pairing (the explorer drives), season one, events 1 and 2 in detail, partner and sponsor roles with principles, measures, a 13-slide outline plus five audience slides, and open decisions.

### Assumptions I made, to be confirmed

- **Human × Machine** as the spine of every event: my proposal, extending the founder's two events into a pattern.
- **"The explorer drives, the builder navigates"**: my proposal, from pair-programming practice, so non-technical people leave able to repeat the work.
- **Cecy presents the human side as a research summary with sources**, backed by the founder's psychology study, rather than as an authority.
- A **sponsor policy** (no pitching, no shared participant data) and a flagged question about **defence sponsors** on a human-centred community, given the founder's own defence-sector contract.

---

## Entry 2 · 16 October 2026 · The spine is decided

### Asked

Is **Human × Machine** the right spine for the whole season? Recommendation: yes.

### Answered

Agreed: "the core concept is right". No better slogan yet; if the founder or Cecy finds one, it can be reworked.

### Recorded

Open decision 1 in [01-pyplym-ai-edition.md](01-pyplym-ai-edition.md) marked decided. The tagline candidates in the [foundation](00-vision-foundation.md) stay open.

### Next

Defence sponsors (open decision 3): how to approach Babcock and Helsing, given the community's human-centred values and the founder's own defence-sector contract.

---

## Entry 3 · 16 October 2026 · Defence sponsors, and the contract boundary

### Asked

How to handle defence sponsors (Babcock, Helsing): (a) welcome with principles and a mix; (b) avoid; (c) lead with defence. Also: check the founder's contract before approaching them. Recommendation: (a), after a contract check.

### Answered

- **Fully agrees with (a).**
- He had not thought of approaching them through IBM (that was not the suggestion; the point was a conflict check).
- He sees them sponsoring PyPlym as a **local initiative**, and later perhaps AI-Bench. **He does not see PyPlym as a recruitment channel and does not want to present it as one.**
- **Contract chain:** founder → umbrella → agency → IBM → end client. The agency contract prevents him working for IBM without the agency, and offering to the end client without IBM. He is 99% sure PyPlym falls outside it.
- If IBM asks: it is his way of learning and improving. PyPlym is a social group; ProDanX and AI-Bench are run by the company and "will mainly be managed by SoftOcean employees, not me".
- As a contractor he expects to be let go at some point, so he does not see this as a high-stakes issue.

### Argued position

- **Agreed: PyPlym as a community group is very unlikely to be caught** by those terms, and asking a firm to support a community is not offering services.
- **The precise boundary is commercial offers to the end client.** AI-Bench seats, consulting or ProDanX offered to the end client directly would be the kind of thing the non-solicitation term covers. Recorded as a rule in the foundation (internal section).
- **The "managed by SoftOcean employees" line is not accurate today, and it would be weaker if checked.** AI-Bench facilitation and ProDanX engineering are the founder's own work; the family's hours are deferred and their status is still to be settled. The honest framing (a community for learning; his company outside contracted hours; no client material; no solicitation) is stronger and needs no future-tense claim.
- **Content discipline:** examples at events must be public and generic; nothing from IBM's or the client's systems.
- The sponsor wording in the PyPlym draft still hinted at recruitment ("roles they offer", "visibility with talent"). Removed; sponsors are now "local organisations supporting practical AI skills", with a principle that PyPlym is not a recruitment channel.

### Recorded

Decision 3 in [01-pyplym-ai-edition.md](01-pyplym-ai-edition.md) marked decided; sponsor roles, benefits, principles and slide C reworded; a new internal section "Boundaries with the founder's contract" in the [foundation](00-vision-foundation.md).

---

## Entry 4 · 16 October 2026 · The name stays, and a story worth more than any slide

### Asked

Keep "PyPlym AI Edition" with an inclusive subtitle (a), split names (b), or rename (c)? Recommendation: (a).

### Answered

- **Agrees with (a). PyPlym is his brand.** At the last Digital Plymouth event he met Sam Nixson of Monument AI, who had **heard of him because someone told Sam how PyPlym changed his life: from taxi driver to developer, now a tech lead.**
- "Py" signals technical, and the format **is** technical; Python now touches almost everything.
- He would rather **filter out people who oppose** the technical side; they would be a poor fit and could have a negative effect. He believes this happened to Digital Plymouth: it became non-technical and technical people stopped coming.

### How my assumptions changed

- **The founder's argument beats my concern.** I worried the name would deter non-technical explorers. He is right that the pairing format depends on builders, and that diluting the technical core loses them. The filter should be **curiosity**, not coding skill: explorers who will try something technical with help are welcome; people who reject anything technical are not the audience.
- **This produces a design rule:** explorers at most about half of places, so each has a builder; the machine-side block keeps real technical depth.
- **The taxi-driver-to-tech-lead story is the strongest proof point in the whole vision.** It is evidence that PyPlym changes outcomes, and it already reached a prospective partner without the founder telling it. It must be used **only with that person's permission**, ideally in their own words, perhaps as a short quote or a reality talk at an early event.

### Recorded

Decision 2 in [01-pyplym-ai-edition.md](01-pyplym-ai-edition.md); subtitle candidate "No coding needed. Curiosity required."; the balance and curiosity rules; the story in section 2, slide 12 and the [foundation's](00-vision-foundation.md) proof points.

---

## Entry 5 · 16 October 2026 · PyPlym decisions settled

### Asked

How Cecy presents the human side ("what the research says", sources on every slide, founder review, learning and work psychology only, starting short, credited as research and design lead), and defaults for the format (monthly weekday evenings, 18:00–20:30, ~40 places).

### Answered

"Agreed, all was discussed before" (with Cecy).

### Recorded

Decisions 4–6 in [01-pyplym-ai-edition.md](01-pyplym-ai-edition.md); the document moves to **draft 0.2, ready for review**. Remaining before Cecy builds the deck: permission for the taxi-driver-to-tech-lead story; the exact *Computers in Human Behavior* citation; anything learned at the Monument meeting on 20 October.

### Next

AI-B: the partner deck (Monument, the Council and seat sponsors such as Babcock), then the participant decks for AI-Bench and AI Workbench.

---

## Entry 6 · 16 October 2026 · AI-B partner vision, draft 0.1

### Checked

- **Social value:** the Procurement Act 2023 regime went live on 24 February 2025; under the National Procurement Policy Statement (February 2025), contracting authorities must consider how to promote social value, defined as benefits for staff, suppliers, community or environment **over and above** a contract's core deliverables; PPN 002 applies a Social Value Model to central-government awards from 1 October 2025. [GOV.UK PPN 002](https://www.gov.uk/government/publications/ppn-002-taking-account-of-social-value-in-the-award-of-contracts/ppn-002-taking-account-of-social-value-in-the-award-of-central-government-contracts-html), [Bates Wells](https://bateswells.co.uk/updates/the-procurement-act-2023-new-regime-goes-live/)
- **Plymouth City Council business support:** UK Shared Prosperity Fund strands (SME support by Digital Remit; start-up courses; social-enterprise support by Iridescent Ideas CIC; the Enterprise Nation hub) ran until March 2026; no successor confirmed. [Plymouth City Council](https://www.plymouth.gov.uk/business-support-programme)

### Written

[02-ai-b-partners.md](02-ai-b-partners.md): the two programmes side by side; why partners would support them; the knowledge-partner role for Monument with principles; **sponsored seats** (AI-Bench seats for small local businesses, charities and social enterprises; AI Workbench seats for career changers); sponsor fit for the Council and employers, with honest limits; what partners receive; an honest now/not-yet table; timeline; an 11-slide outline; open decisions.

### Assumptions I made, to be confirmed

- **Sponsored seats** as the main sponsor mechanism, with two seat types and indicative costs.
- **"Live briefs"** as an optional bridge: AI Workbench participants building for consented AI-Bench members' problems.
- A provisional **AI Workbench shape** (about 10–12 people, 6 weeks, weekly evenings, one project each, £300–450 self-funded) to be decided.
- "AI-B" used only internally.

---

## Entry 7 · 16 October 2026 · A full mix, and one report with many uses

### Asked

Who sponsored seats are for, and who funds which? Recommendation: the Council funds AI-Bench seats for small businesses and AI Workbench seats for career changers; employers fund career-changer seats and supply-chain seats; sponsors nominate up to half.

### Answered

- **A full mix:** individuals and small businesses can simply buy; sponsors can sponsor particular groups or contribute generally.
- **The Council, Babcock and "Plymouth College" should receive a report.**
- **Maximise reach; "do once, give many times"**: one report can go to multiple places.
- **No locking into a single decision.**

### Argued position

- **Agreed.** Flexibility costs little if every place has **one published price**, whoever pays; that avoids confusion and side deals.
- **The report is where "do once, give many times" pays most.** One core report, with a short view for each audience (Council: growth and skills; employers: material usable in their own social-value reporting; the college: skills progression), reused for the website showcase, PyPlym's review, Monument and sponsor conversations, funding applications and marketing.
- **Independence still needs one rule:** sponsors choose a group; EnReal allocates places within it against published criteria. (Nomination of individuals by sponsors was not taken up; left out.)
- **"Plymouth College" needs confirming:** City College Plymouth (skills hub, AI Essentials course) is likely meant; Plymouth College is also an independent school.

### Recorded

Decision 1 in [02-ai-b-partners.md](02-ai-b-partners.md); new sections on the four payment routes and the impact report; slides 9 and 10 reworked.

---

## Entry 8 · 16 October 2026 · AI Workbench format agreed; both participant decks drafted

### Asked

AI Workbench shape: a 6-week cohort of 10–12 in Plymouth, weekly evenings, weeks following the Human × Machine spine, one project each (ideally a live brief), demo night; about £395 individual / £695 organisation; launch only when enough people have paid.

### Answered

"I think it is good format."

### Written

- [03-ai-bench-leaders.md](03-ai-bench-leaders.md): the participant deck vision for leaders, built from the October concept: promise, the pressures leaders face, what it is and is not, the 90-day cycle, a session, the twelve techniques, fit, an illustrative value case, prices, trust rules, the facilitator, how the first group starts, a 12-slide outline, open decisions.
- [04-ai-workbench-practitioners.md](04-ai-workbench-practitioners.md): the participant deck vision for practitioners: promise, why it matters, format, six Human × Machine weeks, outcomes, fit and prerequisites, prices, the facilitator, honest limits, a 10-slide outline, open decisions.
- [02-ai-b-partners.md](02-ai-b-partners.md) updated with the agreed AI Workbench format and prices.

### Notes

- The October concept's paid **sprint** for leaders who want the work done for them is a natural link to the consulting offer (document 09).
- Both decks keep the language rules: planned things marked as planned; the governance partner unnamed until confirmed; the alumni story only with permission.

---

## Entry 9 · 16 October 2026 · Team coordination agreed; the inside deck drafted

### Asked

How the three of them coordinate: a weekly 30-minute planning slot; one shared task board; a monthly review after each PyPlym event; ownership rules (the wife: operations and Sobey; Cecy: design and human-side research; Tomasz: content, technology, selling; money and outside commitments come to Tomasz); the wife's operator role as the real test of ProDanX.

### Answered

"Agreed."

### Written

[05-prodanx-enreal-inside.md](05-prodanx-enreal-inside.md), in plain language for a non-technical reader: what we are doing in three sentences; the pieces; why our own platform (proof, feedback, reuse, ownership); who does what (with each person's boundaries); what each does inside ProDanX; how we work together; a plan by person to March 2027; signals of success; fairness and boundaries (family hours as a written loan, studies first, personal-data care, client confidentiality); an 11-slide outline; open decisions.

---

## Entry 10 · 16 October 2026 · SoftOcean's positioning: high tech, without forgetting the human

### Asked

How strongly to position SoftOcean: (a) "a leader in community software"; (b) "we build software for communities, and run our own community on it"; (c) "community builder champion" once earned. Recommendation: (b) now, (c) later.

### Answered

- **Agrees with (b), then (c); drops (a).**
- **But SoftOcean is a consultancy and small business.** Its aim is to build software and do consulting, not to build communities. "Community software" sits awkwardly with **PlaSpa, a real example**, and with SoftOcean's past in **marine, electromagnetics and cables**, and its **machine-learning** record. The end goal is to **build automation, not run conferences.**
- Preferred positioning: **"we do high tech, but without forgetting the human"**. SoftOcean is good at **human leverage, requirements, planned delivery and software.**
- **Do not overshadow the company with something that does not exist yet.**

### How my assumptions changed

- **I had let a new initiative redefine the company.** The founder is right: EnReal and ProDanX are one case study and one initiative inside a high-technology software and consulting business, with PlanktoSpace as the strongest evidence.
- **The company line and PyPlym's spine are the same idea at two levels:** Human × Machine for events; "high technology, without forgetting the human" for SoftOcean. That makes the whole family of documents consistent.

### Written

- [00-vision-foundation.md](00-vision-foundation.md): a new company-level positioning section (the line; strengths; portfolio in order of evidence; "EnReal is a SoftOcean initiative, not its identity"); names table and website section updated.
- [06-prodanx-enreal-showcase.md](06-prodanx-enreal-showcase.md): positioning rules; the case study's one sentence; the page section by section with status labels; how it sits beside PlanktoSpace on the website; an 8-slide marketing deck; open decisions (recommendation: publish after PyPlym's first event, so the page shows something real).

---

## Entry 11 · 16 October 2026 · Kamila's starter pack, and "one engine, different cars"

### Asked

Format for the Sobey starter: no slide deck for Dan; a one-page cheat sheet for the founder's wife; Cecy's clickable prototype as the presentation; a one-page founding-partner offer only if Dan is interested; plus an internal "do once, offer many times" document.

### Answered

- Largely agrees. The existing **Sobey presentation** (`ProDanX_Design/Sobey_presentation`) is helpful.
- **The founder's wife is Kamila**; documents should use her name.
- She does not yet see the full vision. **Visual aids** will help; **a clickable demo** would be great; but mainly she needs to know **what value she is selling**.
- She does not see **how EnReal and Sobey are the same engine but different apps**.

### Done

- **Renamed** "the founder's wife" and similar to **Kamila** across the working documents in this folder and `dis-combine-enreal` (journals and the independent reviews left as historical records; the JJM line about Dan's wife unchanged). Saved the team's names and roles to memory.
- Checked the ProDanX brand files: the Ju-Jitsu Brand is green (`#16a34a`, dark), the MedApp Brand blue (`#2563eb`, light), both from one code base. **The "same engine, different apps" point is already demonstrable**, not hypothetical.

### Argued position

- **The old Sobey deck promises features that do not exist** (auto-created chats per event, the "Dan bot", journals and streaks). Kamila should never promise them. Every benefit in the starter is labelled ✅ works today, 🔜 planned or 💡 idea for later.
- **Retention is the strongest value for a fitness business** (from the August edge research): attendance shows who has stopped coming. The list exists; an automatic nudge is planned.
- **An analogy Kamila can repeat:** one car factory, one engine, different cars with their own body, colour and badge.

### Written

[07-prodanx-sobey-starter.md](07-prodanx-sobey-starter.md): the one-sentence offer; what Dan gets, with status labels; one engine, different cars (with the real green and blue apps as proof); what to show; a two-minute talk track; easy questions; answers to four reactions; what not to promise; what to note; next steps if interested; five visual aids for Cecy; open decisions.

---

## Entry 12 · 16 October 2026 · Do once, offer many times: the whole business

### Asked

Should document 08 cover only ProDanX reuse, or the whole business? Recommendation: the whole business as one reuse map, while showing honestly what costs something per customer (each ProDanX app is a separate installation needing updates, monitoring and support).

### Answered

- "Do once, sell many times" **is the core idea of freeing time**; otherwise he becomes a contractor for each customer, which he wants to leave behind.
- He values **automation**, and an automation set can itself be reused. What is prepared once should be reused; **iteration brings improvement.**
- **Maintenance is accepted**, but he prefers maintaining **one code base for ten apps** to three apps in different technologies.
- **Twenty hours of preparation for three 2-hour workshops beats ten hours of preparation for each 1-hour workshop.**

### Checked the founder's arithmetic

Three 2-hour workshops prepared once: 26 hours for 6 delivered (4.3 hours per delivered hour). Three 1-hour workshops at 10 hours each: 33 hours for 3 delivered (11). Run six times: 32 hours for 12 delivered (2.7). The principle holds and strengthens with each reuse.

### Written

[08-do-once-offer-many.md](08-do-once-offer-many.md): the principle and **the contractor test** (work that cannot be reused is contracting: price it as consulting or decline); the arithmetic; a reuse map across platform, Brand settings, event content, the impact report, decks, automation, methods, the Sobey template and consulting deliverables; the engine (one code base, settings-only differences, existing deploy automation) with per-customer costs and how to keep them small; five working rules; what it means for each person; an 8-slide outline.

---

## Entry 13 · 16 October 2026 · Business cards reviewed

### Asked by the founder

Two business card designs (SoftOcean Ltd; Cecylia Szyrowska): is this the best design for what we do? Then: make the review a discoverable note in the workspace; the images will be added there. A question about whether a banner is worth having will follow later.

### Argued position

- **The SoftOcean tagline already matches the agreed positioning**, and the subline describes the consulting truthfully.
- **The services row contradicts the tagline:** generic "IT consultancy · digital solutions · specialized design", with no AI, software or science. Suggested: "AI consulting · software & automation · data & science".
- A Gmail address on a company card; no person named; a double space; US spelling; contrast to check at print size; where the QR code leads.
- **Cecy's card says "Executive Assistant"**, which contradicts her role in every plan (research and design lead) and suggests Kamila's administrative area.

### Written

[../brand-assets/2026-10-16-business-cards-review.md](../brand-assets/2026-10-16-business-cards-review.md) and [../brand-assets/README.md](../brand-assets/README.md); a workspace index at [../README.md](../README.md); links from this folder's README and the foundation.

### Still open

The consulting question for document 09 (market now, or make it easy to find).

---

## Entry 14 · 16 October 2026 · Team meeting analysed

### Asked by the founder

Tomasz presented the vision to Kamila and Cecy (39 minutes, in Polish), made the transcript himself, and asked for English meeting notes next to it, with insight and whether the meeting adds anything to the project.

### Argued position

- **The structure has not landed.**
  - Kamila asked twice which programme is which.
  - The practitioner programme was introduced as "AI Bench".
  - Weak evidence (one listener, no diagram), but cheap to act on before the decks exist. D-20 is under review, with a one-page "who is who" test.
- **Kamila's questions expose the operations gap:** payments (ProDanX has no payment code), venue, grants, partner costs. Proposed: a ready-made payment route first (D-36); the venue fixed before December's registration (D-40); a funding tracker she owns.
- **Kamila changed the Sobey plan, rightly:** a set meeting after Poland, with Tomasz (D-34). The terms are "nothing upfront, but not a free try-out" (D-35); this document set's starter pack 07 is updated to match.
- **The meeting gave Kamila tasks beyond D-24** (outbound emails, attendee calls, platform operation): a boundary to confirm with her.
- **Card subline:** keep an object; "people and organisations" (D-37). This revises entry 13.
- **Content loop (blog and podcast):** a good fit with reuse, but founder hours to the end of December already total ~85–120 against ~100. Start with written posts and a "how did you hear about us?" question.
- **Evidence:** the meeting is internal (commitment and feasibility ledgers only). The next external evidence is Monument (20 Oct) and Dan.

### Written

- [../meeting_notes/16-10-2026/SoftOcean.meeting-notes.md](../meeting_notes/16-10-2026/SoftOcean.meeting-notes.md).
- Register: D-34 to D-40 added; D-20, D-24 and D-28 updated.
- Documents: 07 (Sobey meeting and terms), 01 (venue needs), 00 (the "group, not cohort" rule).
- Indexes: the brand-assets review and README; the workspace README.

---

## Entry 15 · 16 October 2026 · Corrections to the meeting analysis

### From the founder

- The recording is not pushed.
- Transcripts may be redacted, with each redaction marked.
- **The consulting arithmetic was wrong.** It compared £1,200 with £900 gross. In fact:
  - a £900 contract day leaves £458 in the founder's account;
  - SoftOcean is currently in loss, so consulting income is not taxed there;
  - less contract income also means less tax overall.
- Agreed: days off are a contractor's normal entitlement.

### Changed

- **The meeting notes, §5.12:**
  - a swapped day gains about £742, and three days about £2,226, with the conditions under which that holds (losses available; a tax-free route to the founder; the tax band);
  - dropping one contract day a week costs about £2,000 a month of take-home, not £3,900, so the £3,000 target (D-01) leaves a margin while the losses last.
- **Document 00 §9:** a row on days off for SoftOcean work, arranged with the agency in advance.
- **The transcript:** one remark redacted, with a header note.
- **A workspace `.gitignore`** keeps audio and video out.
- **The register:** D-14 and D-39 updated.

---

## Entry 16 · 17 October 2026 · Review answered; online edition, content engine and Kaggle investigated

### From the founder

- **A correction:** changing "cohort" to "group" was premature and rigid. Kamila asked, it was explained, and the problem was solved.
- **Concern 1:** the first money arrives after months. Should AI-Bench and AI Workbench be online first, at bigger scale, with less of his time and with automated marketing?
- **Concern 2:** regular written and video blogs (Tomasz on the technology, Cecy on the human research), and cheaper, more automated online editions. The human-centred angle is the selling point. Is £20 a participant, three cohorts in parallel, considerable side income?
- **Concern 3:** go deeper on blogging and video; get the most out of Kaggle, including the new *Name That LLM* competition.

### Argued position

- **Conceded:** the cohort rule is withdrawn. PROCESS now says an answered question is not a defect.
- **Conceded:** the current plan brings in little or nothing before February.
- **Challenged:** online does not remove the need for an audience, and £20 one-off needs about 150 new buyers every six weeks for ~£2,100 a month. **The same £20 charged monthly changes the sum.**
- **Recommended:** one topic a month, prepared once and offered four ways (PyPlym, online members, public content, later paid programmes), plus a founding-member pre-sale tested against a counted audience.
- **Content:** fortnightly notes are affordable only as write-ups of work already being done. Email subscribers are the main measure.
- **Kaggle:** facts verified on the official pages. Recommended content first, with a capped private branch; the competition data cannot be shown publicly.
- **Capacity:** the new ideas fit only if Sobey building and ProDanX registration for event 1 move after January. Released days now cost about £458 each, which is half what they seemed.

### Written

- [10-online-edition-options.md](10-online-edition-options.md), [11-content-engine.md](11-content-engine.md), [../dis-combine-enreal/kaggle/02-name-that-llm.md](../dis-combine-enreal/kaggle/02-name-that-llm.md).
- [../dis-combine-enreal/review-response-2026-10-16.md](../dis-combine-enreal/review-response-2026-10-16.md).
- PROCESS v2.1.
- Fixes in 00, 01, 02, 05, 06, 07, the Monument pack and the meeting notes.
- Register: D-41 to D-45, and corrections C-24 to C-33.

---

## Entry 17 · 17 October 2026 · Online reframed as looking for an edge; the morning hour; priorities argued; ProDanX requirements

### From the founder

- **No sacrifice:** he can add a 07:00–08:00 focus hour for Kaggle, learning and content. He needs motivation, a plan and an understanding of the return.
- **Human-centred is a proposed differentiator, not something to keep.** He is looking for an edge.
- **Why decide where the first money comes from?** Online is cheaper to fail and prepares local. Failing online is no big deal; failing locally might be the end.
- **£20 was an example.** He wants an online addition to the whole system, built into ProDanX (ProDanX work starts next week), not just another online course. Ideas: a blog fortnight, then a small exercise (£2 entry) with self-serving groups; a membership; a mobile app with normal payments; small task groups mixed by activity.
- **His priorities:** ProDanX and blogging high; the PyPlym audience, the online business and Kamila owning Sobey medium; X-watchers low. "Argue with me."

### Argued position

- **Conceded:**
  - the framing error (an edge was protected in the question);
  - the either/or (online first, as a two-way door, is the better sequence);
  - the anchoring on £20.
- **Strengthened his argument:** the online pilot is also the pair rehearsal the review asked for, and ProDanX's first real users.
- **Challenged:**
  - online lessons only partly carry over to local;
  - "working product" must be defined;
  - the PyPlym audience must start in November;
  - Kamila owns the relationship, not the selling;
  - Kaggle and Monument were missing from the list;
  - "learning before earning" must be a stated choice;
  - the morning hour should be a four-week trial, with sleep and the contract boundary handled.
- **Research:**
  - Apple's in-app purchase rules (paid unlocks and live one-to-many sessions must use it; in-person services must not);
  - Stripe UK fees (£2 loses 11.5%);
  - Focusmate's pricing;
  - Skool's price distribution;
  - ProDanX's existing plugins mapped to the pilot;
  - ADR-022 found to cover club payments, not SoftOcean selling.

### Written

- [10-online-edition-options.md](10-online-edition-options.md) v0.2.
- New: [12-prodanx-requirements.md](12-prodanx-requirements.md) and [PLAN.md](PLAN.md).
- 11 and kaggle/02: content and Kaggle moved into the morning hour.
- PROCESS v2.2.
- Register: D-46 to D-50; D-41 and D-44 superseded; corrections C-34 and C-35.

The founder will commission a critical review of this version next.

---

## Entry 18 · 17 October 2026 · Grilling: the online offer and the platform, shaped together

### Method

Back to one question at a time, each with a recommendation, checking the code before asking, at the founder's request ("work out a better solution together instead of assuming").

### Settled (glossary updated as we went)

1. **Tenants are offers.** Each offer is its own **offer community**; Anna's three accesses are added and removed independently. The code supports one login across them (`TenantMembership`); admin rights are per tenant.
2. **Membership level.** Free or paid, inside one offer community; paying keeps a member's history. Public content sits outside every community.
3. **The founder's correction:** requiring people to build makes them drop out; most will pay as readers and community members (the 90-9-1 pattern). Challenges are optional, **recognised, never punished**; the deposit idea is dropped. It must not be a paid chat room.
4. **Monthly issue.** Sense-making, access, a showcase to watch, and belonging. Badges already exist in the code.
5. **Stripe Connect for club money,** confirmed. *The founder's note:* it was already decided (ADR-022) and should not have been re-asked. A process rule was added: check the register and ADRs before asking.
6. **Build order** 1–6. **Platform and Issue #1 running by 20 November,** before the **Digital Plymouth Christmas Social on 3 December**, which was verified as a social at The Roundabout; the talk slot is still to be confirmed.

### Written

- [10](10-online-edition-options.md) v0.3; [12](12-prodanx-requirements.md) §4 and §6; [PLAN](PLAN.md) v0.2; 11; 00 (brand map, roadmap); brand-assets README.
- [CONTEXT.md](../dis-combine-enreal/CONTEXT.md): offer community, membership level, public content, monthly issue, challenge, showcase, pod.
- Register: D-51 to D-54; D-46 and D-49 superseded.

### Still open

- The free/paid split (10 §5) and the price.
- A name for the online offer community.
- When to open 16+.
- The 3 December slot.
- Consulting (document 09).

---

## Entry 19 · 17 October 2026 · Structure crystallised; prepared for the critical review

### Settled in the last grilling question

- **EnReal is the community, with its home online.** PyPlym is its Plymouth chapter; AI-Bench and AI Workbench are its programmes.
- **The founder's analogy is also ProDanX's actual model:** the Jujitsu Movement Brand, its clubs, and movement-wide announcement channels.
- **The founder sees new value:** one sponsorship across two audiences, and a wider audience to show.
- **Starting hypothesis:** the free/paid split (10 §5) is trialled, not decided.

### Written

- 00 §2.1: the structure, the lines to say, and the truth conditions that keep them bulletproof.
- CONTEXT: chapter, programme, EnReal redefined.
- Notes in 01, 02 and 08; summary 05; document 10 retitled.
- D-55.
- [../REVIEW-BRIEF-2026-10-17.md](../REVIEW-BRIEF-2026-10-17.md) for the next critical review.

---

## Entry 20 · 17 October 2026 (evening) · The second review answered: coherence, clarity for the team, the goal in view

### Asked by the founder

Analyse the new review and the current work, and improve them. The additions must be **clear for Kamila and Cecy, coherent, and with the goal in mind.**

### Done

- **Clarity for the team:** [05](05-prodanx-enreal-inside.md) is rewritten as the team's plain-language picture: why we are doing this, the pieces, what an issue is, free and paid, the dates, each person's part (requested, to confirm), the signals, and fairness.
- **Goal in view:** [PLAN §0](PLAN.md) gives the goal ladder: the north star (£3,000 a month), this plan's four results, and "learning before earning" as an explicit choice.
- **Coherence:**
  - PLAN rebuilt around one table of deliverables D1–D10, with the fallback first;
  - the trial dates and lab-note hours corrected;
  - **one topic calendar**, with the proposed rhythm: online first, then PyPlym the following month;
  - "same month" fixed in 00, 01, 10 and CONTEXT.
- **The offer, readable:**
  - a concrete public, free and paid table;
  - a six-stage tally with cohorts;
  - late joiners;
  - one observed pair session;
  - edges observed, not concluded;
  - Billing fees included.
- **Platform:**
  - paid access, pod messaging, the payment lifecycle and account creation written in as requirements;
  - softer Apple wording;
  - login across tenants scoped to the Brand.
- **Kaggle:** an observable checkpoint; the deadline confirmed; attribution kept separate from detection.
- **Hardware and email:** corrections and a first local-only experiment, recorded beside the dialogue.
- **Records:** PROCESS v2.3; [review response](../dis-combine-enreal/review-response-2026-10-17.md); D-56 to D-60; C-36 to C-44.

### For the founder to confirm

- D-56 (topic rhythm);
- D-58 (first paid issue by hand);
- D-59 (pod-only group messages);
- where the local-agent strand's hours come from;
- whether to use one released day.

---

## Entry 21 · 20 October 2026 · Grilling: online courses added to the offer

### Asked by the founder

Research and document taking EnReal online first, with courses and a members' library in the format of AlgoExpert or LeetCode: made once, then running without his time apart from updates. His map: PyPlym, possibly Digital Plymouth, AI-Bench and AI Workbench locally; an online cohort edition, short courses and a library online. Operational choices come next and depend on the offer.

### Settled

1. **The monthly issue stays as planned** (D-51 unchanged). **Online courses are an addition,** investigated alongside it, not a replacement (D-68).
2. **Hours are a measure, not a gate,** while investigating: the aim is a good business model, not the quickest (D-68).
3. **Packaging:** the founder agreed to "two products now, a bundle later" (D-69), then set the pricing model aside until some build is made. **D-69 is recorded as a starting hypothesis (proposed).**
4. **Candidate courses:** business leaders (AI-Bench's method, self-paced) liked; non-technical knowledge workers a candidate; interview preparation later; an evaluation course for practitioners not valuable, in his view.

### The founder's correction

"The session hangs on unimportant details." Packaging and the choice of the first buyer were questions for after a build, not before. The remaining questions became **a checklist for the build** (13 §7), not a dialogue now. Lesson for grilling: at vision level, record the direction and the considerations; do not settle launch details.

### Challenged (recorded, not settled)

- Online scales delivery, not demand: "online can bring more money than any local business" stays a hypothesis to test.
- For leaders, a self-paced course removes the peer group and accountability that AI-Bench sells; it stands or falls on how the result is checked.

### Research

AlgoExpert, Boot.dev, DeepLearning.AI, a Maven evaluation cohort and interview guides (13 §5): the paid value sits in the practice-and-check loop and a clear result; short AI courses have a free floor; AI tooling content ages faster than algorithms.

### Written

- New: [13-online-track.md](13-online-track.md) v0.2.
- Online courses added to [00](00-vision-foundation.md) (structure, brand map, names, roadmap), [10](10-online-edition-options.md) §5 and §8, the [offers](../README.md) and EnReal READMEs, and [company/about.md](../../company/about.md).
- [CONTEXT](../../CONTEXT.md): *online course*; "AI-library" clarified.
- Register: D-68 (active), D-69 (proposed).
