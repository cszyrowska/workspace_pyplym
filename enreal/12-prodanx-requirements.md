---
title: "ProDanX: requirements before coding (EnReal local and online, and Sobey)"
owner: Tomasz
status: current
---

# ProDanX: requirements before coding (EnReal local and online, and Sobey)

**Investigation · version 0.2 · 17 October 2026 · for Tomasz, before ProDanX work starts in the week of 19 October.** Updated after the 17 October review (review 2026-10-17-online-offer, deleted; in git history) (P1–P7).

Labels:
- **[V]** checked in the ProDanX source or documents, or in an official rule;
- **[K]** known but unchecked;
- **[A]** assumption.

This is not a spec pack. It lists the angles to settle before slices are written. The build loop (`ai/state.md`, briefs, gates) stays as it is.

---

## 1. One sentence

**Make ProDanX something strangers can join, take part in, pay for and be kept safe in: first for EnReal's offer communities (online and local), then for Sobey, mostly by configuration.** "Working product" means: an outsider completes the main flow, and Kamila runs it, without Tomasz touching anything.

## 2. What exists, and what is new

**Exists [V]:**

| Area | What is there |
| --- | --- |
| **Platform** | Brand and Cell isolation (ADR-017); data-only Brand customisation (ADR-018); per-tenant row-level security; server-driven UI on web and mobile; feature flags per Brand |
| **Plugins** | <ul><li>**curriculum:** modules with progress;</li><li>**social feed:** posts, comments, reactions;</li><li>**booking:** events with RSVP and capacity, parents booking for children, instructor registers;</li><li>**communicator:** announcement, group and direct channels, delivered live.</li></ul> |
| **Other** | Push-notification registration in the mobile app; public pages and trial forms in the marketing app; an operator runbook and deploy scripts |

**New, or not yet done:**

| Need | Status |
| --- | --- |
| **Security before strangers** | Planned on the board as Ph2.6 (login hardening and timing, security headers, rate-limiter and trusted-proxy policy) and ADR-023 (refresh-token revocation). **Required before slice 1 goes public** (review N03) |
| **Joining as a member** | The public trial form records a booking; it is **not** account creation. Self-service sign-up, verified email and creating the membership are new work in slice 1 [V, 17 October review P2] |
| **Limited places** | The public trial path confirms people even over capacity, so a full PyPlym evening needs a waitlist and confirmation [V, earlier review C15]. An online community has no capacity; only events do |
| **Pods** | Forming, matching and re-matching groups: no code yet |
| **Paid level** | **Not enforced anywhere yet.** `access_level` (member, admin, superadmin) is an **admin role, not a commercial tier**, and badges are not access control. Published curriculum modules are open to every member. The paid level needs **its own rule, checked on the server for paid objects, including recording links**. Cancelling must remove paid access and **keep the free membership** [V, review P3] |
| **SoftOcean taking payment as the seller** | ADR-022 (Proposed) is about **clubs collecting their members' money** (Aquila for dues; Stripe Connect Express for one-off transfers). SoftOcean selling its own memberships and places is a **different role** and needs its own decision |
| **Pod-only messaging** | The current direct-message endpoint creates a conversation **without checking for a shared pod** [V, review P4]. The rule must be enforced on the server; hiding a button is not enough |
| **Moderation** | Reporting, blocking, removal: not found in a quick search [to confirm]. A simple operator inbox and real removal are needed for the pilot |
| **Measurement events** | Needed to read the pilot |

## 3. Who uses it, and for what

| User | Main job |
| --- | --- |
| **Explorer** (no coding) | Join a challenge or an evening; be paired; build something; show it |
| **Builder** | The same, plus helping an explorer |
| **Online member** | Every challenge, the monthly live session, the library |
| **Local attendee** | Book a PyPlym evening; get a place or a waitlist slot; get a reminder; be marked present |
| **Company admin** (later) | Buy seats; see the team's pods |
| **Kamila** (operator) | Create events and challenges; match pods; moderate; send reminders; export lists |
| **Cecy** (content) | Publish research notes and challenge material; post the showcase |
| **Tomasz** (admin) | Everything, but needed for nothing routine |
| **Sobey:** Dan, coaches, members, parents | Timetable, booking, attendance, news (document 07) |

## 4. Slices, in order (agreed in grilling, 17 October)

**D-72 task reset:** this section retains the earlier build/target context, not an active assignment to recreate its retired tickets. [t-36](../../Kanban/t-36_plan-enreal-platform-workflow.md) now plans the useful EnReal workflow and reconciles what to build next. Existing decisions keep their status; proposed operator duties here require the person's acceptance.

**Deadlines, hours and the fallback are in [PLAN §3](../../work/plan.md)** (deliverables D1–D10), so they live in one place. **In short:**
- the fallback kit is ready by **7 November**;
- slice 1 for joining by **20 November**, and for PyPlym registration by **3 December**;
- slice 2 on ProDanX **only if slice 1 is on track by 7 November**;
- slice 3 by **30 November**;
- **the first paid issue uses a payment link plus a hand-kept access list**, and slice 4 follows in January if the result justifies it.

At Digital Plymouth on 3 December, **show only what actually runs.**

| # | Slice | Contents | Needed by |
| --- | --- | --- | --- |
| **1** | **Joining safely** | <ul><li>Security first: the Ph2.6 items and ADR-023 (refresh-token revocation);</li><li>**self-service account creation** into an offer community (new work);</li><li>verified email;</li><li>capacity, waitlist and a confirmed place;</li><li>an email reminder.</li></ul>**Done when** a stranger joins and Kamila runs every step without help | 20 November (joining); 3 December (PyPlym registration) |
| **2** | **The monthly issue** | <ul><li>Publishing an issue (curriculum module plus feed posts);</li><li>booking the live session (booking);</li><li>the **free membership level** (a membership in EnReal online)</li></ul> | 20 November, if slice 1 is on track by 7 November |
| **3** | **Challenges** | <ul><li>Opt-in pods as communicator group channels;</li><li>**pod-only messaging enforced on the server.** Test that an outsider is refused, and what happens to history when someone moves pods;</li><li>a report button and an operator inbox;</li><li>the showcase as feed posts tagged with the challenge;</li><li>badges (`MembershipBadge` exists).</li></ul>Pods are **matched by hand** by Kamila for the first three issues | 30 November (can run by hand first) |
| **4** | **The paid level** | **First, by hand (December):** a Stripe payment link plus an access list Kamila keeps (count her time).<br>**Then, the integration (January, if the result justifies it):**<ul><li>Stripe Billing on SoftOcean's own account;</li><li>a paid-through date;</li><li>cancellation, failed renewal and refunds;</li><li>matching a payment to an account;</li><li>webhooks that are **verified, tolerate duplicates and handle events arriving out of order**.</li></ul>Paid access ends; the free membership stays.<br>**Before coding: record the accepted scope in an ADR.** ADR-022 is still Proposed and blocks payment code while proposed | By hand: 14 December. Integration: January |
| **5** | **Sobey** | Configuration: Brand theme, one group, parent booking and attendance (all exist). Payments excluded (D-29) | After Dan says yes |
| **6** | **Connect for clubs** | Stripe Connect Express (ADR-022): ProDanX provides the integration; each club owns its money flow | When a club needs it (for example JJM's one-off sales) |

**Not decided yet:** whether paid online access is sold only on the web. That is the **recommended pilot route** (§5), not a decision; check the relevant storefront before any native paid release.

## 5. Cross-cutting angles to settle

| Angle | Question | Recommendation |
| --- | --- | --- |
| **Tenancy** | How are EnReal's tenants divided? | **Settled 17 October: one tenant per offer** (an "offer community": EnReal online, the PyPlym chapter, AI-Bench, AI Workbench). Access is added or removed per offer. **One login spans them within EnReal's Brand (one Cell);** it does **not** extend to Sobey, whose Brand has its own database (ADR-008, ADR-017). A single dashboard across them is open |
| **App stores** | How do paid online features work in the iOS app? | **Apple's rules, in general [V, App Review Guidelines; the 17 October review found the earlier summary too categorical]:**<ul><li>unlocking paid digital features in an app usually requires in-app purchase (3.1.1);</li><li>live **one-to-few or one-to-many** services must use it (3.1.3(d));</li><li>in-person services consumed outside the app, such as **PyPlym evenings, must not** (3.1.3(e)).</li></ul>**Exceptions exist and need checking for our exact mix:**<ul><li>reader apps, which require media consumption to be the main function, so we cannot assume it;</li><li>multiplatform access;</li><li>enterprise apps;</li><li>regional external-link entitlements;</li><li>US storefront rules.</li></ul>Google Play is similar [K]. **Recommended pilot route:** paid online access on the **web**; the apps carry free content, local bookings and Sobey. Check the storefront before any native paid release |
| **Age and safeguarding** | Who can join online? | **Adults only (18+)** online at first. Sobey's children are already modelled through parent-managed accounts |
| **Moderation** | What if a stranger misbehaves? | A code of conduct accepted at sign-up; report and block; admin removal; pod re-matching. **At launch: group messages within one's pod only** (D-59, to confirm); direct messages between podmates later. Enforced on the server |
| **Privacy** | Strangers worldwide | Privacy notice and lawful basis; retention and erasure (ADR-024, planned); cookie consent on the web; hosting region recorded; the ICO data protection fee checked |
| **Notifications** | Email, push, or both | Transactional email first; push for app users (registration exists) |
| **Time zones** | Global pods | Store times in UTC and show local time; match pods within time-zone bands |
| **Measurement** | What must be logged to read the pilot | A few events, no more: signed up, assigned to a pod, checked in, showed, gave feedback, paid. Aggregate reports only |
| **Content authoring** | How Cecy and Tomasz publish challenges | Admin authoring if cheap; otherwise a structured import |
| **Operations** | Kamila's role | A runbook per task; a support inbox; founder interventions logged (PROCESS §8) |
| **Cost** | Per Cell, per member | Scale-to-zero hosting; email and Stripe fees; tracked per Brand |

## 6. The founder's answers (17 October) and what follows

| Question | Answer | What it means for the build |
| --- | --- | --- |
| One tenant or two? | First answer: **two**, local and online. **Refined in the grilling: one tenant per offer** (the glossary's model), because Anna's three accesses must be added and removed independently | One login across all of them (a global `User`, one `TenantMembership` each). Admin rights are per tenant, so Tomasz needs admin in each. Messaging "one or all" needs a cross-tenant announcement route to be checked (global channels exist) |
| Paid online access web-only? | **Not a decision yet;** the offer has too little shape | Web-first is the recommended pilot route (§5). The paid integration (slice 4) waits for the Issue #2 result |
| Stripe directly, or a merchant of record? | **Stripe in, but open to others.** For example, JJM keeps Aquila for dues, and one-off sales could go through Tomasz's Stripe. He wants to understand how it all works | **Confirmed 17 October (ADR-022 already chose it):** clubs sell through **Stripe Connect**, so ProDanX provides the integration and each club owns its money flow, refunds and disputes. SoftOcean's own sales (memberships, places) use SoftOcean's own Stripe account. A merchant of record is reconsidered only if foreign sales grow |
| Adults only online? | **Leaning to adults first** to keep things simple, while knowing that 16–17-year-olds could be very good members | Build age and guardian fields so that 16+ can be opened later; launch at 18+ |
| Direct messages limited to pods? | **Yes, at first.** Messaging is a big part of ProDanX's value: start restricted, keep the code ready for more, test pod messaging, then design the next step | Messaging rules are a **server-side policy** (configuration), not removed code. Proposed launch rule: **group messages in your own pod only;** podmate direct messages next (D-59) |

## 7. What this does not decide

- **Prices:** document 10 §5.
- **Dates and hours:** [PLAN.md](../../work/plan.md).
- **Whether online works at all:** the Issue #1 pilot (document 10 §9), which can also run without ProDanX if the build slips.
