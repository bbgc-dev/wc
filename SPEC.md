# Client administration demonstration — draft specification

Status: Deferred Phase 2 draft. The public informational website in `PUBLIC-SITE.md` is now the first priority. This administration workspace remains unapproved by the client.

## Problem Statement

The consultant wants to secure a first client engagement combining a project fee with a monthly service fee. The prospective client operates an existing shop in Halfway House, Midrand, South Africa. According to the consultant, the business relies on walk-in trade, telephone requests, paper records, and a card-payment terminal rather than an integrated business management system.

The client has expressed an interest in business growth and broader IT support. The consultant wants a persuasive first demonstration before undertaking detailed discovery. No specific administrative failure, financial baseline, budget, or client-approved requirement has been established. The demonstration must therefore show a plausible capability without presenting assumed problems or benefits as facts.

The client's cannabis product range and reported delivery activities form background context only. Its authority to distribute is unverified. This specification concerns an internal administration demonstration, not cannabis promotion, sales, ordering, or delivery.

## Solution

Create a polished, mobile-friendly, browser-based demonstration of an owner's administration workspace. Use fictional records to connect staff responsibilities, equipment faults, administrative expenses, and business documents.

The demonstration follows one complete story: a staff member records a fault with a receipt printer; the consultant takes responsibility; a fictional repair expense is linked to the task; and the owner reviews the completed work and its recorded cost. This story demonstrates record organisation and accountability without claiming that the client currently has this problem.

Provide four compact views: Overview, Tasks, Expenses, and Documents. Prefer a small number of complete interactions over numerous inactive controls. Every view must identify the environment as a demonstration using fictional data.

The intended next commercial step is a scoped discovery engagement, followed by a separately agreed implementation and monthly service. No prices, profit gains, or production readiness are promised by the demonstration.

## User Stories

### Orientation and presentation

1. As the consultant, I want an immediately usable fictional workspace, so that I can demonstrate it without entering client information.
2. As the owner, I want to see that all records are fictional, so that I do not confuse the demonstration with my business's actual performance.
3. As the owner, I want a concise overview of open tasks, recorded expenses, and document review reminders, so that I understand what the workspace organises.
4. As the owner, I want totals to identify their date range and currency, so that I can interpret them correctly.
5. As the owner, I want a usable phone layout, so that I can review the demonstration away from a desk.
6. As the consultant, I want to restore the starting sample records, so that I can repeat the demonstration consistently.

### Tasks and responsibilities

7. As a staff member, I want to record an equipment fault with a title and description, so that another person can understand what needs attention.
8. As the owner, I want to assign a task to a named sample person, so that its responsibility is visible.
9. As the consultant, I want to set a due date, so that the owner can see the intended timing.
10. As the consultant, I want to move a task from Open to In progress to Done, so that progress is visible.
11. As the consultant, I want to add a completion note, so that the owner can understand the resolution.
12. As the owner, I want to filter tasks by status, so that I can distinguish outstanding and completed work.
13. As the owner, I want to see any expense linked to a task, so that I can understand its recorded administrative cost.
14. As the presenter, I want clear validation when required task information is missing, so that incomplete input is handled predictably.

### Administrative expenses

15. As the consultant, I want to record a fictional expense with a date, description, category, amount, and payment status, so that I can demonstrate organised expense records.
16. As the consultant, I want to link a repair expense to the equipment task, so that the demonstration tells a connected story.
17. As the owner, I want paid and unpaid amounts shown separately, so that their meaning is clear.
18. As the owner, I want the overview to reflect newly recorded expenses, so that I can follow the consequence of an action.
19. As the owner, I want to open an explicitly fictional receipt example, so that I can understand how supporting records could be presented.
20. As the presenter, I want invalid amounts rejected with a useful message, so that expense totals remain meaningful within the demonstration.

### Business documents

21. As the owner, I want to search fictional administrative documents by title, so that I can find a record without browsing the whole list.
22. As the owner, I want each document to identify a responsible person and review date, so that follow-up responsibility is clear.
23. As the owner, I want to open a sample equipment warranty or maintenance document, so that I can assess the document presentation.
24. As the owner, I want review reminders to remain distinct from legal compliance judgments, so that an interface indicator does not imply verified compliance.

### Handover and evaluation

25. As the consultant, I want a short demonstration script, so that I can explain the proposed value without improvising unsupported claims.
26. As the owner, I want to identify which demonstrated activities matter to my business, so that later discovery focuses on relevant work.
27. As the consultant, I want proposed production capabilities separated from implemented demo behaviour, so that I do not accidentally promise unavailable features.
28. As the consultant, I want the same working scenario to be testable through the browser, so that the demonstration remains reliable after changes.

## Implementation Decisions

These are proposed prototype decisions, not previously approved architecture. No application or existing implementation was found in the workspace.

- **Interface boundary:** One browser application with four navigation destinations. Task and expense details may use panels or dialogs rather than additional full screens.
- **Data boundary:** One in-memory fictional workspace shared across the views. Navigation retains changes during the open session. Reloading or selecting Reset demo restores the starting sample records. No server, database, account, analytics, or external connection is needed.
- **Presentation:** Neutral placeholder identity, restrained colour, readable typography, consistent spacing, and responsive layouts. Actual client branding awaits confirmed assets and permission. Do not invent endorsements or credentials.
- **Overview:** Show open-task count, overdue-task count, recorded paid and unpaid expenses for a labelled period, and upcoming document reviews. Do not display revenue, profit, sales growth, or invented business performance.
- **Tasks:** Title, description, assignee from sample people, due date, status, optional completion note, and linked expense references. Status values are Open, In progress, and Done. Due dates are date-only values; unfinished tasks before the displayed demo date are overdue.
- **Expenses:** Date, description, administrative category, positive amount in South African rand, Paid or Unpaid status, and optional task reference. Store amounts as integer cents and format them consistently. Totals are simple recorded amounts, not accounts, tax calculations, or financial statements.
- **Documents:** Seeded fictional titles, responsible people, review dates, and embedded sample content. Search and preview are functional. Uploading real documents, validating licences, and certifying compliance are excluded.
- **Deterministic scenario:** Use a clearly displayed reference date for the sample workspace so reminders remain understandable when the demo is presented later. Sample records must never be described as client records.
- **Validation:** Require meaningful task titles; require expense descriptions, valid dates, and positive amounts with at most two decimal places. Explain errors next to the relevant control and preserve the entered values.
- **Reset:** Ask before discarding the session's demonstration changes. Cancelling leaves the workspace intact; confirming restores all initial records and derived totals.
- **Accessibility:** Label inputs and icon controls, provide visible focus, support keyboard interaction, use text as well as colour for status, and manage dialog focus correctly.
- **Technology:** Framework and styling tools remain open until implementation. Choose a small conventional setup appropriate to this isolated prototype; no technical platform decision has been made in this conversation.

## Testing Decisions

### Proposed test boundary for review

Use the rendered browser application as the single primary test boundary. Exercise the visible controls and assert observable results. There are no existing application tests or established test patterns to reuse. This proposal remains reviewable with the specification; it is not recorded as a user-confirmed testing decision.

Cover the connected task, expense, overview, and document behaviours through this boundary. Avoid tests coupled to internal components, private functions, or the shape of the in-memory store.

### Acceptance scenarios

1. Starting the application presents a fictional-data notice, all four navigation destinations, and internally consistent sample counts and totals.
2. Creating a printer-fault task and assigning it to the sample consultant makes it visible in the relevant task list and changes the overview's open count.
3. Moving that task to In progress, adding a completion note, and marking it Done changes its visible status and removes it from the open-task count.
4. Recording a fictional R250.00 repair expense linked to the task displays that link and increases the correct Paid or Unpaid total by exactly R250.00.
5. An empty required title, invalid date, or non-positive expense amount shows a useful validation error and does not change workspace records or totals.
6. Searching Documents returns matching records and an understandable empty state when no title matches. A sample preview opens and closes through keyboard controls.
7. Navigating among views preserves session changes. Reset cancellation preserves them; confirmed reset and browser reload restore the original sample records.
8. At a narrow phone width and a desktop width, the main scenario remains usable without clipped controls or page-wide horizontal scrolling. Keyboard focus remains visible throughout.

Perform a brief visual review of the main views at both viewport sizes. No load testing, payment testing, or production security certification is appropriate to this local prototype. A future production scope requires separate validation.

## Out of Scope

- Cannabis advertising, customer acquisition campaigns, product catalogues, sales funnels, checkout, ordering, dispatch, delivery pricing, and route planning.
- A public promotional website or a promise to increase cannabis sales.
- Determining or certifying the client's legal authority to distribute products.
- Live payments, card-terminal integrations, sales inventory, customer databases, accounting integrations, payroll, and tax filing.
- Real staff or customer personal information, real document uploads, and live business records.
- Authentication, production permissions, backups, hosting, monitoring, automated reminders, and messaging integrations.
- An entire business management suite or automated management of every department.
- Final client pricing, equity arrangements, profit-share agreements, or guarantees of business growth.
- Building or deploying the prototype as part of this documentation request.

## Further Notes

### Evidence and assumptions

- **Reported by the consultant:** Existing client shop in Halfway House near Midrand Mall; walk-in customers; telephone delivery requests; one driver; reported delivery charges of R35–45; a card machine rather than a full management system; paper-based administration.
- **Client intention, as reported:** Broader IT help to grow the business rather than a website-only commission. There is no signed scope or verified performance baseline in this conversation.
- **Consultant preference:** Project fee plus monthly service fee. Available time is two to four hours on weekdays and eight hours on weekends. Whether the weekend allocation is total or per day remains unresolved; capacity planning provisionally assumes eight hours total, giving 18–28 hours weekly before sales and administration time.
- **Proposed, not validated:** Administrative records, tasks, and document organisation will resonate with the owner. These are demonstration hypotheses rather than established pain points.
- **Unknown:** Business name, actual branding, owner priorities, staffing, current records, software access, budget, deadlines, approval process, and exact authorisations.
- **Legal status:** The consultant believes distribution is permitted but has not seen the supporting authorisation. No legal conclusion is made here.

### Publication and readiness

The user requested documents in the current folder. This specification is therefore a local draft. No issue tracker or triage-label mapping is configured, and no issue has been published or marked ready-for-agent. The earlier setup discussion was not completed. The supporting demo brief and client engagement guide explain presentation and commercial follow-through; the glossary defines the commercial vocabulary.
