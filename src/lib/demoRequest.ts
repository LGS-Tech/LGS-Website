export interface DemoRequest {
  name: string;
  email: string;
  organisation: string;
}

/** Sales inbox. A demo request is only an enquiry to this address. */
export const DEMO_INBOX = "info@lgstech.co";

/**
 * Sends a demo enquiry to info@lgstech.co.
 * Does not create an account, start a trial, or call the app API.
 * FormSubmit delivers the message to the existing lgstech.co mailbox.
 * The inbox must confirm the first activation email before later requests arrive.
 */
export async function sendDemoRequest(request: DemoRequest): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(DEMO_INBOX)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: request.name.trim(),
        email: request.email.trim(),
        organisation: request.organisation.trim(),
        _subject: "LGS demo request",
        _template: "table",
        _replyto: request.email.trim(),
        _captcha: "false",
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Demo request was not accepted.");
  }

  const body = (await response.json()) as { success?: string | boolean };
  if (body.success === false || body.success === "false") {
    throw new Error("Demo request was not accepted.");
  }
}
