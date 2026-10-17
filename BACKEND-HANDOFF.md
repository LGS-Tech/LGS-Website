# Message to the backend team

Hi team! We've simplified the website pricing:

- **30 days free** to trial the organisation's own map.
- Then **GBP 100 per month, including 5 seats**.
- **GBP 15 per additional seat per month**, starting with seat 6.

The old Pro / Team / Enterprise tiers and annual discount have been removed.
For example, 5 seats cost GBP 100/month, 6 cost GBP 115/month, and 10 cost
GBP 175/month. For up to 5 seats, the base subscription remains GBP 100/month.

The website is still a frontend prototype. Please help us connect the following
before launch.

## 1. Request a Demo

All demo buttons, including the pricing button, lead to the form in
`src/components/sections/CTA.tsx`. It collects **name, work email and organisation**
and emails that enquiry to **info@lgstech.co**. It does not create an account
or start a trial.

The inbox must confirm FormSubmit's first activation email. Until that
confirmation, FormSubmit accepts the form but the message does not arrive.

Suggested integration contract (proposal, not an existing endpoint):

```http
POST /api/demo-requests
Content-Type: application/json

{
  "name": "Alex Example",
  "email": "alex@example.com",
  "organisation": "Example Campus"
}
```

- Validate and trim the fields server-side, enforce sensible length limits and
  validate the email address. Client-side validation is not sufficient.
- Save the lead durably, with an ID and timestamp. Route it to the agreed sales
  inbox or CRM; queue notifications with retries so a temporary email failure
  does not lose a saved request.
- Return `201` with `{ "requestId": "..." }` only after saving the request.
  Agree structured error responses for invalid fields (`400`), rate limiting
  (`429`) and service errors (`5xx`).
- Add abuse protection, duplicate/retry handling and appropriate access controls,
  retention and privacy handling for lead data. Avoid logging personal data.
- Share the API base URL, request/response schema and any deployment/CORS
  requirements with frontend. No secrets should be exposed in the browser.
- Frontend follow-up: replace the local preview with the API call, add a pending
  state to prevent duplicate submissions, show success only after acceptance,
  and show actionable failures while preserving the user's entries.

A demo request is a sales enquiry, **not** account creation, a trial start or a
subscription. Please keep those flows separate.

## 2. Map trial and onboarding

- Provide an authenticated organisation/account onboarding flow and provision
  the organisation's own map, rather than using the website's sample dashboard.
- Persist trial start/end timestamps and enforce the 30-day entitlement on the
  server. Prevent repeated trial creation from resetting the same entitlement.
- Return trial status and expiry so the product can show time remaining and
  explain what happens at expiry.
- Provide the signup/onboarding URL or API contract to frontend before adding a
  real "Start free trial" action. The pricing CTA currently requests a demo;
  it does not activate a trial.

## 3. Monthly billing and seats

- Configure GBP monthly billing for a GBP 100 base subscription with 5 seats
  included, plus GBP 15/month for each seat above 5.
- Calculate the monthly price server-side:
  `100 + 15 * max(0, billableSeats - 5)` (amounts in GBP).
  Use integer minor units with the payment provider: `10000 + 1500 * max(0, billableSeats - 5)`.
- Validate seat quantities, enforce organisation permissions for seat changes,
  and keep billing quantities aligned with the agreed definition of a billable
  seat.
- Integrate checkout/payment collection, invoices and a billing management flow.
  Verify payment webhook signatures and process events idempotently; handle
  trial expiry, payment failures and subscription changes on the server.
- Expose subscription, seat and payment status to the product. Do not grant
  paid access merely because a browser redirects from checkout.

## Decisions to confirm before implementing billing

The website only commits to the three pricing points above. Please confirm with
the product owner:

- What starts the trial: account creation, map readiness or first use?
- Are payment details required upfront, and does billing begin automatically
  after the trial or only after explicit subscription checkout?
- What counts as a billable seat: invited, active or purchased seats?
- How are mid-month seat additions/removals handled (proration or next invoice)?
- What access remains after trial expiry, cancellation or failed payment?
- Are displayed prices inclusive or exclusive of VAT?
- What privacy notice/consent and retention policy should apply to demo leads?

Please don't infer an annual discount, money-back guarantee, cancellation policy
or tier-specific feature restrictions from the previous prototype.

## Acceptance checks

- A valid demo request is stored and reaches the agreed notification workflow.
  Invalid input, retries, throttling and service failures are handled visibly
  without losing entries or generating duplicate leads.
- Trial activation provisions the oarganisation's map and lasts exactly 30 days
  from the agreed start event; submitting a demo request does not start it.
- Monthly totals are GBP 100 for 1-5 seats, GBP 115 for 6 and GBP 175 for 10.
- Trial expiry and seat changes follow the confirmed billing policy. Replayed
  webhooks do not duplicate charges or change entitlements twice.

Thanks! Once the contracts and product decisions are agreed, we can wire the
frontend to the real services.
